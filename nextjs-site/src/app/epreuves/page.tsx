'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { getAssetPath } from '@/lib/utils'
import { races, EVENT_DATE } from '@/data/races'

const raceImages: Record<string, string> = {
  ultra: '/images/hero-bg.jpg',
  relais: '/images/HODM5670-web.jpg',
  '30km': '/images/XBGL5940-web.jpg',
}

const raceLinks: Record<string, string> = {
  ultra: '/epreuves/ultra',
  relais: '/epreuves/relais',
  '30km': '/epreuves/30km',
}

export default function Epreuves() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-end justify-center">
        <Image
          src={getAssetPath('/images/hero-bg.jpg')}
          alt="Les épreuves de l'Ultra Trail de la Ria"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative z-10 text-center pb-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              Les Épreuves
            </h1>
            <p className="text-xl text-white/90">
              Trois formats pour vivre l'aventure de la Ria d'Étel
            </p>
          </motion.div>
        </div>
      </section>

      {/* Race Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {races.map((race, index) => (
              <motion.div
                key={race.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={raceLinks[race.id]} className="group block">
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={getAssetPath(raceImages[race.id])}
                      alt={race.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-white text-sm font-medium mb-2"
                        style={{ backgroundColor: race.gpxTracks[0].color }}
                      >
                        {race.distance}km
                      </span>
                      <h3 className="text-2xl font-display font-bold text-white">
                        {race.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-dark-600 mb-3">{race.description}</p>
                  <div className="flex items-center gap-4 text-sm text-dark-500">
                    <span>D+{race.elevation}m</span>
                    <span>Départ {race.startTime}</span>
                    <span className="text-ria-600 font-semibold">{race.price}€</span>
                  </div>
                  <div className="mt-4 text-ria-500 font-semibold group-hover:text-ria-600 transition-colors flex items-center gap-2">
                    Découvrir
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-dark-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-dark-900 mb-4">
              Rendez-vous le {EVENT_DATE}
            </h2>
            <p className="text-dark-600 mb-8 max-w-2xl mx-auto">
              Que vous soyez un trailer expérimenté ou que vous découvriez la discipline, l'Ultra Trail de la Ria vous propose un format adapté à vos ambitions.
            </p>
            <Link
              href="/inscription"
              className="inline-flex items-center justify-center bg-ria-500 hover:bg-ria-600 text-white px-8 py-4 rounded-xl font-display font-bold text-lg transition-colors"
            >
              S'inscrire
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
