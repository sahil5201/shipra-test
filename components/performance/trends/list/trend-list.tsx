"use client"
import { useQuery } from "@tanstack/react-query"
import { columns } from "./columns"
import { DataTable } from "@/components/table/data-table"
import { fetchPerformance } from "@/lib/services";
import SkeletonList from "@/components/common/skeleton-list";
import ErrorFallback from "@/components/common/error-fallback";

export default function TrendList() {
    const { data, isLoading, isError, isSuccess } = useQuery({
        queryKey: ["performance", 'trends'],
        queryFn: fetchPerformance,
    });

    if (isLoading) return <SkeletonList />;

    if (isError) return <ErrorFallback />;

    if (isSuccess)
        return (
            <div className="container mx-auto mt-1">

                <DataTable columns={columns} data={data.result} />
            </div>
        )
}