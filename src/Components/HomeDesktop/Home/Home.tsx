import image1 from "../../../assets/Home/image 1.png";
import Logo2 from "../../../assets/Home/LOGO 2.png";
import image2 from "../../../assets/Home/Untitled-1 1.png";
import image3 from "../../../assets/Home/Untitled-2 1.png";

export default function Home() {
    return (
        <>
            <div className="xl:w-[1528px] lg:w-[1024px] w-full flex bg-[#FBFBFB] mx-auto justify-center mt-10s">
                <div className="flex justify-center mx-4 flex-col lg:h-[610px] lg:flex-col">
                    <div>
                        <h6 className="text-[16px]">Order Restaurant food, takeaway and groceries.</h6>
                    </div>
                    <div>
                        <h3 className="text-[52px]">
                            Feast Your Senses,<span className="block text-[#FC8A06]">Fast and Fresh</span>
                        </h3>

                    </div>
                    <div>
                        <p className="text-[13px] my-5">Enter a postcode to see what we deliver</p>
                    </div>
                    <div className="relative w-[373px]">
                        <input
                            type="text"
                            className="border p-3 rounded-full pr-20 w-full"
                            placeholder="e.g . EC4R3TE"
                        />
                        <button className="absolute right-0 top-0 h-full px-6 rounded-full bg-[#FC8A06] text-white text-[16px] font-bold w-[188px]">
                            Search
                        </button>
                    </div>

                </div>
                <div className="lg:flex hidden items-center w-full">
                    <div className="absolute right-0">
                        <img src={image1} alt="" />
                    </div>
                    <div className="absolute xl:right-72 right-6 top-[270px]">
                        <img src={image3} alt="" />
                    </div>
                    <div className="absolute xl:right-80 right-10 lg:top-[190px] xl:top-[180px]">
                        <img src={image2} alt="" />
                    </div>
                    <div className="absolute right-0">
                        <div className="bg-white text-black w-[390px] h-[127px] lg:m-10 rounded-xl p-5 leading-8">
                            <div >
                                <div><img src={Logo2} alt="" /></div>
                            </div>
                            <h4 className="text-[12px] font-semibold">We’ve Received your order!</h4>
                            <h4 className="text-[12px] font-semibold">Awaiting Restaurant acceptance </h4>

                        </div>
                        <div className="bg-white text-black w-[390px] h-[127px] lg:m-16 rounded-xl p-5 leading-8">
                            <div>
                                <div><img src={Logo2} alt="" /></div>
                            </div>
                            <h4 className="text-[12px] font-semibold">Order Accepted! </h4>
                            <h4 className="text-[12px] font-semibold">Your order will be delivered shortly</h4>

                        </div>
                        <div className="bg-white text-black w-[390px] h-[127px] lg:m-10 rounded-xl p-5 leading-8">
                            <div >
                                <div><img src={Logo2} alt="" /></div>
                            </div>
                            <h4 className="text-[12px] font-semibold">Your rider's nearby</h4>
                            <h4 className="text-[12px] font-semibold">They're almost there - get ready!</h4>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}