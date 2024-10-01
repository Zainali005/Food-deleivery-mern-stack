export default function Footer2() {
    return (
        <div className="flex justify-between items-center bg-[#03081F] text-white p-4">
            <div>
                <p className="text-sm">Order.uk Copyright 2024, All Rights Reserved.</p>
            </div>
            <div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Terms</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Pricing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Do not sell or share my personal information</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
