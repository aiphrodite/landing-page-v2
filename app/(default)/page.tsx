export const metadata = {
  title: 'aiphrodite.ai - test anything',
  description: 'testing ads, the smarter way',
}

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen relative"
      style={{ backgroundColor: '#f4f4f5' }}
    >
      <h1 className="text-3xl font-bold text-center">
        aiphrodite.ai
      </h1>
      <h1 className="text-3xl font-bold text-center">
        test anything
      </h1>
      <a
        href="https://aiphrodite.ai/home"
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        old site ↪
      </a>
    </div>
  )
}