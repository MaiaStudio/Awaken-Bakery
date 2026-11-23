export interface ProductOptionChoice {
  label: string;
  priceDelta?: number;
}

export interface ProductOption {
  name: string;
  choices: ProductOptionChoice[];
}

export interface ProductHighlight {
  icon: "gf" | "celiac" | "fresh" | "df" | "vegan" | "ship" | "bake" | "cake" | "buttercream" | "bread";
  label: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  title: string;
  category: "cookies" | "cakes" | "cupcakes" | "bread" | "scones" | "take-n-bake" | "shipping";
  price: number;
  format: string;
  dietaryTags: string[];
  image: string;
  secondImage?: string;
  images: string[];
  description: string;
  fullDescription: string;
  options?: ProductOption[];
  disclaimers: string[];
  highlights: ProductHighlight[];
  shopUrl: string;
  featured?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  initials: string;
  source: string;
  date: string;
  quote: string;
  category: string;
  rating: number;
}

export interface StoryMilestone {
  id: string;
  date: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
}

export interface InstructionGuide {
  id: string;
  title: string;
  badge: string;
  summary: string;
  counterShelfLife?: string;
  steps: { heading: string; bullets: string[] }[];
  image: string;
}

export interface FaqItem {
  category: "Allergens & Ingredients" | "Ordering" | "Custom Orders & Events" | "Visiting Us" | "The Awaken App";
  question: string;
  answer: string;
}

export const AWAKEN_BUSINESS = {
  name: "Awaken Bakery",
  shortName: "AWAKEN",
  tagline: "Gluten Free Bakery That Actually Tastes Like the Real Thing",
  subTagline: "100% Dedicated Gluten-Free Kitchen • Safe for Celiac • Bowling Green, KY",
  address: "300 E Main Ave, Bowling Green, KY 42101",
  street: "300 E Main Ave",
  cityStateZip: "Downtown Bowling Green, KY 42101",
  phone: "(270) 551-4440",
  phoneHref: "tel:+12705514440",
  email: "hello@awakenbg.com",
  emailHref: "mailto:hello@awakenbg.com",
  founder: "Tiana Post",
  hours: [
    { days: "Tue – Thu", time: "8am – 3pm" },
    { days: "Friday", time: "8am – 4pm" },
    { days: "Saturday", time: "9am – 3pm" },
    { days: "Sun – Mon", time: "Closed" },
  ],
  links: {
    todayMenu: "https://orders.hazlnut.com/menu/b/Awaken%20Bakery/n/2118/p/971/g/461444",
    shop: "https://shop.awakenbg.com",
    ship: "https://shop.awakenbg.com/products/Nationwide-Shipping-c200230531",
    appStore: "https://apps.apple.com/us/app/awaken-bakery/id6483935111",
    googlePlay: "https://play.google.com/store/apps/details?id=gng.gonogomo.gonogo.mobileordering.com.awakenbakery",
    googleMaps: "https://www.google.com/maps/place/Awaken+Bakery+%7C+Always+Gluten+Free/@36.9948943,-86.4424531,17z",
    googleReview: "https://g.page/r/CbS9C5DL6uSWEAI/review",
    findMeGf: "https://www.findmeglutenfree.com/biz/awaken-bakery/5308488136392704",
    yelp: "https://www.yelp.com/biz/awaken-bakery-bowling-green",
    instagram: "https://www.instagram.com/awakenbg",
    facebook: "https://www.facebook.com/awakenbg",
    tiktok: "https://www.tiktok.com/@awakenbakerybg",
  },
  ratings: {
    google: { score: "4.9", count: "197+ reviews" },
    findMeGf: { score: "5.0", count: "50+ reviews" },
    yelp: { score: "5.0", count: "12+ reviews" },
    award: "Best of Bowling Green · 2024 Winner",
  },
};

export const COLLECTION_TABS: {
  id: ProductItem["category"];
  label: string;
  pinkAccent?: boolean;
  tagline: string;
}[] = [
  { id: "cookies", label: "Cookies", tagline: "Soft-baked cookies & stacked cookie sammies" },
  { id: "cakes", label: "Cakes", pinkAccent: true, tagline: "Celebration & custom cakes (4+ days notice)" },
  { id: "cupcakes", label: "Cupcakes", tagline: "Signature & dairy-free/vegan packs" },
  { id: "bread", label: "Bread", pinkAccent: true, tagline: "Artisan loaves, bagels, buns & baguettes" },
  { id: "scones", label: "Scones", tagline: "Flaky morning scones with vegan options" },
  { id: "take-n-bake", label: "Take & Bake", pinkAccent: true, tagline: "Cinnamon rolls, biscuits, pizza & mac n' cheese" },
];

