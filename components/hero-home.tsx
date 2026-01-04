import Image from 'next/image'

export default function HeroHome() {
  return (
    <section
      className="relative pt-8 space-y-16"
      style={{ backgroundImage: 'url(/images/splash-background-2.svg)', backgroundSize: 'cover', backgroundPosition: 'center 250px', backgroundRepeat: 'no-repeat' }}
    >

      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter" data-aos="zoom-y-out">
          Understand the mind of your customer
          <span
            className="block text-4xl md:text-5xl mt-2"
            style={{ backgroundImage: 'linear-gradient(135deg, #FF745D, #794B93)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>aiphrodite.ai</span>
        </h1>
      </div>

      <div className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
              aiphrodite.ai builds AI Personas that accurately reflect the mind of your consumer.
              <span className="block">Never guess again. See how for:</span>
            </p>
          </div>
        </div>
        <div className="mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
          <div className="flex flex-row gap-x-4">
            <a className="btn text-white bg-purple-primary hover:bg-purple-hover w-full sm:w-auto sm:mb-0" href="https://calendly.com/aiphrodite/discover">AI Focus Groups</a>
            <a className="btn text-white bg-purple-primary hover:bg-purple-hover w-full sm:w-auto sm:mb-0" href="https://calendly.com/aiphrodite/discover">Creative Prediction</a>
            <a className="btn text-white bg-purple-primary hover:bg-purple-hover w-full sm:w-auto sm:mb-0" href="https://calendly.com/aiphrodite/discover">Product Concept Testing</a>
            <a className="btn text-white bg-purple-primary hover:bg-purple-hover w-full sm:w-auto sm:mb-0" href="https://calendly.com/aiphrodite/discover">Competitive Analysis</a>
            <a className="btn text-white bg-purple-primary hover:bg-purple-hover w-full sm:w-auto sm:mb-0" href="https://calendly.com/aiphrodite/discover">Media</a>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="relative flex justify-center" data-aos="zoom-y-out" data-aos-delay="300">
          <div className="flex flex-col justify-center">
            <Image src='/images/hero-macbook.webp' width={1200} height={432} alt="aiphrodite.ai" className='' style={{ filter: 'drop-shadow(0 0 30px white)' }} />
          </div>
        </div>
      </div>
    </section>
  )
}