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
    },
    {
      name: "Shot of Genius",
      description: "Bold, rich espresso to ignite your day",
      price: "$4.25",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Cappuccino",
      description: "Creamy foam layered perfectly with espresso",
      price: "$4.75",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Mocha",
      description: "Chocolate meets espresso for a dreamy fusion",
      price: "$5.50",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Desert Coffee",
      description: "Premium Arabian-style coffee brewed with aromatic spices",
      price: "$6.00",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Affogato",
      description: "Vanilla ice cream with espresso shot",
      price: "$5.75",
      image: "/placeholder.svg?height=120&width=120",
    },
  ],
  "Specialty Teas": [
    {
      name: "Adeni Gold Chai",
      description: "Traditional spiced milk tea",
      price: "$4.50",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Hibiscus",
      description: "A vibrant, antioxidant-rich herbal refresher",
      price: "$3.75",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Royal Black",
      description: "Smooth, bold, and timeless black tea",
      price: "$3.50",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Matcha Latte",
      description: "Premium matcha powder with steamed milk",
      price: "$5.25",
      image: "/placeholder.svg?height=120&width=120",
    },
  ],
  "Brewed Coffee": [
    {
      name: "Just Black",
      description: "Deep, rich hot coffee with a bold finish",
      price: "$3.25",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Cold Influence",
      description: "Refreshingly smooth cold brew with less acidity",
      price: "$4.00",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Arabica Essence",
      description: "100% authentic Arabica beans for smooth, luxurious flavor",
      price: "$4.50",
      image: "/placeholder.svg?height=120&width=120",
    },
  ],
  "Modern Desserts": [
    {
      name: "Dream Cake",
      description: "Soft cake with rich cream and choice of topping",
      price: "$6.50",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Dubai Strawberry Cup",
      description: "Chocolate sauce layered with Kunafa and strawberry",
      price: "$7.25",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Dubai Chocolate Bar",
      description: "Premium chocolate filled with kunafa and pistachio cream",
      price: "$8.00",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Berry Bliss Fusion",
      description: "Fresh strawberries with choice of chocolate sauce",
      price: "$5.75",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Flat Croissant",
      description: "Toasted croissant topped with your choice of sauce",
      price: "$4.25",
      image: "/placeholder.svg?height=120&width=120",
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
