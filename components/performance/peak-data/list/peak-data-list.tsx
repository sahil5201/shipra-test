"use client"
import { useQuery } from "@tanstack/react-query"
import { columns } from "./columns"
import { DataTable } from "@/components/table/data-table"
import { fetchPeakPerformance } from "@/lib/services";
import SkeletonList from "@/components/common/skeleton-list";
import ErrorFallback from "@/components/common/error-fallback";

export default function PeakDataList() {
    const { data, isLoading, isError, isSuccess } = useQuery({
        queryKey: ["performance", 'peak-data'],
        queryFn: fetchPeakPerformance
    });

    if (isLoading) return <SkeletonList />;

    if (isError) return <ErrorFallback message={`Sorry, we are unable to retrieve Peak Data at the moment. Please try again later.`} />;

    if (isSuccess) {
        const peakData = data.result.peakData;
        return (
            <div className="container mx-auto mt-1">
                <DataTable columns={columns} data={peakData} />
            </div>
        )
    }
}