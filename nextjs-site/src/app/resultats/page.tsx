'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/PageHeader'

export default function Resultats() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        title="Resultats"
        subtitle="Retrouvez les resultats des editions precedentes"
      />

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-dark-50 rounded-2xl p-12 text-center"
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
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>

            <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">
              Premiere edition en 2027
            </h2>

            <p className="text-dark-600 text-lg max-w-xl mx-auto mb-8">
              L'Ultra Trail de la Ria d'Etel est un nouvel evenement.
              La premiere edition aura lieu le 22 mai 2027.
              Les resultats seront disponibles ici apres la course.
            </p>

            <div className="inline-flex items-center gap-2 text-ria-600 font-medium">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Rendez-vous le 22 mai 2027</span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
