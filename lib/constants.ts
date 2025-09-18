// Site Metadata
export const SITE_TITLE = 'Influence Café';
export const SITE_TAGLINE = 'Coffee • Wellness • Community';
export const SITE_URL = 'https://influencecafe.com';

// Navigation Links
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Contact', href: '/contact' },
  { label: 'Pharmacology', href: '/pharmacology' },
];

// Hero Section
export const HERO_HEADING = 'Coffee. Wellness. Community.';
export const HERO_SUBTEXT =
  'A specialty café in Toledo where every sip and bite comes with knowledge, health, and flavor.';
export const HERO_CTA_TEXT = 'Explore Our Menu';

// About Section
export const ABOUT_HEADING = 'About Influence Café';
export const ABOUT_SUBTEXT =
  'Toledo’s first specialty coffee shop and educational hub — combining premium coffee, modern desserts, and science-driven wellness.';
export const ABOUT_CONTENT = `At Influence Café, we believe your favorite coffee or dessert should be both indulgent and empowering. 
Every drink and treat on our menu is paired with transparent nutrition facts and science-backed insights—making wellness engaging and accessible for everyone.

From zero-sugar options crafted for health-conscious and diabetic customers, to QR codes linking directly to research on caffeine, antioxidants, and natural ingredients—our café blends tradition with innovation.

More than just a café, Influence Café is a community hub, hosting fun weekly challenges, educational talks, and partnerships with schools, universities, and healthcare groups.`;

// Contact / Visit Us Section
export const CONTACT_HEADING = 'Visit Us';
export const CONTACT_SUBTEXT =
  'Stop by for coffee, dessert, and a fresh perspective on wellness.';
export const CONTACT_EMAIL = 'info@influencecafe.com';
export const CONTACT_PHONE = '+1 (555) 987-6543';
export const CONTACT_ADDRESS = 'Central & Secor, Toledo, OH';

// Testimonials Section (optional filler for now)
export const TESTIMONIALS = [
  {
    quote:
      "Finally, a café where I can enjoy amazing drinks without worrying about sugar. The hibiscus tea is my favorite!",
    author: 'Layla H.',
    role: 'Customer',
  },
  {
    quote:
      'Love how the menu actually teaches you about the health benefits of what you’re drinking. Super unique idea!',
    author: 'Omar K.',
    role: 'Local Teacher',
  },
  {
    quote:
      'Beautiful atmosphere, friendly staff, and the science facts on the menu are such a cool touch.',
    author: 'Sarah M.',
    role: 'Graduate Student',
  },
];

