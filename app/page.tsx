import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FeaturedDrinks from '@/components/FeaturedDrinks'
import Menu from '@/components/Menu'
import Gallery from '@/components/Gallery'
import PetFriendly from '@/components/PetFriendly'
import Reviews from '@/components/Reviews'
import Locations from '@/components/Locations'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedDrinks />
      <Menu />
      <Gallery />
      <PetFriendly />
      <Reviews />
      <Locations />
      <Footer />
    </>
  )
}
