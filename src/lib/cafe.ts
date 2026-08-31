export const CAFE = {
  name: "Lady Birds Cafe",
  shortName: "Lady Birds Cafe",
  city: "Sheridan",
  state: "AR",
  zip: "72150",
  street: "120 W Center St",
  addressLine: "120 W Center St, Sheridan, AR 72150",
  phoneDisplay: "(870) 942-4163",
  phoneTel: "+18709424163",
  facebook:
    "https://www.facebook.com/p/Lady-Birds-Cafe-100089774571141/",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=120+W+Center+St,+Sheridan,+AR+72150",
  mapsSearch:
    "https://www.google.com/maps/search/?api=1&query=120+W+Center+St,+Sheridan,+AR+72150",
  mapsEmbed:
    "https://maps.google.com/maps?q=120%20W%20Center%20St%2C%20Sheridan%2C%20AR%2072150&z=16&output=embed",
  appleMaps:
    "https://maps.apple.com/?daddr=120+W+Center+St,+Sheridan,+AR+72150",
  timezone: "America/Chicago",
  promise: "Downtown Sheridan. Plate comes out hot.",
  hoursStatus: "directory" as const,
  menuStatus: "directory" as const,
} as const;

export type PhotoSource =
  | "facebook"
  | "facebook-guest"
  | "arkansas-living"
  | "directory-guest"
  | "directory";

export type Photo = {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
  source: PhotoSource;
};

export const photos = {
  hero: {
    src: "/photos/storefront.webp",
    srcSet:
      "/photos/storefront-720.webp 720w, /photos/storefront-1200.webp 1200w, /photos/storefront-1400.webp 1400w",
    width: 720,
    height: 450,
    alt: "Lady Birds Cafe on Center Street — black awning, circular window logo, and the front door",
    source: "directory",
  },
  catfish: {
    src: "/photos/catfish.webp",
    srcSet:
      "/photos/catfish-800.webp 800w, /photos/catfish-1400.webp 1400w, /photos/catfish-2000.webp 2000w",
    width: 2000,
    height: 1271,
    alt: "Fried catfish plate on a metal tray with hush puppies, steak fries, coleslaw, fried corn, and shrimp",
    source: "arkansas-living",
  },
  cfs: {
    src: "/photos/cfs.webp",
    srcSet:
      "/photos/cfs-800.webp 800w, /photos/cfs-1400.webp 1400w, /photos/cfs-2000.webp 2000w",
    width: 2000,
    height: 1320,
    alt: "Chicken fried steak with cream gravy, mashed potatoes, and green beans",
    source: "arkansas-living",
  },
  tacos: {
    src: "/photos/tacos.webp",
    srcSet:
      "/photos/tacos-800.webp 800w, /photos/tacos-1400.webp 1400w, /photos/tacos-2000.webp 2000w",
    width: 2000,
    height: 1229,
    alt: "Firecracker tacos with fried shrimp, cabbage, pico de gallo, avocado, and salsa",
    source: "arkansas-living",
  },
  salmon: {
    src: "/photos/salmon.webp",
    srcSet:
      "/photos/salmon-800.webp 800w, /photos/salmon-1400.webp 1400w, /photos/salmon-2000.webp 2000w",
    width: 2000,
    height: 1343,
    alt: "Caribbean salmon with cilantro rice, grilled vegetables, shrimp, and pineapple",
    source: "arkansas-living",
  },
  exterior: {
    src: "/photos/exterior.webp",
    srcSet: "/photos/exterior-800.webp 800w, /photos/exterior-1200.webp 1200w, /photos/exterior-1400.webp 1600w",
    width: 1600,
    height: 670,
    alt: "Lady Birds Cafe in a red brick building on Center Street, with a teal bird mural by the door",
    source: "arkansas-living",
  },
  servers: {
    src: "/photos/servers.webp",
    srcSet: "/photos/servers-700.webp 700w, /photos/servers-1200.webp 1200w",
    width: 1200,
    height: 1143,
    alt: "Servers in the dining room at Lady Birds Cafe",
    source: "arkansas-living",
  },
  mural: {
    src: "/photos/mural.webp",
    srcSet: "/photos/mural-600.webp 600w, /photos/mural-725.webp 725w",
    width: 725,
    height: 975,
    alt: "Teal bird mural painted on the brick wall outside Lady Birds Cafe",
    source: "arkansas-living",
  },
  bird: {
    src: "/photos/fb-bird.webp",
    srcSet: "/photos/fb-bird-600.webp 600w, /photos/fb-bird-960.webp 960w",
    width: 960,
    height: 681,
    alt: "Painted bird over a nest of food — Lady Birds Cafe Facebook page photo",
    source: "facebook",
  },
  hopflop: {
    src: "/photos/hopflop.webp",
    srcSet: "/photos/hopflop-552.webp 350w",
    width: 350,
    height: 490,
    alt: "Catfish dinner tray with hush puppies, fries, slaw, and beans, posted by a guest on Facebook",
    source: "facebook-guest",
  },
  fajitas: {
    src: "/photos/fajitas.webp",
    srcSet: "/photos/fajitas-800.webp 800w, /photos/fajitas-1000.webp 1000w",
    width: 1000,
    height: 563,
    alt: "Sizzling chicken, steak, and shrimp fajitas on a skillet at Lady Birds Cafe",
    source: "directory-guest",
  },
  fishTacos: {
    src: "/photos/fish-tacos.webp",
    srcSet: "/photos/fish-tacos-560.webp 560w",
    width: 562,
    height: 1000,
    alt: "Fish tacos with avocado, cabbage, and lime at Lady Birds Cafe",
    source: "directory-guest",
  },
  gravy: {
    src: "/photos/detail-gravy.webp",
    srcSet: "/photos/detail-gravy-700.webp 700w",
    width: 700,
    height: 462,
    alt: "Close crop of cream gravy over chicken fried steak",
    source: "arkansas-living",
  },
  sides: {
    src: "/photos/detail-sides.webp",
    srcSet: "/photos/detail-sides-700.webp 700w",
    width: 700,
    height: 494,
    alt: "Hush puppies, fries, and fried corn from the catfish tray",
    source: "arkansas-living",
  },
} as const satisfies Record<string, Photo>;

