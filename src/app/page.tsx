import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="test-container bg-green-200">
        HI Dawg!
      </div>
    </main>
  )
}
