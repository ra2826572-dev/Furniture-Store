import { Collection, Product, Review } from '../types';

export const BUSINESS_INFO = {
  name: 'Furniture Store By Sheheryar',
  founder: 'Sheheryar [NEEDS CLIENT CONFIRMATION: Full Founder Title]',
  tagline: 'Furniture Designed to Define Your Space',
  phone: '+92 323 6044130',
  phoneFormatted: '+92 323 6044130',
  whatsappRaw: '923236044130',
  rating: 4.8,
  reviewCount: 63,
  address: 'D Ground, Hurrian Wala Chowk, Block B, People’s Colony No. 1, Faisalabad, Punjab, Pakistan',
  landmark: 'Near Hurrian Wala Chowk, D Ground Commercial Area',
  city: 'Faisalabad',
  country: 'Pakistan',
  hours: 'Mon – Sun: 11:00 AM – 10:30 PM [NEEDS CLIENT CONFIRMATION: Exact Daily Hours]',
  googleMapsUrl: 'https://maps.google.com/?q=D+Ground+Hurrian+Wala+Chowk+Peoples+Colony+1+Faisalabad',
  instagramHandle: '@furniturestorebysheheryar [NEEDS CLIENT CONFIRMATION: Exact IG Handle]',
  email: 'info@sheheryarfurniture.pk [NEEDS CLIENT CONFIRMATION: Official Domain Email]',
  amenities: {
    accessibility: [
      'Assistive Hearing Loop available',
      'Wheelchair Accessible Restroom',
      'Wheelchair Accessible Seating',
    ],
    services: [
      'Regional White-Glove Delivery',
      'Same-Day Delivery (on select showroom pieces)',
      'Onsite Services & In-Home Measuring',
    ],
    offerings: [
      'Professional Assembly & Setup Service',
      'Furniture Maintenance & Repair Services',
    ],
    planning: [
      'Quick visits welcome anytime',
      'Private VIP consultation bookings available',
    ],
    payments: [
      'Debit Cards accepted',
      'Bank Checks accepted',
      'Direct Bank Transfer & Cash',
    ],
    parking: [
      'Free customer parking lot',
      'Free street parking in D Ground',
    ],
  },
};

export const COLLECTIONS: Collection[] = [
  {
    id: 'living-room',
    title: 'Living Room Architecture',
    subtitle: 'Curved seating, architectural credenzas & conversational layouts',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    category: 'living',
    itemCountPlaceholder: '14+ Curated Designs',
  },
  {
    id: 'signature-sofas',
    title: 'Signature & Curved Sofas',
    subtitle: 'Sculptural silhouettes upholstered in bouclé, textured velvet & fine chenille',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85',
    category: 'sofas',
    itemCountPlaceholder: '18+ Designer Silhouettes',
  },
  {
    id: 'master-bedrooms',
    title: 'Master Bedroom Suites',
    subtitle: 'Fluted headboards, floating pedestals & upholstered luxury beds',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
    category: 'bedroom',
    itemCountPlaceholder: '10+ Bespoke Suites',
  },
  {
    id: 'coffee-tables',
    title: 'Sculptural Tables & Marble',
    subtitle: 'Organic travertine, fluted oak & nested conversational centerpieces',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85',
    category: 'tables',
    itemCountPlaceholder: '12+ Centerpiece Concepts',
  },
  {
    id: 'accent-chairs',
    title: 'Designer Accent Chairs',
    subtitle: 'Statement armchairs balancing ergonomic posture with gallery aesthetics',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85',
    category: 'chairs',
    itemCountPlaceholder: '8+ Statement Pieces',
  },
  {
    id: 'custom-commissions',
    title: 'Custom Bespoke Commissions',
    subtitle: 'Customized to your architect blueprints, custom room dimensions & hand-selected fabrics',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    category: 'custom',
    itemCountPlaceholder: 'Unlimited Possibilities',
  },
];

