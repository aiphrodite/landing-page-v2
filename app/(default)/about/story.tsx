import Image from 'next/image'
import AboutImage from '@/public/images/about-02.jpg'
import MarshallProfile from '@/public/images/marshallProfile.jpg'

export default function AboutStory() {  
  return (
    <section>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          <div className="max-w-3xl mx-auto">
            <h3 className="h3 mb-3">Our story</h3>
            <p className="text-lg text-gray-600 mb-8">
              will and thomson lived across from each other, abhi embodied the unofficial mascot of toronto (a racoon) and kept finding ways to sneak into the building. the three of them would talk endlessly about the future of technology, how artifial intelligence brought them to this institution, and how they could make a difference.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              before long, under the tutilage of their professors, they were building aiphrodite.ai. inspired by previous work in the field of marketing, they saw how data crunching limited creativity and innovation. they wanted to change that and enable other creatives like themselves to focus on what they do best: create.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              after 15+ academic papers, aiphrodite.ai is ready to change the world.
            </p>
          </div>

          <div className="sm:flex">
            <figure className="flex shrink-0 max-w-none sm:max-w-xs lg:max-w-none mb-8 sm:mb-0">
              <Image className="grow self-start rounded" src={MarshallProfile} width={435} height={326} alt="Dog tax" />
            </figure>
            <div className="sm:ml-8 lg:ml-16">
              <h4 className="h4 mb-2">2023</h4>
              <p className="text-lg text-gray-600 mb-8">
                aiphrodite.ai was incorporated, headquartered in toronto, canada. and marshall was recruited as the CCO (Chief Cuteness Officer).
              </p>
              {/* <div className="flex  mb-8">
                <Image className="rounded-full self-start shrink-0 shadow-lg mr-4" src={AboutLogo} width={40} height={40} alt="Logo" />
                <div>
                  <blockquote className="text-gray-600 italic">
                    “ I love this product and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time. “
                  </blockquote>
                  <div className="text-sm font-medium text-gray-600 mt-2">
                    <cite className="text-gray-900 not-italic">Micheal Osman</cite> · <a className="text-blue-600" href="#0">New York Times</a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat auctor urna nunc id cursus metus aliquam eleifend, arcu dictum varius duis at consectetur lorem donec massa sapien, sed risus ultricies tristique nulla aliquet. Morbi tristique senectus et netus et, nibh nisl condimentum id venenatis a condimentum vitae sapien.
            </p>
          </div> */}

        </div>
      </div>
    </section>
  )
}