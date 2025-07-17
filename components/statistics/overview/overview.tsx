'use client'
import React from 'react'
import OverviewCard from './overview-card'
import { ScrollArea, ScrollBar } from '../../ui/scroll-area'
import { useQuery } from '@tanstack/react-query'
import { fetchOverview } from '@/lib/services'
import { SkeletonBox } from '../../common/skeleton-grid'

function Overview() {
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ["overview"],
        queryFn: fetchOverview
    })
    if (isLoading) {
        const size = new Array(8).fill('skeletonGrid')
        return (
            <div className="flex justify-start items-center w-full gap-x-4 mt-4">
                {size.map((_, key: number) => (
                    <SkeletonBox key={`overview-skeleton-grid-${key}`} className='border rounded-lg min-w-xs h-60' />
                ))}
            </div>
        )
    }
    if (isSuccess) {
        delete data.result['closingPrices']
        const array = Object.entries(data.result)
        return (
            <ScrollArea className="whitespace-nowrap mt-4 -mb-1.5">
                <div className="flex justify-start w-full gap-x-4 mb-2.5">
                    {array.map((overview, key) => {
                        return (
                            <OverviewCard key={`overview-card-key-${key}`} title={overview[0]} values={overview[1]} />
                        )
                    })}
                </div>
                <ScrollBar orientation="horizontal" className="h-2" />
            </ScrollArea>
        )
    }
}

export default Overview