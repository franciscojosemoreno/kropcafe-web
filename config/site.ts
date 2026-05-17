export const siteConfig = {
  name: 'KROP',
  tagline: 'Specialty coffee & good vibes.',
  subtitle: 'Cañitas · Barrio Chino',
  description: 'Buenos Aires · Vegan Friendly · Sin TACC · Pet Friendly',

  instagram: 'https://www.instagram.com/krop.cafe',
  linktree: 'https://linktr.ee/krop.cafe',

  menuOnline: 'https://krop-cafe-caitas.menustic.com',

  featuredDrinks: [
    {
      id: 'matcha',
      name: 'Iced Matcha Mango',
      description: 'Matcha premium con mango fresco. Refrescante, tropical y lleno de energía.',
      image: '/images/drink-matcha.jpg',
    },
    {
      id: 'hibiscus',
      name: 'Hibiscus Tonic',
      description: 'Flores de hibiscus con agua tónica. Floral, cítrico y sin cafeína.',
      image: '/images/drink-hibiscus.jpg',
    },
    {
      id: 'dubai',
      name: 'Iced Latte Dubai',
      description: 'Espresso sobre leche fría con crema de pistacho. El favorito de la casa.',
      image: '/images/drink-dubai.jpg',
    },
  ],

  locations: [
    {
      id: 'canitas',
      name: 'KROP Cañitas',
      address: 'Migueletes 1041',
      neighborhood: 'Cañitas, Buenos Aires',
      mapsUrl: 'https://share.google/GZQ435RYfXAhFYuiG',
      mapSrc: 'https://maps.google.com/maps?q=Migueletes+1041+Buenos+Aires&output=embed',
      hours: 'Lun–Vie 8–20h · Sáb–Dom 9–20h',
      whatsapp: null,
      whatsappLabel: null,
    },
    {
      id: 'barriochino',
      name: 'KROP Barrio Chino',
      address: 'Arribeños 2100',
      neighborhood: 'Barrio Chino, Buenos Aires',
      mapsUrl: 'https://share.google/bVVav9A7pIAcl3JxJ',
      mapSrc: 'https://maps.google.com/maps?q=Barrio+Chino+Buenos+Aires+Arribeños&output=embed',
      hours: 'Lun–Vie 8–20h · Sáb–Dom 9–20h',
      whatsapp: null,
      whatsappLabel: null,
    },
  ],

  petFriendly: true,
  vegan: true,
  sinTACC: true,
}
