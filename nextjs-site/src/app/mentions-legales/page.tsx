'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/PageHeader'

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        title="Mentions légales"
      />

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">
              Éditeur du site
            </h2>
            <p className="text-dark-600 mb-6">
              Le site Ultra Trail de la Ria est édité par :
            </p>
            <ul className="text-dark-600 mb-8 space-y-2">
              <li><strong>Association :</strong> Ultra Trail de la Ria</li>
              <li><strong>Adresse :</strong> 11 rue de l'éolienne, 56510 Saint-Pierre-Quiberon</li>
              <li><strong>Responsable de la publication :</strong> Maxence COLLIN</li>
              <li><strong>Email :</strong> <a href="mailto:ultratraildelaria@gmail.com" className="text-ria-500 hover:text-ria-600">ultratraildelaria@gmail.com</a></li>
            </ul>

            <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">
              Hébergement
            </h2>
            <p className="text-dark-600 mb-8">
              Ce site est hébergé par GitHub Pages, un service de GitHub Inc.<br />
              <strong>Adresse :</strong> 88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis<br />
              <strong>Site web :</strong> <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer" className="text-ria-500 hover:text-ria-600">pages.github.com</a>
            </p>

            <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">
              Propriété intellectuelle
            </h2>
            <p className="text-dark-600 mb-8">
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est la propriété exclusive de l'association Ultra Trail de la Ria, sauf mention contraire. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans l'autorisation écrite préalable de l'association.
            </p>

            <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">
              Crédits photos
            </h2>
            <p className="text-dark-600 mb-8">
              Les photographies présentes sur ce site sont la propriété de l'association Ultra Trail de la Ria ou utilisées avec l'autorisation de leurs auteurs respectifs.
            </p>

            <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">
              Limitation de responsabilité
            </h2>
            <p className="text-dark-600 mb-8">
              L'association Ultra Trail de la Ria s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, elle ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition. En conséquence, l'association décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
            </p>

            <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">
              Contact
            </h2>
            <p className="text-dark-600">
              Pour toute question concernant le site ou l'événement, vous pouvez nous contacter à l'adresse : <a href="mailto:ultratraildelaria@gmail.com" className="text-ria-500 hover:text-ria-600">ultratraildelaria@gmail.com</a>
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
