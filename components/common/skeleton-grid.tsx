import { cn } from '@/lib/utils';
import React, { Fragment } from 'react'
import { Skeleton } from '../ui/skeleton';
interface Props {
    className?: string
}

export function SkeletonBox({ className }: Props) {
    return (<div className={cn('p-3 space-y-2.5 font-semibold leading-5', className)}>
        <Skeleton className="h-6 rounded-sm" />
        <Skeleton className="h-4 w-24 rounded-sm" />
        <Skeleton className="h-4 w-32 rounded-sm" />
        <Skeleton className="h-5 rounded-sm" />
    </div>)
}

/**
 * Skeleton grid component for showing a skeleton loading effect while data is fetching.
 *
 * 
 */
function SkeletonGrid({ className }: Props) {
    const size = new Array(20).fill('skeletonGrid');
    return (
        <Fragment>
            <div className='grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2'>
                {size.map((_, key: number) => (
                    <SkeletonBox key={`skeleton-grid-${key}`} className={className} />
                ))
                }
            </div>
        </Fragment >
    )
}

export default SkeletonGrid