export const PRODUCTS: Product[] = [
  // 1. Image 1: Plush Pillowback Cloud Sofa
  {
    id: 'sofa-pillow-cloud-3seater',
    name: 'The Sheheryar Cloud-Pillow 3-Seater',
    category: 'sofas',
    tagline: 'High-comfort deep-seat cloud sofa with winged pillow backrests & concealed brass feet',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=85',
    description: 'As showcased on our D Ground showroom floor: engineered for supreme lounging with overstuffed micro-velvet pillow backrests, deep feather-foam seating, and subtle brass footings.',
    dimensionsPlaceholder: '[Dimensions: 96"W x 42"D x 34"H - Custom sizing available to your drawing room specifications]',
    materialsPlaceholder: '[Material: 38-density high-resilience foam core, feather-fill topper, solid seasoned acacia hardwood frame, imported plush micro-velvet]',
    finishOptionsPlaceholder: ['Warm Oatmeal Velvet', 'Sand Chenille', 'Alabaster Cream', 'Mushroom Taupe'],
    isCurvedOrSculptural: true,
    featured: true,
    badge: 'Showroom Floor Piece',
  },

  // 2. Image 2: Semicircular Curved Sofa with Petal Marble Table
  {
    id: 'sofa-crescent-royal-suite',
    name: 'The Crescent Royal Curved Lounge Suite',
    category: 'sofas',
    tagline: 'Semicircular curved statement sofa with organic marble cocktail table',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=85',
    description: 'Signature curved sofa featuring an unbroken gentle arc, dual-tone leatherette-striped bolster pillows, spherical accent cushion, and low-profile tailored base paired with an organic marble cocktail table.',
    dimensionsPlaceholder: '[Dimensions: 120" Arc Span x 40" Depth x 32" Backrest Height - Made to measure]',
    materialsPlaceholder: '[Material: Solid hardwood curved frame, seamless high-density contour foam, textured bouclé / weave fabric, leather-accent cushions]',
    finishOptionsPlaceholder: ['Champagne Bouclé', 'Ivory Textured Linen', 'Camel Accent Duo', 'Dove White'],
    isCurvedOrSculptural: true,
    featured: true,
    badge: 'Signature Curved Design',
  },

  // 3. Image 3: Curved Lounge Suite with Wavy Architectural Mirror
  {
    id: 'sofa-milano-wavy-suite',
    name: 'The Milano Curved Suite & Wavy Architectural Mirror',
    category: 'living',
    tagline: 'Curved lounge suite with sculpted barrel chairs and floor-length wavy mirror',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85',
    description: 'Complete contemporary sitting layout featuring a low-slung curved sofa, matching sculpted barrel armchairs, artistic amber-marble slab table, and dark charcoal wavy statement mirror.',
    dimensionsPlaceholder: '[Dimensions: Custom room setup: 8ft sofa + 34" barrel chairs + 78"H mirror]',
    materialsPlaceholder: '[Material: Textured bouclé upholstery, CNC carved wavy mirror frame, solid seasoned hardwood joinery]',
    finishOptionsPlaceholder: ['Oatmeal Bouclé', 'Textured Sand', 'Warm Greige', 'Espresso Accents'],
    isCurvedOrSculptural: true,
    featured: true,
    badge: 'Complete Studio Layout',
  },

  // 4. Image 4: Orbital Sphere & Marble Accent Table
  {
    id: 'table-orbital-sphere-marble',
    name: 'The Orbital Sphere & Marble Accent Table',
    category: 'tables',
    tagline: 'Architectural side table with floating sphere counterweight & veined marble disc',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=85',
    description: 'A conversation-starting sculptural side table combining a beveled white-and-black veined marble top with a brushed gold vertical pillar and polished metallic sphere base.',
    dimensionsPlaceholder: '[Dimensions: 20" Diameter Disc x 24" Height]',
    materialsPlaceholder: '[Material: Natural veined marble / composite quartz top, brushed titanium gold electroplated steel pedestal & sphere]',
    finishOptionsPlaceholder: ['Panda White Veined Marble with Gold Base', 'Calacatta Gold with Brass', 'Nero Marquina with Gold'],
    isCurvedOrSculptural: true,
    featured: true,
    badge: 'Sculptural Masterpiece',
  },

  // 5. Image 5: Fluted Metropolis Sectional with Trio Brass Tables
  {
    id: 'sofa-metropolis-fluted-sectional',
    name: 'The Metropolis Fluted Sectional & Trio Brass Tables',
    category: 'sofas',
    tagline: 'Vertical channel-tufted modular sectional with nested bronze-rimmed trio tables',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=85',
    description: 'Modern architectural sectional featuring vertical fluted backrests, built-in low-profile matte black side console shelf, paired with nested 3-piece organic brass-rimmed cocktail tables.',
    dimensionsPlaceholder: '[Dimensions: 11ft x 8.5ft L-Sectional - Tailored to fit your living room dimensions]',
    materialsPlaceholder: '[Material: Precision-tufted 35-density foam, solid seasoned Sheesham internal frame, antique bronze & tempered smoked glass tables]',
    finishOptionsPlaceholder: ['Oatmeal Linen Weave', 'Warm Grey Chenille', 'Ivory Bouclé', 'Terracotta Accent Pillows'],
    isCurvedOrSculptural: true,
    featured: true,
    badge: 'Modular Sectional',
  },

  // 6. Image 6: Riviera Bouclé Loveseat & Calacatta Marble Drum Table
  {
    id: 'sofa-riviera-boucle-loveseat',
    name: 'The Riviera Bouclé Curved Loveseat & Calacatta Drum Table',
    category: 'sofas',
    tagline: 'Curved white bouclé loveseat with Calacatta marble drum centerpiece',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=85',
    description: 'Cocoon-like curved 2-seater upholstered in textured white bouclé with vivid orange velvet bolster pillows, paired with a solid Calacatta marble slab table atop a brushed gold drum pedestal.',
    dimensionsPlaceholder: '[Dimensions: 78"W x 38"D x 31"H Loveseat + 42" x 30" Marble Table]',
    materialsPlaceholder: '[Material: Heavyweight bouclé wool-blend textile, molded contour foam, polished Italian-style marble slab with brushed brass pedestal]',
    finishOptionsPlaceholder: ['Pure White Bouclé with Mandarin Accents', 'Cream Bouclé with Ochre', 'Cashmere Sand'],
    isCurvedOrSculptural: true,
    featured: true,
    badge: 'Showroom Floor Setup',
  },

  // 7. Image 7 Top: Imperial Grand Curved Villa Sectional
  {
    id: 'sofa-imperial-grand-curved-villa',
    name: 'The Imperial Grand Curved Villa Sectional',
    category: 'sofas',
    tagline: 'Architectural grand curved sectional for expansive luxury drawing rooms',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=85',
    description: 'Commanding semicircular grand sectional designed for high-ceiling Pakistani villas and drawing rooms. Paired with high-back camel wingback accent armchairs, zebra print ottomans, and split yin-yang marble center table.',
    dimensionsPlaceholder: '[Dimensions: 14ft - 18ft Grand Arc Span - Configured to drawing room blueprint]',
    materialsPlaceholder: '[Material: Reinforced seasoned hardwood chassis, 40-density multi-layer foam, stain-resistant premium weave, camel tan leatherette accents]',
    finishOptionsPlaceholder: ['Warm Off-White with Camel Tan', 'Alabaster Cream', 'Champagne Velvet'],
    isCurvedOrSculptural: true,
    featured: true,
    badge: 'Grand Villa Edition',
  },

  // 8. Image 7 Bottom: Royal Navy Velvet Sectional Suite
  {
    id: 'sofa-royal-navy-velvet-sectional',
    name: 'The Royal Navy Velvet Architectural Sectional',
    category: 'sofas',
    tagline: 'Low-slung deep navy velvet modular corner suite with geometric nesting tables',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=85',
    description: 'Bold contemporary deep navy velvet corner sectional with spherical accent pillows, low comfortable seating profile, accompanied by nested modular white stone cocktail tables.',
    dimensionsPlaceholder: '[Dimensions: 12ft x 9ft Corner Sectional - Custom dimensions available]',
    materialsPlaceholder: '[Material: Imported royal navy performance velvet, solid hardwood framework, high-resilience foam core]',
    finishOptionsPlaceholder: ['Royal Navy Velvet', 'Midnight Emerald', 'Deep Charcoal Velvet', 'Warm Stone Beige'],
    isCurvedOrSculptural: false,
    featured: true,
    badge: 'Statement Corner',
  },

  // 9. Image 8: Celestial 3-Tier Marble & Brass Luxury Serving Trolley
  {
    id: 'cart-celestial-trolley-gold',
    name: 'The Celestial 3-Tier Marble & Brass Luxury Serving Trolley',
    category: 'tables',
    tagline: 'Multi-tier marble & gold tea/beverage cart with brass guardrails & casters',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=85',
    description: 'Exquisite 3-tier mobile serving and display trolley featuring translucent veined marble shelves, polished gold vertical columns, curved ergonomic push handle, and smooth rolling casters for luxury entertaining.',
    dimensionsPlaceholder: '[Dimensions: 32"L x 18"W x 34"H]',
    materialsPlaceholder: '[Material: Engineered marble/translucent resin tiers, electroplated high-gloss gold brass structure, heavy-duty silent rolling casters]',
    finishOptionsPlaceholder: ['Onyx White Marble with Gold Frame', 'Rose Agate Marble with Brass', 'Black Marquina with Gold'],
    isCurvedOrSculptural: true,
    featured: true,
    badge: 'Luxury Trolley',
  },

  // 10. Existing Highlight: Elysian Curved Sectional
  {
    id: 'sofa-elysian-curve',
    name: 'The Elysian Curved Sectional',
    category: 'sofas',
    tagline: 'Organic monolithic curvature with deep plush comfort',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=85',
    description: 'A showpiece sofa characterized by flowing organic curves and architectural presence. Designed for expansive drawing rooms and modern open-concept residences in Faisalabad.',
    dimensionsPlaceholder: '[Dimensions: Custom made to your room specifications, standard 11ft x 7ft arc]',
    materialsPlaceholder: '[Material: Premium high-density foam core, solid seasoned hardwood internal frame, imported bouclé / velvet]',
    finishOptionsPlaceholder: ['Cream Bouclé', 'Sand Chenille', 'Warm Taupe Velvet', 'Oatmeal Tweed'],
    isCurvedOrSculptural: true,
    featured: true,
    badge: 'Showroom Highlight',
  },

  // 11. Existing Highlight: Seraphina Sculptural 3-Seater
  {
    id: 'sofa-seraphina-lounge',
    name: 'Seraphina Sculptural 3-Seater',
    category: 'sofas',
    tagline: 'Continuous line luxury sofa with dual bolster backrests',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85',
    description: 'Sophisticated low-profile luxury sofa designed to anchor high-ceiling formal sitting areas. Features seamless tailoring and reinforced foundation.',
    dimensionsPlaceholder: '[Dimensions: Custom configurable - 90"W x 38"D x 31"H standard]',
    materialsPlaceholder: '[Material: Seasoned Sheesham/Acacia internal frame, feather-down wrap over high-resilience foam]',
    finishOptionsPlaceholder: ['Ivory Weave', 'Alabaster Bouclé', 'Dove Gray Velvet', 'Camel Nu-leather'],
    isCurvedOrSculptural: true,
    featured: false,
    badge: 'Bestseller',
  },

  // 12. Master Suite: Aurelia Fluted Grand Master Bed
  {
    id: 'bed-aurelia-fluted',
    name: 'Aurelia Fluted Grand Master Bed',
    category: 'bedroom',
    tagline: 'Floor-to-ceiling vertical channel headboard with integrated bedside tables',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1000&q=85',
    description: 'A regal master bedroom focal piece featuring upholstered vertical fluting, brass trim accents, and floating nightstands tailored to your ceiling height.',
    dimensionsPlaceholder: '[Dimensions: King / Super King / Customized to master wall width]',
    materialsPlaceholder: '[Material: Solid hardwood joinery, brushed brass/matte black metallic accents, high-wear stain-resistant velvet]',
    finishOptionsPlaceholder: ['Cashmere Taupe', 'Muted Pearl Grey', 'Desert Sand', 'Midnight Charcoal'],
    featured: true,
    badge: 'Master Suite',
  },

  // 13. Palisade Dual Tier Coffee Table
  {
    id: 'table-travertine-duo',
    name: 'Palisade Dual Tier Coffee Table',
    category: 'tables',
    tagline: 'Sculptural stone & fluted hardwood nested conversational piece',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=85',
    description: 'Modern organic nested center table combining polished Italian-style marble finish with ribbed matte wood pedestal architecture.',
    dimensionsPlaceholder: '[Dimensions: 48" Dia main table + 32" Dia nested companion, 15" - 18" H]',
    materialsPlaceholder: '[Material: Natural stone / engineered quartz top with CNC fluted solid wood drum base]',
    finishOptionsPlaceholder: ['Calacatta Gold with Smoked Walnut', 'Crema Marfil with Natural Ash', 'Nero Marquina with Black Oak'],
    featured: true,
    badge: 'Architectural',
  },

  // 14. Verona Sculptural Swivel Armchair
  {
    id: 'chair-verona-swivel',
    name: 'Verona Sculptural Swivel Armchair',
    category: 'chairs',
    tagline: '360-degree silent swivel wrapped in cocooning curves',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=85',
    description: 'The definitive statement armchair for luxury living rooms. Offers ergonomic lumbar support encased in an avant-garde curved silhouette.',
    dimensionsPlaceholder: '[Dimensions: 34"W x 33"D x 30"H with 18" seat height]',
    materialsPlaceholder: '[Material: Heavy-gauge concealed steel swivel mechanism, molded contour foam, designer textured upholstery]',
    finishOptionsPlaceholder: ['Cloud Bouclé', 'Cognac Saddle Eco-Leather', 'Mushroom Velvet', 'Forest Olive Chenille'],
    featured: true,
    badge: 'Statement Chair',
  },

  // 15. Celeste Minimalist Console
  {
    id: 'living-credenza-celeste',
    name: 'Celeste Minimalist Media & Buffet Console',
    category: 'living',
    tagline: 'Seamless push-to-open fluted facade with recessed bronze base',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85',
    description: 'Understated luxury console providing spacious concealed storage while maintaining a visually light, floating aesthetic.',
    dimensionsPlaceholder: '[Dimensions: 84"L x 18"D x 28"H - Custom lengths available up to 120"]',
    materialsPlaceholder: '[Material: Natural veneer casing, soft-close German hardware, powder-coated steel understructure]',
    finishOptionsPlaceholder: ['Bleached Nordic Oak', 'Rich Espresso Sheesham', 'Pecan Warm Walnut'],
    featured: false,
    badge: 'Custom Sized',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Hamza Tariq',
    location: 'Faisalabad (D Ground Showroom Visit)',
    rating: 5,
    date: 'Verified Google Review',
    comment: 'The quality of the curved sofa we ordered for our new home in People’s Colony exceeded expectations. Sheheryar personally guided us through fabric swatches and adjusted the curve dimensions to fit our drawing room perfectly.',
    highlight: 'Exceptional craftsmanship & custom dimensions',
    verifiedOnGoogle: true,
  },
  {
    id: 'rev-2',
    author: 'Dr. Ayesha Malik',
    location: 'Faisalabad',
    rating: 5,
    date: 'Verified Google Review',
    comment: 'One of the very few furniture showrooms in Faisalabad with genuinely contemporary, international aesthetics. The finish on the bedroom headboard and side tables is flawless. Delivery was strictly on time.',
    highlight: 'International aesthetic & on-time delivery',
    verifiedOnGoogle: true,
  },
  {
    id: 'rev-3',
    author: 'Muhammad Bilal Khan',
    location: 'Faisalabad',
    rating: 5,
    date: 'Verified Google Review',
    comment: 'Very professional staff and honest pricing for the level of designer furniture they provide. The nested travertine center table and accent chairs are the first thing guests compliment in our house.',
    highlight: 'Competitive pricing for luxury standards',
    verifiedOnGoogle: true,
  },
  {
    id: 'rev-4',
    author: 'Zainab Qureshi',
    location: 'Faisalabad',
    rating: 5,
    date: 'Verified Google Review',
    comment: 'I visited multiple furniture stores across D Ground and Kohinoor City before choosing Sheheryar. Their foam density, stitching precision, and fabric quality are noticeably superior to standard market pieces.',
    highlight: 'Superior foam density & precision stitching',
    verifiedOnGoogle: true,
  },
];

