'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PageHeader from '@/components/PageHeader'

const engagements = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
    title: 'Zero dechet',
    description: 'Aucun gobelet jetable sur les ravitaillements. Chaque coureur doit apporter son propre contenant reutilisable.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: 'Produits locaux',
    description: 'Les ravitaillements proposent des produits locaux et de saison, issus de producteurs bretons.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Signaletique reutilisable',
    description: 'Le balisage et la signaletique sont conçus pour etre reutilises d\'une edition a l\'autre.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: 'Covoiturage',
    description: 'Nous encourageons le covoiturage et les transports en commun pour reduire l\'empreinte carbone.',
  },
]

const regles = [
  {
    title: 'Aucun dechet sur le parcours',
    description: 'Meme les dechets biodegradables (peaux de banane, trognons) doivent etre conserves jusqu\'au prochain ravitaillement.',
    important: true,
  },
  {
    title: 'Restez sur les sentiers balises',
    description: 'Ne coupez jamais a travers la vegetation. Les sentiers sont traces pour proteger les ecosystemes fragiles.',
    important: true,
  },
  {
    title: 'Respectez la faune et la flore',
    description: 'Ne cueillez pas de plantes, ne derangez pas les animaux. Vous traversez leur habitat naturel.',
    important: false,
  },
  {
    title: 'Utilisez les toilettes seches',
    description: 'Des toilettes seches sont mises a disposition sur le parcours. Utilisez-les pour preserver les milieux naturels.',
    important: false,
  },
  {
    title: 'Respectez les proprietes privees',
    description: 'Le parcours traverse parfois des terrains prives. Restez sur le trace et ne vous ecartez pas.',
    important: false,
  },
]

export default function Environnement() {
  return (
    <main className="min-h-screen bg-ocean-900">
      <PageHeader
        title="Environnement"
        subtitle="Ensemble, preservons la Ria d'Etel"
      />

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Un patrimoine naturel exceptionnel
            </h2>
            <p className="text-lg text-ocean-300 leading-relaxed mb-8">
              La Ria d'Etel est un joyau naturel de la Bretagne. Cette ancienne vallee fluviale envahie par la mer abrite une biodiversite remarquable : oiseaux migrateurs, poissons, crustaces et une flore unique. En participant a l'Ultra Trail de la Ria, vous traversez des sites naturels proteges qui meritent tout notre respect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Zones protegees */}
      <section className="py-16 px-4 bg-ocean-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Zones protegees traversees
            </h2>
            <p className="text-ocean-300 max-w-2xl mx-auto">
              Le parcours de l'Ultra Trail de la Ria traverse plusieurs zones beneficiant de protections environnementales.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-ocean-800 rounded-xl p-6 border border-ocean-700"
            >
              <div className="w-12 h-12 rounded-lg bg-pinede-600/20 flex items-center justify-center text-pinede-400 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Natura 2000</h3>
              <p className="text-ocean-300 text-sm">
                La Ria d'Etel fait partie du reseau europeen Natura 2000, qui vise a preserver la biodiversite tout en tenant compte des activites humaines.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-ocean-800 rounded-xl p-6 border border-ocean-700"
            >
              <div className="w-12 h-12 rounded-lg bg-pinede-600/20 flex items-center justify-center text-pinede-400 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">ZNIEFF</h3>
              <p className="text-ocean-300 text-sm">
                Zones Naturelles d'Interet Ecologique, Faunistique et Floristique. Ces espaces abritent des especes rares et des habitats remarquables.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-ocean-800 rounded-xl p-6 border border-ocean-700"
            >
              <div className="w-12 h-12 rounded-lg bg-pinede-600/20 flex items-center justify-center text-pinede-400 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sites classes</h3>
              <p className="text-ocean-300 text-sm">
                Plusieurs sites le long du parcours sont classes pour leur interet paysager et patrimonial exceptionnel.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos engagements */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Nos engagements
            </h2>
            <p className="text-ocean-300 max-w-2xl mx-auto">
              L'organisation de l'Ultra Trail de la Ria s'engage dans une demarche eco-responsable pour minimiser l'impact de l'evenement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagements.map((engagement, index) => (
              <motion.div
                key={engagement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-ocean-800 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-pinede-600/20 flex items-center justify-center text-pinede-400 mx-auto mb-4">
                  {engagement.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{engagement.title}</h3>
                <p className="text-ocean-300 text-sm">{engagement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regles pour les coureurs */}
      <section className="py-16 px-4 bg-ocean-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Les regles a respecter
            </h2>
            <p className="text-ocean-300 max-w-2xl mx-auto">
              En tant que coureur, vous etes acteur de la preservation de notre environnement. Le non-respect de ces regles entraine la disqualification.
            </p>
          </motion.div>

          <div className="space-y-4">
            {regles.map((regle, index) => (
              <motion.div
                key={regle.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`
                  bg-ocean-800 rounded-xl p-6
                  ${regle.important ? 'border-l-4 border-sable-500' : ''}
                `}
              >
                <div className="flex items-start gap-4">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
                    ${regle.important ? 'bg-sable-500/20 text-sable-400' : 'bg-pinede-600/20 text-pinede-400'}
                  `}>
                    {regle.important ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{regle.title}</h3>
                    <p className="text-ocean-300">{regle.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-pinede-700 to-pinede-800 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Courir en conscience
            </h2>
            <p className="text-pinede-200 mb-6 max-w-2xl mx-auto">
              Participer a l'Ultra Trail de la Ria, c'est s'engager a respecter un environnement fragile et precieux. Ensemble, faisons de cet evenement un exemple de trail responsable.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/infos-pratiques"
                className="px-6 py-3 bg-white text-pinede-700 font-semibold rounded-lg hover:bg-pinede-100 transition-colors"
              >
                Voir le reglement complet
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
