import Image from 'next/image'
import AboutImage from '@/public/images/teamPhoto.png'

export default function AboutIntro() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4">almost your average dorm room startup</h1>
            <p className="text-xl text-gray-600">
              three friends, unlimited university wifi, and a dream to build something that matters. aiphrodite.ai started in cedar hall at the university of toronto and has been growing ever since.
            </p>
          </div>

          <figure className="flex justify-center items-start">
            <Image className="rounded shadow-2xl" src={AboutImage} width={768} height={432} priority alt="About us" />
          </figure>

        </div>
      </div>
    </section>
  )
}