export default function AboutIntro() {
  return (
    <section style={{ backgroundImage: 'url(/images/about-bg.svg)', backgroundSize: 'cover', backgroundPosition: 'right', backgroundRepeat: 'no-repeat' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          <div className="max-w-3xl mx-auto pb-12 md:pb-16 space-y-8">
            <h1 className="h1 mb-4">Our Mission: Empower Creativity Through Innovation</h1>
            <p className="text-xl text-gray-600">
              Born from over 15 academic papers and our diverse experiences in marketing, we saw how data-driven processes often stifled creativity and innovation. Determined to change that, we set out to empower creatives to focus on what they do best: creating.
            </p>
            <p className="text-xl text-gray-600">
              We are on a mission to transform how the world approaches creativity and technology.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}