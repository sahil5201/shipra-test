'use client'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import React from 'react'
import HighLowCard from "./high-low-card"
import { useQuery } from "@tanstack/react-query";
import { fetchTradingHighLow } from "@/lib/services";
import ErrorFallback from "@/components/common/error-fallback";
import { SkeletonBox } from "@/components/common/skeleton-grid";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function HighLowStatistics() {
    const { data, isLoading, isError, isSuccess } = useQuery({
        queryKey: ["statistics", 'trading-high-low'],
        queryFn: fetchTradingHighLow,
    });

    if (isLoading) {
        const size = new Array(4).fill('skeletonGrid')
        return (
            <div className="w-full gap-x-4 p-4 border rounded-lg gap-2">
                <Skeleton className="h-8 w-1/3" />
                <div className='grid grid-cols-4 gap-x-5'>
                    {size.map((_, key: number) => (
                        <SkeletonBox key={`overview-skeleton-grid-${key}`} className='rounded-lg min-w-xs w-full h-32' />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <Card className='shadow-none rounded-lg gap-2 w-full p-4'>
            <CardHeader className='p-0'>
                <CardTitle className='text-sm font-semibold'>High Low Statistics</CardTitle>
            </CardHeader>
            <CardContent className='p-0 text-xs font-normal space-y-1.5'>
                {isError && <ErrorFallback />}
                {isSuccess && (
                    <ScrollArea className="whitespace-nowrap w-full">
                        <div className='grid grid-cols-4 gap-x-5 min-w-7xl mb-2.5 xl:mb-0'>
                            {data.result.map((values, key) => {
                                return <HighLowCard key={`high-low-card-${key}`} {...values} />
                            })}
                        </div>
                        <ScrollBar orientation="horizontal" className="h-2" />
                    </ScrollArea>
                )}

            </CardContent>
        </Card>
    )
}

export default HighLowStatistics