import { User, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-[42px] leading-[50px] md:text-[72px] font-bold md:leading-[85px]">
            I'm <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">Sneha Suresh</span>, an aspiring  Software Engineer from{" "}
            <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">Bengaluru!</span>
          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
            Curious, driven, and hands-on— I enjoy building thoughtful software, experimenting with AI, and learning by shipping real projects.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <a href="#about">
              <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
                <User className="w-5 h-5" />
                About me
              </Button>
            </a>
            <a
              href="https://drive.google.com/file/d/1eBLk_GT4RoPQeOX_BO9Ze65exPGfXxLp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
              >
                <FileText className="w-5 h-5" />
                View resume
              </Button>
            </a>
          </div>
        </div>


        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square bg-[#FDB927] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img
              src="/images/design-mode/profile.png"
              alt="Illustrated character avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