export const PRODUCTS: ProductItem[] = [
  {
    "id": "cookie-assorted-6",
    "slug": "cookies-assorted-6-pack",
    "title": "Cookies, Assorted 6-Pack",
    "category": "cookies",
    "price": 16,
    "format": "Box of 6 • Fresh Baked",
    "dietaryTags": [
      "100% GF",
      "Celiac Safe",
      "Bestseller"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/721590269/4758645614.png",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/721590269/4758645614.png"
    ],
    "description": "This assorted pack features 3 flavors from our bakery's selection for your chosen week!",
    "fullDescription": "This assorted pack features 3 flavors from our bakery's selection for your chosen week! You will receive 2 of each flavor. Please note that customization of flavors is NOT available for assorted boxes.\n\nAssorted boxes need at least a 1-day notice.",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Baked fresh in small batches in Bowling Green, KY"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "fresh",
        "label": "Soft & Chewy"
      },
      {
        "icon": "celiac",
        "label": "Celiac Safe"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Cookies-Assorted-6-Pack-p721590269",
    "featured": true
  },
  {
    "id": "cookie-choc-chip",
    "slug": "chocolate-chip-cookies-6",
    "title": "Chocolate Chip Cookies",
    "category": "cookies",
    "price": 16,
    "format": "Box of 6 • Classic",
    "dietaryTags": [
      "100% GF",
      "Celiac Safe",
      "Warm & Chewy"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4552403086.jpg",
    "secondImage": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4552403081.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4552403086.jpg",
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4552403081.jpg",
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4552396403.jpg"
    ],
    "description": "Classic chocolate chip cookies!",
    "fullDescription": "Classic chocolate chip cookies!\n\nSold by the half-dozen. Six cookies per box.",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Baked fresh in small batches in Bowling Green, KY"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "fresh",
        "label": "Soft & Chewy"
      },
      {
        "icon": "celiac",
        "label": "Celiac Safe"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Chocolate-Chip-Cookies-6-pack-p697378773"
  },
  {
    "id": "cookie-brownie",
    "slug": "brownie-cookies-df",
    "title": "Brownie Cookies (DF)",
    "category": "cookies",
    "price": 16,
    "format": "Box of 6 • Dairy-Free",
    "dietaryTags": [
      "100% GF",
      "Dairy Free",
      "Fudgy"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4557449403.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4557449403.jpg"
    ],
    "description": "Comes with a box of 6 Chocolate Brownie Cookies (dairy free).",
    "fullDescription": "Comes with a box of 6 Chocolate Brownie Cookies (dairy free).",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Baked fresh in small batches in Bowling Green, KY"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "fresh",
        "label": "Soft & Chewy"
      },
      {
        "icon": "df",
        "label": "Dairy Free"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Brownie-Cookies-6-pack-DF-p698364434"
  },
  {
    "id": "cookie-funfetti",
    "slug": "funfetti-cookies-df",
    "title": "Funfetti Cookies (DF)",
    "category": "cookies",
    "price": 16,
    "format": "Box of 6 • Dairy-Free",
    "dietaryTags": [
      "100% GF",
      "Dairy Free",
      "Party Favorite"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005904/6273549696.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005904/6273549696.jpg"
    ],
    "description": "Comes with 6 dairy free Funfetti cookies.",
    "fullDescription": "Comes with 6 dairy free Funfetti cookies.",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Baked fresh in small batches in Bowling Green, KY"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "fresh",
        "label": "Soft & Chewy"
      },
      {
        "icon": "df",
        "label": "Dairy Free"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Funfetti-Cookies-6-pack-DF-p696005904"
  },
  {
    "id": "cookie-snickerdoodle",
    "slug": "snickerdoodle-cookies-df",
    "title": "Snickerdoodle Cookies (DF)",
    "category": "cookies",
    "price": 16,
    "format": "Box of 6 • Dairy-Free",
    "dietaryTags": [
      "100% GF",
      "Dairy Free",
      "Cinnamon Sugar"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4552394735.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4552394735.jpg"
    ],
    "description": "Dairy free.",
    "fullDescription": "Dairy free.\n\nSold by the half-dozen. Six cookies per box.",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Baked fresh in small batches in Bowling Green, KY"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "fresh",
        "label": "Soft & Chewy"
      },
      {
        "icon": "df",
        "label": "Dairy Free"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Snickerdoodle-Cookies-DF-6-pack-p696004968"
  },
  {
    "id": "cookie-frosted-sugar",
    "slug": "frosted-sugar-cookies",
    "title": "Frosted Sugar Cookies",
    "category": "cookies",
    "price": 20,
    "format": "Box of 6 • Hand Frosted",
    "dietaryTags": [
      "100% GF",
      "Celiac Safe",
      "Buttercream"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4555773384.jpg",
    "secondImage": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4555776515.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4555773384.jpg",
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4555776515.jpg"
    ],
    "description": "Comes with 6 vanilla frosted sugar cookies.",
    "fullDescription": "Comes with 6 vanilla frosted sugar cookies.",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Baked fresh in small batches in Bowling Green, KY"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "fresh",
        "label": "Soft & Chewy"
      },
      {
        "icon": "celiac",
        "label": "Celiac Safe"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Frosted-Sugar-Cookies-6-pack-p696004939"
  },
  {
    "id": "cookie-brownie-sammie",
    "slug": "brownie-cookie-sammie",
    "title": "Build a Brownie Sammie",
    "category": "cookies",
    "price": 36,
    "format": "Box of 6 • Dairy-Free",
    "dietaryTags": [
      "100% GF",
      "Dairy Free",
      "Stuffed"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4548487046.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4548487046.jpg"
    ],
    "description": "Two chocolate brownie cookies with your choice of buttercream in between!",
    "fullDescription": "Two chocolate brownie cookies with your choice of buttercream in between!",
    "options": [
      {
        "name": "Cookie Frosting Flavor",
        "choices": [
          {
            "label": "Chocolate (DF)"
          },
          {
            "label": "Coffee"
          },
          {
            "label": "Strawberry"
          },
          {
            "label": "Vanilla (DF)"
          },
          {
            "label": "Wedding Cake (DF)"
          }
        ]
      }
    ],
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Baked fresh in small batches in Bowling Green, KY"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "fresh",
        "label": "Soft & Chewy"
      },
      {
        "icon": "df",
        "label": "Dairy Free"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Build-a-Brownie-Sammie-6-pack-DF-p696005618"
  },
  {
    "id": "cookie-choc-sammie",
    "slug": "chocolate-chip-sammie",
    "title": "Chocolate Chip Sammie",
    "category": "cookies",
    "price": 36,
    "format": "Box of 6 • Custom Filling",
    "dietaryTags": [
      "100% GF",
      "Celiac Safe",
      "Double Stacked"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4555773284.jpg",
    "secondImage": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4555773279.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4555773284.jpg",
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4555773279.jpg"
    ],
    "description": "Two chocolate chip cookies with your choice of buttercream in between! Vegan/DF option available.",
    "fullDescription": "Two chocolate chip cookies with your choice of buttercream in between! Vegan/DF option available.",
    "options": [
      {
        "name": "Cookie Option",
        "choices": [
          {
            "label": "Chocolate Chip (regular)"
          },
          {
            "label": "Chocolate Chip VEGAN"
          }
        ]
      },
      {
        "name": "Cookie Frosting Flavor",
        "choices": [
          {
            "label": "Chocolate (DF)"
          },
          {
            "label": "Coffee"
          },
          {
            "label": "Cookie Dough (DF)"
          },
          {
            "label": "Vanilla (DF)"
          },
          {
            "label": "Wedding Cake (DF)"
          }
        ]
      }
    ],
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Baked fresh in small batches in Bowling Green, KY"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "fresh",
        "label": "Soft & Chewy"
      },
      {
        "icon": "celiac",
        "label": "Celiac Safe"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Build-a-Chocolate-Chip-Sammie-6-pack-p696005393"
  },
  {
    "id": "cookie-snicker-sammie",
    "slug": "snickerdoodle-sammie",
    "title": "Snickerdoodle Sammies (DF)",
    "category": "cookies",
    "price": 36,
    "format": "Box of 6 • Dairy-Free",
    "dietaryTags": [
      "100% GF",
      "Dairy Free",
      "Cinnamon"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4555773326.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4555773326.jpg"
    ],
    "description": "Two snickerdoodle cookies with cinnamon buttercream in between.",
    "fullDescription": "Two snickerdoodle cookies with cinnamon buttercream in between.\n\nComes with 6 cookie sammies.",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Baked fresh in small batches in Bowling Green, KY"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "fresh",
        "label": "Soft & Chewy"
      },
      {
        "icon": "df",
        "label": "Dairy Free"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Snickerdoodle-Cookie-Sammies-6-pack-DF-p696005194"
  },
  {
    "id": "cake-funfetti",
    "slug": "funfetti-birthday-cake",
    "title": "Funfetti Birthday Cake",
    "category": "cakes",
    "price": 50,
    "format": "6\" or 8\" Cake • 4+ Days Notice",
    "dietaryTags": [
      "100% GF",
      "DF Available",
      "Fan Favorite"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005245/5741374973.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005245/5741374973.jpg"
    ],
    "description": "A classic funfetti cake with colorful sprinkles baked throughout, layered with smooth birthday cake buttercream and finished in a clean, simple design…",
    "fullDescription": "A classic funfetti cake with colorful sprinkles baked throughout, layered with smooth birthday cake buttercream and finished in a clean, simple design as pictured.\n\nThis cake includes two layers with buttercream in between, with piping that will match the design shown.\n\nDairy-free option available.\n\nSprinkles contain dye; for a dye-free option, please choose a Build Your Own cake.\n\nCakes must be ordered separately and cannot be combined with other items at checkout.",
    "options": [
      {
        "name": "Cake Size",
        "choices": [
          {
            "label": "6\" Cake (serves 8-10)"
          },
          {
            "label": "8\" Cake (serves 12-14)",
            "priceDelta": 22
          }
        ]
      },
      {
        "name": "Do you need dairy free/egg free?",
        "choices": [
          {
            "label": "None"
          },
          {
            "label": "Dairy Free Only"
          },
          {
            "label": "Dairy Free/Egg Free"
          }
        ]
      }
    ],
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "6\" serves 8–10 guests • 8\" serves 12–14 guests",
      "4–5 days advance notice required • Thu–Sat pickup in Bowling Green, KY"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "cake",
        "label": "Two-Layer Cake"
      },
      {
        "icon": "buttercream",
        "label": "House Buttercream"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Funfetti-Birthday-Cake-p696005245",
    "featured": true
  },
  {
    "id": "cake-choc-decadence",
    "slug": "chocolate-decadence-cake",
    "title": "Chocolate Decadence Cake",
    "category": "cakes",
    "price": 56,
    "format": "6\" or 8\" Cake • Rich Ganache",
    "dietaryTags": [
      "100% GF",
      "DF Available",
      "Chocolate"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/773189139/5741161462.jpg",
    "secondImage": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/773189139/5094016704.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/773189139/5741161462.jpg",
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/773189139/5094016704.jpg"
    ],
    "description": "An indulgent treat for true chocolate lovers, featuring layers of rich midnight chocolate cake with silky chocolate buttercream and a luscious pour of…",
    "fullDescription": "An indulgent treat for true chocolate lovers, featuring layers of rich midnight chocolate cake with silky chocolate buttercream and a luscious pour of chocolate ganache for pure chocolate bliss in every bite.\n\nDairy-free or vegan options available.",
    "options": [
      {
        "name": "Cake Size",
        "choices": [
          {
            "label": "6\" Cake (serves 8-10)"
          },
          {
            "label": "8\" Cake (serves 12-14)",
            "priceDelta": 22
          }
        ]
      },
      {
        "name": "Dietary Preference",
        "choices": [
          {
            "label": "None"
          },
          {
            "label": "Dairy Free"
          },
          {
            "label": "Dairy Free/Egg Free"
          }
        ]
      }
    ],
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "6\" serves 8–10 guests • 8\" serves 12–14 guests",
      "4–5 days advance notice required • Thu–Sat pickup in Bowling Green, KY"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "cake",
        "label": "Two-Layer Cake"
      },
      {
        "icon": "buttercream",
        "label": "House Buttercream"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Chocolate-Decadence-Cake-p773189139"
  },
  {
    "id": "cake-triple-strawberry",
    "slug": "triple-strawberry-cake",
    "title": "Triple Strawberry Cake",
    "category": "cakes",
    "price": 56,
    "format": "Whole Cake • Real Berries",
    "dietaryTags": [
      "100% GF",
      "DF/Vegan Option",
      "Fruity"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/833147287/5741202758.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/833147287/5741202758.jpg"
    ],
    "description": "Moist strawberry cake made with real strawberries, layered with sweet strawberry filling and finished in smooth strawberry buttercream for bold, fresh…",
    "fullDescription": "Moist strawberry cake made with real strawberries, layered with sweet strawberry filling and finished in smooth strawberry buttercream for bold, fresh flavor in every bite.\n\nMade with real strawberries\nDairy-free and egg-free (vegan) option available",
    "options": [
      {
        "name": "Cake Size",
        "choices": [
          {
            "label": "6\" Cake (serves 8-10)"
          },
          {
            "label": "8\" Cake (serves 12-14)",
            "priceDelta": 22
          }
        ]
      },
      {
        "name": "Do you need dairy free/egg free?",
        "choices": [
          {
            "label": "None"
          },
          {
            "label": "Dairy Free Only"
          },
          {
            "label": "Dairy Free/Egg Free"
          }
        ]
      }
    ],
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "6\" serves 8–10 guests • 8\" serves 12–14 guests",
      "4–5 days advance notice required • Thu–Sat pickup in Bowling Green, KY"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "cake",
        "label": "Two-Layer Cake"
      },
      {
        "icon": "buttercream",
        "label": "House Buttercream"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Triple-Strawberry-Cake-p833147287"
  },
  {
    "id": "cake-red-velvet",
    "slug": "red-velvet-cake",
    "title": "Red Velvet Cake",
    "category": "cakes",
    "price": 56,
    "format": "6\" or 8\" Cake • Classic",
    "dietaryTags": [
      "100% GF",
      "DF Available",
      "Cream Cheese"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005444/5741249255.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005444/5741249255.jpg"
    ],
    "description": "Classic red velvet cake layered with smooth buttercream for a rich, velvety finish.",
    "fullDescription": "Classic red velvet cake layered with smooth buttercream for a rich, velvety finish.\n\nAvailable in dairy-free vanilla or cream cheese buttercream.\n\nCakes must be ordered separately and cannot be combined with other items at checkout.",
    "options": [
      {
        "name": "Cake Size",
        "choices": [
          {
            "label": "6\" Cake (serves 8-10)"
          },
          {
            "label": "8\" Cake (serves 12-14)",
            "priceDelta": 22
          }
        ]
      },
      {
        "name": "Do you need dairy free?",
        "choices": [
          {
            "label": "No"
          },
          {
            "label": "Yes, Dairy Free"
          }
        ]
      }
    ],
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "6\" serves 8–10 guests • 8\" serves 12–14 guests",
      "4–5 days advance notice required • Thu–Sat pickup in Bowling Green, KY"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "cake",
        "label": "Two-Layer Cake"
      },
      {
        "icon": "buttercream",
        "label": "House Buttercream"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Red-Velvet-Cake-p696005444"
  },
  {
    "id": "cake-cookie-dough",
    "slug": "cookie-dough-cake",
    "title": "Cookie Dough Cake",
    "category": "cakes",
    "price": 56,
    "format": "6\" or 8\" Cake • Signature",
    "dietaryTags": [
      "100% GF",
      "DF Available",
      "Indulgent"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/717906875/5741165602.jpg",
    "secondImage": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/717906875/4708658344.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/717906875/5741165602.jpg",
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/717906875/4708658344.jpg"
    ],
    "description": "A rich, indulgent cake with your choice of midnight chocolate or chocolate chip cake, layered with cookie dough buttercream and finished with a smooth…",
    "fullDescription": "A rich, indulgent cake with your choice of midnight chocolate or chocolate chip cake, layered with cookie dough buttercream and finished with a smooth chocolate ganache for the ultimate dessert mashup.\n\nDue to the ganache topping, this cake cannot be customized with writing and will come as pictured.\n\nDairy-free or vegan options available.",
    "options": [
      {
        "name": "Cake Size",
        "choices": [
          {
            "label": "6\" Cake (serves 6-8)"
          },
          {
            "label": "8\" Cake (serves 10-12)",
            "priceDelta": 22
          }
        ]
      },
      {
        "name": "Cookie Dough Cake Flavor",
        "choices": [
          {
            "label": "Chocolate Chip Cake"
          },
          {
            "label": "Midnight Chocolate Cake"
          }
        ]
      },
      {
        "name": "Do you need dairy or egg free?",
        "choices": [
          {
            "label": "None"
          },
          {
            "label": "Dairy Free Only"
          },
          {
            "label": "Dairy and Egg Free"
          }
        ]
      }
    ],
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "6\" serves 6–8 guests • 8\" serves 10–12 guests",
      "4–5 days advance notice required • Thu–Sat pickup in Bowling Green, KY",
      "This cake comes as pictured and cannot be customized with writing"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "cake",
        "label": "Two-Layer Cake"
      },
      {
        "icon": "buttercream",
        "label": "House Buttercream"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Cookie-Dough-Cake-p717906875"
  },
  {
    "id": "cake-coconut-cream",
    "slug": "coconut-cream-cake-df",
    "title": "Coconut Cream Cake (DF)",
    "category": "cakes",
    "price": 54,
    "format": "6\" or 8\" Cake • Dairy-Free",
    "dietaryTags": [
      "100% GF",
      "Dairy Free",
      "Light & Lush"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/737404403/5741175340.jpg",
    "secondImage": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/737404403/4835027944.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/737404403/5741175340.jpg",
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/737404403/4835027944.jpg"
    ],
    "description": "Soft, fluffy coconut cake layered with creamy coconut buttercream and finished with a generous coating of shredded coconut for a light, tropical treat.",
    "fullDescription": "Soft, fluffy coconut cake layered with creamy coconut buttercream and finished with a generous coating of shredded coconut for a light, tropical treat. Every bite is rich and satisfying while staying completely dairy-free.\n\nDairy-free\n\nCannot be customized with writing; cake will come as pictured",
    "options": [
      {
        "name": "Cake Size",
        "choices": [
          {
            "label": "6\" Cake (serves 8-10)"
          },
          {
            "label": "8\" Cake (serves 12-14)",
            "priceDelta": 22
          }
        ]
      }
    ],
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "6\" serves 8–10 guests • 8\" serves 12–14 guests",
      "4–5 days advance notice required • Thu–Sat pickup in Bowling Green, KY",
      "This cake comes as pictured and cannot be customized with writing"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "cake",
        "label": "Two-Layer Cake"
      },
      {
        "icon": "buttercream",
        "label": "House Buttercream"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Coconut-Cream-Cake-DF-p737404403"
  },
  {
    "id": "cake-floral",
    "slug": "elegant-floral-cake",
    "title": "Elegant Floral Style Cake",
    "category": "cakes",
    "price": 52,
    "format": "6\" or 8\" • Bridal & Events",
    "dietaryTags": [
      "100% GF",
      "Custom Colors",
      "Weddings"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/699097546/5741259514.jpg",
    "secondImage": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/699097546/5741255650.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/699097546/5741259514.jpg",
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/699097546/5741255650.jpg"
    ],
    "description": "A simple, elegant two-layer cake filled with buttercream and finished in a soft swirl design with delicate rosettes on top.",
    "fullDescription": "A simple, elegant two-layer cake filled with buttercream and finished in a soft swirl design with delicate rosettes on top.\n\nDairy-free or vegan options available.\n\nCakes must be ordered separately and cannot be combined with other items at checkout.",
    "options": [
      {
        "name": "Cake Size",
        "choices": [
          {
            "label": "6\" Cake (serves 8-10)"
          },
          {
            "label": "8\" Cake (serves 12-14)",
            "priceDelta": 22
          }
        ]
      },
      {
        "name": "Cake Flavor",
        "choices": [
          {
            "label": "Midnight/Chocolate"
          },
          {
            "label": "Vanilla"
          },
          {
            "label": "Chocolate Chip"
          },
          {
            "label": "Funfetti"
          },
          {
            "label": "Red Velvet"
          },
          {
            "label": "Strawberry",
            "priceDelta": 2
          }
        ]
      },
      {
        "name": "Buttercream Flavor",
        "choices": [
          {
            "label": "Vanilla"
          },
          {
            "label": "Chocolate"
          },
          {
            "label": "Birthday Cake"
          },
          {
            "label": "Wedding Cake"
          },
          {
            "label": "Coffee",
            "priceDelta": 3
          },
          {
            "label": "Peanut Butter",
            "priceDelta": 3
          },
          {
            "label": "Strawberry",
            "priceDelta": 3
          },
          {
            "label": "Cream Cheese",
            "priceDelta": 5
          }
        ]
      },
      {
        "name": "Accent Color (flowers)",
        "choices": [
          {
            "label": "Baby Blue"
          },
          {
            "label": "Yellow"
          },
          {
            "label": "Purple"
          },
          {
            "label": "Baby Pink"
          },
          {
            "label": "Orange"
          },
          {
            "label": "White"
          },
          {
            "label": "No Color"
          }
        ]
      },
      {
        "name": "Sprinkle Options",
        "choices": [
          {
            "label": "No Sprinkles"
          },
          {
            "label": "White Nonpareils"
          }
        ]
      },
      {
        "name": "Do you need dairy free/egg free?",
        "choices": [
          {
            "label": "None"
          },
          {
            "label": "Dairy Free Only"
          },
          {
            "label": "Dairy Free/Egg Free"
          }
        ]
      }
    ],
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "6\" serves 8–10 guests • 8\" serves 12–14 guests",
      "4–5 days advance notice required • Thu–Sat pickup in Bowling Green, KY"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "cake",
        "label": "Two-Layer Cake"
      },
      {
        "icon": "buttercream",
        "label": "House Buttercream"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Elegant-Floral-Style-Cake-p699097546"
  },
  {
    "id": "cake-drip",
    "slug": "build-a-drip-cake",
    "title": "Build a Drip Cake",
    "category": "cakes",
    "price": 56,
    "format": "6\" or 8\" • Custom Flavors",
    "dietaryTags": [
      "100% GF",
      "Customizable",
      "Celebration"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005635/6053662069.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005635/6053662069.jpg"
    ],
    "description": "Select from our available options to build the cake you want for your event.",
    "fullDescription": "Select from our available options to build the cake you want for your event.\n\nThis cake comes with two layers of cake plus one layer of buttercream in between. It is topped with a chocolate ganache drip and optional sprinkles!\n\nNo message can be written on this type of cake.\n\nCake pick up is currently available on Thursdays, Fridays, and Saturdays, and needs to be ordered at least 5 days in advance.\n\nAll cakes MUST be ordered in a separate order - you cannot group cakes with any other items at checkout.",
    "options": [
      {
        "name": "Cake Size",
        "choices": [
          {
            "label": "6\" Cake (serves 6-8)"
          },
          {
            "label": "8\" Cake (serves 10-12)",
            "priceDelta": 22
          }
        ]
      },
      {
        "name": "Cake Flavor",
        "choices": [
          {
            "label": "Chocolate Midnight"
          },
          {
            "label": "Chocolate, Vegan"
          },
          {
            "label": "Chocolate Chip"
          },
          {
            "label": "Funfetti Sprinkle (contains dye)"
          },
          {
            "label": "Red Velvet (contains dye)"
          },
          {
            "label": "Vanilla"
          },
          {
            "label": "Strawberry",
            "priceDelta": 2
          }
        ]
      },
      {
        "name": "Buttercream Flavor",
        "choices": [
          {
            "label": "Birthday Cake"
          },
          {
            "label": "Chocolate"
          },
          {
            "label": "Vanilla"
          },
          {
            "label": "Wedding Cake"
          },
          {
            "label": "Coffee",
            "priceDelta": 2
          },
          {
            "label": "Peanut Butter",
            "priceDelta": 3
          },
          {
            "label": "Strawberry",
            "priceDelta": 3
          }
        ]
      },
      {
        "name": "Do you need dairy free/egg free?",
        "choices": [
          {
            "label": "None"
          },
          {
            "label": "Dairy Free Only"
          },
          {
            "label": "Dairy Free/Egg Free"
          }
        ]
      }
    ],
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "6\" serves 6–8 guests • 8\" serves 10–12 guests",
      "4–5 days advance notice required • Thu–Sat pickup in Bowling Green, KY",
      "This cake comes as pictured and cannot be customized with writing"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "cake",
        "label": "Two-Layer Cake"
      },
      {
        "icon": "buttercream",
        "label": "House Buttercream"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Build-a-Drip-Cake-p696005635"
  },
  {
    "id": "cake-mini-smash",
    "slug": "mini-smash-cake",
    "title": "Mini / Smash Cake 6\"",
    "category": "cakes",
    "price": 29,
    "format": "6-Inch Single Layer",
    "dietaryTags": [
      "100% GF",
      "DF/Egg-Free Option",
      "First Birthdays"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005905/5741478576.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005905/5741478576.jpg"
    ],
    "description": "Create your perfect 6\" mini cake by choosing your flavor and buttercream, finished in our signature style as pictured.",
    "fullDescription": "Create your perfect 6\" mini cake by choosing your flavor and buttercream, finished in our signature style as pictured.\n\nThis cake features a single layer with a smooth buttercream finish and piping that will match the design shown.\n\nDairy-free and egg-free options available.\n\nCakes must be ordered separately and cannot be combined with other items at checkout.",
    "options": [
      {
        "name": "Smash Cake Flavor",
        "choices": [
          {
            "label": "Chocolate"
          },
          {
            "label": "Funfetti"
          },
          {
            "label": "Vanilla"
          }
        ]
      },
      {
        "name": "Smash Cake Buttercream (Piping & Writing)",
        "choices": [
          {
            "label": "Birthday Cake"
          },
          {
            "label": "Chocolate"
          },
          {
            "label": "Vanilla"
          },
          {
            "label": "Wedding Cake"
          }
        ]
      },
      {
        "name": "Does this need to be dairy/egg free?",
        "choices": [
          {
            "label": "None"
          },
          {
            "label": "Dairy Free Only"
          },
          {
            "label": "Dairy Free/Egg Free"
          }
        ]
      },
      {
        "name": "Accent Color (Piping & Writing)",
        "choices": [
          {
            "label": "Baby Blue"
          },
          {
            "label": "Baby Pink"
          },
          {
            "label": "Blue"
          },
          {
            "label": "Orange"
          },
          {
            "label": "Purple"
          },
          {
            "label": "Yellow"
          },
          {
            "label": "No Color"
          }
        ]
      },
      {
        "name": "Sprinkle Options (on top of frosting)",
        "choices": [
          {
            "label": "No Sprinkles"
          },
          {
            "label": "Birthday Party (most popular)"
          },
          {
            "label": "Gold Sugar Nuggets"
          },
          {
            "label": "Pastel Sequins"
          },
          {
            "label": "Rainbow Jimmies (dye free)",
            "priceDelta": 1
          },
          {
            "label": "Rainbow Jimmies"
          },
          {
            "label": "Rainbow Nonpareils (Dye Free)",
            "priceDelta": 1
          },
          {
            "label": "Red, White, & Blue"
          },
          {
            "label": "White Nonpareils"
          },
          {
            "label": "Yellow Jimmies"
          },
          {
            "label": "Mini Chocolate Chips",
            "priceDelta": 0.5
          }
        ]
      }
    ],
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "6\" single-layer smash cake — perfect for first birthdays & small celebrations",
      "4–5 days advance notice required • Thu–Sat pickup in Bowling Green, KY"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "cake",
        "label": "6\" Single Layer"
      },
      {
        "icon": "buttercream",
        "label": "House Buttercream"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Mini-Smash-Cake-6-p696005905"
  },
  {
    "id": "cupcake-std-assorted",
    "slug": "standard-cupcakes-assorted-6",
    "title": "Standard Cupcakes, Assorted 6-Pack",
    "category": "cupcakes",
    "price": 29.9,
    "format": "Box of 6 • Bakery Selection",
    "dietaryTags": [
      "100% GF",
      "Celiac Safe",
      "Original Recipe"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696004942/4553441559.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696004942/4553441559.jpg"
    ],
    "description": "This assorted pack features 3 flavors from our bakery's selection for your chosen week!",
    "fullDescription": "This assorted pack features 3 flavors from our bakery's selection for your chosen week! You will receive 2 of each flavor. Please note that customization of flavors is not available for assorted boxes.\n\nAssorted boxes need at least a 1-day notice.",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Assorted packs require at least 1-day advance notice"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "buttercream",
        "label": "Hand-Piped Frosting"
      },
      {
        "icon": "celiac",
        "label": "Celiac Safe"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Standard-Cupcakes-Assorted-6-pack-p696004942"
  },
  {
    "id": "cupcake-vegan-6",
    "slug": "standard-cupcakes-df-vegan-6",
    "title": "Standard Cupcakes (DF / Vegan)",
    "category": "cupcakes",
    "price": 29.9,
    "format": "Box of 6 • Egg & Dairy Free",
    "dietaryTags": [
      "100% GF",
      "Vegan",
      "Dairy Free"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005223/4562502284.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005223/4562502284.jpg"
    ],
    "description": "Standard cupcakes are sold by the half dozen (6)",
    "fullDescription": "Standard cupcakes are sold by the half dozen (6)\n\nAll cupcake orders require a 4 day lead time.\n\nFor custom orders, please call us at: (270)551-4440",
    "options": [
      {
        "name": "Cake Flavor (DF/V)",
        "choices": [
          {
            "label": "Chocolate (DF/V)"
          },
          {
            "label": "Funfetti (DF/V)"
          },
          {
            "label": "Vanilla (DF/V)"
          },
          {
            "label": "Strawberry (DF/V)",
            "priceDelta": 2
          }
        ]
      },
      {
        "name": "Buttercream Flavor (DF/V)",
        "choices": [
          {
            "label": "Birthday Cake (DF)"
          },
          {
            "label": "Chocolate (DF)"
          },
          {
            "label": "Maple (DF)"
          },
          {
            "label": "Vanilla (DF)"
          },
          {
            "label": "Wedding Cake (DF)"
          },
          {
            "label": "Strawberry (DF)",
            "priceDelta": 3
          }
        ]
      },
      {
        "name": "Dietary Preference",
        "choices": [
          {
            "label": "Egg Free/Vegan"
          },
          {
            "label": "Dairy Free Only"
          }
        ]
      },
      {
        "name": "Sprinkle Options",
        "choices": [
          {
            "label": "No Sprinkles"
          },
          {
            "label": "Birthday Party (most popular)"
          },
          {
            "label": "Gold"
          },
          {
            "label": "Pastel Sequins"
          },
          {
            "label": "Natural Rainbow (no artificial dye)",
            "priceDelta": 0.5
          },
          {
            "label": "Rainbow"
          },
          {
            "label": "White Nonpareils"
          }
        ]
      }
    ],
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Custom cupcake packs require 4 days advance notice"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "buttercream",
        "label": "Hand-Piped Frosting"
      },
      {
        "icon": "vegan",
        "label": "Dairy & Egg Free"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Standard-Cupcakes-DF-Vegan-6-Pack-p696005223"
  },
  {
    "id": "cupcake-salted-caramel",
    "slug": "salted-caramel-cupcakes",
    "title": "Salted Caramel Cupcakes",
    "category": "cupcakes",
    "price": 29.9,
    "format": "6 Standard or 12 Minis",
    "dietaryTags": [
      "100% GF",
      "Celiac Safe",
      "Sweet & Salty"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4739605814.jpg",
    "secondImage": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4739604398.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4739605814.jpg",
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4739604398.jpg"
    ],
    "description": "Sweet meets salty in our Salted Caramel Cupcakes! Pick between a deep, rich midnight cake or a soft, pillowy vanilla cake—each crowned with a swirl of…",
    "fullDescription": "Sweet meets salty in our Salted Caramel Cupcakes! Pick between a deep, rich midnight cake or a soft, pillowy vanilla cake—each crowned with a swirl of caramel buttercream and a drizzle of salted caramel. It’s the perfect bite of sweet, salty, and totally crave-worthy.",
    "options": [
      {
        "name": "Cupcake Size",
        "choices": [
          {
            "label": "Standard (6-pack)"
          },
          {
            "label": "Minis (12-pack)"
          }
        ]
      },
      {
        "name": "Cake Flavor",
        "choices": [
          {
            "label": "Midnight Chocolate"
          },
          {
            "label": "Vanilla"
          }
        ]
      }
    ],
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Custom cupcake packs require 4 days advance notice"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "buttercream",
        "label": "Hand-Piped Frosting"
      },
      {
        "icon": "celiac",
        "label": "Celiac Safe"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Salted-Caramel-Cupcakes-p721585485"
  },
  {
    "id": "cupcake-cookie-dough",
    "slug": "cookie-dough-cupcakes",
    "title": "Cookie Dough Cupcakes",
    "category": "cupcakes",
    "price": 29.9,
    "format": "6 Standard or 12 Minis",
    "dietaryTags": [
      "100% GF",
      "DF/Vegan Option",
      "Crowd Pleaser"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4739593761.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4739593761.jpg"
    ],
    "description": "Think of the first time you licked the spoon after mixing cookie dough.",
    "fullDescription": "Think of the first time you licked the spoon after mixing cookie dough. Our Cookie Dough Cupcakes are just like that, but in cupcake form! Pick between a Rich Midnight Cake or a Chocolate Chip base—both topped with a swirl of cookie dough buttercream and a sprinkle of mini chocolate chips. Need dairy-free or vegan? We’ve got you covered. Grab one and enjoy that “lick-the-spoon” moment—no mixing bowl needed.",
    "options": [
      {
        "name": "Cupcake Size",
        "choices": [
          {
            "label": "Standard Cupcakes (6-pack)"
          },
          {
            "label": "Mini Cupcakes (12-pack)"
          }
        ]
      },
      {
        "name": "Cake Flavor",
        "choices": [
          {
            "label": "Chocolate Chip"
          },
          {
            "label": "Chocolate Chip (vegan)"
          },
          {
            "label": "Midnight Chocolate"
          },
          {
            "label": "Chocolate (vegan)"
          }
        ]
      },
      {
        "name": "Buttercream Option",
        "choices": [
          {
            "label": "Cookie Dough Buttercream"
          },
          {
            "label": "Cookie Dough Buttercream (Dairy Free)"
          }
        ]
      }
    ],
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Custom cupcake packs require 4 days advance notice"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "buttercream",
        "label": "Hand-Piped Frosting"
      },
      {
        "icon": "celiac",
        "label": "Celiac Safe"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Cookie-Dough-Cupcakes-p721593560"
  },
  {
    "id": "cupcake-mini-12",
    "slug": "mini-cupcakes-12-pack",
    "title": "Mini Cupcakes, 12-Pack",
    "category": "cupcakes",
    "price": 29.9,
    "format": "Box of 12 • Bite-Sized",
    "dietaryTags": [
      "100% GF",
      "Party Ready",
      "Custom Flavors"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696006256/4562422892.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696006256/4562422892.jpg"
    ],
    "description": "Mini cupcakes are sold by the dozen (12).",
    "fullDescription": "Mini cupcakes are sold by the dozen (12).\n\nAll cupcake orders require a 4 day lead time.\n\nFor custom order, please call us at: (270)551-4440",
    "options": [
      {
        "name": "Cake Flavor",
        "choices": [
          {
            "label": "Chocolate Chip"
          },
          {
            "label": "Funfetti"
          },
          {
            "label": "Midnight (chocolate)"
          },
          {
            "label": "Red Velvet"
          },
          {
            "label": "Vanilla"
          },
          {
            "label": "Strawberry",
            "priceDelta": 1
          },
          {
            "label": "Lemon",
            "priceDelta": 1
          }
        ]
      },
      {
        "name": "Buttercream Flavor",
        "choices": [
          {
            "label": "Birthday Cake"
          },
          {
            "label": "Chocolate"
          },
          {
            "label": "Maple"
          },
          {
            "label": "Vanilla"
          },
          {
            "label": "Wedding Cake"
          },
          {
            "label": "Coffee",
            "priceDelta": 2
          },
          {
            "label": "Cream Cheese",
            "priceDelta": 5
          },
          {
            "label": "Peanut Butter",
            "priceDelta": 2
          },
          {
            "label": "Strawberry",
            "priceDelta": 1
          },
          {
            "label": "Lemon",
            "priceDelta": 1
          }
        ]
      },
      {
        "name": "Additional Cupcake Toppings",
        "choices": [
          {
            "label": "None"
          },
          {
            "label": "Chocolate Ganache Drizzle",
            "priceDelta": 2
          },
          {
            "label": "Salted Caramel Drizzle",
            "priceDelta": 1
          },
          {
            "label": "Mini Chocolate Chips",
            "priceDelta": 1
          }
        ]
      },
      {
        "name": "Sprinkle Options",
        "choices": [
          {
            "label": "No Sprinkles"
          },
          {
            "label": "Birthday Party (most popular)"
          },
          {
            "label": "Gold"
          },
          {
            "label": "Pastel Sequins"
          },
          {
            "label": "Natural Rainbow (no artificial dye)",
            "priceDelta": 0.5
          },
          {
            "label": "Rainbow"
          },
          {
            "label": "White Nonpareils"
          }
        ]
      }
    ],
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Custom cupcake packs require 4 days advance notice"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "buttercream",
        "label": "Hand-Piped Frosting"
      },
      {
        "icon": "celiac",
        "label": "Celiac Safe"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/MINI-Cupcakes-12-Pack-p696006256"
  },
  {
    "id": "cupcake-dozen",
    "slug": "standard-cupcakes-dozen",
    "title": "Standard Cupcakes, Dozen",
    "category": "cupcakes",
    "price": 59.75,
    "format": "Box of 12 • Custom Mix",
    "dietaryTags": [
      "100% GF",
      "Celiac Safe",
      "Events"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/772651739/5090011517.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/772651739/5090011517.jpg"
    ],
    "description": "These Standard cupcakes are sold by the dozen (12)",
    "fullDescription": "These Standard cupcakes are sold by the dozen (12)\n\nAll cupcake orders require a 4 day lead time.\n\nFor custom orders, please call us at: (270)551-4440",
    "options": [
      {
        "name": "Cake Flavor",
        "choices": [
          {
            "label": "Chocolate Chip"
          },
          {
            "label": "Funfetti (DF)"
          },
          {
            "label": "Midnight Chocolate"
          },
          {
            "label": "Strawberry",
            "priceDelta": 1
          },
          {
            "label": "Vanilla"
          },
          {
            "label": "Vegan Chocolate"
          },
          {
            "label": "Red Velvet"
          }
        ]
      },
      {
        "name": "Buttercream Flavor",
        "choices": [
          {
            "label": "Birthday Cake (DF)"
          },
          {
            "label": "Chocolate (DF)"
          },
          {
            "label": "Maple (DF)"
          },
          {
            "label": "Vanilla (DF)"
          },
          {
            "label": "Wedding Cake (DF)"
          },
          {
            "label": "Coffee",
            "priceDelta": 3
          },
          {
            "label": "Cookies n' Cream",
            "priceDelta": 1
          },
          {
            "label": "Cream Cheese",
            "priceDelta": 5
          },
          {
            "label": "Peanut Butter",
            "priceDelta": 3
          },
          {
            "label": "Strawberry",
            "priceDelta": 1
          }
        ]
      },
      {
        "name": "Sprinkle Options",
        "choices": [
          {
            "label": "No Sprinkles"
          },
          {
            "label": "Birthday Party (most popular)"
          },
          {
            "label": "Gold"
          },
          {
            "label": "Pastel Sequins"
          },
          {
            "label": "Natural Rainbow (no artificial dye)",
            "priceDelta": 0.5
          },
          {
            "label": "Rainbow"
          },
          {
            "label": "White Nonpareils"
          }
        ]
      },
      {
        "name": "Additional Cupcake Toppings",
        "choices": [
          {
            "label": "None"
          },
          {
            "label": "Chocolate Ganache Drizzle",
            "priceDelta": 2
          },
          {
            "label": "Salted Caramel Drizzle",
            "priceDelta": 1
          },
          {
            "label": "Mini Chocolate Chips",
            "priceDelta": 1
          }
        ]
      }
    ],
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Custom cupcake packs require 4 days advance notice"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "buttercream",
        "label": "Hand-Piped Frosting"
      },
      {
        "icon": "celiac",
        "label": "Celiac Safe"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Standard-Cupcakes-12-Pack-dozen-p772651739"
  },
  {
    "id": "bread-artisan",
    "slug": "artisan-bread-loaf",
    "title": "Artisan Bread (Full Loaf)",
    "category": "bread",
    "price": 20,
    "format": "Full Loaf • Dairy & Egg Free",
    "dietaryTags": [
      "100% GF",
      "Vegan",
      "Crusty Crumb"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005942/4543400593.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005942/4543400593.jpg"
    ],
    "description": "Our full artisan loaf is a white bread with hints of sourdough flavor.",
    "fullDescription": "Our full artisan loaf is a white bread with hints of sourdough flavor. Enjoy this freshly sliced at room temperature, warmed in the microwave, or toasted! We use our artisan bread on all toasties in store.\n\nThis bread is dairy free, egg free, and vegan.\n\nIngredients: Rice Flour, Cornstarch, Tapioca Starch, Millet Flour, Psyllium Husk, Sugar, Potato Starch, Olive Oil, Salt, Yeast, Ascorbic Acid",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Baked fresh in our dedicated gluten-free bakery • See our Bread Care Guide"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "bread",
        "label": "Artisan Baked"
      },
      {
        "icon": "vegan",
        "label": "Vegan & DF"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Artisan-Bread-Full-Fresh-p696005942"
  },
  {
    "id": "bread-everything-bagels",
    "slug": "everything-bagels-4-pack",
    "title": "Everything Bagels (4-Pack)",
    "category": "bread",
    "price": 15,
    "format": "4 Large Bagels • DF & EF",
    "dietaryTags": [
      "100% GF",
      "Dairy Free",
      "Boiled & Baked"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/722603542/4745789873.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/722603542/4745789873.jpg"
    ],
    "description": "Enjoy the classic taste of New York with our freshly baked Everything Bagels—no trip required!",
    "fullDescription": "Enjoy the classic taste of New York with our freshly baked Everything Bagels—no trip required! This 4-pack of large, in-house made bagels is dairy-free and egg-free, offering a chewy texture and golden crust everyone can enjoy. Perfect toasted with your favorite spread or loaded with toppings, these bagels bring bold flavor and a satisfying bite to any time of day.\n\nIngredients: Water, Rice, cornstarch, tapioca, vegetable fiber (cellulose, psyllium), millet, sugar, salt, potato, ascorbic acid, sunflower lecithin, Olive Oil, Brown Sugar, Sesame seeds, dried onion, dried garlic, poppy seeds, Yeast, Salt",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Baked fresh in our dedicated gluten-free bakery • See our Bread Care Guide"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "bread",
        "label": "Artisan Baked"
      },
      {
        "icon": "df",
        "label": "Dairy Free"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Everything-Bagels-4-pack-p722603542"
  },
  {
    "id": "bread-white-sandwich",
    "slug": "white-sandwich-bread",
    "title": "White Sandwich Bread",
    "category": "bread",
    "price": 20,
    "format": "Full Loaf • Dairy & Egg Free",
    "dietaryTags": [
      "100% GF",
      "Vegan",
      "Soft Slice"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/766439048/5087223133.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/766439048/5087223133.jpg"
    ],
    "description": "Our full white sandwich loaf is soft, simple, and perfect for everyday meals.",
    "fullDescription": "Our full white sandwich loaf is soft, simple, and perfect for everyday meals. It has a classic white bread taste with a tender texture that’s great sliced fresh, toasted, or warmed.\n\nLoaf does NOT come pre-sliced.\n\nThis loaf is gluten free, dairy free, egg free, and fully vegan.\n\nIngredients: Rice Flour, Cornstarch, Tapioca Starch, Millet Flour, Psyllium Husk, Sugar, Salt, Potato Starch, Olive Oil, Yeast, Ascorbic Acid",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Baked fresh in our dedicated gluten-free bakery • See our Bread Care Guide"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "bread",
        "label": "Artisan Baked"
      },
      {
        "icon": "vegan",
        "label": "Vegan & DF"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/White-Sandwich-Bread-p766439048"
  },
  {
    "id": "bread-baguette",
    "slug": "french-baguette",
    "title": "French Baguette (Full)",
    "category": "bread",
    "price": 8,
    "format": "1 Full Baguette • Frozen",
    "dietaryTags": [
      "100% GF",
      "Vegan",
      "Crisp Crust"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696004928/4543400694.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696004928/4543400694.jpg"
    ],
    "description": "These baguettes are gluten-free, dairy-free, and vegan. Baguettes will come baked and frozen.",
    "fullDescription": "These baguettes are gluten-free, dairy-free, and vegan. Baguettes will come baked and frozen.\n\nWe love to use them for garlic bread, for dipping, or simply eating them alone because they are just that good.\n\nTo defrost, wrap in microwave-safe plastic wrap and microwave in 15-20 second burst. Wrapping in a damp paper towel can also work.",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Baked fresh in our dedicated gluten-free bakery • See our Bread Care Guide"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "bread",
        "label": "Artisan Baked"
      },
      {
        "icon": "vegan",
        "label": "Vegan & DF"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Baguette-full-fresh-p696004928"
  },
  {
    "id": "bread-brioche-buns",
    "slug": "brioche-buns-df",
    "title": "Brioche Buns (DF, 4-Pack)",
    "category": "bread",
    "price": 14.25,
    "format": "4 Buns • Dairy-Free",
    "dietaryTags": [
      "100% GF",
      "Dairy Free",
      "Pillowy"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/817636310/5751129758.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/817636310/5751129758.jpg"
    ],
    "description": "Soft, fluffy brioche-style buns with a rich, buttery flavor—perfect for burgers, sandwiches, or grilling. Dairy-free and made with eggs.",
    "fullDescription": "Soft, fluffy brioche-style buns with a rich, buttery flavor—perfect for burgers, sandwiches, or grilling. Dairy-free and made with eggs.\n\nIngredients: Flour (Rice, cornstarch, tapioca, psyllium, millet, sugar, salt, potato, ascorbic acid, sunflower lecithin), Water, Egg, Vegan Butter (Palm and palm kernel oil, water, sunflower oil, pea protein, sunflower lecithin, lactic acid, natural flavor, annatto (color), vitamin a palmitate), Canola Oil, Sugar, Yeast, Salt",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Baked fresh in our dedicated gluten-free bakery • See our Bread Care Guide"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "bread",
        "label": "Artisan Baked"
      },
      {
        "icon": "df",
        "label": "Dairy Free"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Brioche-Buns-DF-4-pack-p817636310"
  },
  {
    "id": "bread-dinner-rolls",
    "slug": "dinner-rolls-8pk",
    "title": "Dinner Rolls (8-Pack)",
    "category": "bread",
    "price": 14.99,
    "format": "8 Frozen Rolls • DF & EF",
    "dietaryTags": [
      "100% GF",
      "Vegan",
      "Holiday Staple"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005892/4543409054.jpg",
    "secondImage": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005892/4633747580.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005892/4543409054.jpg",
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005892/4633747580.jpg",
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005892/5005453490.jpg"
    ],
    "description": "Say hello to the perfect dinner roll that everyone at the table can enjoy!",
    "fullDescription": "Say hello to the perfect dinner roll that everyone at the table can enjoy! Our yeast-risen dinner rolls are completely dairy-free, egg-free, and gluten-free, yet they’re incredibly soft, fluffy, and full of flavor. Customers are raving that they taste just like the beloved Sister Schubert rolls!\n\nEach pack includes 8 rolls, conveniently frozen and ready to be defrosted and baked fresh for your meal. Whether for family dinners, holidays, or everyday enjoyment, these rolls are a delicious addition to any occasion.\n\nStock up today and make every meal a little more special!\n\nIngredients: Water, Flour (Rice, cornstarch, tapioca, psyllium, millet, sugar, salt, potato, ascorbic acid, sunflower lecithin), Sugar, Olive Oil, Brown Sugar, Yeast, Salt",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Baked fresh in our dedicated gluten-free bakery • See our Bread Care Guide"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "bread",
        "label": "Artisan Baked"
      },
      {
        "icon": "vegan",
        "label": "Vegan & DF"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Dinner-Rolls-8pk-Frozen-p696005892"
  },
  {
    "id": "scone-cinnamon-roll",
    "slug": "cinnamon-roll-scones",
    "title": "Cinnamon Roll Scones",
    "category": "scones",
    "price": 29,
    "format": "6-Pack • Glazed",
    "dietaryTags": [
      "100% GF",
      "Celiac Safe",
      "Morning Favorite"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4557442790.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4557442790.jpg"
    ],
    "description": "Soft, flaky gluten-free scones swirled with brown sugar and warm cinnamon, finished with sweet vanilla glaze. Sold in boxes of 6.",
    "fullDescription": "Soft, flaky gluten-free scones swirled with brown sugar and warm cinnamon, finished with sweet vanilla glaze. Sold in boxes of 6.",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "fresh",
        "label": "Baked Fresh"
      },
      {
        "icon": "celiac",
        "label": "Celiac Safe"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Cinnamon-Roll-Scones-6-pack-p698265568"
  },
  {
    "id": "scone-blueberry",
    "slug": "blueberry-scones-vegan",
    "title": "Blueberry Scones (Vegan)",
    "category": "scones",
    "price": 29,
    "format": "6-Pack • Plant-Based",
    "dietaryTags": [
      "100% GF",
      "Vegan",
      "Dairy Free"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4557439928.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4557439928.jpg"
    ],
    "description": "Bursting with juicy blueberries inside a tender, flaky gluten-free, dairy-free, and egg-free vegan scone. Comes in packs of 6.",
    "fullDescription": "Bursting with juicy blueberries inside a tender, flaky gluten-free, dairy-free, and egg-free vegan scone. Comes in packs of 6.",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "vegan",
        "label": "100% Vegan"
      },
      {
        "icon": "celiac",
        "label": "Celiac Safe"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Blueberry-Scones-6-pack-Vegan-p698265103"
  },
  {
    "id": "scone-choc-chip",
    "slug": "chocolate-chip-scones-vegan",
    "title": "Chocolate Chip Scones (Vegan)",
    "category": "scones",
    "price": 29,
    "format": "6-Pack • Plant-Based",
    "dietaryTags": [
      "100% GF",
      "Vegan",
      "Coffee Pairing"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/698265567/6199386175.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/698265567/6199386175.jpg"
    ],
    "description": "Crisp golden edges studded with rich dairy-free chocolate chips in a tender gluten-free, vegan scone. Comes in packs of 6.",
    "fullDescription": "Crisp golden edges studded with rich dairy-free chocolate chips in a tender gluten-free, vegan scone. Comes in packs of 6.",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "vegan",
        "label": "100% Vegan"
      },
      {
        "icon": "celiac",
        "label": "Celiac Safe"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Chocolate-Chip-Scones-6-pack-Vegan-p698265567"
  },
  {
    "id": "scone-sweet-almond",
    "slug": "sweet-almond-scones-vegan",
    "title": "Sweet Almond Scones (Vegan)",
    "category": "scones",
    "price": 29,
    "format": "6-Pack • Plant-Based",
    "dietaryTags": [
      "100% GF",
      "Vegan",
      "Glazed"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4557442530.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4557442530.jpg"
    ],
    "description": "Fragrant sweet almond scones baked gluten-free, dairy-free, and egg-free with crisp golden edges and delicate glaze. Comes in packs of 6.",
    "fullDescription": "Fragrant sweet almond scones baked gluten-free, dairy-free, and egg-free with crisp golden edges and delicate glaze. Comes in packs of 6.",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "vegan",
        "label": "100% Vegan"
      },
      {
        "icon": "celiac",
        "label": "Celiac Safe"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Sweet-Almond-Scones-6-pack-Vegan-p698265104"
  },
  {
    "id": "scone-vanilla-bean",
    "slug": "vanilla-bean-scones-vegan",
    "title": "Vanilla Bean Scones (Vegan)",
    "category": "scones",
    "price": 29,
    "format": "6-Pack • Plant-Based",
    "dietaryTags": [
      "100% GF",
      "Vegan",
      "Real Vanilla"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/860466583/6199386216.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/860466583/6199386216.jpg"
    ],
    "description": "Comes in packs of 6.",
    "fullDescription": "Comes in packs of 6.\n\nDairy Free, Egg Free.",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "vegan",
        "label": "100% Vegan"
      },
      {
        "icon": "celiac",
        "label": "Celiac Safe"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Vanilla-Bean-Scones-6-pack-Vegan-p860466583"
  },
  {
    "id": "scone-cranberry-orange",
    "slug": "cranberry-orange-scones-vegan",
    "title": "Cranberry Orange Scones",
    "category": "scones",
    "price": 29,
    "format": "6-Pack • Vegan",
    "dietaryTags": [
      "100% GF",
      "Vegan",
      "Bright Citrus"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/860463918/6199412034.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/860463918/6199412034.jpg"
    ],
    "description": "Bright citrus zest and tart ruby cranberries folded into a tender, flaky gluten-free vegan scone. Comes in packs of 6.",
    "fullDescription": "Bright citrus zest and tart ruby cranberries folded into a tender, flaky gluten-free vegan scone. Comes in packs of 6.",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "vegan",
        "label": "100% Vegan"
      },
      {
        "icon": "celiac",
        "label": "Celiac Safe"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Cranberry-Orange-Scones-6-pack-Vegan-p860463918"
  },
  {
    "id": "tnb-cinnamon-rolls-pan",
    "slug": "cinnamon-rolls-9x9-pan",
    "title": "Cinnamon Rolls 9x9 Pan",
    "category": "take-n-bake",
    "price": 45,
    "format": "9 Rolls • Frozen 9x9 Pan",
    "dietaryTags": [
      "100% GF",
      "Cream Cheese Icing",
      "Cult Favorite"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005000/5755927610.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005000/5755927610.jpg"
    ],
    "description": "Take and bake gooey cinnamon rolls to enjoy in your home! These rolls come frozen in a foil 9x9 pan, ready to defrost and bake in your oven. Comes with…",
    "fullDescription": "Take and bake gooey cinnamon rolls to enjoy in your home! These rolls come frozen in a foil 9x9 pan, ready to defrost and bake in your oven. Comes with cream cheese icing.\n\nQuantity per pan: 9 rolls\n\nContains: dairy, egg",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Prepared frozen & ready for your home oven • See our Take & Bake Guide"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "bake",
        "label": "Bake At Home"
      },
      {
        "icon": "celiac",
        "label": "Celiac Safe"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Cinnamon-Rolls-9x9-frozen-p696005000",
    "featured": true
  },
  {
    "id": "tnb-biscuits",
    "slug": "southern-biscuits-take-n-bake",
    "title": "Southern Biscuits (2-Pack)",
    "category": "take-n-bake",
    "price": 6.5,
    "format": "Frozen Raw • Bake Straight",
    "dietaryTags": [
      "100% GF",
      "Buttermilk",
      "Flaky & Tall"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4604390631.jpg",
    "secondImage": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4558789527.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4604390631.jpg",
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4558789527.jpg"
    ],
    "description": "Our buttery, flaky layered buttermilk biscuits come raw and frozen and are sold in packs of TWO.",
    "fullDescription": "Our buttery, flaky layered buttermilk biscuits come raw and frozen and are sold in packs of TWO.\n\nThese biscuits taste wonderful just as they are but we also love to pair them with jam, gravy, bacon, sausage, eggs... you name it!\n\nBiscuits bake for 20-23 minutes at 400° F from frozen. No need to defrost!\n\nContains: dairy",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Prepared frozen & ready for your home oven • See our Take & Bake Guide"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "bake",
        "label": "Bake At Home"
      },
      {
        "icon": "celiac",
        "label": "Celiac Safe"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Biscuits-frozen-raw-2-pack-p696005449"
  },
  {
    "id": "tnb-mac-n-cheese",
    "slug": "mac-n-cheese-9x9",
    "title": "Mac n' Cheese 9x9 Pan",
    "category": "take-n-bake",
    "price": 22,
    "format": "2lb 9x9 Pan • Frozen",
    "dietaryTags": [
      "100% GF",
      "Celiac Safe",
      "Bubbly Gold"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005680/5755929595.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005680/5755929595.jpg"
    ],
    "description": "Enjoy our super creamy cheese mac n' cheese at home! This 2lb 9x9 container of mac n' cheese comes frozen and pre-cooked, ready to reheat in your oven!",
    "fullDescription": "Enjoy our super creamy cheese mac n' cheese at home! This 2lb 9x9 container of mac n' cheese comes frozen and pre-cooked, ready to reheat in your oven!\n\nContains: milk, corn",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Prepared frozen & ready for your home oven • See our Take & Bake Guide"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "bake",
        "label": "Bake At Home"
      },
      {
        "icon": "celiac",
        "label": "Celiac Safe"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Mac-n-Cheese-9x9-frozen-p696005680"
  },
  {
    "id": "tnb-pepperoni-pizza",
    "slug": "pepperoni-pizza-12",
    "title": "Pepperoni Pizza (12\" Raw)",
    "category": "take-n-bake",
    "price": 23,
    "format": "12-Inch • Frozen Raw",
    "dietaryTags": [
      "100% GF",
      "Crisp Crust",
      "Family Night"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696004980/5755927563.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696004980/5755927563.jpg"
    ],
    "description": "Elevate your gluten-free pizza experience with our exceptional Take and Bake Pepperoni Pizza.",
    "fullDescription": "Elevate your gluten-free pizza experience with our exceptional Take and Bake Pepperoni Pizza. Expertly crafted to capture the real deal, enjoy rich flavors of premium pepperoni on a gluten-free crust that boasts an authentic texture and taste. Whether gluten-sensitive or craving a remarkable pizza, our Gluten-Free Take and Bake Pepperoni Pizza delivers genuine delight, right from your kitchen.\n\nOur Take and Bake Pizzas come individually heat sealed and frozen.",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Prepared frozen & ready for your home oven • See our Take & Bake Guide"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "bake",
        "label": "Bake At Home"
      },
      {
        "icon": "celiac",
        "label": "Celiac Safe"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Pepperoni-Pizza-12-Frozen-Raw-p696004980"
  },
  {
    "id": "tnb-pizza-dough",
    "slug": "pizza-dough-ball-df",
    "title": "Pizza Dough Ball 12–14\"",
    "category": "take-n-bake",
    "price": 11,
    "format": "Frozen Dough • DF & Egg-Free",
    "dietaryTags": [
      "100% GF",
      "Vegan",
      "Make Your Own"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005659/5755927569.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005659/5755927569.jpg"
    ],
    "description": "Want to form and build your own pizza? Grab one of our gluten-free/dairy-free/egg-free pizza dough balls!",
    "fullDescription": "Want to form and build your own pizza? Grab one of our gluten-free/dairy-free/egg-free pizza dough balls!\n\nExperiment and create more than just pizza with this dough!\n\nPizza dough comes frozen and un-proofed.",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Prepared frozen & ready for your home oven • See our Take & Bake Guide"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "bake",
        "label": "Bake At Home"
      },
      {
        "icon": "celiac",
        "label": "Celiac Safe"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Pizza-Dough-Ball-12-14-DF-Raw-Frozen-p696005659"
  },
  {
    "id": "tnb-french-toast",
    "slug": "french-toast-casserole",
    "title": "French Toast Casserole",
    "category": "take-n-bake",
    "price": 6.25,
    "format": "Individual • Frozen Raw",
    "dietaryTags": [
      "100% GF",
      "Celiac Safe",
      "Holiday Morning"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4708925763.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4708925763.jpg"
    ],
    "description": "Custard-soaked gluten-free Awaken bakery bread topped with warm cinnamon-brown sugar streusel.",
    "fullDescription": "Custard-soaked gluten-free Awaken bakery bread topped with warm cinnamon-brown sugar streusel. Comes raw and frozen, ready to bake for an effortless brunch.",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Prepared frozen & ready for your home oven • See our Take & Bake Guide"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "bake",
        "label": "Bake At Home"
      },
      {
        "icon": "celiac",
        "label": "Celiac Safe"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/French-Toast-Casserole-Raw-frozen-p702601258"
  },
  {
    "id": "ship-cookie-mix",
    "slug": "awaken-chocolate-chip-cookie-mix",
    "title": "Awaken Cookie Mix",
    "category": "shipping",
    "price": 14.5,
    "format": "Dry Mix • Makes 12 Cookies",
    "dietaryTags": [
      "100% GF",
      "Ships US",
      "DF/Soy/Nut Free"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005689/5087236277.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005689/5087236277.jpg"
    ],
    "description": "Bring the magic of Awaken Bakery home with our signature Chocolate Chip Cookie Mix.",
    "fullDescription": "Bring the magic of Awaken Bakery home with our signature Chocolate Chip Cookie Mix. This easy-to-use dry mix makes 12 soft, chewy cookies so good, you’d never guess they’re gluten free. Made from our house blend of premium ingredients, it’s also dairy free, soy free, and nut free—perfect for sharing with everyone.\n\nWhether it’s for a late-night treat or a weekend baking session, these cookies hit the spot every time. Just add butter and an egg, bake, and enjoy the same irresistible cookies we serve in-store—warm and fresh from your own oven.\n\nAvailable for nationwide US shipping!",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Ships nationwide across the United States from Bowling Green, KY"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "ship",
        "label": "Ships Nationwide"
      },
      {
        "icon": "df",
        "label": "DF & Nut Free"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Awaken-Chocolate-Chip-Cookie-Mix-p696005689"
  },
  {
    "id": "ship-biscuit-mix",
    "slug": "awaken-biscuit-mix",
    "title": "Awaken Biscuit Mix",
    "category": "shipping",
    "price": 16.99,
    "format": "Dry Mix • Makes ~15 Biscuits",
    "dietaryTags": [
      "100% GF",
      "Ships US",
      "Southern Classic"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/745592826/6389380479.jpg",
    "secondImage": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/745592826/4992808120.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/745592826/6389380479.jpg",
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/745592826/4992808120.jpg",
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/745592826/4944352373.jpg"
    ],
    "description": "Now you can bake our signature, professional-grade biscuits right in your own kitchen.",
    "fullDescription": "Now you can bake our signature, professional-grade biscuits right in your own kitchen. Our Awaken Biscuit Mix is gluten free, dairy free, and nut free—crafted to deliver soft, flaky layers with a golden crust. It takes a little love and time, but the result is worth it: homemade biscuits that taste just like they came from the bakery.\n\nMakes around 15 biscuits",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Ships nationwide across the United States from Bowling Green, KY"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "ship",
        "label": "Ships Nationwide"
      },
      {
        "icon": "df",
        "label": "DF & Nut Free"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Awaken-Biscuit-Mix-p745592826"
  },
  {
    "id": "ship-cake-mix",
    "slug": "awaken-chocolate-cake-mix",
    "title": "Awaken Chocolate Cake Mix",
    "category": "shipping",
    "price": 16,
    "format": "Dry Mix • Ships Nationwide",
    "dietaryTags": [
      "100% GF",
      "Ships US",
      "Celebration"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/745609304/4944352388.jpg",
    "secondImage": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/745609304/4944354053.png",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/745609304/4944352388.jpg",
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/745609304/4944354053.png",
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/745609304/4944256726.jpg"
    ],
    "description": "Bake rich, chocolatey perfection at home with our Awaken Chocolate Cake Mix!",
    "fullDescription": "Bake rich, chocolatey perfection at home with our Awaken Chocolate Cake Mix! This gluten-free, dairy-free, and nut-free dry mix creates a moist and decadent two-layer 8\" cake, a classic 9x13 sheet cake, or up to 18 cupcakes. Whether you're celebrating a special occasion or simply treating yourself, this mix delivers bakery-style results every time—no special equipment or experience needed. Just add a few simple ingredients, and enjoy chocolate cake that tastes straight from the bakery.",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Ships nationwide across the United States from Bowling Green, KY"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "ship",
        "label": "Ships Nationwide"
      },
      {
        "icon": "df",
        "label": "DF & Nut Free"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/Awaken-Chocolate-Cake-Mix-p745609304"
  },
  {
    "id": "ship-flour",
    "slug": "all-purpose-gf-flour-2lb",
    "title": "All-Purpose GF Flour (2lb)",
    "category": "shipping",
    "price": 16,
    "format": "2lb Bag • Ships Nationwide",
    "dietaryTags": [
      "100% GF",
      "Ships US",
      "Baker's Blend"
    ],
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696004986/4638489913.jpg",
    "images": [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696004986/4638489913.jpg"
    ],
    "description": "Take home some of our All Purpose Flour blend and bake up some of your own creations!",
    "fullDescription": "Take home some of our All Purpose Flour blend and bake up some of your own creations! This is the blend that we use in-store to bake biscuits, muffins, cookies, cakes, cupcakes, and more.\n\nIngredients: rice flour, tapioca starch, potato starch, potato flour, xanthan gum, pectin",
    "disclaimers": [
      "100% Dedicated Gluten-Free Kitchen • Safe for Celiac",
      "Ships nationwide across the United States from Bowling Green, KY"
    ],
    "highlights": [
      {
        "icon": "gf",
        "label": "100% Gluten Free"
      },
      {
        "icon": "ship",
        "label": "Ships Nationwide"
      },
      {
        "icon": "df",
        "label": "DF & Nut Free"
      }
    ],
    "shopUrl": "https://shop.awakenbg.com/products/All-Purpose-Flour-2lb-p696004986"
  }
];

