import { Icon } from '@iconify/react'

export default function FeaturesBlocks() {
  return (
    <section className="bg-gray-200"
      style={{ backgroundImage: 'url(/images/benefits-bg.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our secret sauce is your advantage.</h2>
          </div>

          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="w-16 h-16 mt-1 mb-2 rounded-full bg-purple-primary text-white flex items-center justify-center">
                <Icon icon="fluent:clipboard-task-list-24-filled" height={30} width={30} />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Explainable</h4>
              <p className="text-gray-600 text-center">Learn what exactly resonates with your target audience.</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="w-16 h-16 mt-1 mb-2 rounded-full bg-purple-primary text-white flex items-center justify-center">
                <Icon icon="material-symbols:more-time-rounded" height={30} width={30} />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Save Time</h4>
              <p className="text-gray-600 text-center">aiphrodite skips weeks of ad testing by simulating personas with AI.</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="w-16 h-16 mt-1 mb-2 rounded-full bg-purple-primary text-white flex items-center justify-center">
                <Icon icon="fa-solid:money-bill-wave" height={30} width={30} />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Save Money</h4>
              <p className="text-gray-600 text-center">Stop wasting money on those "trust me bro" platforms.</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="w-16 h-16 mt-1 mb-2 rounded-full bg-purple-primary text-white flex items-center justify-center">
                <Icon icon="mingcute:lightning-fill" height={30} width={30} />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Agile</h4>
              <p className="text-gray-600 text-center">Early feedback helps you retarget ads with agility.</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="w-16 h-16 mt-1 mb-2 rounded-full bg-purple-primary text-white flex items-center justify-center">
                <Icon icon="gravity-ui:target-dart" height={30} width={30} />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">80%+ accurate</h4>
              <p className="text-gray-600 text-center">aiphrodite finds successes as well as expert marketers.</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="w-16 h-16 mt-1 mb-2 rounded-full bg-purple-primary text-white flex items-center justify-center">
                <Icon icon="hugeicons:ai-brain-03" height={30} width={30} />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Neuroscientific</h4>
              <p className="text-gray-600 text-center">aiphrodite is built on the latest AI and neuroscience research.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}