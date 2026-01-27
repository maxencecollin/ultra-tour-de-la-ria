'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { getAssetPath } from '@/lib/utils'
import { getRaceById, EVENT_DATE } from '@/data/races'

const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-dark-100 rounded-xl flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-ria-500 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
})

const race = getRaceById('relais')!

export default function Relais() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero avec photo */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end justify-center">
        <Image
          src={getAssetPath('/images/HODM5670-web.jpg')}
          alt="Ultra Trail de la Ria - Relais Duo"
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
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              {EVENT_DATE}
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">
              Le Relais Duo
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              L'aventure partagée à deux
            </p>
          </motion.div>
        </div>
      </section>

      {/* Barre d'infos */}
      <section className="bg-dark-900 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
            <InfoItem label="Distance totale" value="80 km" />
            <InfoItem label="Dénivelé total" value="D+ 200m" />
            <InfoItem label="Départ" value="08h00" />
            <InfoItem label="Barrière horaire" value="15h" />
            <InfoItem label="Places" value="50 duos" />
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-display font-bold text-dark-900 mb-6">
              Présentation
            </h2>
            <p className="text-dark-600 text-lg leading-relaxed mb-6">
              Le Relais Duo permet de partager l'aventure du 80km en équipe de deux. Le premier relayeur effectue 50km, où le second prend le relais pour les 30km restants.
            </p>
            <p className="text-dark-600 text-lg leading-relaxed mb-8">
              Une expérience de cohésion unique avec traversée en bateau. Partagez l'effort, partagez la joie de franchir la ligne d'arrivée ensemble.
            </p>

            {/* Segments du relais */}
            <h3 className="text-2xl font-display font-bold text-dark-900 mb-6">
              Les deux segments
            </h3>
            <div className="grid md:grid-cols-2 gap-6 not-prose mb-8">
              {race.segments?.map((segment, index) => (
                <div
                  key={segment.id}
                  className="bg-white rounded-xl p-6 shadow-sm border-l-4"
                  style={{ borderLeftColor: race.gpxTracks[index]?.color || '#333' }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-display font-bold text-dark-900 text-lg">
                      {segment.name} - {segment.description}
                    </h4>
                  </div>
                  <div className="flex gap-4 text-sm text-dark-500 mb-3">
                    <span>{segment.distance}km</span>
                    <span>D+{segment.elevation}m</span>
                  </div>
                  <p className="text-dark-600">
                    {segment.startLocation} → {segment.endLocation}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 not-prose mb-8">
              <div className="bg-dark-50 rounded-xl p-6">
                <h3 className="font-display font-bold text-dark-900 mb-4">Points forts</h3>
                <ul className="space-y-3">
                  {race.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-dark-700">
                      <svg className="w-5 h-5 text-ria-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-dark-50 rounded-xl p-6">
                <h3 className="font-display font-bold text-dark-900 mb-4">Conditions de participation</h3>
                <ul className="space-y-3">
                  {race.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3 text-dark-700">
                      <svg className="w-5 h-5 text-dark-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Parcours */}
      <section className="py-16 px-4 bg-dark-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-dark-900 mb-8">
              Le Parcours
            </h2>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
              <InteractiveMap
                tracks={race.gpxTracks}
                className="h-[500px]"
              />
            </div>

            {/* Téléchargement GPX */}
            <div className="flex flex-wrap gap-3">
              {race.gpxTracks.map((track) => (
                <a
                  key={track.id}
                  href={getAssetPath(track.file)}
                  download
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-dark-100 border border-dark-200 rounded-xl text-dark-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {track.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-ria-500 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Prêts à relever le défi à deux ?
            </h2>
            <p className="text-ria-100 mb-8 max-w-xl mx-auto">
              Rejoignez-nous le {EVENT_DATE} pour vivre une expérience unique en duo sur les sentiers de la Ria d'Étel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/inscription"
                className="inline-flex items-center justify-center bg-white hover:bg-ria-50 text-ria-600 px-8 py-4 rounded-xl font-display font-bold text-lg transition-colors"
              >
                S'inscrire - {race.price}€ / duo
              </Link>
              <a
                href={getAssetPath('/docs/Reglement_Ultra_Trail_Ria_2027.pdf')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-ria-600 hover:bg-ria-700 text-white px-8 py-4 rounded-xl font-display font-bold text-lg transition-colors"
              >
                Voir le règlement
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <p className="text-dark-400 text-sm mb-1">{label}</p>
      <p className="text-white font-display font-bold text-xl">{value}</p>
    </div>
  )
}