export const VALUE_PROPOSITIONS = [
  {
    title: 'Architectural & Designer Aesthetics',
    description: 'Sculptural curved silhouettes, clean minimalist lines, and sophisticated neutral palettes that elevate your home beyond standard catalog furniture.',
    tag: 'Design Integrity',
  },
  {
    title: 'Bespoke Dimension & Fabric Customization',
    description: 'Every sofa, bed, and console is tailored to your exact floor plan, ceiling heights, and preferred imported fabrics (bouclé, velvet, chenille, leatherette).',
    tag: 'Made-to-Measure',
  },
  {
    title: 'Master Artisanal Craftsmanship',
    description: 'Constructed using properly seasoned solid hardwood frames, high-density resilient cushioning, and reinforced joint engineering designed to endure decades.',
    tag: 'Enduring Quality',
  },
  {
    title: 'White-Glove Delivery & Installation',
    description: 'Carefully packaged, transported, and positioned in your residence by our trained installation specialists across Faisalabad and surrounding Punjab regions.',
    tag: 'Turnkey Service',
  },
  {
    title: 'Direct Personal Consultation with Sheheryar',
    description: 'Receive dedicated guidance on layout balance, fabric durability for family living, and color coordination for a cohesive interior aesthetic.',
    tag: 'Personal Attention',
  },
];

