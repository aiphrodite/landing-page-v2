'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import { Card, CardBody } from '@nextui-org/react'
import { Icon } from '@iconify/react'

export default function FeaturesHome() {

  const [selectedFeature, setSelectedFeature] = useState<number>(0)

  const features = [
    {
      title: 'AI Personas',
      description: 'Create and simulate your target audience with AI to get instant and actionable feedback on your ads.',
      icon: 'material-symbols:person-book',
      image: '/images/feature-1.svg',
    },
    {
      title: 'aiphrodite score',
      description: 'Find which ads from your set are resonating the most with your target audience.',
      icon: 'material-symbols:insert-chart',
      image: '/images/feature-2.webp',
    },
    {
      title: 'Explainable',
      description: 'Learn why an ad is working with your target audience so you can replicate successes and avoid failures.',
      icon: 'material-symbols:list-alt',
      image: '/images/feature-3.svg',
    },
  ]

  return (
    <section
      className="bg-black dark"
      style={{ backgroundImage: 'url(/images/features-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'top', backgroundRepeat: 'no-repeat' }}
    >

      <div className="h-full w-full py-24"
        style={{ backgroundImage: 'url(/images/features-bg-overlay.svg)', backgroundSize: 'cover', backgroundPosition: 'top', backgroundRepeat: 'no-repeat' }}
      >

        <div className="max-w-6xl mx-auto mb-20 text-center">
          <h1 className="h2 mb-4 text-white">AI-based ad testing</h1>
          <p className="text-xl text-gray-200">A new way to test ads on all target audiences. Even niche ones.</p>
        </div>

        <div className="w-full">

          <div className="max-w-6xl mx-auto flex flex-row">
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="flex flex-col gap-4 mb-8 md:mb-0">
                {features.map((feature, index) => (
                  <Card
                    shadow="lg"
                    key={index}
                    isPressable
                    onPress={() => setSelectedFeature(index)}
                    className={`bg-gray-900 border rounded-lg ${index === selectedFeature ? 'border-aip-orange-sandy' : 'border-gray-800 hover:border-gray-700'}`}
                  >
                    <CardBody className="flex flex-row justify-between items-center">
                      <div>
                        <div className="font-bold text-gray-200 mb-1">{feature.title}</div>
                        <div className="text-gray-400">{feature.description}</div>
                      </div>
                      <div className="flex justify-center items-center w-10 h-10 bg-gray-800 text-gray-200 rounded-full shadow-lg flex-shrink-0 ml-3">
                        <Icon icon={feature.icon} height={24} />
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>

            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out">
                  {features.map((feature, index) => (
                    <Transition
                      show={selectedFeature === index}
                      appear={true}
                      key={index}
                      className="w-full"
                      enter="transition ease-in-out duration-700 transform order-first"
                      enterFrom="opacity-0 translate-y-16"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in-out duration-300 transform absolute"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-16"
                      unmount={false}
                    >
                      <div className="relative inline-flex flex-col">
                        <Image className="md:max-w-none mx-auto drop-shadow-lg" src={feature.image} width={500} height="462" alt={feature.title} />
                      </div>
                    </Transition>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}