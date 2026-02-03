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
      "I had the regular black coffee. It was quite good. A welcome improvement from the coffee at the hotel I was staying at. If I lived here I'd certainly go back but Im just a visitor in town.",
    author: 'Joel Villatoro.',
    role: 'Customer',
  },
  {
    quote:
      'I visited this new Yemeni coffee shop today and had a wonderful experience! I ordered the Honeycomb bread with honey and a Turkish coffee, and my friend got a Cortado. Everything tasted delicious and the service was great.',
    author: 'S. A.',
    role: 'Developer',
  },
  {
    quote:
      " If you want great Yemeni coffee, with all natural ingredients, this is the place to go. It's authentic and delicious with a lot of choices. I had the Spanish Latte, it was great.",
    author: 'A. A',
    role: '',
  },
];

export const menuData = [
  {
    title: "Espresso",
    note: "Most flavored lattes are sweetened with monk fruit",
    items: [
    {
      name: "Influence Latte",
      description: "Espresso, cardamom, honey, milk.",
      price: "$5.00",
      size: "12 oz",
      image: "",
      nutritionFacts: {
        calories: "160-200",
        sugar: "15-18g",
        protein: "5-6g",
        fat: "8-10g",
      },
      scienceHighlight:
        "Caffeine blocks adenosine receptors, cardamom aids digestion, honey provides glucose energy, and cream slows absorption.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Espresso and honey deliver rapid energy; cream and milk proteins slow carbohydrate absorption. Cardamom supports GI motility.",
        glossaryTerms: [
          { term: "Adenosine Antagonism", definition: "Caffeine blocks adenosine receptors, increasing alertness." },
          { term: "Polyphenols", definition: "Plant antioxidants found in honey that protect cells." },
          { term: "Muscarinic Activity", definition: "Stimulation of smooth muscle by cardamom compounds." },
          { term: "Gastric Emptying", definition: "The rate at which food leaves the stomach." },
        ],
      },
      learnMore: {
        title: "Caffeine & Cardamom Research",
        source: "Fredholm BB et al. (1999), Aprotosoaie AC et al. (2015), Bogdanov S et al. (2008)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=cardamom+honey+caffeine",
      },
    },
    {
      name: "Spanish Latte",
      description: "Espresso, organic condensed milk, milk.",
      price: "$5.00",
      size: "12 oz",
      image: "",
      nutritionFacts: {
        calories: "90–120",
        sugar: "Low (0–3g)",
        protein: "5–6g",
        fat: "4–6g",
      },
      scienceHighlight:
        "Caffeine enhances dopamine release; milk proteins promote satiety; organic condensed milk reduces insulin spikes.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Caffeine activates neural pathways via adenosine antagonism. Milk provides protein and fat for satiety; organic condensed milk maintains glycemic balance.",
        glossaryTerms: [
          { term: "Adenosine Receptor Antagonist", definition: "Caffeine blocks adenosine receptors to enhance alertness." },
          { term: "Satiety", definition: "The feeling of fullness that reduces further food intake." },
          { term: "Insulin Response", definition: "Body's reaction to glucose for blood sugar regulation." },
          { term: "Glycemic Load", definition: "Measure of how much food raises blood glucose." },
        ],
      },
      learnMore: {
        title: "Glycemia and Caffeine Studies",
        source: "Fredholm BB et al. (1999), Jenkins DJ et al. (1981), Nilsson M et al. (2004)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=glycemic+response+milk+coffee",
      },
    },
    {
      name: "Mocha",
      description: "Espresso, chocolate milk, chocolate syrup",
      price: "$5.00",
      size: "12 oz",
      image: "",
      nutritionFacts: {
        calories: "",
        sugar: "",
        protein: "",
        fat: "",
      },
      scienceHighlight:
        "Caffeine enhances alertness while cocoa flavonoids support vascular health and mood.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Caffeine blocks adenosine for alertness; cocoa flavonoids improve blood flow and boost dopamine for pleasure.",
        glossaryTerms: [
          { term: "Adenosine Antagonism", definition: "Caffeine blocks adenosine receptors, increasing alertness." },
          { term: "Flavonoids", definition: "Cocoa compounds supporting vascular function." },
          { term: "Dopamine", definition: "Neurotransmitter involved in pleasure and reward." },
        ],
      },
      learnMore: {
        title: "Caffeine & Cocoa Research",
        source: "Fredholm BB et al. (1999), Nogueira L et al. (2017)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=cocoa+polyphenols+cardiovascular",
      },
    },
    {
      name: "Salted Caramel Latte",
      description: "Espresso, milk, salted caramel syrup and drizzle",
      price: "$5.00",
      size: "12 oz",
      image: "",
      nutritionFacts: {
        calories: "",
        sugar: "",
        protein: "",
        fat: "",
      },
      scienceHighlight:
        "Caffeine provides alertness while milk proteins and fats promote satiety and slow sugar absorption.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Caffeine blocks adenosine receptors; milk proteins trigger satiety hormones for lasting fullness.",
        glossaryTerms: [
          { term: "Adenosine Antagonism", definition: "Caffeine blocks adenosine receptors, increasing alertness." },
          { term: "Satiety Hormones", definition: "Hormones like CCK and GLP-1 that signal fullness." },
          { term: "Glycemic Load", definition: "Measure of how fast food raises blood sugar." },
        ],
      },
      learnMore: {
        title: "Caffeine & Satiety Studies",
        source: "Fredholm BB et al. (1999), Nilsson M et al. (2004)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=milk+protein+satiety",
      },
    },
    {
      name: "Raspberry Latte",
      description: "Espresso, milk, Organic raspberry sauce",
      price: "$5.50",
      size: "12 oz",
      image: "",
      nutritionFacts: {
        calories: "",
        sugar: "",
        protein: "",
        fat: "",
      },
      scienceHighlight:
        "Caffeine enhances alertness while raspberry antioxidants support cellular health.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Caffeine blocks adenosine receptors; raspberry polyphenols provide antioxidant protection.",
        glossaryTerms: [
          { term: "Adenosine Antagonism", definition: "Caffeine blocks adenosine receptors, increasing alertness." },
          { term: "Polyphenols", definition: "Plant antioxidants that protect cells." },
          { term: "Antioxidants", definition: "Substances that protect against oxidative stress." },
        ],
      },
      learnMore: {
        title: "Caffeine & Berry Antioxidants",
        source: "Fredholm BB et al. (1999), Kay CD (2012)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=berry+polyphenols",
      },
    },
    {
      name: "Cortado",
      description: "Equal espresso and steamed milk.",
      price: "$3.90",
      size: "4oz",
      image: "",
      nutritionFacts: {
        calories: "",
        sugar: "",
        protein: "",
        fat: "",
      },
      scienceHighlight:
        "Concentrated caffeine provides quick alertness while milk softens acidity.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Caffeine rapidly blocks adenosine receptors; milk proteins buffer gastric acid for comfort.",
        glossaryTerms: [
          { term: "Adenosine Antagonism", definition: "Caffeine blocks adenosine receptors, increasing alertness." },
          { term: "Gastric Buffering", definition: "Milk proteins neutralize stomach acid." },
        ],
      },
      learnMore: {
        title: "Adenosine Receptor Studies",
        source: "Fredholm BB. (2007)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=adenosine+caffeine",
      },
    },
    {
      name: "Americano",
      description: "Espresso, 10 oz filtered water.",
      price: "$3.50",
      size: "12 oz",
      image: "",
      nutritionFacts: {
        calories: "5",
        sugar: "0g",
        protein: "0g",
        fat: "0g",
      },
      scienceHighlight:
        "Caffeine blocks adenosine receptors, increasing alertness and reducing fatigue.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Caffeine competes with adenosine at brain receptors, improving focus and wakefulness.",
        glossaryTerms: [
          { term: "Caffeine", definition: "A stimulant that enhances alertness and energy." },
          { term: "Adenosine Antagonism", definition: "Blocking adenosine to prevent drowsiness." },
          { term: "CNS Stimulation", definition: "Activation of the central nervous system for alertness." },
        ],
      },
      learnMore: {
        title: "Adenosine Receptor Studies",
        source: "Fredholm BB. (2007)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=adenosine+caffeine",
      },
    },
    {
      name: "Cappuccino",
      description: "Espresso, steamed foamy milk",
      price: "$4.00",
      size: "8oz",
      image: "",
      nutritionFacts: {
        calories: "",
        sugar: "",
        protein: "",
        fat: "",
      },
      scienceHighlight:
        "Caffeine enhances alertness while milk proteins provide satiety and buffer acidity.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Caffeine blocks adenosine receptors; milk foam provides texture while proteins aid digestion.",
        glossaryTerms: [
          { term: "Adenosine Antagonism", definition: "Caffeine blocks adenosine receptors, increasing alertness." },
          { term: "Satiety", definition: "The feeling of fullness that reduces further food intake." },
        ],
      },
      learnMore: {
        title: "Adenosine Receptor Studies",
        source: "Fredholm BB. (2007)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=adenosine+caffeine",
      },
    },
    {
      name: "Latte",
      description: "Espresso, 10 oz of your preferred milk.",
      price: "$4.00",
      size: "12 oz",
      image: "",
      nutritionFacts: {
        calories: "",
        sugar: "",
        protein: "",
        fat: "",
      },
      scienceHighlight:
        "Caffeine provides alertness while milk proteins promote satiety and slow absorption.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Caffeine blocks adenosine receptors; milk proteins and fats trigger satiety hormones.",
        glossaryTerms: [
          { term: "Adenosine Antagonism", definition: "Caffeine blocks adenosine receptors, increasing alertness." },
          { term: "Satiety Hormones", definition: "Hormones like CCK and GLP-1 that signal fullness." },
        ],
      },
      learnMore: {
        title: "Caffeine & Satiety Studies",
        source: "Fredholm BB et al. (1999), Nilsson M et al. (2004)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=milk+protein+satiety",
      },
    },
  ],
  },
  {
    title: "Coffee",
    items: [
    {
      name: "Original Yemeni",
      description: "Yemeni style spiced coffee slow-boiled with milk.",
      sweetener: "Optional: pure organic cane sugar",
      price: "$4.00",
      image: "",
      nutritionFacts: {
        calories: "",
        sugar: "",
        protein: "",
        fat: "",
      },
      scienceHighlight:
        "Traditional spices aid digestion while caffeine provides sustained alertness.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Caffeine blocks adenosine receptors; traditional spices support GI motility and provide antioxidants.",
        glossaryTerms: [
          { term: "Adenosine Antagonism", definition: "Caffeine blocks adenosine receptors, increasing alertness." },
          { term: "GI Motility", definition: "Movement of the digestive tract." },
          { term: "Polyphenols", definition: "Plant antioxidants that protect cells." },
        ],
      },
      learnMore: {
        title: "Caffeine & Spice Research",
        source: "Fredholm BB et al. (1999), Aprotosoaie AC et al. (2015)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=coffee+spices",
      },
    },
    {
      name: "Turkish Coffee",
      description: "Carefully heated with cardamom, 3oz water.",
      price: "$3.00",
      size: "3oz",
      image: "",
      nutritionFacts: {
        calories: "5",
        sugar: "0g",
        protein: "0g",
        fat: "0g",
      },
      scienceHighlight:
        "Concentrated caffeine with cardamom for enhanced alertness and digestive support.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "High caffeine concentration rapidly blocks adenosine; cardamom aids gastric motility.",
        glossaryTerms: [
          { term: "Adenosine Antagonism", definition: "Caffeine blocks adenosine receptors, increasing alertness." },
          { term: "Muscarinic Activity", definition: "Stimulation of smooth muscle by cardamom compounds." },
        ],
      },
      learnMore: {
        title: "Caffeine & Cardamom Research",
        source: "Fredholm BB et al. (1999), Aprotosoaie AC et al. (2015)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=cardamom+caffeine",
      },
    },
    {
      name: "Ethiopian Brew",
      description: "Light roast ethiopean coffee.",
      price: "$3.00",
      image: "",
      nutritionFacts: {
        calories: "5",
        sugar: "0g",
        protein: "0g",
        fat: "0g",
      },
      scienceHighlight:
        "Light roast retains chlorogenic acids that regulate glucose and support vascular health.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Chlorogenic acids reduce glucose absorption; caffeine blocks adenosine for alertness.",
        glossaryTerms: [
          { term: "Chlorogenic Acids", definition: "Coffee antioxidants that help regulate glucose metabolism." },
          { term: "Adenosine Antagonism", definition: "Caffeine blocks adenosine receptors, increasing alertness." },
          { term: "Glucose Transport", definition: "Movement of glucose across intestinal membranes." },
        ],
      },
      learnMore: {
        title: "Chlorogenic Acid Studies",
        source: "van Dam RM et al. (2006)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=chlorogenic+acids+coffee",
      },
    },
    {
      name: "Influence Brew",
      description: "Medium roast brewed coffee.",
      price: "$2.80",
      image: "",
      nutritionFacts: {
        calories: "5",
        sugar: "0g",
        protein: "0g",
        fat: "0g",
      },
      scienceHighlight:
        "Balanced caffeine and antioxidants for sustained alertness and cellular protection.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Caffeine blocks adenosine receptors; polyphenols provide antioxidant benefits.",
        glossaryTerms: [
          { term: "Adenosine Antagonism", definition: "Caffeine blocks adenosine receptors, increasing alertness." },
          { term: "Polyphenols", definition: "Antioxidants that reduce inflammation." },
        ],
      },
      learnMore: {
        title: "Coffee Chemistry & Health",
        source: "Crozier A et al. (2012)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=coffee+polyphenols",
      },
    },
    {
      name: "Cold Brew",
      description: "Coffee steeped for 18–24 hrs in cold water.",
      price: "$4.00",
      image: "",
      nutritionFacts: {
        calories: "5",
        sugar: "0g",
        protein: "0g",
        fat: "0g",
      },
      scienceHighlight:
        "Cold extraction keeps chlorogenic acids while reducing acidity.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Provides caffeine with lower stomach irritation; polyphenols aid vascular health.",
        glossaryTerms: [
          { term: "Chlorogenic Acids", definition: "Compounds that protect blood vessels and regulate glucose." },
          { term: "Endothelial Function", definition: "Health of vessel lining affecting circulation." },
          { term: "Gastric Tolerance", definition: "Reduced stomach irritation compared to hot coffee." },
        ],
      },
      learnMore: {
        title: "Cold Brew Research",
        source: "Fuller M, Rao NZ. (2017)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=cold+brew+coffee",
      },
    },
  ],
  },
  {
    title: "Tea",
    items: [
    {
      name: "Adeni Golden Chi",
      description: "12oz Slowly-boiled spiced tea with milk from Aden to Toledo",
      sweetener: "Optional: pure organic cane sugar",
      price: { small: "$3.50", " 42oz": "$8.90" },
      image: "",
      nutritionFacts: {
        calories: "80–120",
        sugar: "10–15g",
        protein: "3–5g",
        fat: "3–5g",
      },
      scienceHighlight:
        "Black tea polyphenols and milk proteins aid digestion and soothe the gut.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Catechins act as antioxidants and support digestion; milk proteins buffer gastric acid.",
        glossaryTerms: [
          { term: "Catechins", definition: "Antioxidants that protect cells and promote digestion." },
          { term: "Polyphenols", definition: "Natural compounds that support gut and heart health." },
        ],
      },
      learnMore: {
        title: "Tea Polyphenol Studies",
        source: "Leung LK et al. (2001)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=black+tea+catechins",
      },
    },
    {
      name: "Black",
      description: "12oz Yemeni style Black spiced tea.",
      price: "$3.00",
      image: "",
      nutritionFacts: {
        calories: "5",
        sugar: "0g",
        protein: "0g",
        fat: "0g",
      },
      scienceHighlight:
        "Catechins provide antioxidant activity and improve vascular function.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Catechins reduce oxidative stress, promoting healthy blood flow and vessel elasticity.",
        glossaryTerms: [
          { term: "Catechins", definition: "Tea antioxidants that neutralize free radicals." },
          { term: "Antioxidant Activity", definition: "Defense mechanism against oxidative cell damage." },
        ],
      },
      learnMore: {
        title: "Tea & Antioxidant Research",
        source: "Khan N, Mukhtar H. (2007)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=tea+polyphenols",
      },
    },
    {
      name: "Hibiscus",
      description: "12oz Organic hibiscus extracted naturally",
      price: "$3.00",
      image: "",
      nutritionFacts: {
        calories: "5",
        sugar: "0g",
        protein: "0g",
        fat: "0g",
      },
      scienceHighlight:
        "Hibiscus anthocyanins enhance nitric oxide and inhibit ACE to support blood pressure control.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Anthocyanins relax vascular smooth muscle, promoting vasodilation and lowering blood pressure.",
        glossaryTerms: [
          { term: "Anthocyanins", definition: "Pigments that promote vascular relaxation and protect cells." },
          { term: "ACE Inhibition", definition: "Prevents angiotensin enzyme activity, reducing blood pressure." },
          { term: "Vasodilation", definition: "Widening of blood vessels for improved circulation." },
        ],
      },
      learnMore: {
        title: "Hibiscus & Heart Health",
        source: "McKay DL et al. (2010)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=hibiscus+tea+blood+pressure",
      },
    },
  ],
  },
  {
    title: "Fresh Juices",
    items: [
    {
      name: "Lemon mint",
      description: "Fresh lemon, mint, sweetned with organic cane sugar.",
      price: "$5.00",
      image: "",
      nutritionFacts: {
        calories: "",
        sugar: "",
        protein: "",
        fat: "",
      },
      scienceHighlight:
        "Vitamin C supports immune function while mint aids digestion and provides refreshing aromatics.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Vitamin C acts as an antioxidant; mint compounds stimulate digestive enzymes and soothe the stomach.",
        glossaryTerms: [
          { term: "Vitamin C", definition: "Essential nutrient supporting immune health and collagen synthesis." },
          { term: "Menthol", definition: "Mint compound that aids digestion and provides cooling sensation." },
        ],
      },
      learnMore: {
        title: "Citrus & Mint Benefits",
        source: "Carr AC et al. (2017), McKay DL et al. (2006)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=vitamin+c+mint+digestion",
      },
    },
    {
      name: "Yemeni Lemonade",
      description: "A bold, creamy lemon with milk, sweetened with organic cane sugar.",
      price: "$5.00",
      image: "",
      nutritionFacts: {
        calories: "",
        sugar: "",
        protein: "",
        fat: "",
      },
      scienceHighlight:
        "Vitamin C from lemon combined with milk proteins provides nutrients while creating unique flavor profile.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Citric acid and vitamin C support cellular health; milk proteins provide satiety and calcium.",
        glossaryTerms: [
          { term: "Vitamin C", definition: "Antioxidant vitamin supporting immune function." },
          { term: "Calcium", definition: "Essential mineral for bone health from milk." },
        ],
      },
      learnMore: {
        title: "Vitamin C Research",
        source: "Carr AC et al. (2017)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=vitamin+c+benefits",
      },
    },
  ],
  },
  {
    title: "Snacks",
    items: [
    {
      name: "Avocad-us Toast",
      description: "Hummus, avocado, olive oil, pomegrante drizzle.",
      price: "$5.00",
      image: "",
      nutritionFacts: {
        calories: "",
        sugar: "",
        protein: "",
        fat: "",
      },
      scienceHighlight:
        "Healthy fats from avocado and olive oil support heart health while protein provides satiety.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Monounsaturated fats improve lipid profiles; fiber and protein promote satiety and stable blood sugar.",
        glossaryTerms: [
          { term: "Monounsaturated Fats", definition: "Heart-healthy fats that improve cholesterol levels." },
          { term: "Fiber", definition: "Promotes digestive health and blood sugar stability." },
          { term: "Satiety", definition: "Feeling of fullness that reduces appetite." },
        ],
      },
      learnMore: {
        title: "Healthy Fats Research",
        source: "Covas MI (2007), Dreher ML (2013)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=avocado+olive+oil+cardiovascular",
      },
    },
    {
      name: "Veggie & Feta",
      description: "Feta cheese, spinach, arugula, tomato, basil, pomegrante drizzle",
      price: "$5.00",
      image: "",
      nutritionFacts: {
        calories: "",
        sugar: "",
        protein: "",
        fat: "",
      },
      scienceHighlight:
        "Leafy greens provide vitamins and minerals while feta adds protein and calcium.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Vegetables deliver micronutrients and fiber; protein from cheese supports satiety and muscle health.",
        glossaryTerms: [
          { term: "Micronutrients", definition: "Vitamins and minerals essential for bodily functions." },
          { term: "Protein", definition: "Building blocks for muscle and tissue repair." },
          { term: "Calcium", definition: "Essential mineral for bone and dental health." },
        ],
      },
      learnMore: {
        title: "Vegetable Nutrition Studies",
        source: "Boeing H et al. (2012)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=vegetable+nutrition",
      },
    },
    {
      name: "Simply Tuna",
      description: "Tuna, tomato, lettuce, cucumber, basil, pomegrantae drizzle",
      price: "$5.00",
      image: "",
      nutritionFacts: {
        calories: "",
        sugar: "",
        protein: "",
        fat: "",
      },
      scienceHighlight:
        "Tuna provides omega-3 fatty acids and protein for heart and muscle health.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Omega-3s reduce inflammation and support cardiovascular health; protein aids muscle maintenance.",
        glossaryTerms: [
          { term: "Omega-3 Fatty Acids", definition: "Essential fats that reduce inflammation and support heart health." },
          { term: "Protein", definition: "Essential for muscle repair and satiety." },
        ],
      },
      learnMore: {
        title: "Omega-3 Research",
        source: "Calder PC (2017)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=omega+3+cardiovascular",
      },
    },
  ],
  },
  {
    title: "Pastries & Desserts",
    items: [
    {
      name: "Butter Croissant",
      description: "Classic flaky butter croissant.",
      price: "$3.90",
      image: "",
      nutritionFacts: {
        calories: "",
        sugar: "",
        protein: "",
        fat: "",
      },
      scienceHighlight:
        "Simple carbohydrates provide quick energy while butter adds richness and satiety.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Carbohydrates convert to glucose for energy; fats slow digestion for sustained satisfaction.",
        glossaryTerms: [
          { term: "Glucose", definition: "Primary energy source for cells." },
          { term: "Satiety", definition: "Feeling of fullness after eating." },
        ],
      },
      learnMore: {
        title: "Carbohydrate Metabolism",
        source: "Wurtman RJ (1986)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=carbohydrate+metabolism",
      },
    },
    {
      name: "Chocolate Croissant",
      description: "Buttery croissant filled with chocolate.",
      price: "$4.00",
      image: "",
      nutritionFacts: {
        calories: "",
        sugar: "",
        protein: "",
        fat: "",
      },
      scienceHighlight:
        "Cocoa flavonoids support mood while carbohydrates provide energy.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Cocoa compounds boost dopamine for pleasure; carbs increase serotonin for mood enhancement.",
        glossaryTerms: [
          { term: "Dopamine", definition: "Neurotransmitter involved in pleasure and reward." },
          { term: "Serotonin", definition: "Neurotransmitter that improves mood and calmness." },
          { term: "Flavonoids", definition: "Cocoa compounds supporting vascular function." },
        ],
      },
      learnMore: {
        title: "Chocolate & Mood",
        source: "Nogueira L et al. (2017), Wurtman RJ (1986)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=cocoa+polyphenols",
      },
    },
    {
      name: "Honeycomb",
      description: "Pull-apart bread filled with cream cheese and honey.",
      callout: "House-baked daily",
      price: "$8.00",
      image: "",
      nutritionFacts: {
        calories: "200–280",
        sugar: "18–22g",
        protein: "5–6g",
        fat: "8–10g",
      },
      scienceHighlight:
        "Honey's natural sugars give energy while cream cheese fats slow absorption for balance.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Carbs provide energy; fats and proteins trigger satiety hormones for lasting fullness.",
        glossaryTerms: [
          { term: "Glycemic Load", definition: "Measure of how fast food raises blood sugar." },
          { term: "Satiety Hormones", definition: "Hormones like CCK and GLP-1 that signal fullness." },
          { term: "Polyphenols", definition: "Plant compounds with antioxidant effects." },
        ],
      },
      learnMore: {
        title: "Honey & Satiety Studies",
        source: "Bogdanov S et al. (2008)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=honey+nutrition",
      },
    },
    {
      name: "Original Cake",
      description: "Classic cake slice.",
      price: "$2.65",
      perSlice: true,
      image: "",
      nutritionFacts: {
        calories: "",
        sugar: "",
        protein: "",
        fat: "",
      },
      scienceHighlight:
        "Carbohydrates provide quick energy and can boost mood through serotonin pathways.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Simple carbs convert to glucose for energy; sugar can trigger dopamine release for pleasure.",
        glossaryTerms: [
          { term: "Glucose", definition: "Primary energy source for cells." },
          { term: "Serotonin", definition: "Neurotransmitter that improves mood." },
        ],
      },
      learnMore: {
        title: "Carbohydrate & Mood",
        source: "Wurtman RJ (1986)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=carbohydrates+mood",
      },
    },
    {
      name: "Chocolate Cake",
      description: "Rich chocolate cake slice.",
      price: "$2.65",
      perSlice: true,
      image: "",
      nutritionFacts: {
        calories: "",
        sugar: "",
        protein: "",
        fat: "",
      },
      scienceHighlight:
        "Cocoa flavonoids support mood and cardiovascular health while providing antioxidants.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Cocoa compounds boost dopamine for pleasure; flavonoids improve blood flow and vascular health.",
        glossaryTerms: [
          { term: "Dopamine", definition: "Neurotransmitter involved in pleasure and reward." },
          { term: "Flavonoids", definition: "Plant antioxidants that improve heart function." },
        ],
      },
      learnMore: {
        title: "Chocolate & Heart Health",
        source: "Nogueira L et al. (2017)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=cocoa+polyphenols+cardiovascular",
      },
    },
  ],
  },
];

