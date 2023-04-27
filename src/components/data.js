// create products array
const data = [
  {
    id: 1,
    qty: 1,
    name: "Asian Paints Royale Luxury Emulsion",
    price: 100,
    description: "Product description",
    long_description:
      " Asian Paints Royale Luxury Emulsion is a high-end interior wall paint that offers a smooth and luxurious finish to your walls. It is a low VOC (volatile organic compound) paint that is safe for your health and the environment",
    img: "https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-royale-luxury-emulsion-asian-paints.png.transform/cc-width-221-height-260/image.webp",
    category: "paint",
    features: [
      "Smooth and luxurious finish",
      "Low VOC paint",
      "Excellent coverage",
      "Durable and washable",
    ],
  },
  {
    id: 2,
    qty: 1,
    name: "Berger Easy Clean Fresh",
    price: 200,
    description: "Product description",
    long_description:
      "Berger Easy Clean Fresh is a premium interior wall paint that offers superior washability and a long-lasting finish. It is infused with fragrance and helps to keep your home smelling fresh and clean",
    img: "https://www.bergerpaints.com/upload/product/easy-clean-fresh-can.png",
    category: "paint",
    features: [
      "Superior washability",
      "Long-lasting finish",
      "Infused with fragrance",
      "Low odour",
    ],
  },
  {
    id: 3,
    qty: 1,
    name: "Dulux Weathershield Max",
    price: 300,
    description: "Product description",
    long_description:
      "Dulux Weathershield Max is a premium exterior wall paint that offers maximum protection against all weather conditions. It is a 100% acrylic paint that provides excellent adhesion and durability.",
    img: "https://m.media-amazon.com/images/I/319xhrybvVL.jpg",
    category: "paint",
    features: [
      "Maximum protection against all weather conditions",
      "100% acrylic paint",
      "Excellent adhesion and durability",
      "Long-lasting finish",
    ],
  },
  {
    id: 4,
    qty: 1,
    name: "Nippon Paint Pylox Spray Paint",
    price: 400,
    description: "Product description",
    long_description:
      "Nippon Paint Pylox Spray Paint is a high-quality spray paint that offers a smooth and glossy finish. It is ideal for use on metal, wood, and plastic surfaces.",
    img: "https://m.media-amazon.com/images/I/619JWavboaL._SX522_.jpg",
    category: "paint",
    features: [
      "Smooth and glossy finish",
      "Ideal for use on metal, wood, and plastic surfaces",
      "Fast drying",
      "Excellent coverage",
    ],
  },
  {
    id: 5,
    qty: 1,
    name: "Jotun Jotashield Extreme",
    price: 500,
    description: "Product description",
    long_description:
      "Jotun Jotashield Extreme is a premium exterior wall paint that provides maximum protection against all weather conditions. It is a 100% pure acrylic paint that offers excellent adhesion and colour retention.",
    img: "https://my.jotun.com/siteassetsjot03/_b2b/product-logos-30.11.21/deco-for-b2b/jotashield-colour-extreme-tincan-621x388.png",
    category: "paint",
    features: [
      "Maximum protection against all weather conditions",
      "100% pure acrylic paint",
      "Excellent adhesion and colour retention",
      "Long-lasting finish",
    ],
  },
  {
    id: 6,
    qty: 1,
    name: "Rust-Oleum 249131 Universal All Surface Spray Paint",
    price: 600,
    description: "Product description",
    long_description:
      "This spray paint can be used on any surface, including wood, metal, plastic, and more. It provides superior coverage and durability, and dries quickly for fast results.",
    img: "https://m.media-amazon.com/images/I/717CUSjsIFL._AC_SX522_.jpg",
    category: "paint",
    features: [
      "Superior coverage and durability",
      "Dries quickly for fast results",
      "Can be used on any surface",
      "Available in a variety of colours",
    ],
  },
  {
    id: 7,
    qty: 1,
    name: "KILZ Premium High-Hide Stain Blocking Interior/Exterior Latex Primer/Sealer",
    price: 700,
    description: "Product description",
    long_description:
      "This primer/sealer is ideal for use on both interior and exterior surfaces. It blocks stains and provides a smooth, even base for paint. It also helps to prevent mildew growth.",
    img: "https://m.media-amazon.com/images/I/71ZRrICv76L._SX522_.jpg",
    category: "paint",
    features: [
      "Ideal for use on both interior and exterior surfaces",
      "Blocks stains and provides a smooth, even base for paint",
      "Helps to prevent mildew growth",
      "Available in a variety of colours",
    ],
  },
  {
    id: 8,
    qty: 1,
    name: "Behr Premium Plus Ultra Exterior Paint & Primer in One",
    price: 800,
    description: "Product description",
    long_description:
      "This paint and primer in one is designed for use on exterior surfaces. It provides excellent coverage and durability, and is resistant to fading, cracking, and peeling. It is also formulated to resist mildew growth.",
    img: "https://www.behr.com/binaries/content/gallery/behrbrxm/products/product-can-images-2021/exterior-paint-and-primer/premium-plus-ultra/9850_01_us_web.png",
    category: "paint",
    features: [
      "Designed for use on exterior surfaces",
      "Provides excellent coverage and durability",
      "Resistant to fading, cracking, and peeling",
      "Formulated to resist mildew growth",
    ],
  },
  {
    id: 9,
    qty: 1,
    name: "Men's Crew Neck T-Shirt",
    price: 900,
    description: "Product description",
    long_description:
      "A classic, comfortable crew neck t-shirt made from soft cotton.",
    img: "https://m.media-amazon.com/images/I/71Hr1QVKO9L._UL1500_.jpg",
    category: "clothing",
    features: [
      "Available in a range of colors",
      "machine washable",
      "regular fit",
    ],
  },
  {
    id: 10,
    qty: 1,
    name: "Women's High-Waisted Skinny Jeans",
    price: 1000,
    description: "Product description",
    long_description:
      "Flattering and stylish high-waisted skinny jeans made from stretch denim",
    img: "https://m.media-amazon.com/images/I/71Q4qtFF7jL._UL1500_.jpg",
    category: "clothing",
    features: [
      "Available in different sizes and washes",
      "ankle length",
      "button and zip closure",
    ],
  },
];

export default data;
