export interface PhotoItem {
  id: string;
  filename: string;
  src: string;
  title: string;
  artType: string;
  description: string;
}

export const APPROVED_ART_TYPES = [
  'Leg Mehndi Bridal',
  'Customise Bridal Mehndi',
  'Engagement Mehndi',
  'Guest Mehndi or Arabic Mehndi',
  'Mandala Mehndi',
  'Rajasthani Mehndi',
  'Indian Mehndi',
  'Traditional Mehndi'
] as const;

export type ArtType = typeof APPROVED_ART_TYPES[number];

export const getWhatsAppQueryUrl = (artTypeName: string) => {
  const message = `Hi, I want query about ${artTypeName}.`;
  return `https://wa.me/918449227407?text=${encodeURIComponent(message)}`;
};

export const APPROVED_PHOTOS: PhotoItem[] = [
  {
    id: 'photo-1',
    filename: 'IMG-20261007-WA0003(1).jpg',
    src: '/images/IMG-20261007-WA0003(1).jpg',
    title: 'Leg Mehndi Bridal',
    artType: 'Leg Mehndi Bridal',
    description: 'Specialized bridal feet and leg mehndi featuring intricate bridal motifs, detailed anklet bands, and royal arches.'
  },
  {
    id: 'photo-2',
    filename: 'IMG-20261008-WA0014.jpg',
    src: '/images/IMG-20261008-WA0014.jpg',
    title: 'Customise Bridal Mehndi',
    artType: 'Customise Bridal Mehndi',
    description: 'Personalized bespoke bridal mehndi customized with couple initials, wedding rings, and tailored love story motifs.'
  },
  {
    id: 'photo-3',
    filename: 'IMG-20261008-WA0009.jpg',
    src: '/images/IMG-20261008-WA0009.jpg',
    title: 'Engagement Mehndi',
    artType: 'Engagement Mehndi',
    description: 'Exquisite engagement ceremony design with bride and groom celebratory artwork and delicate ceremonial styling.'
  },
  {
    id: 'photo-4',
    filename: 'IMG-20261008-WA0013.jpg',
    src: '/images/IMG-20261008-WA0013.jpg',
    title: 'Guest Mehndi or Arabic Mehndi',
    artType: 'Guest Mehndi or Arabic Mehndi',
    description: 'Flowing Arabic vines and graceful patterns curated for wedding guests, bridesmaids, and family celebrations.'
  },
  {
    id: 'photo-5',
    filename: 'IMG-20261008-WA0012.jpg',
    src: '/images/IMG-20261008-WA0012.jpg',
    title: 'Mandala Mehndi',
    artType: 'Mandala Mehndi',
    description: 'Symmetrical round circular mandala centerpiece on palms complemented by elegant finger detailing and wrist cuffs.'
  },
  {
    id: 'photo-6',
    filename: 'IMG-20261008-WA0010.jpg',
    src: '/images/IMG-20261008-WA0010.jpg',
    title: 'Rajasthani Mehndi',
    artType: 'Rajasthani Mehndi',
    description: 'Rich, dense Rajasthani traditional heritage patterns inspired by royal Marwari art, delicate jaal, and intricate shading.'
  },
  {
    id: 'photo-7',
    filename: 'IMG-20261007-WA0001(1).jpg',
    src: '/images/IMG-20261007-WA0001(1).jpg',
    title: 'Indian Mehndi',
    artType: 'Indian Mehndi',
    description: 'Classic Indian mehendi craftsmanship featuring palace archways, diamond lattice trellis, and detailed forearm coverage.'
  },
  {
    id: 'photo-8',
    filename: 'IMG-20261008-WA0011.jpg',
    src: '/images/IMG-20261008-WA0011.jpg',
    title: 'Traditional Mehndi',
    artType: 'Traditional Mehndi',
    description: 'Auspicious traditional twin palm symmetry with checkered jaal, floral crests, and evergreen bridal beauty.'
  }
];

