"use client"

import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function PortfolioSection() {
  const [showMoreProjects, setShowMoreProjects] = useState(false)

  const projects = [
    {
      title: "GrihAI- AI interior designer app",
      description:
        "Grihai is a sustainability-focused mobile app that helps users track and reduce their household environmental impact through smart insights and actionable recommendations. The app is being enhanced with AR-based features that allow users to visualize eco-friendly upgrades and resource usage in real-world spaces, making sustainable living more interactive and intuitive.",
      tag: "API Integration",
      logo: "/images/studio-logo.svg",
      bgColor: "bg-[#6366F1]",
      illustration: "/images/GrihAI.png",
      imageClassName: "p-12 object-contain",
      githubUrl: "https://github.com/snehasuresh2005/Griha-AI",
      demoUrl: "https://drive.google.com/file/d/1lFWLsKUo2vWZ2BJ4jcnb-UDCsGhx39XL/view?usp=sharing",
    },
    {
      title: "GigFlow",
      description:
        "A full-stack application for maintaining sales and marketting leads . Built with React, Node.js, Express, MongoDB, and Socket.io for real-time updates.",
      tag: "UI/UX Design",
      logo: "/images/venture-logo.svg",
      bgColor: "bg-[#2F81F7]",
      illustration: "/images/GigFlow.png",
      imageClassName: "p-12 object-contain",
      githubUrl: "https://github.com/snehasuresh2005/GigFlow",
      demoUrl: "https://drive.google.com/file/d/1OtZcpe9Ed8bb1bWmby4TCVsT0F5Ku1xS/view?usp=sharing",
      tryItUrl: "https://gig-flow-pi.vercel.app",
    },
  ]

  const extraProjects = [
    {
      title: "CIE- Platform for Centre of Innovation and Entrepreneurship",
      description:
        "CIE is a role-based web application built during a 2-month summer internship, featuring admin, faculty, and student dashboards for managing attendance, projects, lab inventory, schedules, and users. It’s built with Next.js + TypeScript, uses Prisma with PostgreSQL, and is Dockerized for seamless local setup.",
      tag: "Web Dev + AI",
      logo: "/images/studio-logo.svg",
      bgColor: "bg-[#FF6B6B]",
      illustration: "/images/CIE.png",
      imageClassName: "p-12 object-contain",
      githubUrl: "https://github.com/snehasuresh2005/CIE",
    },
    {
      title: "OOTA- Food Delivery App",
      description:
        "Developed Oota, a React 18 single-page application for discovering restaurants and ordering food. Implemented client-side routing, global state via Context API, and modular UI components for restaurant pages, search, popular-food carousels, cart and checkout; app communicates with an API client (axios) for backend integration",
      tag: "Web Dev",
      logo: "/images/venture-logo.svg",
      bgColor: "bg-[#4CAF50]",
      illustration: "/images/oota.png",
      imageClassName: "p-12 object-contain",
      githubUrl: "https://github.com/Prerna2415/oota",
    },
    {
      title: "ResQFlow-Disaster Logistics & Emergency Resource Allocation Platform",
      description:
        "A Java Spring Boot platform for emergency resource allocation and disaster logistics, featuring OOP-driven allocation strategies, route optimization, real-time event processing, and fault-tolerant resource management.",
      tag: "System Design",
      logo: "/images/venture-logo.svg",
      bgColor: "bg-[#4CAF50]",
      illustration: "/images/resqflow.png",
      imageClassName: "p-12 object-contain",
      githubUrl: "https://github.com/snehasuresh2005/ResQFlow.git",
      tryItUrl: "https://res-q-flow-seven.vercel.app",
    },
    {
      title: "AI Legal Saathi",
      description:
        "AI-Legal-Saathi is a web application that leverages large‑language models and NLP to automate common legal tasks. It provides conversational Q&A, document drafting/review, and plain‑English explanations of legal text to speed up legal workflows.",
      tag: "Data Viz",
      logo: "/images/studio-logo.svg",
      bgColor: "bg-[#FFC224]",
      illustration: "/images/AI_Legal_Saathi.png",
      imageClassName: "p-12 object-contain",
      githubUrl: "https://github.com/snehasuresh2005/AI-Legal-Saathi",
      demoUrl: "https://drive.google.com/file/d/1RPVvH0bboN2G2nxIfaX_Pw-_62cWNqbf/view?usp=sharing",
    },
    {
      title: "Banklite",
      description:
        "A python based app which implements the daily functionalities of a real world bankiing system. It supports multiple users with secure authentication, and provides features like account creation, balance enquiry, deposit, withdrawal, fund transfer, and transaction history.",
      tag: "Python",
      logo: "/images/venture-logo.svg",
      bgColor: "bg-[#9C27B0]",
      illustration: "/images/Banklite.png",
      imageClassName: "p-12 object-contain",
      githubUrl: "https://github.com/snehasuresh2005/Banklite",
      demoUrl: "https://drive.google.com/file/d/1keCaSc2MinhTpwfhKne0LZo8GsTy9ohL/view?usp=sharing",
    },
    {
      title: "Ultimate Heads Up Game (for mobile users)",
      description:
        "A retro pixel party game where AI generates culturally relevant cards for any theme you can think of. Tilt your phone, guess fast, and don't let the sad cat see you fail.",
      tag: "Gemini API",
      logo: "/images/venture-logo.svg",
      bgColor: "bg-[#2F81F7]",
      illustration: "/images/ULTHG.png",
      imageClassName: "p-12 object-contain",
      githubUrl: "https://github.com/snehasuresh2005/THE-ULTIMATE-HEADS-UP-GAME.git",
      tryItUrl: "https://the-ultimate-heads-up-game.onrender.com",
    },
    {
      title: "BuildSense AI",
      description:
        "BuildSense is an AI-driven construction supply chain intelligence platform that minimizes material waste, carbon emissions, and logistics costs through real-time demand forecasting, autonomous route optimization, and adaptive inventory management.",
      tag: "Ongoing Project",
      logo: "/images/venture-logo.svg",
      bgColor: "bg-[#6366F1]",
      illustration: "/images/BuildSense.png",
      imageClassName: "p-12 object-contain",
      githubUrl: "https://github.com/snehasuresh2005/BuildSense",

    }
  ]

  const displayedProjects = showMoreProjects ? [...projects, ...extraProjects] : projects

  return (
    <section id="projects" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Take a look at my <br />
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">Projects</span>
          </h2>
        </div>

        <div className="space-y-8 mb-12">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-2 bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="p-6 md:p-12 flex flex-col justify-center bg-white">
                {/* <div className="flex items-center gap-3 mb-6">
                  <Image
                    src={project.logo || "/placeholder.svg"}
                    alt={`${project.title} logo`}
                    width={120}
                    height={32}
                    className="h-6 md:h-8 w-auto"
                  />
                </div> */}

                <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 w-fit">
                  {project.tag}
                </span>

                <h3 className="text-xl md:text-[28px] font-bold mb-4 leading-tight md:leading-[40px] text-[#0B0B0B]">
                  {project.title}
                </h3>

                <p className="text-base md:text-[18px] text-[#393939] mb-8 leading-relaxed md:leading-[30px] font-medium">
                  {project.description}
                </p>

                <div className="flex flex-row gap-4 items-center flex-wrap">
                  <a
                    href={
                      // @ts-ignore
                      project.githubUrl || "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base"
                  >
                    View GitHub
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  {
                    // @ts-ignore
                    project.demoUrl && (
                      <a
                        href={
                          // @ts-ignore
                          project.demoUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base"
                      >
                        View Demo
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )
                  }
                  {
                    // @ts-ignore
                    project.tryItUrl && (
                      <a
                        href={
                          // @ts-ignore
                          project.tryItUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition-all text-xs md:text-sm"
                      >
                        Try it yourself
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    )
                  }
                </div>
              </div>

              <div className={`${project.bgColor} relative overflow-hidden min-h-[250px] md:min-h-[500px]`}>
                <Image
                  src={project.illustration || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className={`object-cover transition-transform duration-500 ease-out group-hover:scale-110 ${
                    // @ts-ignore
                    project.imageClassName || ""
                    }`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setShowMoreProjects(!showMoreProjects)}
            className="bg-black text-white px-6 md:px-8 py-4 md:py-5 rounded-[12px] font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base"
          >
            {showMoreProjects ? (
              <>
                <ChevronUp className="w-5 h-5" />
                View less projects
              </>
            ) : (
              <>
                <ChevronDown className="w-5 h-5" />
                View more projects
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
