import PeakData from "@/components/performance/peak-data/peak-data"
import Trends from "@/components/performance/trends/trends"
import { Metadata } from "next"
import { Fragment } from "react/jsx-runtime"

export const metadata: Metadata = {
    title: "Performance | Shipra",
    description: 'Performance page...',
}

type Props = {
    searchParams: Promise<{ [key: string]: "grid" | "list" | undefined }>;
};

async function page({ searchParams }: Props) {
    const params = await searchParams;
    return (
        <Fragment>
            <div className="grid grid-cols-2 gap-4">
                <Trends view={params?.trends} />
                <PeakData view={params?.peak} />
            </div>
        </Fragment>
    )
}

export default page