export const GALLERY_CATEGORIES = [
  'All',
  ...APPROVED_ART_TYPES
] as const;

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'leg-mehndi-bridal',
    title: 'Leg Mehndi Bridal',
    description: 'Intricate bridal feet and leg coverage adorned with royal anklet bands and auspicious wedding motifs.',
    features: ['Full feet & calf coverage', 'Deep natural stain', 'Photo-ready precision']
  },
  {
    id: 'customise-bridal-mehndi',
    title: 'Customise Bridal Mehndi',
    description: 'Personalized love story elements, couple initials, wedding hashtags, and special wedding dates.',
    features: ['Couple initials & crests', 'Personalized story', '100% unique design']
  },
  {
    id: 'engagement-mehndi',
    title: 'Engagement Mehndi',
    description: 'Classy, balanced artistry curated for engagement and roka ceremonies with celebratory portraits.',
    features: ['Elegant ceremonial look', 'Clean balanced spacing', 'Rich dark color']
  },
  {
    id: 'guest-or-arabic-mehndi',
    title: 'Guest Mehndi or Arabic Mehndi',
    description: 'Fast, neat, and bold flowing designs perfect for wedding guests, bridesmaids, and sisters.',
    features: ['Quick drying & flowing', 'Guest party favorite', 'Neat finishing']
  },
  {
    id: 'mandala-mehndi',
    title: 'Mandala Mehndi',
    description: 'Concentric geometric circular floral mandalas centered on palms with ornamental finger caps.',
    features: ['Geometric symmetry', 'Spiritual mandala art', 'Timeless aesthetics']
  },
  {
    id: 'rajasthani-mehndi',
    title: 'Rajasthani Mehndi',
    description: 'Dense, royal Marwari patterns inspired by Rajasthani palace murals, fine paisleys, and intricate mesh.',
    features: ['Royal palace patterns', 'High visual density', 'Classic Marwari style']
  },
  {
    id: 'indian-mehndi',
    title: 'Indian Mehndi',
    description: 'Classic Indian mehendi celebrating vibrant traditions with architectural jharokhas and latticework.',
    features: ['Architectural jharokha', 'Lattice trellis work', 'Forearm detailing']
  },
  {
    id: 'traditional-mehndi',
    title: 'Traditional Mehndi',
    description: 'Auspicious Indian motifs with twin palm symmetry, blooming lotuses, and dense floral crests.',
    features: ['Twin palm symmetry', 'Auspicious wedding look', 'Pure herbal cones']
  }
];

export interface GuestPriceItem {
  price: string;
  title: string;
  description: string;
}

export const GUEST_PRICES: GuestPriceItem[] = [
  {
    price: '₹300',
    title: 'Simple Front Hand',
    description: 'Elegant & Light Design'
  },
  {
    price: '₹500',
    title: 'Front Hand + Back Hand',
    description: 'Balanced & Stylish Design'
  },
  {
    price: '₹700',
    title: 'Heavy Front Hand',
    description: 'Rich & Beautiful Design'
  },
  {
    price: '₹1,000',
    title: 'Front + Back Hand Heavy Design',
    description: 'Traditional & Trendy Look'
  },
  {
    price: '₹1,500',
    title: 'Full Hand Mehndi (Both Hands)',
    description: 'Full Coverage & Detailed Work'
  },
  {
    price: '₹2,000+',
    title: 'Premium / Customized Guest Mehndi',
    description: 'As per Your Choice & Design'
  }
];

export interface GuestPackage {
  tier: string;
  price: string;
  guestCount: string;
  points: string[];
  isPopular?: boolean;
}

