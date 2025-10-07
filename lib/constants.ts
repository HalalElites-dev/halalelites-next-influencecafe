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
  { label: 'Cart', href: '/cart' },

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
      description: "Espresso with cardamom, honey, and cream.",
      price: "$4.50",
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
      description: "Espresso with milk and zero-sugar condensed milk.",
      price: "$5.20",
      image: "",
      nutritionFacts: {
        calories: "90–120",
        sugar: "Low (0–3g)",
        protein: "5–6g",
        fat: "4–6g",
      },
      scienceHighlight:
        "Caffeine enhances dopamine release; milk proteins promote satiety; sugar-free condensed milk reduces insulin spikes.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Caffeine activates neural pathways via adenosine antagonism. Milk provides protein and fat for satiety; sugar-free sweetener maintains glycemic balance.",
        glossaryTerms: [
          { term: "Adenosine Receptor Antagonist", definition: "Caffeine blocks adenosine receptors to enhance alertness." },
          { term: "Satiety", definition: "The feeling of fullness that reduces further food intake." },
          { term: "Insulin Response", definition: "Body’s reaction to glucose for blood sugar regulation." },
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
      name: "Dessert Coffee",
      description: "Light roast coffee infused with cardamom.",
      price: { small: "$3.35", large: "$4.00" },
      image: "",
      nutritionFacts: {
        calories: "5–10",
        sugar: "0g",
        protein: "0g",
        fat: "0g",
      },
      scienceHighlight:
        "Light roast retains chlorogenic acids that regulate glucose and support vascular health.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Chlorogenic acids reduce glucose absorption; cardamom supports digestion and gastric motility.",
        glossaryTerms: [
          { term: "Chlorogenic Acids", definition: "Coffee antioxidants that help regulate glucose metabolism." },
          { term: "Glucose Transport", definition: "Movement of glucose across intestinal membranes." },
          { term: "GI Motility", definition: "Movement of the digestive tract." },
        ],
      },
      learnMore: {
        title: "Chlorogenic Acid Studies",
        source: "van Dam RM et al. (2006)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=chlorogenic+acids+coffee",
      },
    },
  ],

  "Specialty Teas": [
    {
      name: "Golden Chai",
      description: "Spiced Adeni tea with milk and honey.",
      price: { small: "$3.70", medium: "$4.50", large: "$5.30" },
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
      name: "Royal Black",
      description: "Bold spiced black tea rich in catechins.",
      price: { small: "$2.00", medium: "$3.25", large: "$3.80" },
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
      name: "Hibiscus Tea",
      description: "Vibrant herbal refresher, hot or iced.",
      price: { small: "$3.40", medium: "$4.20", large: "$5.25", iced: "$4.00" },
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

  "Brewed Coffee": [
    {
      name: "Ethiopian Black",
      description: "Bold, energizing black coffee.",
      price: { small: "$2.80", medium: "$3.30", large: "$3.95" },
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
      name: "Decaf Guatemala",
      description: "Rich coffee flavor without caffeine stimulation.",
      price: { small: "$2.90", medium: "$3.40", large: "$4.00" },
      image: "",
      nutritionFacts: {
        calories: "5",
        sugar: "0g",
        protein: "0g",
        fat: "0g",
      },
      scienceHighlight:
        "Decaffeination retains polyphenols for antioxidant benefits without stimulant effects.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "You enjoy aroma and antioxidants without central nervous system stimulation.",
        glossaryTerms: [
          { term: "Polyphenols", definition: "Antioxidants that reduce inflammation." },
          { term: "Placebo Effect", definition: "Psychological benefit from sensory experience." },
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
      description: "Smooth, low-acid cold coffee.",
      price: "$4.50",
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

  "Modern Desserts": [
    {
      name: "Flat Croissant",
      description: "Flaky croissant with Feta & Honey or Olive Oil & Zaatar.",
      price: "$4.70",
      image: "",
      nutritionFacts: {
        calories: "220–280",
        sugar: "8–12g",
        protein: "6–8g",
        fat: "9–14g",
      },
      scienceHighlight:
        "Carbs boost serotonin; feta adds protein and calcium; honey and zaatar provide antioxidants.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Carbs increase serotonin, enhancing mood; olive oil supports heart health; zaatar compounds improve digestion and immunity.",
        glossaryTerms: [
          { term: "Serotonin", definition: "Neurotransmitter that improves mood and calmness." },
          { term: "Polyphenols", definition: "Antioxidants found in herbs and honey." },
          { term: "Monounsaturated Fats", definition: "Heart-healthy fats in olive oil." },
          { term: "Thymol & Carvacrol", definition: "Antimicrobial compounds in zaatar herbs." },
        ],
      },
      learnMore: {
        title: "Mood & Nutrition Studies",
        source: "Wurtman RJ (1986), Covas MI (2007), Abu-Reidah IM (2014), Bogdanov S (2008)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=serotonin+carbohydrates",
      },
    },
    {
      name: "Honeycomb Bread",
      description: "Pull-apart bread filled with cream cheese and honey.",
      price: { small: "$4.50", regular: "$8.50" },
      image: "",
      nutritionFacts: {
        calories: "200–280",
        sugar: "18–22g",
        protein: "5–6g",
        fat: "8–10g",
      },
      scienceHighlight:
        "Honey’s natural sugars give energy while cream cheese fats slow absorption for balance.",
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
      name: "Dream Cake",
      description: "Sponge cake with fruit, cocoa, and natural sweeteners.",
      price: "$9.00",
      image: "",
      nutritionFacts: {
        calories: "Lower than regular cake",
        sugar: "Reduced",
        protein: "—",
        fat: "—",
      },
      scienceHighlight:
        "Low-glycemic natural sweeteners and fruits reduce sugar spikes and add antioxidants.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Fruits and cocoa flavonoids stabilize glucose, protect vessels, and promote satiety.",
        glossaryTerms: [
          { term: "Glycemic Load", definition: "Lower impact on blood sugar from low-sugar foods." },
          { term: "Flavonoids", definition: "Cocoa compounds supporting vascular function." },
          { term: "Antioxidants", definition: "Substances that protect against oxidative stress." },
        ],
      },
      learnMore: {
        title: "Cake & Flavonoid Studies",
        source: "Livesey G (2019), Kay CD (2012)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=cocoa+flavanols+vascular",
      },
    },
    {
      name: "Kunafa Chocolate Bar",
      description: "Chocolate filled with kunafa and pistachio.",
      price: "$8.00",
      image: "",
      nutritionFacts: {
        calories: "250–300",
        sugar: "20–25g",
        protein: "5–6g",
        fat: "15–18g",
      },
      scienceHighlight:
        "Cocoa flavonoids and pistachios support mood and vascular health.",
      mechanismOfAction: {
        title: "What's Happening in Your Body?",
        description:
          "Cocoa boosts dopamine and blood flow; pistachios add minerals and healthy fats.",
        glossaryTerms: [
          { term: "Dopamine", definition: "Neurotransmitter involved in pleasure and reward." },
          { term: "Flavonoids", definition: "Plant antioxidants that improve heart function." },
          { term: "Antioxidants", definition: "Compounds that combat oxidative damage." },
        ],
      },
      learnMore: {
        title: "Chocolate & Heart Health",
        source: "Nogueira L et al. (2017)",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=cocoa+polyphenols+cardiovascular",
      },
    },
  ],
};

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

export const specialItems = [
    {
      id: "espresso",
      title: "Signature Espresso Drinks",
      description: "Rich, bold espresso crafted with premium beans and artisanal techniques for the perfect shot.",
      image: "/elegant-espresso-drink-with-latte-art-in-glass-cup.jpg",
    },
    {
      id: "tea",
      title: "Specialty Teas",
      description: "Carefully curated loose-leaf teas from around the world, brewed to perfection.",
      image: "/beautiful-specialty-tea-in-elegant-glass-teacup-wi.jpg",
    },
    {
      id: "coffee",
      title: "Brewed Coffee",
      description: "Freshly roasted single-origin beans brewed using various methods for unique flavor profiles.",
      image: "/pour-over-coffee-in-glass-dripper-with-coffee-bean.jpg",
    },
    {
      id: "desserts",
      title: "Modern Desserts",
      description: "Contemporary pastries and desserts crafted with innovative techniques and premium ingredients.",
      image: "/modern-layered-dessert-in-glass-with-artistic-pres.jpg",
    },
  ]