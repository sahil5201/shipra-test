'use client';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { fetchDma } from "@/lib/services";
import { useQuery } from "@tanstack/react-query";
import SkeletonList from "../../common/skeleton-list";
import ErrorFallback from "../../common/error-fallback";
import DmaGrid from "./dma-grid";

function DMA() {
    const { data, isLoading, isError, isSuccess } = useQuery({
        queryKey: ["statistics", 'dma'],
        queryFn: fetchDma,
    });

    return (
        <Card className='shadow-none rounded-lg gap-2 w-full p-4'>
            <CardHeader className='p-0'>
                <CardTitle className='text-sm font-semibold'>Daily Moving Average (DMA)</CardTitle>
            </CardHeader>
            <CardContent className='p-0 text-xs font-normal space-y-1.5'>
                {isError && <ErrorFallback />}
                {isLoading && <SkeletonList colSize={7} rowSize={3} />}
                {isSuccess && <DmaGrid data={data.result} />}
            </CardContent>
        </Card>
    )
}

export default DMA