export const menuData = {
  "Signature Espresso Drinks": [
    {
      name: "Influence Latte",
      description: "Classic latte with a twist of creativity",
      price: "$5.25",
      image: "/placeholder.svg?height=120&width=120",
      nutritionFacts: {
        calories: 150,
        sugar: "12g",
        protein: "6g",
        fat: "5g",
      },
      scienceHighlight: "Caffeine boosts alertness by blocking adenosine receptors in the brain.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Espresso provides caffeine, which increases dopamine and norepinephrine levels, enhancing focus and wakefulness.",
        glossaryTerms: [
          {
            term: "Caffeine",
            definition: "A natural stimulant that blocks adenosine receptors to reduce drowsiness.",
          },
          {
            term: "Dopamine",
            definition: "A neurotransmitter linked to motivation and focus.",
          },
        ],
      },
      learnMore: {
        title: "Caffeine Research",
        source: "PubMed study on caffeine and cognitive performance",
        url: "https://pubmed.ncbi.nlm.nih.gov/20801960/",
      },
    },
    {
      name: "Shot of Genius",
      description: "Bold, rich espresso to ignite your day",
      price: "$4.25",
      image: "/placeholder.svg?height=120&width=120",
      nutritionFacts: {
        calories: 5,
        sugar: "0g",
        protein: "0g",
        fat: "0g",
      },
      scienceHighlight: "Espresso delivers a concentrated dose of caffeine for rapid alertness.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Caffeine peaks in the bloodstream within 30 minutes, improving memory, attention, and reducing fatigue.",
        glossaryTerms: [
          {
            term: "Adenosine",
            definition: "A neurotransmitter that promotes sleepiness; caffeine blocks its effects.",
          },
          {
            term: "Cognitive Performance",
            definition: "Mental processes involving learning, memory, and problem-solving.",
          },
        ],
      },
      learnMore: {
        title: "Espresso Studies",
        source: "Caffeine pharmacology overview",
        url: "https://pubmed.ncbi.nlm.nih.gov/15712575/",
      },
    },
    {
      name: "Cappuccino",
      description: "Creamy foam layered perfectly with espresso",
      price: "$4.75",
      image: "/placeholder.svg?height=120&width=120",
      nutritionFacts: {
        calories: 120,
        sugar: "10g",
        protein: "6g",
        fat: "4g",
      },
      scienceHighlight: "Combines caffeine stimulation with milk proteins that aid satiety.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Milk proteins slow caffeine absorption, providing a smoother, longer-lasting effect.",
        glossaryTerms: [
          {
            term: "Casein",
            definition: "A slow-digesting milk protein that prolongs satiety.",
          },
          {
            term: "Satiety",
            definition: "The feeling of fullness after eating or drinking.",
          },
        ],
      },
      learnMore: {
        title: "Coffee & Satiety Research",
        source: "Effects of coffee with milk on satiety",
        url: "https://pubmed.ncbi.nlm.nih.gov/19943985/",
      },
    },
    {
      name: "Mocha",
      description: "Chocolate meets espresso for a dreamy fusion",
      price: "$5.50",
      image: "/placeholder.svg?height=120&width=120",
      nutritionFacts: {
        calories: 220,
        sugar: "18g",
        protein: "7g",
        fat: "8g",
      },
      scienceHighlight: "Cocoa adds flavonoids, which support brain and cardiovascular health.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Cocoa flavonoids improve blood flow by enhancing nitric oxide availability while caffeine sharpens focus.",
        glossaryTerms: [
          {
            term: "Flavonoids",
            definition: "Plant compounds that improve vascular function and protect brain cells.",
          },
          {
            term: "Nitric Oxide",
            definition: "A molecule that helps dilate blood vessels for better circulation.",
          },
        ],
      },
      learnMore: {
        title: "Cocoa & Brain Function",
        source: "Effects of cocoa flavonoids on cognition",
        url: "https://pubmed.ncbi.nlm.nih.gov/19094300/",
      },
    },
    {
      name: "Desert Coffee",
      description: "Premium Arabian-style coffee brewed with aromatic spices",
      price: "$6.00",
      image: "/placeholder.svg?height=120&width=120",
      nutritionFacts: {
        calories: 60,
        sugar: "0g",
        protein: "1g",
        fat: "2g",
      },
      scienceHighlight: "Spices like cardamom contain antioxidants that aid digestion and circulation.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Cardamom enhances digestive enzyme activity while caffeine supports mental energy.",
        glossaryTerms: [
          {
            term: "Cardamom",
            definition: "A spice with antioxidant and digestive-supporting properties.",
          },
          {
            term: "Digestive Enzymes",
            definition: "Proteins that help break down food into absorbable nutrients.",
          },
        ],
      },
      learnMore: {
        title: "Spiced Coffee Research",
        source: "Cardamom health properties",
        url: "https://pubmed.ncbi.nlm.nih.gov/28930274/",
      },
    },
    {
      name: "Affogato",
      description: "Vanilla ice cream with espresso shot",
      price: "$5.75",
      image: "/placeholder.svg?height=120&width=120",
      nutritionFacts: {
        calories: 250,
        sugar: "20g",
        protein: "6g",
        fat: "12g",
      },
      scienceHighlight: "Combines fast sugar absorption with caffeine for quick energy and alertness.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Sugar boosts blood glucose rapidly, while caffeine increases neurotransmitter activity for focus.",
        glossaryTerms: [
          {
            term: "Blood Glucose",
            definition: "Sugar levels in the blood, providing quick energy to cells.",
          },
          {
            term: "Synergistic Effect",
            definition: "Two substances enhancing each other’s effects (sugar + caffeine).",
          },
        ],
      },
      learnMore: {
        title: "Sugar and Caffeine Interaction",
        source: "Combined effects of glucose and caffeine",
        url: "https://pubmed.ncbi.nlm.nih.gov/15047677/",
      },
    },
  ],

  "Specialty Teas": [
    {
      name: "Adeni Gold Chai",
      description: "Traditional spiced milk tea",
      price: "$4.50",
      image: "/placeholder.svg?height=120&width=120",
      nutritionFacts: {
        calories: 160,
        sugar: "15g",
        protein: "6g",
        fat: "5g",
      },
      scienceHighlight: "Black tea contains theaflavins that support cardiovascular health.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Caffeine and theaflavins improve blood vessel flexibility and alertness while spices aid digestion.",
        glossaryTerms: [
          {
            term: "Theaflavins",
            definition: "Polyphenols in black tea with antioxidant and heart-protective effects.",
          },
          {
            term: "Vasodilation",
            definition: "The widening of blood vessels for better circulation.",
          },
        ],
      },
      learnMore: {
        title: "Chai & Heart Health",
        source: "Tea polyphenols and vascular function",
        url: "https://pubmed.ncbi.nlm.nih.gov/23644595/",
      },
    },
    {
      name: "Hibiscus",
      description: "A vibrant, antioxidant-rich herbal refresher",
      price: "$3.75",
      image: "/placeholder.svg?height=120&width=120",
      nutritionFacts: {
        calories: 5,
        sugar: "0g",
        protein: "0g",
        fat: "0g",
      },
      scienceHighlight: "Hibiscus lowers blood pressure via vasodilation and ACE inhibition.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Anthocyanins in hibiscus relax blood vessels and help regulate blood pressure.",
        glossaryTerms: [
          {
            term: "Anthocyanins",
            definition: "Plant pigments with antioxidant and heart-protective effects.",
          },
          {
            term: "ACE Inhibition",
            definition: "Blocking angiotensin-converting enzyme, reducing blood pressure.",
          },
        ],
      },
      learnMore: {
        title: "Hibiscus & Hypertension",
        source: "Study on hibiscus tea and blood pressure",
        url: "https://pubmed.ncbi.nlm.nih.gov/18287346/",
      },
    },
    {
      name: "Royal Black",
      description: "Smooth, bold, and timeless black tea",
      price: "$3.50",
      image: "/placeholder.svg?height=120&width=120",
      nutritionFacts: {
        calories: 2,
        sugar: "0g",
        protein: "0g",
        fat: "0g",
      },
      scienceHighlight: "Black tea provides caffeine and polyphenols for alertness and gut health.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Polyphenols act as antioxidants and promote beneficial gut bacteria growth.",
        glossaryTerms: [
          {
            term: "Polyphenols",
            definition: "Plant compounds that reduce oxidative stress and inflammation.",
          },
          {
            term: "Gut Microbiota",
            definition: "The community of microbes in the gut that affect health.",
          },
        ],
      },
      learnMore: {
        title: "Black Tea & Gut Health",
        source: "Effects of tea polyphenols on gut microbiota",
        url: "https://pubmed.ncbi.nlm.nih.gov/25911267/",
      },
    },
    {
      name: "Matcha Latte",
      description: "Premium matcha powder with steamed milk",
      price: "$5.25",
      image: "/placeholder.svg?height=120&width=120",
      nutritionFacts: {
        calories: 120,
        sugar: "8g",
        protein: "4g",
        fat: "3g",
      },
      scienceHighlight: "Matcha contains L-theanine and EGCG for calm focus and cellular protection.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "L-theanine promotes relaxed alertness, while EGCG supports metabolism and antioxidant defense.",
        glossaryTerms: [
          {
            term: "L-theanine",
            definition: "An amino acid that enhances relaxation without drowsiness.",
          },
          {
            term: "EGCG",
            definition: "A potent antioxidant catechin found in green tea.",
          },
        ],
      },
      learnMore: {
        title: "Matcha & Cognition",
        source: "L-theanine and caffeine synergy",
        url: "https://pubmed.ncbi.nlm.nih.gov/18681988/",
      },
    },
  ],

  "Brewed Coffee": [
    {
      name: "Just Black",
      description: "Deep, rich hot coffee with a bold finish",
      price: "$3.25",
      image: "/placeholder.svg?height=120&width=120",
      nutritionFacts: {
        calories: 2,
        sugar: "0g",
        protein: "0g",
        fat: "0g",
      },
      scienceHighlight: "Black coffee is rich in antioxidants and supports metabolism.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Caffeine boosts metabolism and chlorogenic acids provide antioxidant protection.",
        glossaryTerms: [
          {
            term: "Chlorogenic Acids",
            definition: "Antioxidants in coffee linked to glucose regulation.",
          },
          {
            term: "Metabolic Rate",
            definition: "The rate at which your body burns energy.",
          },
        ],
      },
      learnMore: {
        title: "Coffee & Metabolism",
        source: "Review on coffee health benefits",
        url: "https://pubmed.ncbi.nlm.nih.gov/29105961/",
      },
    },
    {
      name: "Cold Influence",
      description: "Refreshingly smooth cold brew with less acidity",
      price: "$4.00",
      image: "/placeholder.svg?height=120&width=120",
      nutritionFacts: {
        calories: 5,
        sugar: "0g",
        protein: "0g",
        fat: "0g",
      },
      scienceHighlight: "Cold brew provides sustained caffeine release with lower acidity.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Cold brewing extracts caffeine and antioxidants while reducing acidic compounds that irritate digestion.",
        glossaryTerms: [
          {
            term: "Acidity",
            definition: "The concentration of acids in a drink affecting taste and digestion.",
          },
          {
            term: "Extraction",
            definition: "The process of dissolving flavor compounds during brewing.",
          },
        ],
      },
      learnMore: {
        title: "Cold Brew Studies",
        source: "Comparison of hot vs cold coffee chemistry",
        url: "https://pubmed.ncbi.nlm.nih.gov/31124712/",
      },
    },
    {
      name: "Arabica Essence",
      description: "100% authentic Arabica beans for smooth, luxurious flavor",
      price: "$4.50",
      image: "/placeholder.svg?height=120&width=120",
      nutritionFacts: {
        calories: 2,
        sugar: "0g",
        protein: "0g",
        fat: "0g",
      },
      scienceHighlight: "Arabica beans have higher aroma compounds and lower bitterness than Robusta.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Arabica’s balanced caffeine and chlorogenic acids provide mild stimulation with antioxidant benefits.",
        glossaryTerms: [
          {
            term: "Arabica Coffee",
            definition: "A coffee species with smoother flavor and lower caffeine content.",
          },
          {
            term: "Aroma Compounds",
            definition: "Volatile molecules responsible for coffee’s rich fragrance.",
          },
        ],
      },
      learnMore: {
        title: "Arabica vs Robusta",
        source: "Coffee bean composition and health",
        url: "https://pubmed.ncbi.nlm.nih.gov/28930274/",
      },
    },
  ],

  "Modern Desserts": [
    {
      name: "Dream Cake",
      description: "Soft cake with rich cream and choice of topping",
      price: "$6.50",
      image: "/placeholder.svg?height=120&width=120",
      nutritionFacts: {
        calories: 320,
        sugar: "28g",
        protein: "5g",
        fat: "15g",
      },
      scienceHighlight: "Sugar provides quick energy, while cream adds satiety from fats.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "High sugar spikes glucose levels quickly, while fats slow digestion for longer-lasting energy.",
        glossaryTerms: [
          {
            term: "Glycemic Response",
            definition: "The effect of food on blood glucose levels.",
          },
          {
            term: "Satiety Hormones",
            definition: "Hormones that signal fullness after eating.",
          },
        ],
      },
      learnMore: {
        title: "Sugar & Satiety",
        source: "Effects of sugar-fat combinations",
        url: "https://pubmed.ncbi.nlm.nih.gov/19943985/",
      },
    },
    {
      name: "Dubai Strawberry Cup",
      description: "Chocolate sauce layered with Kunafa and strawberry",
      price: "$7.25",
      image: "/placeholder.svg?height=120&width=120",
      nutritionFacts: {
        calories: 280,
        sugar: "24g",
        protein: "4g",
        fat: "10g",
      },
      scienceHighlight: "Strawberries add vitamin C and antioxidants, supporting immune health.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Vitamin C boosts collagen synthesis while chocolate flavonoids enhance circulation.",
        glossaryTerms: [
          {
            term: "Vitamin C",
            definition: "An essential vitamin that supports skin and immune function.",
          },
          {
            term: "Collagen",
            definition: "A structural protein in skin and tissues strengthened by vitamin C.",
          },
        ],
      },
      learnMore: {
        title: "Strawberries & Health",
        source: "Nutritional profile of strawberries",
        url: "https://pubmed.ncbi.nlm.nih.gov/22846056/",
      },
    },
    {
      name: "Dubai Chocolate Bar",
      description: "Premium chocolate filled with kunafa and pistachio cream",
      price: "$8.00",
      image: "/placeholder.svg?height=120&width=120",
      nutritionFacts: {
        calories: 350,
        sugar: "26g",
        protein: "6g",
        fat: "20g",
      },
      scienceHighlight: "Dark chocolate is rich in magnesium and flavonoids for mood and heart health.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Flavonoids improve vascular function, while magnesium supports stress reduction and relaxation.",
        glossaryTerms: [
          {
            term: "Magnesium",
            definition: "A mineral that helps regulate stress response and muscle function.",
          },
          {
            term: "Vascular Health",
            definition: "The condition of blood vessels that affects circulation.",
          },
        ],
      },
      learnMore: {
        title: "Chocolate & Heart",
        source: "Cocoa flavonoids and cardiovascular health",
        url: "https://pubmed.ncbi.nlm.nih.gov/22864817/",
      },
    },
    {
      name: "Berry Bliss Fusion",
      description: "Fresh strawberries with choice of chocolate sauce",
      price: "$5.75",
      image: "/placeholder.svg?height=120&width=120",
      nutritionFacts: {
        calories: 180,
        sugar: "18g",
        protein: "2g",
        fat: "6g",
      },
      scienceHighlight: "Berries provide polyphenols that protect brain and vascular health.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Polyphenols act as antioxidants, improving circulation and reducing oxidative stress.",
        glossaryTerms: [
          {
            term: "Polyphenols",
            definition: "Plant compounds with strong antioxidant properties.",
          },
          {
            term: "Oxidative Stress",
            definition: "An imbalance between free radicals and antioxidants in the body.",
          },
        ],
      },
      learnMore: {
        title: "Berry Research",
        source: "Health benefits of berry polyphenols",
        url: "https://pubmed.ncbi.nlm.nih.gov/26024516/",
      },
    },
    {
      name: "Flat Croissant",
      description: "Toasted croissant topped with your choice of sauce",
      price: "$4.25",
      image: "/placeholder.svg?height=120&width=120",
      nutritionFacts: {
        calories: 210,
        sugar: "10g",
        protein: "4g",
        fat: "12g",
      },
      scienceHighlight: "Croissants provide quick carbs for energy, balanced by fats for satiety.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Refined flour spikes blood sugar, but butter fats slow digestion and provide steady energy.",
        glossaryTerms: [
          {
            term: "Refined Carbohydrates",
            definition: "Processed carbs that rapidly increase blood glucose.",
          },
          {
            term: "Steady Energy",
            definition: "Energy sustained by combining carbs with fats or protein.",
          },
        ],
      },
      learnMore: {
        title: "Carbs & Satiety",
        source: "Carbohydrate-fat metabolism",
        url: "https://pubmed.ncbi.nlm.nih.gov/10946859/",
      },
    },
  ],
}


