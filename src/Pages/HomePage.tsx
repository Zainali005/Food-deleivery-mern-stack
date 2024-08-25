import Categories from "../Components/HomeDesktop/Categories/Categories"
import Deals from "../Components/HomeDesktop/Deals/Deals"
import Header from "../Components/HomeDesktop/Header/Header"
import Home from "../Components/HomeDesktop/Home/Home"
import IosAnd from "../Components/HomeDesktop/IosAnd/IosAnd"
import Navbar from "../Components/HomeDesktop/Navbar/Navbar"
import Resturants from "../Components/HomeDesktop/Resturants/Resturants"

const HomePage = () => {
  return (
    <>
     <Header />
      <Navbar />
      <Home />
      <Deals/>
      <Categories/>
      <Resturants/>
      <IosAnd/>
      </>
  )
}

export default HomePage