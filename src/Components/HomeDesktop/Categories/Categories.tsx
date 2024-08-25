import FastFood1 from "../../../assets/Categories/Rectangle 13.png";
import FastFood2 from "../../../assets/Categories/Rectangle 15.png";
import FastFood3 from "../../../assets/Categories/Rectangle 17.png";
import FastFood4 from "../../../assets/Categories/Rectangle 19.png";
import FastFood5 from "../../../assets/Categories/Rectangle 21.png";
import FastFood6 from "../../../assets/Categories/Rectangle 23.png";

export default function Categories() {
    return (
        <>
            <div className="px-4 lg:px-24">
                <div>
                    <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold my-5 text-center lg:text-left">
                        Order.uk Popular Categories 🤩
                    </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <div className="bg-[#F5F5F5] rounded-lg text-center">
                        <div className="flex justify-center">
                            <img src={FastFood1} alt="Burgers and Fast food" className="w-full h-auto" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[16px] mt-2">Burgers and Fast food</h3>
                        </div>
                        <div>
                            <p className="text-[13px]">21 Restaurants</p>
                        </div>
                    </div>
                    <div className="bg-[#F5F5F5] rounded-lg text-center">
                        <div className="flex justify-center">
                            <img src={FastFood2} alt="Salads" className="w-full h-auto" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[16px] mt-2">Salads</h3>
                        </div>
                        <div>
                            <p className="text-[13px]">32 Restaurants</p>
                        </div>
                    </div>
                    <div className="bg-[#F5F5F5] rounded-lg text-center">
                        <div className="flex justify-center">
                            <img src={FastFood3} alt="Pasta & Casuals" className="w-full h-auto" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[16px] mt-2">Pasta & Casuals</h3>
                        </div>
                        <div>
                            <p className="text-[13px]">4 Restaurants</p>
                        </div>
                    </div>
                    <div className="bg-[#F5F5F5] rounded-lg text-center">
                        <div className="flex justify-center">
                            <img src={FastFood4} alt="Pizza" className="w-full h-auto" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[16px] mt-2">Pizza</h3>
                        </div>
                        <div>
                            <p className="text-[13px]">32 Restaurants</p>
                        </div>
                    </div>
                    <div className="bg-[#F5F5F5] rounded-lg text-center">
                        <div className="flex justify-center">
                            <img src={FastFood5} alt="Breakfast" className="w-full h-auto" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[16px] mt-2">Breakfast</h3>
                        </div>
                        <div>
                            <p className="text-[13px]">4 Restaurants</p>
                        </div>
                    </div>
                    <div className="bg-[#F5F5F5] rounded-lg text-center">
                        <div className="flex justify-center">
                            <img src={FastFood6} alt="Soups" className="w-full h-auto" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[16px] mt-2">Soups</h3>
                        </div>
                        <div>
                            <p className="text-[13px]">32 Restaurants</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
