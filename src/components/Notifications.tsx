import { BellIcon } from "@heroicons/react/24/outline";

export default function Notifications() {
    return (
        <>
            <div className="flex items-center justify-center bg-white p-2 h-14 w-14 rounded-full cursor-pointer">
                <BellIcon className="w-7 h-7" />
            </div>
        </>
    );
}
