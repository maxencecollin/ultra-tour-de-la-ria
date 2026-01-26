'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'

export default function Inscription() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        title="Inscription"
        subtitle="Rejoignez l'aventure Ultra Trail de la Ria"
      />

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-ria-50 border border-ria-200 rounded-2xl p-12 text-center"
          >
            <div className="w-20 h-20 bg-ria-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-ria-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">
              Inscriptions bientot disponibles
            </h2>

            <p className="text-dark-600 text-lg max-w-xl mx-auto mb-8">
              Les inscriptions pour l'Ultra Trail de la Ria d'Etel ouvriront prochainement sur la plateforme Klikego.
            </p>

            <div className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-sm border border-ria-200">
              <svg className="w-6 h-6 text-ria-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <span className="text-dark-700 font-medium">Plateforme : Klikego</span>
            </div>

            <div className="mt-10 pt-8 border-t border-ria-200">
              <p className="text-dark-500 mb-4">En attendant, decouvrez les epreuves</p>
              <Link
                href="/epreuves"
                className="inline-flex items-center gap-2 bg-ria-500 hover:bg-ria-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Voir les epreuves
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
