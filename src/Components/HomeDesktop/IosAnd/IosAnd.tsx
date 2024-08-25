import main from "../../../assets/Ios/friends-laughing-using-mobiles 2.png";
import orderImg from "../../../assets/Ios/LOGO 1.png";
import Ios from "../../../assets/Ios/group2-removebg-preview (1).png";
import Android from "../../../assets/Ios/Group.png";

export default function IosAnd() {
    return (
        <>
            <div className="xl:w-[1528px] h-[611px] bg-[#E0E1DC] flex mx-auto my-16 relative">
                <div className="w-[855px] h-[651px] relative z-20 mt-[-40px]">
                    <img src={main} className="w-[850px] h-[650px]" alt="main" />
                </div>
                <div className="w-[858px] h-[81px] bg-black text-white rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 -translate-x-1 z-10 mr-16">
                    <h3 className="text-[54px] font-medium flex justify-center pl-56 pr-8">
                        <span className="text-[#FC8A06] underline">Personalised</span> & Instant
                    </h3>
                </div>
                <div className="flex flex-col items-center justify-center z-30">
                    <div className="flex items-center">
                        <span className="mr-4">
                            <img src={orderImg} alt="logo" />
                        </span>
                        <span className="text-[68px] font-bold ml-[-16px]">ing is more</span>
                    </div>
                    <div className="mt-[100px]">
                        <h3 className="font-regular text-[24px] text-center">
                            Download the Order.uk app for faster ordering
                        </h3>
                    </div>
                    <div className="flex gap-2 mt-4">
                        <img src={Ios} alt="iOS download" />
                        <img src={Android} alt="Android download" />
                    </div>
                </div>
            </div>
        </>
    );
}
