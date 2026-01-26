"use client"

import { Mail, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

export function ServicesSection() {
  const [showMore, setShowMore] = useState(false)

  const services = [
    {
      title: "Full Stack Development",
      description: "Building responsive, scalable web applications with clean frontends, robust backends, and well-structured databases from end to end.",
      image: "/images/web-design.svg",
    },
    {
      title: "UI/UX design",
      description: "Designing intuitive user interfaces and experiences that prioritize usability, accessibility, and visual clarity.",
      image: "/images/ui-ux-design.svg",
    },
    {
      title: "AI and Machine Learning",
      description: "Building intelligent systems that can learn from data, make predictions, and automate tasks to improve efficiency and accuracy.",
      image: "/images/AI_ML.png",
    },
    {
      title: "Prompt engineering",
      description: "Creating effective and efficient prompts to guide AI models towards desired outcomes, optimizing performance and productivity.",
      image: "/images/prompt_engineering.png",
    },
    {
      title: "Open Source Contribution",
      description: "Contributing to open-source projects to improve the community and learn new technologies.",
      image: "/images/open_source.png",
    },
  ]

  const extraSkills = [
    {
      title: "Data Analysis",
      description: "Extracting actionable insights from complex datasets to drive informed decision-making and business growth.",
      image: "/images/data_analysis.png",
      imageClassName: "p-5",
    },
    {
      title: "Video editing",
      description: "Editing and animating videos to create engaging and visually appealing content for various purposes.",
      image: "/images/motion-graphics.svg",
    },
    {
      title: "Research",
      description: "Currenlty working on a research project on reconstruction 3d medical images using DIF-gaussian as part of the final year project",
      image: "/images/research.png",
      imageClassName: "p-13",
    },
  ]

  const displayedServices = showMore ? [...services, ...extraSkills] : services

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              My broad <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">set of skills</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              My skill set spans web development, data analysis, and AI, enabling me to build functional, impactful projects from scratch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedServices.map((service, index) => (
              <div
                key={index}
                className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 min-h-[480px] flex flex-col group"
              >
                <div className="mb-6 -mx-[3px] -mt-[3px] overflow-hidden rounded-t-[29px]">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={382}
                    height={328}
                    className={`w-full h-auto rounded-t-[29px] group-hover:scale-110 transition-transform duration-500 ease-out ${
                      // @ts-ignore
                      service.imageClassName || ""
                      }`}
                  />
                </div>
                <div className="px-8 pb-8 flex-1 flex flex-col">
                  <h3 className="text-[28px] leading-[40px] font-bold mb-3 text-[#0B0B0B]">{service.title}</h3>
                  <p className="text-[18px] leading-[30px] font-medium text-[#393939]">{service.description}</p>
                </div>
              </div>
            ))}

            <div className="bg-[#FFC224] border-[3px] border-black rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform min-h-[480px] relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-8">
                <Image
                  src="/images/get-in-touch.svg"
                  alt="Get in touch"
                  width={92}
                  height={92}
                  className="w-[92px] h-[92px]"
                />
              </div>
              <h3 className="text-[28px] leading-[40px] font-bold mb-4 text-[#0B0B0B]">
                {showMore ? "View less skills" : "View more skills"}
              </h3>
              <p className="text-[18px] leading-[30px] font-medium text-[#393939] mb-8">
                {showMore
                  ? "Click to collapse the list and see fewer skills."
                  : "Click to expand the list and see more of my capabilities!"}
              </p>
              <Button
                onClick={() => setShowMore(!showMore)}
                className="bg-black text-white hover:bg-black/90 rounded-[16px] px-12 py-6 font-medium text-[18px] w-full max-w-[340px] h-[64px]"
              >
                {showMore ? <ChevronUp className="w-5 h-5 mr-2" /> : <ChevronDown className="w-5 h-5 mr-2" />}
                {showMore ? "View less" : "View more"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