// Pharmacology / Mechanism of Action Page

export const PHARMA_HEADING = "Pharmacology Made Simple";
export const PHARMA_SUBTEXT =
  "Big words don’t have to be confusing. Here’s a quick guide to help you understand common science and health terms you’ll see in our menu.";

// Glossary Terms
export const PHARMA_TERMS = [
  {
    term: "Receptor",
    simple: "A lock on your cells that molecules (like caffeine) fit into.",
    explanation:
      "Receptors are proteins on the surface of your cells. When a molecule like caffeine binds to them, it triggers changes in how your body feels or reacts.",
    learnMore:
      "https://www.ncbi.nlm.nih.gov/books/NBK507791/", // PubMed or NIH link
  },
  {
    term: "G-Protein Coupled Receptor (GPCR)",
    simple: "A messenger system inside your body’s cells.",
    explanation:
      "GPCRs are a family of receptors that act like switches. They pass signals from the outside of the cell (like caffeine binding) to the inside, influencing how your cells respond.",
    learnMore:
      "https://www.nature.com/scitable/topicpage/g-protein-coupled-receptors-13991971/",
  },
  {
    term: "Antioxidant",
    simple: "Your body’s shield against damage.",
    explanation:
      "Antioxidants protect your cells from free radicals, which are unstable molecules that can cause stress and damage over time. Hibiscus tea, for example, is rich in antioxidants.",
    learnMore:
      "https://www.hsph.harvard.edu/nutritionsource/antioxidants/",
  },
  {
    term: "Intracellular",
    simple: "Inside the cell.",
    explanation:
      "When scientists say something is intracellular, they just mean it happens inside your cells, not outside in your bloodstream.",
    learnMore:
      "https://www.ncbi.nlm.nih.gov/books/NBK541027/",
  },
  {
    term: "Adenosine",
    simple: "A natural chemical that makes you feel sleepy.",
    explanation:
      "Adenosine builds up in your brain throughout the day, making you tired. Caffeine works by blocking adenosine receptors, helping you feel more awake.",
    learnMore:
      "https://www.sleepfoundation.org/nutrition/caffeine-and-sleep",
  },
  {
    term: "Metabolism",
    simple: "How your body turns food and drink into energy.",
    explanation:
      "Metabolism is the process of breaking down nutrients like sugar, fats, and proteins into usable energy. Caffeine can slightly boost your metabolism.",
    learnMore:
      "https://www.medicalnewstoday.com/articles/what-is-metabolism",
  },
];
