import Logo from "../../../assets/Ios/LOGO 1.png";
import playstore from "../../../assets/Ios/Group.png";
import snapchat from "../../../assets/socialmedia/Snapchat.svg";
import tiktok from "../../../assets/socialmedia/TikTok.svg";
import facebook from "../../../assets/socialmedia/Facebook.svg";
import instagram from "../../../assets/socialmedia/Instagram.svg";
import Footer2 from "./Footer2";

export default function Footer() {
    return (
        <>
        <div className="bg-[#D9D9D9] text-black p-6">
            <div className="flex flex-wrap justify-between">
                <div className="flex flex-col space-y-4">
                    <img src={Logo} alt="logo" className="w-32" />
                    <img src={playstore} alt="playstore" className="w-32" />
                    <p className="text-sm">Company #490039-445, Registered with<br /> House of Companies</p>
                </div>
                <div className="flex flex-col space-y-4">
                    <p className="text-lg font-bold">Get Exclusive Deals in your Inbox</p>
                    <div className="relative w-full max-w-xs">
                        <input
                            type="text"
                            className="border border-gray-300 p-3 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-[#FC8A06] focus:border-transparent"
                            placeholder="youremail@gmail.com"
                        />
                        <button className="absolute right-0 top-0 h-full px-6 rounded-full bg-[#FC8A06] text-white font-bold">
                            Search
                        </button>
                    </div>
                    <p className="text-xs my-2">We won’t spam, read our email policy</p>
                    <div className="flex space-x-4">
                        <img src={facebook} alt="facebook" className="w-6" />
                        <img src={instagram} alt="instagram" className="w-6" />
                        <img src={tiktok} alt="tiktok" className="w-6" />
                        <img src={snapchat} alt="snapchat" className="w-6" />
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h3 className="font-semibold">Legal Pages</h3>
                    <div><a href="#" className="hover:underline">Terms & Conditions</a></div>
                    <div><a href="#" className="hover:underline">Privacy Policy</a></div>
                    <div><a href="#" className="hover:underline">Cookies</a></div>
                    <div><a href="#" className="hover:underline">Modern Slavery Statement</a></div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h3 className="font-semibold">Important Links</h3>
                    <div><a href="#" className="hover:underline">Get help</a></div>
                    <div><a href="#" className="hover:underline">Add your restaurant</a></div>
                    <div><a href="#" className="hover:underline">Sign up to deliver</a></div>
                    <div><a href="#" className="hover:underline">Create a business account</a></div>
                </div>
            </div>
        </div>
            <Footer2/>
            </>
    );
}
