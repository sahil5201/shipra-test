import { DmaDataType } from '@/types'
import React from 'react'
import { cn } from '@/lib/utils'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

function DmaGrid({ data }: { data: DmaDataType[] }) {
    const columns = ['Days', 'DMA Price', 'Date', 'Upwards from CP', 'Downwards CP']
    return (
        <ScrollArea className="whitespace-nowrap">
            <div className='grid grid-cols-9 min-w-xl'>
                <div className='grid col-span-2 space-y-2.5'>
                    {columns.map((col, key) => (
                        <div key={'column' + key} className='font-medium leading-5 not-last:border-b h-6'>
                            {col}
                        </div>
                    ))}
                </div>

                {data.map((value, key) => (
                    <div className='grid grid-cols-subgrid p-0 font-normal divide-y leading-5 space-y-2.5' key={`subgrid` + key}>
                        <div className='h-6 w-full'>{value.day || '-'}</div>
                        <div className='h-6 w-full'>{value.dma_price || '-'}</div>
                        <div className='h-6 w-full'>{value.date || '-'}</div>
                        <div className={cn('h-6 w-full', value.upward_percent && 'text-theme-red')}>{value.upward_percent ? `${value.upward_percent}%` : '-'}</div>
                        <div className={cn('h-6 w-full', value.downward_percent && 'text-theme-green')}>{value.downward_percent ? `${value.downward_percent}%` : '-'}</div>
                    </div>
                ))}
            </div>
            <ScrollBar orientation="horizontal" className="h-2" />
        </ScrollArea>
    )
}

export default DmaGrid