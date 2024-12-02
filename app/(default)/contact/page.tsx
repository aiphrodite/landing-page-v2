import { Button } from '@nextui-org/react'

export const metadata = {
  title: 'aiphrodite.ai - Contact',
  description: 'testing ads, the smarter way',
}

export default function Contact() {
  return (
    <>
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1">Have a question?</h1>
            </div>
            <div className="w-full px-3 flex justify-center">
              {/* <a href="mailto:help@aiphrodite.ai?subject=Contact%20Request&body=Email%20Body"> */}
                <Button 
                  variant="solid"
                  color="secondary"
                  size="lg"
                  radius="sm"
                  as="a"
                  href="mailto:help@aiphrodite.ai?subject=Contact%20Request&body=Email%20Body"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email Us
                </Button>
              {/* </a> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
