import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn } from '@/lib/utils'
import { ArrowDown, ArrowUp, Grid2x2, List } from 'lucide-react'
import { Button } from './ui/button'

function PeakData() {
    return (
        <Card className='shadow-none rounded-lg gap-2 w-full p-4'>
            <CardHeader className='p-0 flex justify-between items-center'>
                <CardTitle className='text-sm font-semibold'>Peak Data</CardTitle>
                <div className="">
                    <Button size={'icon'} variant={'ghost'}>
                        <List />
                    </Button>
                    <Button size={'icon'} variant={'ghost'}>
                        <Grid2x2 />
                    </Button>
                </div>
            </CardHeader>
            <CardContent className='p-0'>
                <div className='grid grid-cols-3 gap-2'>
                    <PeakDataCard />
                    <PeakDataCard />
                    <PeakDataCard />
                    <PeakDataCard />
                    <PeakDataCard />
                    <PeakDataCard />
                    <PeakDataCard />
                </div>
            </CardContent>
        </Card>
    )
}

export default PeakData

function PeakDataCard() {
    return (
        <div className={cn('p-3 space-y-3 font-semibold leading-5 border rounded-lg')}>
            <div>
                <div className='flex justify-between items-center'>
                    <h1>27 June 2024</h1>
                    <h2>$206.14</h2>
                </div>
                <span className='text-xs font-medium text-muted-foreground'>304 days ago (10m - 4d)</span>
            </div>

            <div>
                <div className={cn('flex justify-start items-center text-theme-green')}>
                    <ArrowUp />
                    <span> 22.78 (12.33%) </span>
                </div>

                <div className={cn('flex justify-start items-center text-theme-red')}>
                    <ArrowDown />
                    <span> 22.78 (12.33%) </span>
                </div>
            </div>
        </div>
    )
}