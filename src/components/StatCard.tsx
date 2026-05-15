import { UserGroupIcon } from "@heroicons/react/24/solid";

export default function StatCard() {
    return (
        <div className="bg-white rounded-xl p-4 flex flex-col justify-between">
            <div>
                <UserGroupIcon className="w-9 h-9 text-[#2B3F6C]" />
            </div>
        </div>
    );
}