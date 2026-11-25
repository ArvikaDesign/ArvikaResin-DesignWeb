export const site = {
  name: 'Arvika Resin & Design',
  tagline: 'Beyond Resin, Beyond Imagination.',
  headline: 'Beyond Resin. Beyond Imagination.',
  subheadline: 'Transform your spaces with premium epoxy solutions and extraordinary handcrafted resin creations.',
  phone: '81488 52227',
  tel: '+918148852227',
  wa: '918148852227',
  email: 'arvika.resins@gmail.com',
  insta: 'arvika.lab',
  instaUrl: 'https://instagram.com/arvika.lab',
  location: 'Virudhachalam, Tamil Nadu, India',
  address: {
    street: 'Bespoke Studio Workshop',
    locality: 'Virudhachalam',
    region: 'Tamil Nadu',
    postalCode: '606001',
    country: 'IN'
  },
  operatingHours: 'Mon - Sat: 9:00 AM – 7:00 PM',
  areaServed: 'Virudhachalam, Neyveli, Cuddalore, Chennai, Trichy, Salem, Coimbatore & all Tamil Nadu',
  founder: {
    name: 'ANAND RAJ M',
    role: 'Founder & Proprietor',
    image: '/img/founder.jpg'
  }
};

export const waLink = (message) =>
  `https://wa.me/${site.wa}?text=${encodeURIComponent(message || 'Hello Arvika Resin & Design, I would like to inquire about a custom project.')}`;

export const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Portfolio', href: '#gallery' },
  { name: 'Why Arvika', href: '#why-us' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' }
];

export const services = [
  {
    id: 'epoxy-flooring',
    name: 'Epoxy Flooring',
    tag: 'Seamless Luxury',
    summary: 'Ultra-durable, joint-free resin flooring engineered for residential interiors, modern villas, and commercial spaces.',
    desc: 'Our premium residential epoxy floors deliver an unbroken glass-like finish that resists moisture, stains, and heavy footfall while reflecting light to amplify spatial dimensions.',
    idealFor: 'Luxury Villas, Showrooms, Living Areas, Boutiques',
    finish: 'Mirror Gloss, Satin, or Matte Velvet',
    durability: '15+ Years Life Expectancy',
    image: '/img/service_epoxy.jpg'
  },
  {
    id: 'metallic-flooring',
    name: 'Metallic Flooring',
    tag: 'Liquid Depth',
    summary: 'Swirling metallic pigments that cure into a three-dimensional, river-like motion with molten gold and teal tones.',
    desc: 'Each metallic pour is an original artistic performance. By manipulating suspended mica pigments with air flow, we achieve iridescent depth and luminous metallic currents.',
    idealFor: 'Penthouses, Hotel Lobbies, Lounges, Executive Suites',
    finish: 'Luminous 3D Metallic Gloss',
    durability: 'High-Impact Scratch Resistant',
    image: '/img/service_metallic.jpg'
  },
  {
    id: 'threed-flooring',
    name: '3D Flooring',
    tag: 'Optical Immersion',
    summary: 'Photorealistic optical depth and ocean wave illusion floors encased under crystal-clear optical resin.',
    desc: 'Breathe life into bespoke spaces with high-definition underwater wave effects, beachscapes, or custom geometries sealed under a high-build, UV-stable optical resin layer.',
    idealFor: 'Designer Bathrooms, Poolside Suites, Feature Rooms',
    finish: 'High-Refractive Optical Crystal',
    durability: '100% Waterproof & Anti-Slip Topcoat',
    image: '/img/service_3d.jpg'
  },
  {
    id: 'marble-finish',
    name: 'Marble Finish Flooring',
    tag: 'Continuous Elegance',
    summary: 'The grandeur of Italian Calacatta and Statuario marble without the maintenance or grout lines of natural stone.',
    desc: 'Hand-veined by master resin artisans, our continuous marble-finish floors achieve natural mineral realism, feather-soft veining, and an impenetrable hygienic surface.',
    idealFor: 'Grand Foyers, Living Rooms, High-End Boutiques',
    finish: 'Polished Honed or Mirror High-Gloss',
    durability: 'Stain-Proof, Zero-Porosity',
    image: '/img/service_marble.jpg'
  },
  {
    id: 'industrial-coating',
    name: 'Industrial Floor Coating',
    tag: 'Heavy-Duty Engineering',
    summary: 'High-load, chemical-resistant polyurethane and epoxy coatings for workshops, manufacturing facilities, and parking.',
    desc: 'Engineered for extreme performance, our industrial coatings withstand heavy forklift traffic, caustic solvents, oils, thermal shock, and abrasive wear with calibrated slip ratings.',
    idealFor: 'Warehouses, Automotive Studios, Labs, Facilities',
    finish: 'Textured Anti-Skid / High-Build Gloss',
    durability: 'Extreme Load & Chemical Resistance',
    image: '/img/service_industrial.jpg'
  },
  {
    id: 'protective-coatings',
    name: 'Protective Coatings',
    tag: 'Surface Preservation',
    summary: 'Advanced UV-resistant and anti-scratch clear topcoats that preserve stone, wood, concrete, and decorative resin.',
    desc: 'Our specialized aliphatic polyurethane and polyaspartic coats provide an impenetrable barrier against yellowing UV sunlight, chemical spills, micro-scratches, and weathering.',
    idealFor: 'Countertops, Concrete Patios, Outdoor Bars, Decks',
    finish: 'Zero-Yellowing Clear Shield',
    durability: 'UV-Stabilized & Micro-Scratch Shield',
    image: '/img/service_protective.jpg'
  }
];