export function getProductBySlug(slug: string): ProductItem | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.featured);

export const ARCH_GALLERY = [
  { src: "/images/funfetti-cake.webp", alt: "Funfetti Birthday Cake — 100% Gluten Free", tall: true },
  { src: "/images/bagel-scene.webp", alt: "California Avocado Bagel Sandwich", tall: false },
  { src: "/images/chocolate-cake.webp", alt: "Chocolate Decadence Layer Cake", tall: true },
  { src: "/images/artisan-bread.webp", alt: "Fresh Baked Gluten-Free Artisan Bread Loaves", tall: false },
  { src: "/images/lemon-cupcakes.jpg", alt: "Hand-Frosted Gluten-Free Lemon Cupcakes", tall: true },
  { src: "/images/cookies-assorted.jpg", alt: "Soft-Baked Assorted Gluten-Free Cookies", tall: false },
  { src: "/images/storefront.webp", alt: "Awaken Bakery Storefront in Downtown Bowling Green", tall: true },
  { src: "/images/story-bakery-2.jpg", alt: "Inside Awaken Bakery Cafe", tall: false },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Carl T.",
    initials: "CT",
    source: "Google Review",
    date: "Oct 2025",
    quote: "Finally a place where my whole family can eat without fear of cross contamination. We were able to get everything we wanted. I HIGHLY recommend coming here.",
    category: "Bakery Home",
    rating: 5,
  },
  {
    id: "rev-2",
    author: "Laura R.",
    initials: "LR",
    source: "Verified Customer",
    date: "Mar 2026",
    quote: "No one could even tell it was gluten free. Thank you Awaken Bakery for allowing my daughter with Celiac to be able to enjoy the foods she loves!",
    category: "Cakes & Cupcakes",
    rating: 5,
  },
  {
    id: "rev-3",
    author: "Abigail D.",
    initials: "AD",
    source: "Google Review",
    date: "Jan 2025",
    quote: "The hot cinnamon roll was the BEST I have had in 20 years, since going gluten free.",
    category: "Cinnamon Roll",
    rating: 5,
  },
  {
    id: "rev-4",
    author: "Kristen J.",
    initials: "KJ",
    source: "Google Review",
    date: "Dec 2025",
    quote: "I drove all the way from Nashville just to buy from this bakery. I had my first cinnamon roll in three years, and it was so good!",
    category: "Cinnamon Roll",
    rating: 5,
  },
  {
    id: "rev-5",
    author: "Henry H.",
    initials: "HH",
    source: "Google Review",
    date: "Mar 2026",
    quote: "Best gluten free food I've ever had. Experiencing the bagel sandwiches here was a borderline spiritual experience. 10/10.",
    category: "Bagels & Lunch",
    rating: 5,
  },
  {
    id: "rev-6",
    author: "Catrisa C.",
    initials: "CC",
    source: "Google Review",
    date: "Jul 2025",
    quote: "I am celiac and extremely sensitive and I can eat anything here with no reaction. My non-celiac family enjoys it too.",
    category: "Celiac Safe",
    rating: 5,
  },
  {
    id: "rev-7",
    author: "David O.",
    initials: "DO",
    source: "Google Review",
    date: "Mar 2025",
    quote: "Saturday morning biscuits and sausage gravy are among the best in Bowling Green — gluten or no gluten!",
    category: "Biscuits",
    rating: 5,
  },
  {
    id: "rev-8",
    author: "Dakotah L.",
    initials: "DL",
    source: "Google Review",
    date: "Feb 2024",
    quote: "The artisan loaf is indistinguishable from gluten or gluten-free. It doesn't fall apart and truly tastes like artisan bread.",
    category: "Bread",
    rating: 5,
  },
  {
    id: "rev-9",
    author: "Elizabeth B.",
    initials: "EB",
    source: "Google Review",
    date: "Jan 2023",
    quote: "Best gluten-free, dairy-free, vegan mac n cheese I've had. Literally brought tears to my eyes and I had zero food reactions after.",
    category: "Mac n' Cheese",
    rating: 5,
  },
  {
    id: "rev-10",
    author: "Katie C.",
    initials: "KC",
    source: "Google Review",
    date: "Sep 2023",
    quote: "My opinion on gluten-free pizza crust has officially changed!! It blew every expectation out of the water!",
    category: "Pizza",
    rating: 5,
  },
];

