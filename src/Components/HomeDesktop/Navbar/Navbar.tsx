import { useState } from "react";
import NavImg from "../../../assets/Nav/Navbar.svg";
import { RiAccountCircleLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <div className="flex justify-between items-center mt-6 px-6">
                <div>
                    <img src={NavImg} height={53} width={215} alt="Logo" />
                </div>
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-3xl focus:outline-none">
                        {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
                    </button>
                </div>
                <div className="hidden lg:flex lg:space-x-6">
                    <ul className="flex justify-center items-center space-x-6 cursor-pointer">
                        <li className="bg-[#FC8A06] text-white px-8 p-2 rounded-full">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Browse Menu</a>
                        </li>
                        <li>
                            <a href="#">Special Offers</a>
                        </li>
                        <li>
                            <a href="#">Restaurants</a>
                        </li>
                        <li>
                            <a href="#">Track Order</a>
                        </li>
                    </ul>
                </div>
                <div className="hidden lg:flex bg-[#03081F] text-white p-3 rounded-full justify-center items-center space-x-2 cursor-pointer">
                    <RiAccountCircleLine />
                    <span>Login/Signup</span>
                </div>
            </div>
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        <li className="bg-[#FC8A06] text-white px-8 p-2 rounded-full">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Browse Menu</a>
                        </li>
                        <li>
                            <a href="#">Special Offers</a>
                        </li>
                        <li>
                            <a href="#">Restaurants</a>
                        </li>
                        <li>
                            <a href="#">Track Order</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
