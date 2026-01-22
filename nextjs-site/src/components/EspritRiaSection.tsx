'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  {
    id: 'bateau',
    title: 'Traversee Bateau',
    description: 'Une experience unique : traversez la Ria d\'Etel en bateau. Ce passage maritime, temps neutralise, offre une pause contemplative au coeur de votre effort.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 17h18M5 17l-2 4M19 17l2 4M12 3v4m0 0l4 4H8l4-4zM6 9v4a6 6 0 0012 0V9" />
      </svg>
    ),
    badge: 'Temps neutralise',
    color: 'ocean',
  },
  {
    id: 'natura2000',
    title: 'Natura 2000',
    description: 'Parcourez les sentiers proteges de la Ria d\'Etel, site classe Natura 2000. Une immersion dans une biodiversite exceptionnelle entre terre et mer.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    badge: 'Site protege',
    color: 'pinede',
  },
  {
    id: 'eco',
    title: 'Eco-responsable',
    description: 'Zero dechet, gobelets reutilisables, ravitaillements locaux. L\'UTR s\'engage pour minimiser son impact sur l\'environnement fragile de la Ria.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    badge: 'Engagement',
    color: 'sable',
  },
]

export default function EspritRiaSection() {
  return (
    <section className="py-20 px-4 bg-ocean-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            L'Esprit Ria
          </h2>
          <p className="text-ocean-300 text-lg max-w-2xl mx-auto">
            Plus qu'une course, une experience authentique au coeur de la Bretagne maritime
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group"
            >
              <div className={`
                bg-ocean-900 rounded-2xl p-8 h-full border border-ocean-700
                transition-all duration-300 group-hover:border-${feature.color}-500/50
                group-hover:shadow-lg group-hover:shadow-${feature.color}-500/10
              `}>
                {/* Badge */}
                <div className={`
                  inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6
                  ${feature.color === 'ocean' ? 'bg-ocean-500/20 text-ocean-300' : ''}
                  ${feature.color === 'pinede' ? 'bg-pinede-500/20 text-pinede-300' : ''}
                  ${feature.color === 'sable' ? 'bg-sable-500/20 text-sable-300' : ''}
                `}>
                  {feature.badge}
                </div>

                {/* Icon */}
                <div className={`
                  w-16 h-16 rounded-xl flex items-center justify-center mb-6
                  ${feature.color === 'ocean' ? 'bg-ocean-500/20 text-ocean-400' : ''}
                  ${feature.color === 'pinede' ? 'bg-pinede-500/20 text-pinede-400' : ''}
                  ${feature.color === 'sable' ? 'bg-sable-500/20 text-sable-400' : ''}
                `}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-ocean-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { src: '/images/HODM5670-web.jpg', alt: 'Course UTR' },
            { src: '/images/IEAP5443-web.jpg', alt: 'Paysage Ria' },
            { src: '/images/XBGL5940-web.jpg', alt: 'Sentier cotier' },
            { src: '/images/XGXK9412-web.jpg', alt: 'Arrivee UTR' },
          ].map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-xl group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
