export interface PharmacologyTerm {
  id: string
  term: string
  subtitle: string
  definition: string
  reference: string
}

export interface PharmacologyCategory {
  id: string
  title: string
  emoji: string
  terms: PharmacologyTerm[]
}

export const pharmacologyData: PharmacologyCategory[] = [
  {
    id: "energy-focus-brain",
    title: "Energy, Focus, and the Brain",
    emoji: "☕",
    terms: [
      {
        id: "adenosine-antagonism",
        term: "Adenosine Antagonism",
        subtitle: "Blocking Tiredness Signals",
        definition:
          "Adenosine is a natural chemical that makes you feel sleepy. When it's blocked, your brain cells stay more active, keeping you awake and alert.",
        reference: "(Fredholm et al., 1999; Ferré, 2016)",
      },
      {
        id: "adenosine-receptor-antagonist",
        term: "Adenosine Receptor Antagonist",
        subtitle: "Blocking Sleep Receptors",
        definition:
          "Compounds like caffeine that block adenosine receptors in the brain, preventing drowsiness and promoting alertness.",
        reference: "(Fredholm et al., 1999)",
      },
      {
        id: "caffeine",
        term: "Caffeine",
        subtitle: "Natural Stimulant",
        definition:
          'Caffeine blocks adenosine receptors and gently boosts dopamine, the "motivation" chemical. That\'s why coffee improves focus and mood.',
        reference: "(Nehlig, 2018; Daly, 2007)",
      },
      {
        id: "cns-stimulation",
        term: "CNS Stimulation",
        subtitle: "Central Nervous System Activation",
        definition:
          'Your nervous system becomes more alert without over-releasing adrenaline — just a natural "wake-up" through brain chemistry.',
        reference: "(Fredholm, 2011)",
      },
    ],
  },
  {
    id: "plant-compounds-antioxidants",
    title: "Plant Compounds and Antioxidants",
    emoji: "🌿",
    terms: [
      {
        id: "polyphenols",
        term: "Polyphenols",
        subtitle: "Cellular Protection",
        definition:
          "Natural molecules in coffee, tea, and fruits that protect cells, calm inflammation, and support blood-vessel health.",
        reference: "(Pandey & Rizvi, 2009)",
      },
      {
        id: "flavonoids",
        term: "Flavonoids",
        subtitle: "Heart Health Supporters",
        definition: "Found in tea, cocoa, and berries; they help vessels relax and support heart health.",
        reference: "(Hooper et al., 2012)",
      },
      {
        id: "catechins",
        term: "Catechins (EGCG)",
        subtitle: "Green Tea Antioxidants",
        definition: "Green-tea antioxidants that slightly increase fat burning and improve metabolism.",
        reference: "(Thielecke & Boschmann, 2009)",
      },
      {
        id: "anthocyanins",
        term: "Anthocyanins",
        subtitle: "Natural Blood Pressure Support",
        definition: "The red and purple pigments in hibiscus and berries that help lower blood pressure naturally.",
        reference: "(Tsuda, 2012; Herrera-Arellano et al., 2007)",
      },
      {
        id: "chlorogenic-acids",
        term: "Chlorogenic Acids",
        subtitle: "Coffee Compounds",
        definition: "Coffee compounds that slow sugar absorption and support healthy blood vessels.",
        reference: "(Tajik et al., 2017)",
      },
      {
        id: "antioxidant-activity",
        term: "Antioxidant Activity",
        subtitle: "Free Radical Defense",
        definition: "Polyphenols fight harmful molecules called free radicals, keeping your cells and heart healthy.",
        reference: "(Rice-Evans & Miller, 1996)",
      },
      {
        id: "antioxidants",
        term: "Antioxidants",
        subtitle: "Cell Protectors",
        definition:
          "Natural compounds that protect cells from damage by neutralizing harmful free radicals, supporting overall health and longevity.",
        reference: "(Lobo et al., 2010)",
      },
    ],
  },
  {
    id: "heart-circulation",
    title: "Heart and Circulation",
    emoji: "❤️",
    terms: [
      {
        id: "ace-inhibition",
        term: "ACE Inhibition",
        subtitle: "Natural Blood Vessel Relaxation",
        definition:
          "Some plants, like hibiscus, naturally block an enzyme (ACE) that tightens blood vessels — helping them relax.",
        reference: "(Ojeda et al., 2010)",
      },
      {
        id: "vasodilation",
        term: "Vasodilation",
        subtitle: "Opening Blood Vessels",
        definition: "Flavonoids and anthocyanins open blood vessels by increasing nitric oxide, improving blood flow.",
        reference: "(Fisher et al., 2016)",
      },
      {
        id: "endothelial-function",
        term: "Endothelial Function",
        subtitle: "Healthy Vessel Linings",
        definition: "Healthy vessel linings release nitric oxide — foods like cocoa and tea improve this balance.",
        reference: "(Schroeter et al., 2006)",
      },
      {
        id: "monounsaturated-fats",
        term: "Monounsaturated Fats",
        subtitle: "Healthy Fats",
        definition:
          "Olive oil and nuts contain healthy fats that help control cholesterol and improve insulin response.",
        reference: "(Schwingshackl & Hoffmann, 2014)",
      },
    ],
  },
  {
    id: "sugar-metabolism",
    title: "Sugar and Metabolism",
    emoji: "🍯",
    terms: [
      {
        id: "glycemic-load",
        term: "Glycemic Load (GL)",
        subtitle: "Blood Sugar Impact",
        definition: "Tells how fast food raises your blood sugar. Low-GL foods keep energy steady and prevent spikes.",
        reference: "(Salmerón et al., 1997)",
      },
      {
        id: "insulin-response",
        term: "Insulin Response",
        subtitle: "Efficient Energy Use",
        definition: "Foods with slower sugar release help the body use insulin more efficiently.",
        reference: "(Jenkins et al., 2002)",
      },
      {
        id: "glucose-transport",
        term: "Glucose Transport",
        subtitle: "Sugar Delivery System",
        definition:
          "The process by which glucose moves from the bloodstream into cells where it's used for energy, regulated by insulin and transport proteins.",
        reference: "(Thorens & Mueckler, 2010)",
      },
    ],
  },
  {
    id: "fullness-digestion",
    title: "Fullness and Digestion",
    emoji: "🍽️",
    terms: [
      {
        id: "gastric-emptying",
        term: "Gastric Emptying",
        subtitle: "Controlled Food Release",
        definition:
          "Your stomach releases food slowly into the intestines. Hormones like GLP-1 and PYY slow it down to help you feel full longer.",
        reference: "(Little et al., 2005)",
      },
      {
        id: "satiety",
        term: "Satiety",
        subtitle: "Feeling of Fullness",
        definition:
          "The feeling of satisfaction and fullness after eating, regulated by hormones and nutrients that signal the brain to stop eating.",
        reference: "(Blundell et al., 2010)",
      },
      {
        id: "satiety-hormones",
        term: "Satiety Hormones",
        subtitle: "Hunger and Fullness Signals",
        definition:
          "After eating, hormones such as GLP-1 and CCK tell the brain you're satisfied; ghrelin does the opposite and triggers hunger.",
        reference: "(Woods & D'Alessio, 2008)",
      },
      {
        id: "gastric-tolerance",
        term: "Gastric Tolerance",
        subtitle: "Stomach Comfort",
        definition:
          "The ability of the stomach to handle foods and beverages without discomfort, irritation, or digestive upset.",
        reference: "(Boekema et al., 1999)",
      },
      {
        id: "gi-motility",
        term: "GI Motility",
        subtitle: "Digestive Movement",
        definition:
          "The coordinated contractions of the digestive tract that move food through the system, from stomach to intestines.",
        reference: "(Camilleri et al., 2012)",
      },
    ],
  },
  {
    id: "nerves-mood-gut-brain",
    title: "Nerves, Mood, and the Gut–Brain Axis",
    emoji: "🧠",
    terms: [
      {
        id: "muscarinic-activity",
        term: "Muscarinic Activity",
        subtitle: "Rest and Digest System",
        definition:
          'Muscarinic receptors help control heart rate, digestion, and smooth muscle activity — part of the body\'s "rest and digest" system.',
        reference: "(Caulfield & Birdsall, 1998)",
      },
      {
        id: "serotonin",
        term: "Serotonin (5-HT)",
        subtitle: "Mood and Gut Connection",
        definition: "Mostly made in the gut, serotonin affects mood, digestion, and the mind–body connection.",
        reference: "(Gershon & Tack, 2007)",
      },
      {
        id: "dopamine",
        term: "Dopamine",
        subtitle: "Motivation Chemical",
        definition: "Caffeine boosts dopamine activity slightly, improving motivation, mood, and concentration.",
        reference: "(Ferré, 2016)",
      },
    ],
  },
  {
    id: "digestive-comfort-aroma",
    title: "Digestive Comfort and Aroma",
    emoji: "🌸",
    terms: [
      {
        id: "thymol-carvacrol",
        term: "Thymol & Carvacrol",
        subtitle: "Natural Digestive Oils",
        definition: "Natural oils from thyme and oregano that relax stomach muscles and reduce bloating.",
        reference: "(Al-Bayati, 2008; Nagoor Meeran et al., 2017)",
      },
    ],
  },
  {
    id: "mind-body-connection",
    title: "Mind–Body Connection",
    emoji: "🧩",
    terms: [
      {
        id: "placebo-effect",
        term: "Placebo Effect",
        subtitle: "The Power of Belief",
        definition:
          "Belief itself can trigger real chemical changes — your brain releases natural opioids and dopamine that influence how you feel.",
        reference: "(Benedetti, 2008; Wager et al., 2007)",
      },
    ],
  },
]
