import Categories from "../Components/HomeDesktop/Categories/Categories"
import Count from "../Components/HomeDesktop/Count/Count"
import Deals from "../Components/HomeDesktop/Deals/Deals"
import Footer from "../Components/HomeDesktop/Footer/Footer"
import Header from "../Components/HomeDesktop/Header/Header"
import Home from "../Components/HomeDesktop/Home/Home"
import IosAnd from "../Components/HomeDesktop/IosAnd/IosAnd"
import KnowAbout from "../Components/HomeDesktop/KnowAbout/KnowAbout"
import Navbar from "../Components/HomeDesktop/Navbar/Navbar"
import Resturants from "../Components/HomeDesktop/Resturants/Resturants"
import RideUs from "../Components/HomeDesktop/RideUs/RideUs"

const HomePage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <Deals />
      <Categories />
      <Resturants />
      <IosAnd />
      <RideUs />
      <KnowAbout />
      <Count/>
      <Footer/>
    </>
  )
}

export default HomePage