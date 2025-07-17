'use client'
import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { fetchPeakPerformance } from '@/lib/services';
import { PeakDataType } from '@/types';
import SkeletonGrid from '@/components/common/skeleton-grid';
import PeakDataCard from './peak-data-card';
import ErrorFallback from '@/components/common/error-fallback';

function PeakDataGrid() {
    const { data, isLoading, isError, isSuccess } = useQuery({
        queryKey: ["performance", 'peak-data'],
        queryFn: fetchPeakPerformance
    });

    if (isLoading) return <SkeletonGrid className='border rounded-lg' />;

    if (isError) return <ErrorFallback message={`Sorry, we are unable to retrieve Peak Data at the moment. Please try again later.`} />;

    if (isSuccess) {
        return (
            <div className='grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2'>
                {data.result.peakData.map((stock: PeakDataType, key: number) => (
                    <PeakDataCard key={key} {...stock} />
                ))}
            </div>
        )
    }
}

export default PeakDataGrid