export const STORY_MILESTONES: StoryMilestone[] = [
  {
    id: "2011",
    date: "2011 — The Seed",
    title: "The Celiac Diagnosis",
    paragraphs: [
      "In 2011, founder Tiana Post was diagnosed with celiac disease. Suddenly, food wasn't simple anymore. Birthday parties became complicated, eating out became stressful, and grabbing a cupcake at a bakery wasn't safe.",
      "A decade later in 2021 came a Lyme disease diagnosis — another season of healing and a deep reminder that what we put in our bodies matters. Every loaf, sandwich, and cupcake at Awaken is made with someone in mind who has just been told 'you can't eat that anymore.'",
    ],
    image: "/images/story-tiana.png",
    imageAlt: "Tiana Post, founder of Awaken Bakery",
  },
  {
    id: "2020",
    date: "Late 2020 — Farmers Market",
    title: "A Folding Table & A Calling",
    paragraphs: [
      "After leaving a career in website design and marketing to homeschool Wyatt and Layla — with husband Rich cheering every step — Tiana set up a simple folding table at the Community Farmers Market in Bowling Green with cupcakes, hope, and not much else.",
      "Every Saturday, women would stop in their tracks: 'I haven't had a cupcake in years.' 'My daughter has never had a real birthday cake.' That was the heartbeat of Awaken from day one.",
    ],
    image: "/images/story-market.jpg",
    imageAlt: "Awaken Bakery early days at the Community Farmers Market",
  },
  {
    id: "2021",
    date: "2021 — Growing Roots",
    title: "Slowly, Then All at Once",
    paragraphs: [
      "The booth grew to a real bakery case. Cupcakes started selling out early every Saturday morning as regulars lined up hoping their favorite flavor was still waiting.",
      "Rich built, hauled, and worked side-by-side while the kids found their rhythm. It was a true family business — and God began preparing the family for a permanent home and a new name: Awaken Bakery.",
    ],
    image: "/images/story-bakery-1.jpg",
    imageAlt: "Awaken Bakery fresh pastries and growing bakery case",
  },
  {
    id: "2022",
    date: "September 1, 2022",
    title: "The Day We Got The Keys",
    paragraphs: [
      "After two years at the farmers market, Awaken Bakery officially opened its first downtown Bowling Green storefront — a 100% dedicated gluten-free kitchen with zero risk of cross-contamination.",
      "We weren't just opening a bakery. We were waking people up to the idea that gluten free can be truly good. Not 'good for gluten free.' Just good. Period.",
    ],
    image: "/images/story-opening.jpg",
    imageAlt: "Opening day at Awaken Bakery in Bowling Green, KY",
  },
  {
    id: "2023",
    date: "December 2023 — 300 E Main Ave",
    title: "A Bigger Home Downtown",
    paragraphs: [
      "Just over a year after opening, we moved a few doors down to our current bright, welcoming home at 300 E Main Ave — complete with a bigger kitchen, cozy café seating, espresso bar, and free customer parking right out front.",
      "In 2024, Bowling Green voted us Best of Bowling Green — and a portion of every order supports community work fighting for high-risk and exploited youth across Kentucky.",
    ],
    image: "/images/storefront.webp",
    imageAlt: "Awaken Bakery downtown storefront at 300 E Main Ave",
  },
];

