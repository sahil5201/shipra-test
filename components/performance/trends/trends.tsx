import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import TrendList from './list/trend-list'
import ToggleList from '@/components/table/toggle-list'
import TrendGrid from './grid/trend-grid'

interface Props {
    view?: "list" | "grid"
}

function Trends({ view }: Props) {
    return (
        <Card className='shadow-none rounded-lg gap-2 w-full p-4'>
            <CardHeader className='p-0 flex justify-between items-center'>
                <CardTitle className='text-sm font-semibold'>Trends</CardTitle>
                <ToggleList toggleKey={'trends'} />
            </CardHeader>
            <CardContent className='p-0'>
                {view == 'grid' ? <TrendGrid /> : <TrendList />}
            </CardContent>
        </Card>
    )
}

export default Trends