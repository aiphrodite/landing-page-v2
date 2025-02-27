import Image from 'next/image'

export default function HeroHome() {
  return (
    <section
      className="relative pt-20 md:pt-40 space-y-20"
      style={{ backgroundImage: 'url(/images/splash-background-1.svg)', backgroundSize: 'cover', backgroundPosition: 'center 250px', backgroundRepeat: 'no-repeat' }}
    >

      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter" data-aos="zoom-y-out">
          Say Goodbye to A/B Testing With <span style={{ backgroundImage: 'linear-gradient(135deg, #FF745D, #794B93)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>aiphrodite.ai</span>
        </h1>
      </div>

      <div className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">aiphrodite.ai brings the power of AI to marketing managers, analysts, and their teams. Instantly see how your audience will react to an ad, before it is published. No more need for testing, aiphrodite.ai helps you get back to Creating Creativity!</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
              <div>
                <a className="btn text-white bg-purple-primary hover:bg-purple-hover w-full mb-4 sm:w-auto sm:mb-0" href="https://sales.aiphrodite.ai/meetings/willsong/discover">Book a Discovery Call</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="relative flex justify-center" data-aos="zoom-y-out" data-aos-delay="450">
          <div className="flex flex-col justify-center">
            <Image src='/images/hero-macbook.webp' width={1200} height={432} alt="aiphrodite.ai" className='' style={{ filter: 'drop-shadow(0 0 30px white)' }} />
          </div>
        </div>
      </div>
    </section>
  )
}