// Separate flavor options export
export const flavorOptions = {
  zeroSugar: [
    "Raspberry",
    "Strawberry",
    "Peach",
    "Coconut",
    "Caramel",
    "Vanilla",
    "Hazelnut",
  ],
  naturallySweetened: [
    "S.Caramel",
    "Vanilla",
    "Honey",
    "Cardamom",
    "Hazelnut",
    "Chocolate",
    "Caramel",
    "Lavender",
    "Gingerbread",
    "French vanilla",
  ],
};



export const specialItems = [
    {
      id: "espresso",
      title: "Signature Espresso Drinks",
      description: "Rich, bold espresso crafted with premium beans and artisanal techniques for the perfect shot.",
      image: "/elegant-espresso-drink-with-latte-art-in-glass-cup.webp",
    },
    {
      id: "tea",
      title: "Specialty Teas",
      description: "Carefully curated loose-leaf teas from Yemen, brewed to perfection.",
      image: "/beautiful-specialty-tea-in-elegant-glass-teacup-wi.webp",
    },
    {
      id: "coffee",
      title: "Brewed Coffee",
      description: "Freshly roasted multi-origin beans brewed using various methods for unique flavor profiles.",
      image: "/pour-over-coffee-in-glass-dripper-with-coffee-bean.webp",
    },
    {
      id: "desserts",
      title: "Modern Desserts",
      description: "Contemporary pastries and desserts crafted with innovative techniques and premium ingredients.",
      image: "/modern-layered-dessert-in-glass-with-artistic-pres.webp",
    },
  ]