export const navigationItems = [] as const;

export const partnerLogos = [
  {
    name: "datalogic",
    label: "Datalogic",
    image: "/home/datalogic.png",
    width: 261,
    height: 46,
  },
  {
    name: "honeywell",
    label: "Honeywell",
    image: "/home/honeywell.png",
    width: 207,
    height: 40,
  },
  {
    name: "zebra",
    label: "Zebra",
    image: "/home/zebra.png",
    width: 254,
    height: 84,
  },
] as const;

export const serviceCards = [
  {
    title: "Ecommerce",
    description:
      "Acquista dispositivi professionali online in maniera guidata e riducendo i tempi di attesa.",
    image: "/home/service-selection.png",
  },
  {
    title: "System integration",
    description:
      "Soluzioni su misura, consulenza, configurazione e supporto dedicato.",
    image: "/home/service-maintenance.png",
  },
  {
    title: "Software",
    description:
      "Soluzioni software scalabili per la logistica e la digitalizzazione delle imprese.",
    image: "/home/service-coverage.png",
  },
  {
    title: "Servizi",
    description:
      "Help desk, riparazioni e noleggio per continuità operativa.",
    image: "/home/hero-warehouse.png",
  },
] as const;

export const highlights = [
  "Qualità",
  "Affidabilità",
  "Trasparenza",
] as const;

export const stats = [
  {
    value: "10.000+",
    label: "prodotti e configurazioni disponibili",
    shape: {
      image: "/home/stat-shape-1.svg",
      boxWidth: 196.929,
      boxHeight: 204.025,
      innerWidth: 156.279,
      innerHeight: 166.749,
      left: 35,
      top: -62,
      rotate: 16.36,
    },
  },
  {
    value: "50.000+",
    label: "unità consultabili tra stock e disponibilità aggregate",
    shape: {
      image: "/home/stat-shape-2.svg",
      boxWidth: 192.069,
      boxHeight: 199.686,
      innerWidth: 156.279,
      innerHeight: 166.749,
      left: 36.43,
      top: -50.83,
      rotate: -14.04,
    },
  },
  {
    value: "20+",
    label: "brand e linee tecnologiche per logistica, stampa e tracciabilità",
    shape: {
      image: "/home/stat-shape-3.svg",
      boxWidth: 192.069,
      boxHeight: 199.686,
      innerWidth: 156.279,
      innerHeight: 166.749,
      left: 36.43,
      top: -50.83,
      rotate: -14.04,
    },
  },
  {
    value: "1.200+",
    label: "unità consultabili tra stock e disponibilità aggregate",
    shape: {
      image: "/home/stat-shape-4.svg",
      boxWidth: 172.459,
      boxHeight: 181.807,
      innerWidth: 156.279,
      innerHeight: 166.749,
      left: 46.23,
      top: -41.89,
      rotate: 5.85,
    },
  },
] as const;

export const footerCategories = navigationItems;

export const footerColumns = [
  {
    title: "Customer Care",
    items: [
      "label",
      "label",
      "label",
      "label",
      "label",
      "label",
      "label",
    ],
  },
  {
    title: "Company",
    items: [
      "Careers",
      "label",
      "label",
      "label",
      "label",
      "label",
      "label",
    ],
  },
  {
    title: "Legal",
    items: [
      "Privacy Policy",
      "Cookie Policy",
      "label",
      "label",
      "label",
      "label",
      "label",
    ],
  },
] as const;

export const assets = {
  heroImage: "/home/hero-warehouse.png",
  logo: "/home/logo-dark.png",
  logoLight: "/home/logo-light.png",
  avatar: "/home/avatar.png",
} as const;
