export const metadata = {
  title: 'justmedya - Home',
  description: 'Boost your popularity, increase your sales, and grow your business with justmedya.',
  icon: '/icon.ico',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  )
}
