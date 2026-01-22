'use client'

import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { races, type RaceFormat, type Race } from '@/data/races'

const InteractiveMap = dynamic(() => import('./InteractiveMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-ocean-800 rounded-xl flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-ocean-400 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
})

export interface RaceExplorerHandle {
  selectRace: (raceId: string) => void
}

const RaceExplorer = forwardRef<RaceExplorerHandle>(function RaceExplorer(_, ref) {
  const [activeRace, setActiveRace] = useState<RaceFormat>('ultra')
  const sectionRef = useRef<HTMLElement>(null)

  const currentRace = races.find((r) => r.id === activeRace) as Race

  useImperativeHandle(ref, () => ({
    selectRace: (raceId: string) => {
      setActiveRace(raceId as RaceFormat)
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
  }))

  const tabs = [
    { id: 'ultra' as RaceFormat, label: 'Ultra 80km', color: 'sable' },
    { id: 'relais' as RaceFormat, label: 'Relais Duo', color: 'ocean' },
    { id: '30km' as RaceFormat, label: 'Le 30km', color: 'pinede' },
  ]

  return (
    <section ref={sectionRef} id="explorer" className="py-20 px-4 bg-ocean-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Explore Your Race
          </h2>
          <p className="text-ocean-300 text-lg max-w-2xl mx-auto">
            Decouvrez nos trois formats et choisissez votre defi
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-ocean-800 rounded-xl p-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveRace(tab.id)}
                className={`
                  relative px-6 py-3 rounded-lg font-semibold text-sm md:text-base
                  transition-colors duration-300
                  ${activeRace === tab.id
                    ? 'text-white'
                    : 'text-ocean-400 hover:text-ocean-200'
                  }
                `}
              >
                {activeRace === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className={`
                      absolute inset-0 rounded-lg
                      ${tab.color === 'sable' ? 'bg-sable-500' : ''}
                      ${tab.color === 'ocean' ? 'bg-ocean-500' : ''}
                      ${tab.color === 'pinede' ? 'bg-pinede-600' : ''}
                    `}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRace}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-5 gap-8"
          >
            {/* Map */}
            <div className="lg:col-span-3">
              <InteractiveMap
                tracks={currentRace.gpxTracks}
                className="h-[400px] lg:h-[500px]"
              />
            </div>

            {/* Info Panel */}
            <div className="lg:col-span-2 space-y-6">
              {/* Race Header */}
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                  {currentRace.name}
                </h3>
                <p className="text-ocean-300 text-lg">
                  {currentRace.description}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <StatCard
                  label="Distance"
                  value={`${currentRace.distance}km`}
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  }
                />
                <StatCard
                  label="Denivele"
                  value={`D+${currentRace.elevation}m`}
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15l9-9 4 4 5-5" />
                    </svg>
                  }
                />
                <StatCard
                  label="Depart"
                  value={currentRace.startTime}
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }
                />
                <StatCard
                  label="Tarif"
                  value={`${currentRace.price}EUR`}
                  subValue={currentRace.priceEarly ? `Early: ${currentRace.priceEarly}EUR` : undefined}
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }
                />
              </div>

              {/* Start Location */}
              <div className="bg-ocean-800 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-ocean-700 flex items-center justify-center text-ocean-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-ocean-400 text-sm">Lieu de depart</p>
                    <p className="text-white font-semibold">{currentRace.startLocation}</p>
                  </div>
                </div>
              </div>

              {/* Barrier Time (for Ultra) */}
              {currentRace.barrierTime && (
                <div className="bg-sable-500/10 border border-sable-500/30 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-sable-500/20 flex items-center justify-center text-sable-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sable-400 text-sm">Barriere horaire</p>
                      <p className="text-white font-semibold">{currentRace.barrierTime}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Relais Segments */}
              {currentRace.segments && (
                <div className="space-y-3">
                  <p className="text-ocean-400 text-sm font-semibold">Segments du relais</p>
                  {currentRace.segments.map((segment) => (
                    <div key={segment.id} className="bg-ocean-800 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold">{segment.name}</span>
                        <span className="text-ocean-300 text-sm">{segment.distance}km - D+{segment.elevation}m</span>
                      </div>
                      <p className="text-ocean-400 text-sm">
                        {segment.startLocation} → {segment.endLocation}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Highlights */}
              <div>
                <p className="text-ocean-400 text-sm font-semibold mb-3">Points forts</p>
                <ul className="space-y-2">
                  {currentRace.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-ocean-200">
                      <svg className="w-5 h-5 text-pinede-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  w-full py-4 rounded-xl font-display font-bold text-lg text-white
                  transition-colors duration-300
                  ${activeRace === 'ultra' ? 'bg-sable-500 hover:bg-sable-400' : ''}
                  ${activeRace === 'relais' ? 'bg-ocean-500 hover:bg-ocean-400' : ''}
                  ${activeRace === '30km' ? 'bg-pinede-600 hover:bg-pinede-500' : ''}
                `}
              >
                S'inscrire au {currentRace.name}
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
})

function StatCard({
  label,
  value,
  subValue,
  icon,
}: {
  label: string
  value: string
  subValue?: string
  icon: React.ReactNode
}) {
  return (
    <div className="bg-ocean-800 rounded-xl p-4">
      <div className="flex items-center gap-2 text-ocean-400 mb-1">
        {icon}
        <span className="text-sm">{label}</span>
      </div>
      <p className="text-white font-bold text-xl">{value}</p>
      {subValue && <p className="text-ocean-400 text-xs mt-1">{subValue}</p>}
    </div>
  )
}

export default RaceExplorer
