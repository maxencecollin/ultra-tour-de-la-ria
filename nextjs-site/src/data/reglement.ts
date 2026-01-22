export interface ReglementSection {
  id: string
  title: string
  icon: string
  content: ReglementItem[]
}

export interface ReglementItem {
  title?: string
  text: string
  list?: string[]
  important?: boolean
}

export const reglementSections: ReglementSection[] = [
  {
    id: 'inscription',
    title: 'Conditions d\'inscription',
    icon: 'clipboard',
    content: [
      {
        text: 'L\'inscription a l\'Ultra Trail de la Ria est ouverte a toute personne agee de 20 ans minimum le jour de la course (categorie Espoir). Les inscriptions se font via la plateforme Klikego.',
      },
      {
        title: 'Documents obligatoires',
        text: 'Pour valider votre inscription, vous devez fournir l\'un des documents suivants :',
        list: [
          'Une licence FFA en cours de validite : Athle Competition, Athle Entreprise ou Athle Running',
          'OU une attestation PPS (Parcours de Prevention Sante) datee de moins de 6 mois',
        ],
      },
      {
        title: 'Tarifs et places disponibles',
        text: 'Les inscriptions sont limitees :',
        list: [
          'Ultra 80km : 70 EUR - 350 places',
          'Relais Duo : 100 EUR par equipe - 50 duos (100 coureurs)',
          'Le 30km : 30 EUR - 450 places',
        ],
      },
      {
        text: 'Cloture des inscriptions : 15 mai 2027 ou des que le quota de participants est atteint. Les inscriptions sont nominatives et ne peuvent etre transferees a un tiers.',
        important: true,
      },
      {
        title: 'Assurance annulation',
        text: 'Une assurance annulation est proposee lors de l\'inscription. En cas d\'annulation sans assurance, les conditions de remboursement sont detaillees dans les CGV.',
      },
    ],
  },
  {
    id: 'equipement',
    title: 'Equipement obligatoire',
    icon: 'backpack',
    content: [
      {
        text: 'Le port de l\'equipement obligatoire est verifie au depart et peut l\'etre a tout moment sur le parcours. Tout coureur ne presentant pas l\'integralite de l\'equipement sera penalise ou disqualifie.',
        important: true,
      },
      {
        title: 'BATONS INTERDITS',
        text: 'L\'utilisation de batons est strictement INTERDITE sur toutes les courses (80km, Relais et 30km). Tout coureur utilisant des batons sera disqualifie.',
        important: true,
      },
      {
        title: 'Ultra 80km et Relais',
        text: 'Equipement obligatoire pour les formats longs :',
        list: [
          'Sac de course ou strap (obligatoire)',
          'Telephone portable charge avec le numero de l\'organisation enregistre',
          'Gobelet ou gourde reutilisable (pas de gobelet jetable sur les ravitaillements)',
          'Reserve d\'eau minimum 1L',
          'Reserve alimentaire de secours',
          'Couverture de survie (min 1,40m x 2m)',
          'Sifflet',
          'Lampe frontale avec piles de rechange (obligatoire)',
          'Vetement chaud (manches longues, min 180g)',
          'Vetements impermeables haut et bas (coutures etanches)',
          'Bonnet ou bandeau couvrant les oreilles',
          'Gants',
        ],
      },
      {
        title: 'Le 30km',
        text: 'Equipement obligatoire allege :',
        list: [
          'Sac de course ou strap',
          'Telephone portable charge',
          'Gobelet ou gourde reutilisable',
          'Reserve d\'eau minimum 500ml',
          'Couverture de survie',
          'Sifflet',
          'Vetement chaud (selon meteo)',
        ],
      },
      {
        title: 'Kit canicule',
        text: 'En cas de fortes chaleurs, l\'organisation peut imposer un kit canicule supplementaire : casquette/bob, creme solaire, reserve d\'eau supplementaire. Les coureurs seront informes par email avant la course.',
      },
    ],
  },
  {
    id: 'barrieres',
    title: 'Barrieres horaires',
    icon: 'clock',
    content: [
      {
        text: 'Des barrieres horaires sont mises en place pour garantir la securite des coureurs et le bon deroulement de l\'evenement. Tout coureur arrivant apres l\'heure limite sera arrete et pris en charge par l\'organisation.',
      },
      {
        title: 'Ultra 80km',
        text: 'Depart a 8h00 depuis la Salle Emeraude, Locoal-Mendon :',
        list: [
          'Barriere finale : 23h00 (15h de course)',
          'Ravitaillements tous les 10-15km',
          'Temps neutralise pour la traversee bateau',
        ],
      },
      {
        title: 'Relais Duo',
        text: 'Depart a 8h00 depuis la Salle Emeraude, Locoal-Mendon :',
        list: [
          'Relayeur 1 : 50km (Locoal-Mendon vers zone de relais)',
          'Passage de relais au km 50',
          'Relayeur 2 : 30km (zone de relais vers Locoal-Mendon)',
          'Barriere finale : 23h00 (15h de course)',
        ],
      },
      {
        title: 'Le 30km',
        text: 'Depart a 10h00 depuis le Stade municipal de Sainte-Helene :',
        list: [
          'Barriere finale : 16h00 (6h de course)',
          'Arrivee a Locoal-Mendon',
        ],
      },
    ],
  },
  {
    id: 'securite',
    title: 'Securite et abandon',
    icon: 'shield',
    content: [
      {
        text: 'La securite des coureurs est notre priorite absolue. Le parcours est balise et securise, mais vous evoluez en milieu naturel avec ses aleas.',
      },
      {
        title: 'En cas de probleme',
        text: 'Procedure a suivre :',
        list: [
          'Alertez immediatement l\'organisation au numero inscrit sur votre dossard',
          'Restez sur place si vous etes blesse ou en difficulte',
          'Aidez les autres coureurs en difficulte si vous le pouvez',
          'Suivez les instructions des benevoles et secouristes',
        ],
      },
      {
        title: 'Abandon',
        text: 'En cas d\'abandon, vous devez imperativement :',
        list: [
          'Prevenir l\'organisation par telephone',
          'Vous rendre au point de controle le plus proche',
          'Remettre votre dossard a un benevole',
          'Ne jamais quitter le parcours sans prevenir',
        ],
        important: true,
      },
      {
        title: 'Navettes de recuperation',
        text: 'Des navettes bus sont disponibles aux principaux ravitaillements pour ramener les coureurs au village depart/arrivee. Service de navettes : 8 EUR (a reserver lors de l\'inscription ou sur place).',
      },
      {
        title: 'Penalites et disqualifications',
        text: 'Les infractions suivantes entrainent des penalites ou la disqualification :',
        list: [
          'Equipement obligatoire incomplet',
          'Utilisation de batons',
          'Non-respect du parcours balise',
          'Jet de dechets sur le parcours',
          'Comportement dangereux ou irrespectueux',
          'Aide exterieure non autorisee',
        ],
      },
    ],
  },
  {
    id: 'environnement',
    title: 'Respect de l\'environnement',
    icon: 'leaf',
    content: [
      {
        text: 'L\'Ultra Trail de la Ria traverse des sites naturels proteges, notamment des zones Natura 2000. Le respect de l\'environnement est une condition sine qua non de participation.',
        important: true,
      },
      {
        title: 'Regles imperatives',
        text: 'Tout manquement entraine la disqualification :',
        list: [
          'Aucun dechet ne doit etre jete sur le parcours (meme biodegradable)',
          'Restez sur les sentiers balises, ne coupez jamais',
          'Ne cueillez pas de plantes, ne derangez pas la faune',
          'Utilisez les toilettes seches mises a disposition',
          'Respectez les proprietes privees traversees',
        ],
      },
      {
        title: 'Demarche eco-responsable',
        text: 'L\'organisation s\'engage dans une demarche environnementale :',
        list: [
          'Zero gobelet jetable : apportez votre contenant',
          'Ravitaillements avec produits locaux et de saison',
          'Signaletique reutilisable et recyclable',
          'Incitation au covoiturage et transports en commun',
        ],
      },
    ],
  },
  {
    id: 'bateau',
    title: 'Traversee en bateau',
    icon: 'anchor',
    content: [
      {
        text: 'La traversee de la Ria en bateau est un moment unique de l\'Ultra 80km et du Relais Duo. Cette section est a temps neutralise.',
      },
      {
        title: 'Fonctionnement',
        text: 'Details de la traversee :',
        list: [
          'Traversee incluse dans le parcours du 80km et du Relais',
          'Temps de traversee non compte dans votre temps de course',
          'Gilets de sauvetage obligatoires fournis par l\'organisation',
          'Suivez les consignes des benevoles et du personnel navigant',
        ],
      },
      {
        text: 'En cas de conditions meteo defavorables, l\'organisation se reserve le droit de modifier le parcours et de supprimer la traversee. Les coureurs seront alors deroutes par un parcours terrestre alternatif.',
        important: true,
      },
    ],
  },
]

export function getReglementSectionById(id: string): ReglementSection | undefined {
  return reglementSections.find((section) => section.id === id)
}
