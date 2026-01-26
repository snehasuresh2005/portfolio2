from PIL import Image
import os

def crop_white_background(input_path, output_path):
    print(f"Processing {input_path}...")
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        
        datas = img.getdata()
        
        # Simple bounding box finding for non-white pixels
        # Assuming "white" is (255, 255, 255)
        # We can use a tolerance if needed, but let's start strict or with small tolerance
        
        width, height = img.size
        left, top, right, bottom = 0, 0, width, height
        
        # We want to find the min/max x and y that have non-white content
        
        # Easier way: Convert to grayscale, invert, threshold, getbbox?
        # Or just iterate.
        
        # Let's try to make white transparent and then use getbbox()
        newData = []
        for item in datas:
            # Check if pixel is white (or very close to white)
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                newData.append((255, 255, 255, 0)) # Make transparent
            else:
                newData.append(item)
        
        img.putdata(newData)
        
        # Now get bounding box of non-transparent content
        bbox = img.getbbox()
        
        if bbox:
            cropped_img = img.crop(bbox)
            cropped_img.save(output_path)
            print(f"Saved cropped image to {output_path}")
        else:
            print("Could not find any content to crop (image might be all white). Saving original as transparent.")
            img.save(output_path)

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    input_file = r"public/images/design-mode/profile.png"
    output_file = r"public/images/design-mode/profile_cropped.png"
    
    # Fix paths for Windows if needed, but python usually handles / fine. 
    # Using relative paths from project root where we run the script.
    
    if os.path.exists(input_file):
        crop_white_background(input_file, output_file)
    else:
        print(f"File not found: {input_file}")
