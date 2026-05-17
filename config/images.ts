export const images = {
  logo: '/images/logo.png',
  carousel: [
    '/images/carousel-1.jpg',
    '/images/carousel-2.jpg',
    '/images/carousel-3.jpg',
    '/images/carousel-4.jpg',
  ],
  gallery: Array.from({ length: 12 }, (_, i) => `/images/gallery-${i + 1}.jpg`),
  petFriendly: ['/images/pet-1.jpg', '/images/pet-2.jpg'],
  menuFresh: '/images/menu-fresh.jpg',
  drinkMatcha:  '/images/drink-matcha.png',
  drinkHibiscus: '/images/drink-hibiscus.png',
  drinkDubai:   '/images/drink-dubai.png',
}
