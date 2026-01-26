
import {
    Code2,
    Database,
    Globe,
    Layout,
    Server,
    Terminal,
    Cpu,
    Smartphone,
    GitBranch,
    Container,
    Layers,
    Box,
    PenTool,
    Monitor,
    Cpu as Microchip,
    Chrome,
    MessageSquare
} from "lucide-react"

export function TechStackSection() {
    const skills = [
        { name: "C++", icon: Code2, color: "bg-[#00599C] text-white" },
        { name: "Javascript", icon: Globe, color: "bg-[#F7DF1E] text-black" },
        { name: "Typescript", icon: Code2, color: "bg-[#3178C6] text-white" },
        { name: "Node.js", icon: Server, color: "bg-[#339933] text-white" },
        { name: "React.js", icon: Layout, color: "bg-[#61DAFB] text-black" },
        { name: "Mongo DB", icon: Database, color: "bg-[#47A248] text-white" },
        { name: "Next.js", icon: Globe, color: "bg-[#000000] text-white" },
        { name: "Git", icon: GitBranch, color: "bg-[#F05032] text-white" },
        { name: "Docker", icon: Container, color: "bg-[#2496ED] text-white" },
        { name: "Kubernetes", icon: Layers, color: "bg-[#326CE5] text-white" },
        { name: "Postgresql", icon: Database, color: "bg-[#4169E1] text-white" },
        { name: "Python", icon: Terminal, color: "bg-[#3776AB] text-white" },
        { name: "Java", icon: Code2, color: "bg-[#007396] text-white" },
        { name: "Tailwind CSS", icon: PenTool, color: "bg-[#06B6D4] text-white" },
        { name: "Material UI", icon: Layout, color: "bg-[#007FFF] text-white" },
    ]

    const tools = [
        { name: "ChatGPT", icon: MessageSquare, color: "bg-[#10A37F] text-white" },
        { name: "Google Chrome", icon: Chrome, color: "bg-[#4285F4] text-white" },
        { name: "Vs Code", icon: Code2, color: "bg-[#007ACC] text-white" },
        { name: "Windows", icon: Monitor, color: "bg-[#0078D6] text-white" },
        { name: "Gemini", icon: Microchip, color: "bg-[#4285F4] text-white" },
    ]

    return (
        <section className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-7xl mx-auto">

                {/* Professional Skillset */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Professional <span className="bg-[#BFAFF2] text-black px-3 py-1 inline-block border-[3px] border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Skillset</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-12">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="group flex items-center gap-3 bg-white border-[3px] border-black rounded-xl px-4 md:px-6 py-3 md:py-4 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200 cursor-default"
                            >
                                <div className={`p-2 rounded-lg border-2 border-black ${skill.color} group-hover:scale-110 transition-transform`}>
                                    <skill.icon className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <span className="text-lg md:text-xl font-bold">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tools I Use */}
                <div className="text-center mt-24">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Tools <span className="bg-[#FFC224] text-black px-3 py-1 inline-block border-[3px] border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">I use</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-12">
                        {tools.map((tool, index) => (
                            <div
                                key={index}
                                className="group flex items-center gap-3 bg-white border-[3px] border-black rounded-xl px-4 md:px-6 py-3 md:py-4 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200 cursor-default"
                            >
                                <div className={`p-2 rounded-lg border-2 border-black ${tool.color} group-hover:scale-110 transition-transform`}>
                                    <tool.icon className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <span className="text-lg md:text-xl font-bold">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
