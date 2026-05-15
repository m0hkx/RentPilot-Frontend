import StatCard from "../components/StatCard";
import TopListings from "../components/TopListings";
import RevenueChart from "../components/RevenueChart";
import UnitTypes from "../components/UnitTypes";

export default function Dashboard() {
    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-4 h-full auto-rows-fr">

            {/* Left: Stat Cards */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
                <StatCard />
                <StatCard />
                <StatCard />
                <StatCard />
            </div>

            {/* Top Right */}
            <div className="col-span-2">
                <TopListings />
            </div>

            {/* Bottom Left */}
            <div className="col-span-2">
                <RevenueChart />
            </div>

            {/* Bottom Right */}
            <div className="h-full">
                <UnitTypes />
            </div>

        </div>
    );
}