export const TAKE_AND_BAKE_GUIDES: InstructionGuide[] = [
  {
    id: "cinnamon-rolls",
    title: "Cinnamon Rolls",
    badge: "Most Popular",
    summary: "Available as individual rolls, 9×9 pans, and 7\" 4-pack pans. Defrost overnight and bake to golden perfection — your kitchen will smell incredible.",
    image: "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005000/5755927611.jpg",
    steps: [
      {
        heading: "Thaw & Rise",
        bullets: [
          "Place frozen rolls in the refrigerator overnight (or on the counter 3–4 hours) until fully thawed and puffy.",
          "Bring icing cup to room temperature so it melts like velvet over warm rolls.",
        ],
      },
      {
        heading: "Bake Golden",
        bullets: [
          "Preheat oven to 350°F (allow 20 extra minutes after the beep so oven reaches true temperature).",
          "Bake uncovered for 22–28 minutes (28–35 minutes for 9×9 pan) until lightly golden on top and centers are cooked through.",
          "Spread icing generously while warm and serve immediately.",
        ],
      },
    ],
  },
  {
    id: "biscuits",
    title: "Southern Biscuits",
    badge: "Savory",
    summary: "Bake straight from frozen for the highest rise. Flaky, buttery gluten-free biscuits in under 25 minutes — no thawing required.",
    image: "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4604390632.jpg",
    steps: [
      {
        heading: "Bake Straight From Frozen",
        bullets: [
          "Preheat oven to 400°F (plus 20 extra minutes after beep for full heat).",
          "Place frozen biscuits on a parchment-lined sheet pan spaced 1 inch apart (or touching slightly for softer sides).",
          "Bake 20–24 minutes until tops are tall and golden brown. Brush with melted butter right out of the oven.",
        ],
      },
    ],
  },
  {
    id: "mac-n-cheese",
    title: "Mac n' Cheese 9×9",
    badge: "Family Favorite",
    summary: "Our fan-favorite 9×9 mac n' cheese pan (classic or dairy-free vegan). Defrost overnight and bake covered, then uncovered for a bubbly golden finish.",
    image: "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005680/5755929596.jpg",
    steps: [
      {
        heading: "Thaw & Bake",
        bullets: [
          "Defrost pan overnight in the refrigerator.",
          "Preheat oven to 350°F (plus 20 extra minutes). Cover tightly with foil and bake 30 minutes.",
          "Remove foil and bake an additional 10–15 minutes until edges bubble and top turns golden.",
        ],
      },
    ],
  },
  {
    id: "pizzas",
    title: "Take & Bake Pizzas & Dough",
    badge: "Crispy Crust",
    summary: "Choose a pizza stone (recommended), direct oven rack, or aluminum tray for a crust that transforms what you thought gluten-free pizza could be.",
    image: "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696004980/5755927564.jpg",
    steps: [
      {
        heading: "Pizza Stone Method (Recommended)",
        bullets: [
          "Place pizza stone in oven and preheat to 425°F for a full 30–40 minutes.",
          "Slide pizza onto the hot stone and bake 14–18 minutes until crust is crisp and cheese is bubbling.",
          "For raw Pizza Dough Balls: thaw overnight in fridge, bring to room temp 45 min, stretch on oiled parchment, top, and bake 14–16 min.",
        ],
      },
    ],
  },
  {
    id: "brunch-bakes",
    title: "Breakfast & Brunch Bakes",
    badge: "Weekend Ready",
    summary: "Includes our Bread Pudding, French Toast Casserole, and Savory Breakfast Strata. Ideal for holidays and effortless family brunches.",
    image: "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/4708925764.jpg",
    steps: [
      {
        heading: "Bake Warm & Custardy",
        bullets: [
          "Thaw in the fridge overnight before baking.",
          "Preheat oven to 350°F (plus 20 min). Bake covered 25 minutes, then uncover 10–15 minutes until center is set and streusel/top is golden.",
        ],
      },
    ],
  },
  {
    id: "pie-crust-stuffing",
    title: "Pie Crust & Holiday Stuffing",
    badge: "Holiday Staples",
    summary: "Our 9\" flaky take-and-bake pie crust and 9×9 homemade gluten-free stuffing make holiday cooking effortless and 100% celiac safe.",
    image: "/images/holiday-thanksgiving.webp",
    steps: [
      {
        heading: "Pie Crust & Stuffing Tips",
        bullets: [
          "9\" Pie Crust: Par-bake at 375°F for 12–15 minutes with pie weights, or fill directly and follow your favorite pie recipe.",
          "9×9 Stuffing Pan: Thaw overnight, add warm broth if desired for extra moisture, bake covered at 350°F for 25 min then uncovered 10 min for crisp edges.",
        ],
      },
    ],
  },
];

