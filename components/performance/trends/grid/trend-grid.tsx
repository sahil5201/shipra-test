'use client'
import React from 'react'
import TrendCard from './trend-card'
import { useQuery } from '@tanstack/react-query';
import { fetchPerformance } from '@/lib/services';
import SkeletonGrid from '@/components/common/skeleton-grid';
import ErrorFallback from '@/components/common/error-fallback';

function TrendGrid() {
    const { data, isLoading, isError, isSuccess } = useQuery({
        queryKey: ["performance", 'trends'],
        queryFn: fetchPerformance
    });

    if (isLoading) return <SkeletonGrid />;

    if (isError) return <ErrorFallback />;

    if (isSuccess) {
        return (
            <div className='grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2'>
                {data.result.map((stock, key: number) => (
                    <TrendCard key={key} {...stock} />
                ))}
            </div>
        )
    }
}

export default TrendGrid