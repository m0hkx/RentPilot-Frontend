import Logo from "../assets/logo.png";

export default function Sidebar() {
    return (
        <>
            <div className="flex flex-row items-center justify-center my-4">
                <img src={Logo} alt="RentPilot Logo" className="w-12 h-12" />
                <h1 className="text-xl font-semibold mx-2">RentPilot</h1>
            </div>

            <div>
                <ul className="flex flex-col items-center gap-2 text-sm">
                    <li>
                        <a href="#" className="text-gray-500 hover:text-black">
                            Overview
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-500 hover:text-black">
                            Properties
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-500 hover:text-black">
                            Tenants
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-500 hover:text-black">
                            Leases
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-500 hover:text-black">
                            Payments
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-500 hover:text-black">
                            Analytics
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-500 hover:text-black">
                            Documents
                        </a>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col items-center gap-2 text-sm">

            </div>

            <div className="flex flex-col items-center gap-2 text-sm">
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                    Logout
                </a>
            </div>
        </>
    );
}