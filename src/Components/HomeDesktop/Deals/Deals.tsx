import Deal1 from "../../../assets/Deals/Group 10.png";
import Deal2 from "../../../assets/Deals/Group 11.png";
import Deal3 from "../../../assets/Deals/Group 12.png";

export default function Deals() {
    return (
        <>
            <div className="lg:w-[1024px] w-full xl:w-[1528px] mx-auto px-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <h3 className="text-[20px] lg:text-[32px] font-bold mt-4 lg:mt-0">Up to -40% 🎊 Order.uk exclusive deals</h3>
                    </div>
                    <div>
                        <ul className="flex flex-wrap gap-4 md:gap-6 lg:gap-10 justify-center md:justify-start items-center">
                            <li>
                                <a href="" className="text-gray-700 hover:text-[#FC8A06] transition-colors">Vegaan</a>
                            </li>
                            <li>
                                <a href="" className="text-gray-700 hover:text-[#FC8A06] transition-colors">Sushi</a>
                            </li>
                            <li className="border-[#FC8A06] text-[#FC8A06] border rounded-full p-3 md:p-4">
                                <a href="" className="hover:text-white hover:bg-[#FC8A06] transition-colors">Pizza & Fast food</a>
                            </li>
                            <li>
                                <a href="" className="text-gray-700 hover:text-[#FC8A06] transition-colors">Others</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-6 flex md:flex-row items-center flex-col gap-3">
                    <div><img src={Deal1} className="hover:opacity-90" alt="" /></div>
                    <div><img src={Deal2} className="hover:opacity-90" alt="" /></div>
                    <div><img src={Deal3} className="hover:opacity-90" alt="" /></div>
                </div>
            </div>
        </>
    );
}
