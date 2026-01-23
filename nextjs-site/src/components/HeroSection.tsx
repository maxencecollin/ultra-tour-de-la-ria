'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { EVENT_DATE, races } from '@/data/races'

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
          <source src="/images/drone/drone-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/70 via-ocean-900/50 to-ocean-900" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo paysage */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Image
              src="/images/logo_paysage.png"
              alt="Ultra Trail de la Ria"
              width={600}
              height={200}
              className="mx-auto max-w-full h-auto"
              priority
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-ocean-200 mb-2 font-light"
          >
            Une grande fete du trail en Bretagne
          </motion.p>

          {/* Date */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="inline-block bg-sable-500/20 border border-sable-500/40 rounded-full px-6 py-2 mb-12"
          >
            <span className="text-sable-300 font-semibold text-lg">{EVENT_DATE}</span>
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
                  transition-all duration-300
                  ${race.id === 'ultra'
                    ? 'bg-sable-500 hover:bg-sable-400 text-white animate-pulse-glow'
                    : race.id === 'relais'
                    ? 'bg-ocean-500 hover:bg-ocean-400 text-white'
                    : 'bg-pinede-600 hover:bg-pinede-500 text-white'
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
            className="text-ocean-300"
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
