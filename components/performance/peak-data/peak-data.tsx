import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import ToggleList from '@/components/table/toggle-list'
import PeakDataGrid from './grid/peak-grid'
import PeakDataList from './list/peak-data-list'

interface Props {
    view?: "list" | "grid"
}

function PeakData({ view }: Props) {
    return (
        <Card className='shadow-none rounded-lg gap-2 w-full p-4'>
            <CardHeader className='p-0 flex justify-between items-center'>
                <CardTitle className='text-sm font-semibold'>Peak Data</CardTitle>
                <ToggleList toggleKey='peak' />
            </CardHeader>
            <CardContent className='p-0'>
                {view == 'grid' ?
                    <PeakDataGrid />
                    : <PeakDataList />
                }
            </CardContent>
        </Card>
    )
}

export default PeakData