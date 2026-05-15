import ProfileCard from "../components/ProfileCard";
import Notifications from "../components/Notifications";
import ExtendableSearch from "../components/ExtendableSearch";
export default function Topbar() {
    return (
        <>
            <div className="flex items-center justify-between gap-2 rounded-full">
                <div>
                    <ExtendableSearch />
                </div>

                <div>
                    <Notifications />
                </div>

                <div className="w-max max-w-sm">
                    <ProfileCard avatar="https://www.loremfaces.net/96/id/1.jpg" name="Jenny Wilson" email="example@gmail.com" />
                </div>
            </div>
        </>
    );
}