export type DayKey = "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";

export type DayHours = {
  key: DayKey;
  label: string;
  short: string;
  open: number | null;
  close: number | null;
};

/** Minutes from midnight. Tuesday closed. DIRECTORY — not owner-confirmed. */
export const WEEK_HOURS: DayHours[] = [
  { key: "mon", label: "Monday", short: "Mon", open: 10 * 60 + 30, close: 20 * 60 },
  { key: "tue", label: "Tuesday", short: "Tue", open: null, close: null },
  { key: "wed", label: "Wednesday", short: "Wed", open: 10 * 60 + 30, close: 21 * 60 },
  { key: "thu", label: "Thursday", short: "Thu", open: 10 * 60 + 30, close: 21 * 60 },
  { key: "fri", label: "Friday", short: "Fri", open: 10 * 60 + 30, close: 21 * 60 },
  { key: "sat", label: "Saturday", short: "Sat", open: 10 * 60 + 30, close: 21 * 60 },
  { key: "sun", label: "Sunday", short: "Sun", open: 11 * 60, close: 16 * 60 },
];

export type Dish = {
  id: string;
  name: string;
  note: string;
  photo?: keyof typeof photos;
  status: "directory" | "photographed";
};

export const FEATURED_DISHES: Dish[] = [
  {
    id: "cfs",
    name: "Chicken fried steak",
    note: "Cream gravy. Mashed potatoes, green beans.",
    photo: "cfs",
    status: "photographed",
  },
  {
    id: "catfish",
    name: "Catfish dinner",
    note: "Hand-breaded. Comes out on a tray.",
    photo: "catfish",
    status: "photographed",
  },
  {
    id: "tacos",
    name: "Firecracker tacos",
    note: "Fried shrimp. Pico, avocado, heat.",
    photo: "tacos",
    status: "photographed",
  },
  {
    id: "salmon",
    name: "Caribbean salmon",
    note: "Cilantro rice, grilled vegetables, shrimp.",
    photo: "salmon",
    status: "photographed",
  },
];

export const GUEST_DISHES: Dish[] = [
  {
    id: "fajitas",
    name: "Fajitas",
    note: "Chicken, steak, shrimp. Skillet comes out hot.",
    photo: "fajitas",
    status: "photographed",
  },
  {
    id: "fish-tacos",
    name: "Fish tacos",
    note: "Avocado, cabbage, lime.",
    photo: "fishTacos",
    status: "photographed",
  },
  {
    id: "tray",
    name: "The tray",
    note: "A regular posted this.",
    photo: "hopflop",
    status: "photographed",
  },
];

export const ALSO_ORDERED: Dish[] = [
  {
    id: "philly",
    name: "Philly cheese steak egg rolls",
    note: "Handmade. White cheese sauce on the side.",
    status: "directory",
  },
  {
    id: "southwest",
    name: "Southwest egg rolls",
    note: "Made here. Not the frozen bag.",
    status: "directory",
  },
  {
    id: "quesadilla",
    name: "Chicken bacon ranch quesadilla",
    note: "A regular order.",
    status: "directory",
  },
  {
    id: "poboy",
    name: "Shrimp po’boy",
    note: "When it’s on.",
    status: "directory",
  },
  {
    id: "burgers",
    name: "Burgers, tacos, salads",
    note: "Call if you want the rest of the list.",
    status: "directory",
  },
];

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: CAFE.name,
  telephone: CAFE.phoneTel,
  url: CAFE.facebook,
  sameAs: [CAFE.facebook],
  address: {
    "@type": "PostalAddress",
    streetAddress: CAFE.street,
    addressLocality: CAFE.city,
    addressRegion: CAFE.state,
    postalCode: CAFE.zip,
    addressCountry: "US",
  },
  servesCuisine: ["Southern", "Tex-Mex", "American"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Monday",
      opens: "10:30",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:30",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "11:00",
      closes: "16:00",
    },
  ],
};
