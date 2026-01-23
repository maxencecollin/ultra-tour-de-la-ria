'use client'

import { motion } from 'framer-motion'
import { EVENT_DATE, races } from '@/data/races'
import { getAssetPath } from '@/lib/utils'

interface HeroSectionProps {
  onRaceSelect: (raceId: string) => void
}

export default function HeroSection({ onRaceSelect }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={getAssetPath('/images/drone/drone-1.mp4')} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Titre */}
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <span className="block text-5xl md:text-7xl lg:text-8xl font-display font-black text-white tracking-tight drop-shadow-lg">
              ULTRA TRAIL
            </span>
            <span className="block text-3xl md:text-5xl lg:text-6xl font-display font-bold text-ria-400 mt-2 drop-shadow-md">
              DE LA RIA D'ETEL
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/90 mb-2 font-light drop-shadow-md"
          >
            Une grande fete du trail en Bretagne
          </motion.p>

          {/* Date */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-12"
          >
            <span className="text-white font-semibold text-lg drop-shadow-sm">{EVENT_DATE}</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {races.map((race, index) => (
              <motion.button
                key={race.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                onClick={() => onRaceSelect(race.id)}
                className={`
                  px-8 py-4 rounded-lg font-display font-bold text-lg
                  transition-all duration-300 shadow-lg
                  ${race.id === 'ultra'
                    ? 'bg-dark-900 hover:bg-dark-800 text-white'
                    : race.id === 'relais'
                    ? 'bg-ria-500 hover:bg-ria-600 text-white'
                    : 'bg-white hover:bg-dark-50 text-dark-900 border border-dark-200'
                  }
                `}
              >
                {race.shortName}
                <span className="block text-xs font-normal opacity-80 mt-1">
                  {race.distance}km - D+{race.elevation}m
                </span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-dark-400"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
