import OrderFood1 from "../../../assets/OrderFood/food 1.png";
import OrderFood2 from "../../../assets/OrderFood/order 1.png";
import OrderFood3 from "../../../assets/OrderFood/order-food 1.png";

const KnowAbout = () => {
    return (
        <div className="bg-[#D9D9D9] lg:mx-24 my-10">
            <div className="bg-[#D9D9D9] rounded-lg p-6">
                <div className="flex justify-between items-center lg:pt-16 lg:px-16">
                    <div>
                        <h3>Know more about us</h3>
                    </div>
                    <div>
                        <ul className="flex gap-6 h-[61px] justify-center items-center">
                            <li className="border border-[#FC8A06] rounded-full p-4">
                                <a href="">Frequent Questions</a>
                            </li>
                            <li>
                                <a href="">Who we are?</a>
                            </li>
                            <li>
                                <a href="">Partner Program</a>
                            </li>
                            <li>
                                <a href="">Help and support</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex lg:pt-16 lg:px-16 bg-white rounded-2xl my-10">
                    <div className="w-1/2 p-4">
                        <button className="bg-[#FC8A06] text-black p-4 rounded-full mb-4">How does Order.UK work?</button>
                        <div className="flex flex-col space-y-2">
                            <p className="text-left leading-relaxed">What payment methods are accepted?</p>
                            <p className="text-left leading-relaxed">Can I track my order in real-time?</p>
                            <p className="text-left leading-relaxed">Are there any special discounts or promotions available?</p>
                            <p className="text-left leading-relaxed">Is Order.UK available in my area?</p>
                        </div>
                    </div>
                    <div className="flex gap-4 w-1/2 p-4 items-center justify-center"> {/* Added justify-center to center items horizontally */}
                        <div className="w-1/3 bg-[#D9D9D9] p-4 rounded-lg shadow flex flex-col items-center justify-center"> {/* Center vertically */}
                            <h3>Place an order</h3>
                            <img src={OrderFood1} alt="Order food1" className="w-full h-auto" />
                            <p>Place order through our website or mobile app</p>
                        </div>
                        <div className="w-1/3 bg-[#D9D9D9] p-4 rounded-lg shadow flex flex-col items-center justify-center"> {/* Center vertically */}
                            <h3>Track Progress</h3>
                            <img src={OrderFood2} width={128} height={128} alt="Order food2" className="w-full h-auto" />
                            <p>You can track your order status with delivery time</p>
                        </div>
                        <div className="w-1/3 bg-[#D9D9D9] p-4 rounded-lg shadow flex flex-col items-center justify-center"> {/* Center vertically */}
                            <h3>Get your order</h3>
                            <img src={OrderFood3} alt="Order food3" className="w-full h-auto" />
                            <p>Receive your order at lightning-fast speed!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KnowAbout;
