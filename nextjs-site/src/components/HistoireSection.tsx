'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HistoireSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-dark-900 mb-6">
            Un parcours unique en Bretagne
          </h2>
        </motion.div>

        {/* Texte principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="prose prose-lg max-w-none text-dark-600 mb-16"
        >
          <p className="text-xl leading-relaxed mb-6">
            La Ria d'Étel, c'est l'une des plus belles rias de France. Un bras de mer qui s'enfonce dans les terres sur plus de 15 kilomètres, créant un labyrinthe de criques, de presqu'îles et d'îlots où la nature a gardé tous ses droits.
          </p>
          <p className="text-xl leading-relaxed mb-6">
            L'Ultra Tour de la Ria vous invite à découvrir ce territoire d'exception par les sentiers côtiers. 80 kilomètres de pur bonheur entre pinèdes, vasières, plages secrètes et villages de caractère. Un tracé qui épouse les contours de la ria, révélant à chaque virage un nouveau panorama sur cette "petite mer" intérieure.
          </p>
          <p className="text-xl leading-relaxed">
            Point d'orgue de l'aventure : une traversée en bateau au cœur du parcours, moment suspendu où le coureur devient marin le temps d'une escale.
          </p>
        </motion.div>

        {/* Les courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-display font-bold text-dark-900 mb-8 text-center">
            Trois formats pour vivre l'aventure
          </h3>

          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* 30km - gauche */}
            <Link href="/epreuves/30km" className="group">
              <div className="bg-dark-50 rounded-2xl p-6 border border-dark-100 transition-all duration-300 group-hover:shadow-lg group-hover:border-ria-300">
                <div className="text-3xl font-display font-black text-dark-900 mb-2">30km</div>
                <div className="text-dark-500 font-medium mb-3">Format découverte</div>
                <p className="text-dark-600 text-sm">
                  Un format accessible pour découvrir les plus beaux sentiers de la Ria. Idéal pour une première expérience trail.
                </p>
                <div className="mt-4 text-ria-500 font-semibold text-sm group-hover:text-ria-600">
                  450 places
                </div>
              </div>
            </Link>

            {/* 80km - centre, plus grand */}
            <Link href="/epreuves/ultra" className="group">
              <div className="bg-ria-500 rounded-2xl p-8 border-2 border-ria-600 transition-all duration-300 group-hover:shadow-xl group-hover:bg-ria-600 transform md:scale-105">
                <div className="text-5xl font-display font-black text-white mb-2">80km</div>
                <div className="text-ria-100 font-medium mb-3">Le tour complet</div>
                <p className="text-ria-100 text-sm">
                  Le défi ultime : faire le tour intégral de la Ria d'Étel. 80 kilomètres et 200 mètres de dénivelé pour une immersion totale.
                </p>
                <div className="mt-4 text-white font-semibold text-sm">
                  350 places
                </div>
              </div>
            </Link>

            {/* Relais - droite */}
            <Link href="/epreuves/relais" className="group">
              <div className="bg-dark-50 rounded-2xl p-6 border border-dark-100 transition-all duration-300 group-hover:shadow-lg group-hover:border-ria-300">
                <div className="text-3xl font-display font-black text-dark-900 mb-2">Relais</div>
                <div className="text-dark-500 font-medium mb-3">L'aventure à deux</div>
                <p className="text-dark-600 text-sm">
                  Le même parcours de 80 kilomètres, partagé en duo. Le premier relayeur court 50km, le second termine les 30 derniers.
                </p>
                <div className="mt-4 text-ria-500 font-semibold text-sm group-hover:text-ria-600">
                  50 duos
                </div>
              </div>
            </Link>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/epreuves"
            className="inline-flex items-center gap-2 bg-ria-500 hover:bg-ria-600 text-white px-8 py-4 rounded-xl font-display font-bold text-lg transition-colors"
          >
            Découvrir les parcours
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
