import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <main className={inter.className}>
      <div className="grid place-content-center mb-2 mt-2 md:mb-0 text-3xl font-bold text-white">
        Small wikipedia wait you 😀
      </div>
    </main>
  )
}
