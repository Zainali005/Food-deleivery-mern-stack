import Resturant1 from "../../../assets/Resturants/Group 16.png";
import Resturant2 from "../../../assets/Resturants/Group 17.png";
import Resturant3 from "../../../assets/Resturants/Group 18.png";
import Resturant4 from "../../../assets/Resturants/Group 19.png";
import Resturant5 from "../../../assets/Resturants/Group 20.png";
import Resturant6 from "../../../assets/Resturants/Group 21.png";



const Resturants = () => {
  return (
    <>
      <div>
        <div>
          <h3 className="font-bold text-[32px] my-10 lg:mx-24">Popular Resturants</h3>
        </div>
        <div className="lg:mx-24 gap-2 grid md:grid-cols-3 grid-cols-1 lg:grid-cols-6">
          <div><img src={Resturant1} alt="Resturant1" /></div>
          <div><img src={Resturant2} alt="Resturant2" /></div>
          <div><img src={Resturant3} alt="Resturant3" /></div>
          <div><img src={Resturant4} alt="Resturant4" /></div>
          <div><img src={Resturant5} alt="Resturant5" /></div>
          <div><img src={Resturant6} alt="Resturant6" /></div>

        </div>
      </div>
    </>
  )
}

export default Resturants