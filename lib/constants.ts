import { Facebook, Instagram, LucideIcon, Youtube } from "lucide-react";

// Site Metadata
export const SITE_TITLE = 'Snappers';
export const SITE_TAGLINE = 'Best Chicken n Fish in Toledo';
export const SITE_URL = 'https://Twospoons.com';

// Navigation Links
export const NAV_LINKS = [
  { label: 'Home', href: '/#' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Contact', href: '#contact' },

];

// Hero Section
export const HERO_HEADING = 'Fresh, Crispy & Made to Order';
export const HERO_SUBTEXT = 'Satisfy your cravings with Toledo’s favorite fried chicken and seafood — hot, delicious, and ready when you are';
export const HERO_CTA_TEXT = 'Order Now';



//Best selling section
export const Best_Selling = 'Popular Items';
// export const Best_Selling_subtext = 'Discover our most popular dishes that keep customers coming back.';

export const BESTSELLING = [
  {
    title: "Chicken Wings & Catfish Nuggets",
    description: "chimken n fesh",
    Image: "/chickencatfish.png"
  },
  {
    title: "Fried Okra",
    description: "phried okra in batter",
    Image: "/okra.png"
  },
  {
    title: "Six Piece Whole Wings and Fries",
    description: "the big back special",
    Image: "/sixpiece.png"
  },
   {
    title: "Six Piece Whole Wings and Fries",
    description: "the big back special, im out of image generation for today so i reused this one",
    Image: "/sixpiece.png"
  },
]




// About Section
export const ABOUT_HEADING = 'Making Fast Food IsA Tradition For Your Family';
export const ABOUT_SUBTEXT = 'From humble beginnings to becoming Toledo\'s premier halal dining destination, our story is one of passion, tradition, and unwavering commitment to authentic Middle Eastern cuisine';
export const ABOUT_CONTENT = `Two Spoons was born from a simple dream: to bring the authentic flavors of the Middle East to Toledo, while honoring the rich culinary traditions passed down through generations. Our founder, Chef Ahmad, immigrated from Damascus with nothing but family recipes and an unwavering passion for halal cuisine.

Today, we continue to serve dishes that tell stories of heritage, family, and the beautiful diversity of Middle Eastern culture, all while maintaining the highest standards of halal certification.`;
export const ABOUT = [
  {
    title: '5000+',
    description: 'Happy Customers',

  },
  {
    title: '4.9',
    description: 'Average Rating',

  },
  {
    title: '50+',
    description: 'Signature Dishes',

  },
]
// Contact Section
export const CONTACT_HEADING = 'Get in Touch';
export const CONTACT_SUBTEXT = 'We would love to hear from you! Reach out with any questions or feedback.';
export const CONTACT_EMAIL = 'support@halalelites.com';
export const CONTACT_PHONE = '+1 (555) 123-4567';
export const CONTACT_ADDRESS = '123 HalalElites St, Suite 100, City';


// Testimonials Section

export const TESTIMONIALS = [
  {
    quote: "The best fried chicken and fish In Toledo.",
    author: "Sarah M.",
    role: "Regular Customer"
  },
  {
    quote: "Finally, a restaurant that serves genuine chicken gizzards It is a must-try! Outstanding quality.",
    author: "Ahmed K.",
    role: "Food Blogger"
  },
  {
    quote: "Great place for family dinners. The staff is friendly and the menu has something for everyone. Highly recommended!",
    author: "Jamal R.",
    role: "Local Resident"
  }
];



// Footer Info
export const FOOTER_TEXT = '© 2025 Snappers, serving the best Fried Chicken & Fish In Toledo.';

export const SOCIAL_LINKS: { name: string; url: string; icon: LucideIcon }[] = [
  {
    name: 'Facebook',
    url: 'https://twitter.com/yourprofile',
    icon: Facebook,
  },
  {
    name: 'Instagram',
    url: 'https://github.com/yourprofile',
    icon: Instagram,
  },
  {
    name: 'Youtube',
    url: 'https://linkedin.com/in/yourprofile',
    icon: Youtube,
  },
];


//MENU PAGE

export const MENU_CATEGORIES = [
  {
    category: "Appetizers",
    items: [
      {
        title: "Chicken Samosa",
        description: "Crispy pastry filled with spiced minced chicken, peas, and potatoes, served with mint chutney.",
        Image: "/chicken-samosa.png"
      },
      {
        title: "Vegetable Pakora",
        description: "Assorted fresh vegetables dipped in a spiced chickpea flour batter and deep-fried until golden and crispy.",
        Image: "/vegetable-pakora.png"
      },
      {
        title: "Paneer Tikka",
        description: "Cubes of Indian cottage cheese marinated in yogurt and spices, grilled in a tandoor oven until charred and tender.",
        Image: "/paneer-tikka.png"
      },
    ]
  },
  {
    category: "Main Courses",
    items: [
      {
        title: "Chicken Biryani",
        description: "Fragrant basmati rice layered with tender spiced chicken, saffron, and aromatic herbs, slow-cooked to perfection in traditional style.",
        Image: "/chicken-biryani.png"
      },
      {
        title: "Grill Kebab Platter",
        description: "An assortment of succulent grilled kebabs, including chicken tikka, seekh kebab, and lamb chops, served with naan and salad.",
        Image: "/grill-kebab.png" // Re-using image, but description changed for platter
      },
      {
        title: "Butter Chicken",
        description: "Tender chicken pieces cooked in a rich, creamy tomato-based sauce, flavored with butter and traditional Indian spices.",
        Image: "/butter-chicken.png"
      },
      {
        title: "Lamb Rogan Josh",
        description: "A classic Kashmiri lamb curry, slow-cooked with a blend of aromatic spices, yogurt, and a hint of ginger.",
        Image: "/lamb-rogan-josh.png"
      },
      {
        title: "Dal Makhani",
        description: "Slow-cooked black lentils and kidney beans simmered in a creamy, buttery, and mildly spiced tomato gravy.",
        Image: "/dal-makhani.png"
      },
      {
        title: "Garlic Naan",
        description: "Soft, leavened flatbread infused with fresh garlic and cilantro, baked in a tandoor oven.",
        Image: "/garlic-naan.png"
      },
    ]
  },
  {
    category: "Desserts",
    items: [
      {
        title: "Gulab Jamun",
        description: "Deep-fried milk-solids dumplings soaked in a rose-scented sugar syrup, served warm.",
        Image: "/gulab-jamun.png"
      },
      {
        title: "Kheer (Rice Pudding)",
        description: "A traditional Indian rice pudding made with slow-cooked basmati rice, milk, sugar, nuts, and cardamom.",
        Image: "/kheer.png"
      },
    ]
  }
];

export const  blogPosts = [
    {
      title: "Preparing for Ramadan 2024",
      excerpt:
        "As we approach the blessed month of Ramadan, our kitchen is bustling with preparations for special iftar and suhoor menus. Learn about our traditional dishes and new additions for this year's celebrations.",
      date: "February 15, 2024",
      author: "Chef Ahmad",
      category: "Recipes",
      image: "/ramadan.png",
    },
    {
      title: "The Journey of Our Halal Ingredients",
      excerpt:
        "Discover how we carefully source our halal ingredients and maintain the highest standards of halal compliance while creating delicious dishes that delight our guests.",
      date: "February 1, 2024",
      author: "Sarah Khan",
      category: "Education",
      image: "/journey.png",
    },
    {
      title: "Join Our Monthly Cooking Classes",
      excerpt:
        "Learn the secrets behind our most popular dishes in our hands-on cooking classes. Next month's theme: Traditional Biryani Masterclass.",
      date: "January 15, 2024",
      author: "Chef Ahmad",
      category: "Education",
      image: "/cooking-class.png",
    },

  ]

 export const galleryImages = [
    { src: "/awards.png", alt: "Awards", category: "Restaurant" },
    { src: "/butter-chicken.png", alt: "Butter Chicken", category: "Restaurant" },
    { src: "/grill-kebab.png", alt: "Lamb Kebab", category: "Main Dishes" },
    { src: "/kitchen.png", alt: "Our Kitchen", category: "Restaurant" },
    { src: "/catering-setup.png", alt: "Dining Area", category: "Restaurant" },
    { src: "/eid.png", alt: "Eid At TwoSpoons", category: "Desserts" },
    { src: "/private-party.png", alt: "Party", category: "Appetizers" },
    { src: "/kitchen.png", alt: "Professional Kitchen", category: "Restaurant" },
    { src: "/cooking-class.png", alt: "Cooking Class", category: "Main Dishes" },
    { src: "/special-dining.png", alt: "Private Dining Room", category: "Restaurant" },
    { src: "/lamb-rogan-josh.png", alt: "Lamb Rogan Josh", category: "Main Dishes" },
    { src: "/patio-dining.png", alt: "Outdoor Patio", category: "Restaurant" },
    { src: "/corporate-setup.png", alt: "Corprorate Setup", category: "Restaurant" },
    { src: "/wedding-setup.png", alt: "Wedding", category: "Restaurant" },
    { src: "/restaurant-interior.png", alt: "Main Dining Hall", category: "Restaurant" },
  ]