export const FAQ_DATA = [
  {
    question: 'Where is Furniture Store By Sheheryar located and is parking available?',
    answer: 'Our flagship showroom is located at D Ground, Hurrian Wala Chowk, Block B, People’s Colony No. 1, Faisalabad. We offer both a free dedicated customer parking lot and convenient free street parking.',
  },
  {
    question: 'What accessibility facilities are available at your D Ground showroom?',
    answer: 'Our showroom is fully equipped for inclusive accessibility, featuring an assistive hearing loop, wheelchair-accessible seating, and a wheelchair-accessible restroom.',
  },
  {
    question: 'Can you customize the sofa size and fabric to match my living room?',
    answer: 'Yes, bespoke customization is our primary specialty. You can specify exact inch-by-inch dimensions, curve radius, upholstery fabric (bouclé, velvet, linen, chenille), cushion firmness, and base finishes.',
  },
  {
    question: 'Do you provide furniture assembly, repair, and onsite services?',
    answer: 'Yes! We provide full professional onsite services including in-home room measuring, white-glove assembly, and post-purchase repair/maintenance services for our furniture pieces.',
  },
  {
    question: 'What are your delivery options and can I get same-day delivery?',
    answer: 'We offer white-glove regional delivery across Faisalabad, Lahore, Islamabad, and nationwide. Same-day delivery is available for ready-to-dispatch showroom floor models.',
  },
  {
    question: 'What payment methods are accepted at the store?',
    answer: 'We accept Debit Cards, Bank Checks, Direct Bank Transfers, and Cash at our D Ground showroom.',
  },
];
