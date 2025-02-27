import Image from 'next/image'
import TeamMember01 from '@/public/images/AbhivyaktiAhujaProfile.png'
import TeamMember02 from '@/public/images/WillSongProfile.png'
import TeamMember03 from '@/public/images/ThomsonYenProfile.png'

export default function Team() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2">our team</h2>
          </div>

          {/* Team members */}
          <div className="max-w-sm sm:max-w-5xl mx-auto justify-center grid grid-cols-3  md:grid-cols-3" data-aos-id-team>

            {/* 1st member */}
            <div className="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamMember01} width={120} height={120} alt="Abhivyakti Ahuja" />
                <h4 className="text-xl font-bold mb-1">Abhivyakti Ahuja</h4>
                <div className="text-blue-600 font-medium mb-2">CEO & Co-founder</div>
                <p className="text-gray-600 text-center mb-3">gave up med school to bring her neuroscience background to revolutionize marketing.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="https://www.linkedin.com/in/abhivyaktiahuja/">LinkedIn</a>
                </div>
              </div>
            </div>

            {/* 2nd member */}
            <div className="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="150" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamMember02} width={120} height={120} alt="Team member 02" />
                <h4 className="text-xl font-bold mb-1">Will Song</h4>
                <div className="text-blue-600 font-medium mb-2">COO & Co-founder</div>
                <p className="text-gray-600 text-center mb-3">marketer turned teacher turned developer. the perfect glue for the company.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="https://www.linkedin.com/in/willysong/">LinkedIn</a>
                </div>
              </div>
            </div>

            {/* 3rd member */}
            <div className="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="300" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamMember03} width={120} height={120} alt="Team member 03" />
                <h4 className="text-xl font-bold mb-1">Thomson Yen</h4>
                <div className="text-blue-600 font-medium mb-2">CTO & Co-founder</div>
                <p className="text-gray-600 text-center mb-3">aiming to publish more academic papers than his professors. what a nerd.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="https://www.linkedin.com/in/thomsonyen/">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}