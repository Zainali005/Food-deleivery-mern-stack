import { CiStar } from "react-icons/ci";
import { RiMapPin2Line } from "react-icons/ri";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { IoArrowDownCircleOutline } from "react-icons/io5";
<LiaShoppingBasketSolid />
export default function Header() {
    return (
        <>
            <div className="flex justify-center items-center mx-auto bg-[#FAFAFA] w-full lg:w-[1024px] xl:w-[1528px]">
                <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-x-24">
                    <div className="flex items-center space-x-2">
                        <div className="text-yellow-400 text-2xl"><CiStar /></div>
                        <div> Get 5% Off your first order, <span className="text-[#FC8A06] underline">Promo: ORDER5</span></div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div><RiMapPin2Line /></div>
                        <div>Regent Street, A4, A4201, London <span className="text-[#FC8A06] underline">Change Location</span></div>
                    </div>
                    <div className="flex items-center bg-[#028643] text-white text-[16px] px-4 py-4 rounded-lg w-[350px]">
                        <div className="pr-4 border-r border-white text-[30px]"><LiaShoppingBasketSolid /></div>
                        <div className="flex justify-between items-center flex-1 pl-4">
                            <span className="border-r  pr-4">23 Items</span>
                            <span className="border-r h-full pr-4">GBP 79.89</span>
                            <span className="mr-4 text-[30px]"><IoArrowDownCircleOutline /></span>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}