export const BREAD_CARE_GUIDES: InstructionGuide[] = [
  {
    id: "artisan-loaf",
    title: "Artisan & Rustic Garlic Herb",
    badge: "2–3 Days Counter",
    counterShelfLife: "Stays fresh on the countertop for 2–3 days after purchase.",
    summary: "Slice before freezing so you can pull warm bakery toast or soft sandwiches anytime.",
    image: "/images/artisan-bread.webp",
    steps: [
      {
        heading: "Freezing Slices",
        bullets: [
          "Slice remaining loaf to your desired thickness.",
          "Arrange slices on a clean cookie sheet in the freezer until cold, then transfer into a sealed freezer bag.",
        ],
      },
      {
        heading: "Reheating & Toasting",
        bullets: [
          "For soft slices: wrap in a damp paper towel and microwave in 15-second bursts, flipping each interval.",
          "For toasting: toast straight from frozen at a slightly lower setting than wheat bread for even golden color.",
          "Full uncut frozen loaf: bake at 400°F loosely covered in foil (mist lightly with water) for 50 min; rest 30 min before slicing.",
        ],
      },
    ],
  },
  {
    id: "white-sandwich",
    title: "White Sandwich Bread",
    badge: "2–3 Days Counter",
    counterShelfLife: "Stays fresh on the countertop for 2–3 days after purchase.",
    summary: "Soft, sturdy slices designed for everyday sandwiches and crisp morning toast.",
    image: "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/766439048/5087223134.jpg",
    steps: [
      {
        heading: "Freezing & Reheating",
        bullets: [
          "Pre-slice and flash-chill on a cookie sheet before storing in a sealed freezer bag.",
          "Wrap frozen slices in a damp paper towel and microwave in 15-second bursts until soft and pillowy.",
          "Full uncut frozen loaf: mist with water, tent loosely with foil, bake at 375°F for 50 minutes, and rest 30 minutes before slicing.",
        ],
      },
    ],
  },
  {
    id: "bagels-buns",
    title: "Bagels, Burger & Hot Dog Buns",
    badge: "2 Days Counter",
    counterShelfLife: "Best enjoyed fresh within 2 days on the countertop, then freeze.",
    summary: "Steam-revive in seconds or butter-toast in a skillet or air fryer for restaurant-grade texture.",
    image: "/images/bagel-scene.webp",
    steps: [
      {
        heading: "Soft & Steamy Revival",
        bullets: [
          "Freeze on a sheet pan 30–60 minutes, then move to a freezer bag.",
          "Wrap frozen bagel or bun in a damp paper towel and microwave in 15–20 second intervals, flipping each time.",
          "Let buns sit wrapped for 1–2 minutes to steam into pillowy softness.",
        ],
      },
      {
        heading: "Skillet or Air Fryer Finish",
        bullets: [
          "Skillet: melt a pat of butter over medium-low heat and toast cut-side down until golden.",
          "Air Fryer: place sliced halves cut-side down at 350°F for 3–5 minutes.",
        ],
      },
    ],
  },
  {
    id: "dinner-rolls",
    title: "Dinner Rolls & Baguettes",
    badge: "2 Days Counter",
    counterShelfLife: "Stays fresh on the countertop for 2 days after purchase.",
    summary: "Warm straight from your oven and brush with melted butter for fresh-baked dinner magic.",
    image: "https://d2j6dbq0eux0bg.cloudfront.net/images/84401509/products/696005892/4543409055.jpg",
    steps: [
      {
        heading: "Oven 'Fresh-Baked' Method",
        bullets: [
          "Dinner Rolls: preheat oven to 300°F, space rolls 1 inch apart on a sheet pan, bake 15–20 min, and brush immediately with melted butter.",
          "Quick Soft Rolls: wrap in a damp paper towel and microwave 30 seconds (plus 15-second bursts if needed).",
          "Baguettes: bake uncut frozen baguette at 400°F lightly misted and loosely foiled for 45–50 minutes.",
        ],
      },
    ],
  },
];

