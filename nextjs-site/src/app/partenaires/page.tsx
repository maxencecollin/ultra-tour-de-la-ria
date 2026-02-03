'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'

const partenaireCategories = [
  {
    id: 'titre',
    title: 'Partenaire Titre',
    partners: [] as { name: string; logo: string; url: string }[],
  },
  {
    id: 'officiels',
    title: 'Partenaires Officiels',
    partners: [] as { name: string; logo: string; url: string }[],
  },
  {
    id: 'techniques',
    title: 'Partenaires Techniques',
    partners: [] as { name: string; logo: string; url: string }[],
  },
  {
    id: 'communes',
    title: 'Communes Partenaires',
    partners: [] as { name: string; logo: string; url: string }[],
  },
]

export default function Partenaires() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-end justify-center">
        <Image
          src={getAssetPath('/images/hero-bg.jpg')}
          alt="Partenaires Ultra Tour de la Ria"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 text-center pb-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              Nos Partenaires
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Ils nous font confiance et rendent cette aventure possible
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-dark-900 mb-6">
              Premiere edition en 2027
            </h2>
            <p className="text-lg text-dark-600 leading-relaxed mb-8">
              L'Ultra Tour de la Ria est un nouvel evenement sportif qui verra le jour en mai 2027.
              Nous recherchons des partenaires partageant nos valeurs : passion du sport, respect de
              l'environnement et ancrage local.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories de partenaires (placeholder) */}
      <section className="py-16 px-4 bg-dark-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-dark-900 mb-4">
              Nos categories de partenariat
            </h2>
            <p className="text-dark-600 max-w-2xl mx-auto">
              Plusieurs niveaux d'engagement pour accompagner l'Ultra Tour de la Ria selon vos objectifs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partenaireCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-dark-100 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-ria-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-ria-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-dark-900 text-lg mb-2">
                  {category.title}
                </h3>
                <p className="text-dark-500 text-sm">
                  {category.partners.length > 0
                    ? `${category.partners.length} partenaire${category.partners.length > 1 ? 's' : ''}`
                    : 'Disponible'
                  }
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages partenaires */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-dark-900 mb-4">
              Pourquoi devenir partenaire ?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-ria-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-ria-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-dark-900 text-lg mb-2">
                Visibilite
              </h3>
              <p className="text-dark-600">
                900 coureurs, leurs accompagnants, et une audience digitale grandissante sur nos reseaux sociaux.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-ria-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-ria-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-dark-900 text-lg mb-2">
                Ancrage local
              </h3>
              <p className="text-dark-600">
                Un evenement ancre dans le territoire de la Ria d'Etel, valorisant le patrimoine breton.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-ria-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-ria-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-dark-900 text-lg mb-2">
                Valeurs partagees
              </h3>
              <p className="text-dark-600">
                Sport, nature, convivialite et respect de l'environnement au coeur de notre ADN.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Devenir partenaire */}
      <section className="py-16 px-4 bg-dark-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Rejoignez l'aventure
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
              Vous souhaitez associer votre image a l'Ultra Tour de la Ria ?
              Contactez-nous pour decouvrir nos offres de partenariat.
            </p>
            <a
              href="mailto:ultratraildelaria@gmail.com?subject=Devenir%20partenaire%20-%20Ultra%20Tour%20de%20la%20Ria"
              className="inline-flex items-center gap-2 bg-ria-500 hover:bg-ria-600 text-white px-8 py-4 rounded-xl font-display font-bold text-lg transition-colors"
            >
              Devenir partenaire
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
