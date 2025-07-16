import PeakData from "@/components/peak-data"
import Trends from "@/components/trends"
import { Fragment } from "react/jsx-runtime"

function Home() {
    return (
        <Fragment>
            <div className="grid grid-cols-2 gap-4">
                <Trends />
                <PeakData />
            </div>
        </Fragment>
    )
}

export default Home