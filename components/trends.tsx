import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ArrowDown, ArrowUp, Grid2x2, List } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'

function Trends() {
    return (
        <Card className='shadow-none rounded-lg gap-2 w-full p-4'>
            <CardHeader className='p-0 flex justify-between items-center'>
                <CardTitle className='text-sm font-semibold'>Trends</CardTitle>
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
                <div className='grid grid-cols-4 gap-2'>
                    <TrendCard />
                    <TrendCard />
                    <TrendCard />
                    <TrendCard type='down' />
                    <TrendCard />
                    <TrendCard type='down' />
                    <TrendCard type='down' />
                </div>
            </CardContent>
        </Card>
    )
}

export default Trends

function TrendCard({ type }: { type?: "up" | "down" }) {
    return (
        <div className={cn('p-3 space-y-3 bg-theme-green/5 font-semibold leading-5', type == 'down' && 'bg-theme-red/5')}>
            <div>
                <h1>27 June 2024</h1>
                <span className='text-xs font-medium'>7 months</span>
            </div>

            <div>
                <span>$206.14</span>
                <div className={cn('flex justify-start items-center text-theme-green', type == 'down' && 'text-theme-red')}>
                    {type == 'down' ? <ArrowDown /> : <ArrowUp />}
                    <span> 22.78 (12.33%) </span>
                </div>
            </div>
        </div>
    )
}