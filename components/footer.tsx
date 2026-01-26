"use client"

import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useState } from "react"

export function Footer() {
  const [subject, setSubject] = useState("")

  const handleSend = () => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=snehasuresh2005@gmail.com&su=${encodeURIComponent(subject)}`, '_blank')
  }

  return (
    <footer id="socials" className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 relative">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="w-24 h-24 md:w-36 md:h-36 rounded-full flex items-center justify-center flex-shrink-0 relative">
                <Image
                  src="/images/newsletter-icon.png"
                  alt="Newsletter"
                  width={180}
                  height={180}
                  className="object-cover"
                />
              </div>

              <div className="w-full flex-1 bg-white border-4 border-black rounded-3xl py-4 px-4 md:py-6 md:px-8 flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-black">You can also send me an email!</h3>
                </div>

                <div className="relative w-full md:w-auto md:min-w-[400px] lg:min-w-[480px]">
                  <Input
                    type="text"
                    placeholder="Type your subject..."
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="border-4 border-black rounded-xl px-4 md:px-6 h-14 md:h-16 pr-32 md:pr-44 text-base md:text-lg placeholder:text-gray-500 text-black"
                  />
                  <Button
                    onClick={handleSend}
                    className="absolute right-2 top-2 bottom-2 bg-black text-white hover:bg-black/90 rounded-[10px] px-6 md:px-10 text-sm md:text-base font-semibold whitespace-nowrap h-auto"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-center md:text-left">Follow Me</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/snehasuresh2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sneha-suresh-426285293/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/sneha_suresh358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#FF6B7A] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-center md:text-right">Contact Me</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2 justify-center md:justify-end">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:snehasuresh2005@gmail.com" className="hover:text-white transition-colors">
                    snehasuresh2005@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