export const PACKAGES_20_GUESTS: GuestPackage[] = [
  {
    tier: 'BASIC',
    price: '₹5,999',
    guestCount: '20 Guests',
    points: [
      'Simple Guest Mehndi',
      '₹300 वाले डिज़ाइन के हिसाब से',
      'Beautiful & Elegant Designs',
      '100% Natural Mehndi'
    ]
  },
  {
    tier: 'PREMIUM',
    price: '₹7,999',
    guestCount: '20 Guests',
    isPopular: true,
    points: [
      'Front Hand + Selected Back Hand Designs',
      '₹500–₹700 Range Designs',
      'Stylish & Beautiful Patterns',
      '100% Natural Mehndi'
    ]
  },
  {
    tier: 'ROYAL',
    price: '₹9,999',
    guestCount: '20 Guests',
    points: [
      'Premium Guest Mehndi',
      'Heavy & Customized Designs',
      'Front + Back Hand Options',
      'Beautiful & Long-Lasting Colour',
      'Home Service Available'
    ]
  }
];

export const SERVICE_AREAS = [
  'Noida',
  'Delhi',
  'Greater Noida',
  'Faridabad',
  'Gurgaon'
];

export const WHY_CHOOSE_US = [
  {
    title: '11 Years of Experience',
    desc: 'Over a decade of trusted bridal mehendi craftsmanship across Delhi NCR.'
  },
  {
    title: 'Professional Team',
    desc: 'Skilled, punctual and courteous artists capable of handling large wedding guest groups.'
  },
  {
    title: 'Beautiful Detailed Designs',
    desc: 'Crisp, needlepoint finishing with clean symmetry that looks spectacular in photos.'
  },
  {
    title: 'Customized Designs',
    desc: 'Tailored couple portraits, wedding dates, hashtags, and love story motifs.'
  },
  {
    title: 'Multiple Styles',
    desc: 'Proficient in Rajasthani, Arabic, Traditional Indian, Floral, and Modern Indo-Western.'
  },
  {
    title: 'Home Mehendi Service',
    desc: 'Relax at your venue while our artists deliver seamless doorstep service.'
  }
];

export interface ReviewItem {
  id: string;
  name: string;
  event: string;
  location: string;
  review: string;
}

export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Priya Sharma',
    event: 'Bridal Mehendi',
    location: 'Greater Noida',
    review: 'Ansh ji and his team did an exceptional job on my wedding day! The portrait of dulha-dulhan was so detailed and realistic. The color came out extremely dark and stayed for more than two weeks. Highly recommended for every bride.'
  },
  {
    id: 'rev-2',
    name: 'Ananya Verma',
    event: 'Engagement Ceremony',
    location: 'Noida Sector 62',
    review: 'Booked them for my engagement and 20 guests package. Everyone in the family was so happy with the speed and neat finishing. The artists were polite and patient with all our requests.'
  },
  {
    id: 'rev-3',
    name: 'Sneha Gupta',
    event: 'Wedding & Sangeet',
    location: 'Delhi NCR',
    review: 'Very professional team. They arrived right on time at our banquet venue and managed all 35 guests smoothly without rushing any design. Pure natural herbal mehndi with zero irritation.'
  },
  {
    id: 'rev-4',
    name: 'Ritu Chauhan',
    event: 'Bridal Mehendi',
    location: 'Gurgaon',
    review: 'The customized initials and peacock patterns were simply breathtaking. All my wedding guests kept asking who the mehendi artist was! Thank you Ansh Bridal Mehandi Art for making my day so special.'
  }
];

export const CONTACT_INFO = {
  phone1: '8449227407',
  phone2: '8449227499',
  phoneCallUrl: 'tel:+918449227407',
  phoneCallUrl2: 'tel:+918449227499',
  whatsappUrl: 'https://wa.me/918449227407',
  email: 'anshmehndiartbridal@gmail.com',
  emailUrl: 'mailto:anshmehndiartbridal@gmail.com',
  address: 'Amritpuram, Block E, Chandila, Gamma 1, Greater Noida, Uttar Pradesh 201310',
  mapsUrl: 'https://maps.app.goo.gl/JoGGDmzoTWrYwL428',
  googleReviewUrl: 'https://share.google/uLasCINSV0Ey2SZza',
  instagramUrl: 'https://www.instagram.com/ansh_bridal_mehandi_art?stkn=MWluNTF3ajVlNGFhOA=='
};