export const productCategories = [
  'All',
  'Resin Tables',
  'Resin Furniture',
  'Personalised Gifts',
  'Resin Art & Wall Décor',
  'Resin Jewellery',
  'LED Resin Lighting',
  'Customised Products'
];

export const products = [
  {
    id: 'river-table',
    name: 'Live-Edge River Table',
    category: 'Resin Tables',
    tag: 'Signature Centrepiece',
    desc: 'Kiln-dried seasoned walnut wood paired with a deep crystalline turquoise ocean resin river with gold mica swirls.',
    details: 'Custom length (4ft to 12ft), premium food-grade zero-VOC resin, chamfered edge, matte or mirror polish.',
    specs: 'Solid Hardwood + Clear Casting Resin · Brass / Powder-coated Steel Base',
    image: '/img/product_river_table.jpg'
  },
  {
    id: 'luxury-furniture',
    name: 'Bespoke Resin Coffee Table',
    category: 'Resin Furniture',
    tag: 'Contemporary Living',
    desc: 'Sculptural accent tables blending organic live-edge timber, liquid gold pigment accents, and optical resin.',
    details: 'Each piece is hand-poured in our Virudhachalam studio with tailored tinting to complement your room interior.',
    specs: 'Seasoned Teak / Walnut · UV-Stable Resin · Custom Dimensions',
    image: '/img/product_furniture.jpg'
  },
  {
    id: 'ocean-wall-art',
    name: 'Ocean Wave Geode Art',
    category: 'Resin Art & Wall Décor',
    tag: 'Statement Wall Piece',
    desc: 'Layered fluid resin art featuring deep navy, azure waves, genuine crushed quartz crystals, and 24K gold leaf veins.',
    details: 'Multi-layer 3D pour creating tangible depth that glistens in ambient light. Delivered ready to hang.',
    specs: 'Reinforced Birch Substrate · Genuine Quartz & Gold Leaf · High-Gloss Finish',
    image: '/img/product_wall_art.jpg'
  },
  {
    id: 'geode-clock',
    name: 'Geode Resin Wall Clock',
    category: 'Resin Art & Wall Décor',
    tag: 'Functional Art',
    desc: 'Handcrafted luxury geode clock with silent sweep quartz movement, turquoise epoxy, and hand-gilded Roman numerals.',
    details: 'Stunning accent piece for executive desks or living room walls. Available in 12-inch to 24-inch diameters.',
    specs: 'Silent Quartz Movement · Beveled Glass Edge · Metallic Pigment Pour',
    image: '/img/product_clock.jpg'
  },
  {
    id: 'led-lighting',
    name: 'Ambient LED Resin Lamp',
    category: 'LED Resin Lighting',
    tag: 'Atmospheric Glow',
    desc: 'Solid oak base housing warm LED illumination that radiates through a crystalline block of swirling emerald and gold resin.',
    details: 'Dimmable warm white ambient glow, USB-C powered, handcrafted with crystal resin and preserved botanical elements.',
    specs: 'Touch Dimmable LED · Solid Oak Base · Optical Cast Resin',
    image: '/img/product_lighting.jpg'
  },
  {
    id: 'jewellery',
    name: 'Bespoke Resin Jewellery',
    category: 'Resin Jewellery',
    tag: 'Wearable Luxury',
    desc: 'Hand-carved miniature resin pendants, rings, and earrings encapsulating gold flakes, mica, and ocean gradients.',
    details: 'Ultra-lightweight, hypoallergenic 925 sterling silver and 18K gold-plated mounts with crystal glass clarity.',
    specs: 'Hypoallergenic Mounts · Micro-Cast Jewellery Grade Resin',
    image: '/img/product_jewellery.jpg'
  },
  {
    id: 'custom-gifts',
    name: 'Personalised Keepsake Gifts',
    category: 'Personalised Gifts',
    tag: 'Treasured Milestones',
    desc: 'Custom resin coasters, monogrammed nameplates, preservation blocks, and corporate gift hampers made to order.',
    details: 'Incorporate names, dates, wedding flower preservations, or corporate insignia into timeless resin keepsakes.',
    specs: 'Custom Monogramming · Botanical & Foil Inlays · Scratch-Resistant Seal',
    image: '/img/product_gifts.jpg'
  },
  {
    id: 'custom-countertop',
    name: 'Custom Resin Countertops',
    category: 'Customised Products',
    tag: 'Bespoke Architectural Pour',
    desc: 'Bespoke resin vanity tops, reception desks, and bar counters poured with custom veining, mica flakes, and heat-resistant sealants.',
    details: 'Tailor-made for interior designers and homeowners seeking a unique surface that cannot be replicated.',
    specs: 'High Heat Resistance · Seamless Seamless Pour · Custom Color Matching',
    image: '/img/service_metallic.jpg'
  }
];

