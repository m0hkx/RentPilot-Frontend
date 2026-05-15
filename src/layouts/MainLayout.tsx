import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function MainLayout() {
    return (
        <div className="grid grid-cols-[240px_1fr] grid-rows-[80px_1fr] h-screen">

            {/* Sidebar */}
            <aside className="row-span-2 bg-white m-4 rounded-3xl text-black">
                <Sidebar />
            </aside>

            {/* Topbar */}
            <header className="my-auto place-items-end mr-4 text-right">
                <Topbar />
            </header>

            {/* Content */}
            <main className="bg-[#EFEFEF] mx-4 rounded-2xl overflow-auto p-4 h-full">
                <Outlet />
            </main>

        </div>
    );
}