export const FAQS: FaqItem[] = [
  {
    category: "Allergens & Ingredients",
    question: "Are you a dedicated gluten-free bakery?",
    answer: "Yes — 100%. Every single item we make is gluten free, and our kitchen is a dedicated gluten-free facility. There is no gluten in our building — ever. That means zero cross-contamination from shared equipment, shared surfaces, or shared airspace.",
  },
  {
    category: "Allergens & Ingredients",
    question: "Is Awaken Bakery safe for people with celiac disease?",
    answer: "Yes. Our founder Tiana was diagnosed with celiac disease in 2011, so celiac safety isn't just a policy — it's personal. Many of our most loyal customers are highly sensitive celiacs who enjoy everything in our case without reaction.",
  },
  {
    category: "Allergens & Ingredients",
    question: "Do you have dairy-free, vegan, and egg-free options?",
    answer: "Yes! We carry clearly labeled dairy-free, vegan, and egg-free treats every single day — and we can also accommodate allergy-specific custom cakes and cupcakes.",
  },
  {
    category: "Allergens & Ingredients",
    question: "Are you nut-free and soy-free?",
    answer: "We never use nut flour in our baking, use nuts only periodically with clear labeling, and are 99% soy-free (actively working toward 100%). We use only traditional granulated and brown sugars — no artificial sweeteners.",
  },
  {
    category: "Ordering",
    question: "Can I walk in, or should I order ahead?",
    answer: "Both! Walk-ins are always welcome, and ordering ahead via our Awaken Bakery App or website guarantees your favorites before we sell out — especially on Saturdays (batches often sell out by 11am).",
  },
  {
    category: "Ordering",
    question: "What time do you serve breakfast vs. lunch?",
    answer: "Breakfast is served from open until 10:30am. Lunch starts at 10:30am and runs until 30 minutes before closing. Espresso, coffee, and bakery treats are available all day!",
  },
  {
    category: "Ordering",
    question: "Do you offer delivery and nationwide shipping?",
    answer: "Yes! Local delivery is available through our app (powered by DoorDash for a flat $8 fee) for daily menu items. We also ship our gluten-free breads, bagels, buns, and dry baking mixes nationwide across the US!",
  },
  {
    category: "Custom Orders & Events",
    question: "How far in advance do I need to order a custom cake?",
    answer: "Custom cakes and cupcakes require a minimum of 4 days advance notice via shop.awakenbg.com or by calling (270) 551-4440. We book up quickly, so ordering early is strongly encouraged — we also keep a small grab-and-go cake freezer in store!",
  },
  {
    category: "Custom Orders & Events",
    question: "Do you do wedding cakes or corporate orders?",
    answer: "While we don't make tiered wedding cakes, couples love our 6\" or 8\" custom cutting cakes paired with full gluten-free dessert tables! We also welcome corporate and bulk dessert orders arranged by phone at (270) 551-4440.",
  },
  {
    category: "Custom Orders & Events",
    question: "What is your cancellation & refund policy?",
    answer: "For daily menu issues, contact us the same day and we'll make it right. Custom orders follow a sliding scale: 7+ days notice = full refund; 3–6 days = 50% refund; under 72 hours = non-refundable.",
  },
  {
    category: "Visiting Us",
    question: "Is there free parking, seating, and WiFi?",
    answer: "Yes! Park free in front of our Awaken Bakery signs in our downtown lot during business hours. Inside 300 E Main Ave we offer cozy café seating, espresso, free WiFi, and a step-free wheelchair-accessible entrance and restroom.",
  },
  {
    category: "The Awaken App",
    question: "How do rewards work in the Awaken Bakery App?",
    answer: "Download free on iOS or Android to get 10% off your first order, earn 1 point per dollar (2× on Double Points Wednesdays!), unlock a yearly birthday discount, and get first dibs on fresh bakes.",
  },
];
