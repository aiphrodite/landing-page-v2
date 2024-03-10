import Link from 'next/link'

export default function CtaCareer() {  
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl" data-aos="zoom-y-out">

            <div className="flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
                <h3 className="h3 text-white">Sounds like we are building something cool?</h3>
              </div>

              {/* CTA button */}
              <div>
                <Link href="https://www.linkedin.com/hiring/jobs/3846875180/detail/" className="btn text-white bg-aip-purple-royal hover:bg-aip-purple-dark">Apply to join us</Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}