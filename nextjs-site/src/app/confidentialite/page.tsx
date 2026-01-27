'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/PageHeader'

export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        title="Politique de confidentialité"
      />

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-dark-600 mb-8">
              L'association Ultra Trail de la Ria accorde une grande importance à la protection de vos données personnelles. Cette politique de confidentialité vous informe sur la manière dont vos données sont collectées et utilisées.
            </p>

            <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">
              Responsable du traitement
            </h2>
            <p className="text-dark-600 mb-8">
              Le responsable du traitement des données est :<br />
              <strong>Association Ultra Trail de la Ria</strong><br />
              11 rue de l'éolienne, 56510 Saint-Pierre-Quiberon<br />
              Email : <a href="mailto:ultratraildelaria@gmail.com" className="text-ria-500 hover:text-ria-600">ultratraildelaria@gmail.com</a>
            </p>

            <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">
              Données collectées sur ce site
            </h2>
            <p className="text-dark-600 mb-8">
              Ce site vitrine ne collecte aucune donnée personnelle directement. Aucun formulaire de contact, aucune inscription à une newsletter et aucun cookie de suivi n'est utilisé sur ce site.
            </p>

            <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">
              Inscriptions à l'événement
            </h2>
            <p className="text-dark-600 mb-8">
              Les inscriptions à l'Ultra Trail de la Ria sont gérées par la plateforme <strong>Klikego</strong>. Lorsque vous vous inscrivez à l'événement, vos données personnelles sont collectées et traitées par Klikego conformément à leur propre politique de confidentialité. Nous vous invitons à consulter les conditions de Klikego lors de votre inscription.<br /><br />
              Les données d'inscription transmises à l'association Ultra Trail de la Ria sont utilisées uniquement pour l'organisation de l'événement : gestion des dossards, communication relative à la course, résultats, etc.
            </p>

            <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">
              Cookies
            </h2>
            <p className="text-dark-600 mb-8">
              Ce site n'utilise pas de cookies de suivi ou de cookies publicitaires. Seuls des cookies techniques essentiels au fonctionnement du site peuvent être utilisés par l'hébergeur (GitHub Pages).
            </p>

            <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">
              Vos droits
            </h2>
            <p className="text-dark-600 mb-8">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul className="text-dark-600 mb-8 space-y-2">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d'opposition</li>
            </ul>
            <p className="text-dark-600 mb-8">
              Pour exercer ces droits, vous pouvez nous contacter à l'adresse : <a href="mailto:ultratraildelaria@gmail.com" className="text-ria-500 hover:text-ria-600">ultratraildelaria@gmail.com</a>
            </p>

            <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">
              Modification de la politique
            </h2>
            <p className="text-dark-600">
              Cette politique de confidentialité peut être modifiée à tout moment. La date de dernière mise à jour est indiquée ci-dessous.<br /><br />
              <strong>Dernière mise à jour :</strong> Janvier 2027
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
