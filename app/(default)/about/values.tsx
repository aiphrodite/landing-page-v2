import { Card } from "@nextui-org/react"

const values = [
  {title: "Customer Obsession", description: "We are deeply committed to improving the lives of our users, keeping their needs and experiences at the heart of every decision we make."},
  {title: "Innovation", description: "We relentlessly pursue bold, creative solutions that enhance the lives of our users and contribute positively to the world."},
  {title: "Diversity", description: "Our success is built on embracing diverse perspectives. From being people of color to members of the LGBTQ+ community, we recognize and celebrate the value of unique worldviews in driving meaningful impact."},
  {title: "Playful Courage", description: "We embrace the courage to challenge norms and take bold steps, even when it means taking risks or standing out."},
  {title: "Empathy", description: "We approach every interaction with understanding and compassion, giving others the benefit of the doubt and recognizing that most actions stem from good intentions."},
  {title: "Generosity of Spirit", description: "With privilege comes responsibility. We are committed to protecting and uplifting others, fostering a culture of care and shared success."},
]

export default function Values() {
  return (
    <section style={{ backgroundImage: 'url(/images/values-bg.webp)', backgroundSize: 'cover', backgroundPosition: 'right', backgroundRepeat: 'no-repeat' }}>
      <div className="dark max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 text-white">Our Values</h1>
          </div>

          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-6xl pt-8 md:pt-12">
            {values.map((value, index) => (
              <Card className="text-center p-6" key={index}>
                <span className="text-xl font-medium mb-3">{value.title}</span>
                <span className="text-gray-400">{value.description}</span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}