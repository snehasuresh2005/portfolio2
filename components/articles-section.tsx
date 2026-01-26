import { Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterSignup } from "@/components/newsletter-signup"
import Image from "next/image"

export function ArticlesSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Certificates and Licences</h2>
          <a href="https://www.linkedin.com/in/sneha-suresh-426285293/details/certifications/" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-[3px] border-black rounded-xl px-4 md:px-6 py-4 md:py-6 hover:bg-gray-50 bg-white font-semibold text-sm md:text-base w-full sm:w-auto"
            >
              <Pencil className="w-4 h-4 mr-2" />
              Browse more certificates
            </Button>
          </a>
        </div>

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-6 mb-16">
          {/* Large featured article card */}
          <div className="group bg-white border-[3px] border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
            <div className="bg-[#EDEDED] relative min-h-[220px] md:min-h-[320px] m-3 md:m-4 rounded-2xl overflow-hidden">
              <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-black text-white text-xs md:text-sm font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-lg z-10">
                Gen AI
              </span>
              <Image
                src="/images/GenAI.png"
                alt="Introduction to Generative AI"
                fill
                className="object-contain p-4 rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                Introduction to Generative AI
              </h3>
              {/* <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-6">
                Lorem ipsum dolor sit amet dolor consectetur adipiscing elit ectus
              </p> */}
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white border-2 border-black rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center p-2 md:p-3">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-base md:text-lg text-[#0B0B0B]">Google</div>
                  <div className="text-sm md:text-base text-gray-600 mb-3">Apr 2024</div>
                  <a href="https://www.cloudskillsboost.google/course_templates/536/badge" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="border-2 border-black rounded-lg h-9 px-4 text-xs md:text-sm font-semibold hover:bg-gray-50 bg-white"
                    >
                      View Certificate
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Two smaller article cards */}
          <div className="space-y-6 md:space-y-8">
            {/* First smaller card */}
            <div className="group bg-white border-[3px] border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <div className="flex flex-col sm:flex-row">
                {/* Image area */}
                <div className="bg-[#EDEDED] min-w-full sm:min-w-[200px] md:min-w-[280px] min-h-[180px] sm:min-h-[200px] relative m-0 sm:m-3 md:m-4 rounded-none sm:rounded-2xl overflow-hidden flex-shrink-0">
                  <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-lg z-10">
                    Articles
                  </span>
                  <Image
                    src="/images/llm.png"
                    alt="Introduction to Large Language Models"
                    fill
                    className="object-cover sm:object-contain p-0 sm:p-2 rounded-none sm:rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                {/* Content area */}
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">
                    Introduction to Large Language Models
                  </h3>
                  {/* <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-6">
                    Lorem ipsum dolor sit amet dolor consectetur adipiscing elit ectus
                  </p> */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white border-2 border-black rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center p-2">
                      <svg viewBox="0 0 24 24" className="w-full h-full">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-sm md:text-base text-[#0B0B0B]">Google</div>
                      <a href="https://www.skills.google/course_templates/539/badge" target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          className="border-2 border-black rounded-lg h-8 px-3 text-xs font-semibold hover:bg-gray-50 bg-white mt-1"
                        >
                          View Certificate
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second smaller card */}
            <div className="group bg-white border-[3px] border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <div className="flex flex-col sm:flex-row">
                {/* Image area */}
                <div className="bg-[#EDEDED] min-w-full sm:min-w-[200px] md:min-w-[280px] min-h-[180px] sm:min-h-[200px] relative m-0 sm:m-3 md:m-4 rounded-none sm:rounded-2xl overflow-hidden flex-shrink-0">
                  <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-lg z-10">
                    News
                  </span>
                  <Image
                    src="/images/python.png"
                    alt="Exercises illustration"
                    fill
                    className="object-cover sm:object-contain p-0 sm:p-2 rounded-none sm:rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                {/* Content area */}
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">
                    100 days of Code: The Complete Python Pro Bootcamp
                  </h3>
                  {/* <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-6">
                    Lorem ipsum dolor sit amet dolor consectetur adipiscing elit ectus
                  </p> */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white border-2 border-black rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center p-2">
                      <svg viewBox="0 0 24 24" className="w-full h-full" fill="#A435F0">
                        <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#ffffff" />
                        <path d="M13.84 10.38v2.162a1.84 1.84 0 0 1-3.68 0V10.38H7.68v2.162a4.321 4.321 0 0 0 8.64.08V10.38h-2.48zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6S6.698 2.4 12 2.4s9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6z" className="fill-[#A435F0]" fill="#A435F0" />
                        <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="none" stroke="#A435F0" strokeWidth="1.2" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-sm md:text-base text-[#0B0B0B]">Udemy</div>
                      <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-ee61508d-c450-41d0-8eb0-f4039ad96a1c.jpg" target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          className="border-2 border-black rounded-lg h-8 px-3 text-xs font-semibold hover:bg-gray-50 bg-white mt-1"
                        >
                          View Certificate
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <NewsletterSignup />
      </div>
    </section>
  )
}
