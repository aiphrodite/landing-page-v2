import Link from 'next/link'

export default function CtaCareer() {  
  return (
    <section>
      <div className="w-full bg-gray-900 py-16 md:px-12" data-aos="zoom-y-out">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
            <h3 className="h3 text-white">Interested in joining us?</h3>
          </div>

          <div>
            <Link 
              href="https://www.linkedin.com/hiring/jobs/3846875180/detail/" 
              className="btn text-white bg-aip-purple-royal hover:bg-aip-purple-dark"
              target="_blank"
            >
              Apply
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}