export const galleryProjects = [
  {
    id: 'gp-1',
    title: 'Metallic Tile Grouting',
    category: 'Tile Grouting',
    location: 'Sulur, Coimbatore',
    desc: 'Specialized metallic epoxy tile grouting completed in Sulur, Coimbatore. Engineered with high-strength, stain-resistant, and 100% waterproof resin for lustrous, long-lasting tile joints.',
    image: '/img/portfolio_metallic_tile_grouting.jpg',
    tall: false
  },
  {
    id: 'gp-2',
    title: 'Metallic Epoxy Flooring with PU Skirting',
    category: 'Epoxy Flooring',
    location: 'Mahendra City, Chengalpattu',
    desc: 'Seamless luxury metallic epoxy flooring with protective PU skirting completed in Mahendra City, Chengalpattu. Delivers a high-gloss 3D liquid marble swirl with supreme chemical and wear resistance.',
    image: '/img/portfolio_metallic_epoxy_skirting.jpg',
    tall: false
  },
  {
    id: 'gp-3',
    title: 'Bathroom Epoxy Flooring with Waterproofing',
    category: 'Waterproofing & Flooring',
    location: 'Chennai, Ambattur',
    desc: 'Custom seamless bathroom epoxy flooring integrated with comprehensive waterproofing completed in Ambattur, Chennai. 100% leak-proof moisture barrier with anti-slip durability and artistic flair.',
    image: '/img/portfolio_bathroom_epoxy_waterproofing.jpg',
    tall: false
  }
];

