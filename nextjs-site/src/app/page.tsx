'use client'

import HeroSection from '@/components/HeroSection'
import HistoireSection from '@/components/HistoireSection'
import EspritRiaSection from '@/components/EspritRiaSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HistoireSection />
      <EspritRiaSection />
    </main>
  )
}