export const whyPillars = [
  {
    num: '01',
    title: 'Premium Raw Materials',
    subtitle: 'Zero Compromise on Chemistry',
    desc: 'We use premium UV-stabilized, food-grade, zero-VOC casting resins and imported metallic mica pigments that never yellow or crack.'
  },
  {
    num: '02',
    title: '100% Bespoke Customisation',
    subtitle: 'Tailored to Your Architecture',
    desc: 'Every piece and floor is tailored to your exact palette, space dimensions, hardwood species, and design vision. No duplicates.'
  },
  {
    num: '03',
    title: 'Enduring Durability',
    subtitle: 'Engineered for Real Living',
    desc: 'Our cured epoxy surfaces feature extreme scratch resistance, moisture barrier properties, and superior impact tolerance for daily use.'
  },
  {
    num: '04',
    title: 'Aesthetic Finishes',
    subtitle: 'From Liquid Gold to Marble Flow',
    desc: 'Mastery over diverse surface finishes: high-gloss mirror reflections, 3D metallic liquid flow, soft satin honed, and photorealistic marble.'
  },
  {
    num: '05',
    title: 'Professional Installation',
    subtitle: 'Laser-Levelled Precision',
    desc: 'Our trained craftsmen handle surface preparation, moisture testing, laser leveling, and multi-stage dust-free pours across Tamil Nadu.'
  },
  {
    num: '06',
    title: 'End-to-End Support',
    subtitle: 'From Concept to Lifetime Care',
    desc: 'We guide you from initial consultation, color sampling, and mockups through to final polishing, handover, and maintenance care tips.'
  }
];

export const processSteps = [
  {
    step: '01',
    title: 'Consultation & Vision',
    phase: 'Discovery',
    desc: 'We discuss your space, aesthetic preferences, functional needs, and budget. For flooring, we conduct subfloor and moisture evaluation.',
    highlight: 'Free Palette & Feasibility Analysis'
  },
  {
    step: '02',
    title: 'Design & Palette Sample',
    phase: 'Bespoke Curation',
    desc: 'We produce custom resin color swatches and 3D mockups. You inspect and approve the actual pigments, veining intensity, and finish.',
    highlight: 'Physical Sample Approval'
  },
  {
    step: '03',
    title: 'Master Craftsmanship',
    phase: 'Execution',
    desc: 'Whether casting a 10-foot river table or pouring an on-site metallic floor, our artisans execute precise layer curing under controlled conditions.',
    highlight: 'Clean, Dust-Free Workmanship'
  },
  {
    step: '04',
    title: 'Diamond Polish & Handover',
    phase: 'Finishing',
    desc: 'Multi-stage diamond sanding, micro-mesh polishing, and high-solids protective topcoating produce an extraordinary mirror finish before final delivery.',
    highlight: 'Complete Care Guide & Warranty'
  }
];

export const trustAssurances = [
  {
    title: 'UV-Stabilized Formulations',
    desc: 'Advanced HALS and UV absorbers prevent ambering or discoloration, even in sunlit Indian interiors.'
  },
  {
    title: 'Certified Food-Safe Resins',
    desc: 'Dining tables, countertops, and serving boards are sealed with non-toxic, FDA-compliant food contact resin.'
  },
  {
    title: 'Kiln-Dried Hardwoods',
    desc: 'We source properly seasoned live-edge teak, walnut, acacia, and rosewood with balanced moisture content to prevent warping.'
  },
  {
    title: 'Statewide Service Coverage',
    desc: 'Based in Virudhachalam, we deploy our skilled application team for on-site flooring installations throughout all Tamil Nadu.'
  }
];

export const studioStats = [
  { value: '100%', label: 'Custom Commissioned' },
  { value: '15+ Yrs', label: 'Flooring Durability' },
  { value: '0% VOC', label: 'Eco-Conscious Options' },
  { value: 'TN Wide', label: 'On-Site Installation' }
];

export const why = whyPillars.map(p => [p.title, p.desc]);
export const process = processSteps.map(p => [p.title, p.desc]);
export const testimonials = [];
export const serviceCards = services.map(s => ({ name: s.name, img: s.image }));
export const nav = navItems.map(n => n.name);
export const projects = galleryProjects;
