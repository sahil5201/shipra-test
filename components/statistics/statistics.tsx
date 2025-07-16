import React, { Fragment } from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import InvestmentReturns from './investment-returns'
import DMA from './dma'
import ProgressBar from '../progress-bar'

function Statistics() {
    return (
        <Fragment>
            <div className='my-4'>
                <Card className='shadow-none rounded-lg gap-2 w-full p-4'>
                    <CardHeader className='p-0'>
                        <CardTitle className='text-sm font-semibold'>High Low Statistics</CardTitle>
                    </CardHeader>
                    <CardContent className='p-0 text-xs font-normal space-y-1.5'>
                        <div className='grid grid-cols-4 gap-x-5'>
                            <HighLowCard />
                            <HighLowCard />
                            <HighLowCard />
                            <HighLowCard />
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className='my-4'>
                <div className='grid grid-cols-3 gap-x-3'>
                    <InvestmentReturns />
                    <DMA />
                </div>
            </div>
        </Fragment>
    )
}

export default Statistics


const HighLowCard = () => {
    return (
        <div className='last:border-none border-r pr-5 space-y-2'>
            <div className='flex justify-between items-center border-b pb-1'>
                <h1>13 Week</h1>
            </div>
            <div className='flex justify-between items-center'>
                <div className='text-start leading-5'>
                    <h2>$144.70</h2>
                    <span className='text-theme-red'>-10.78% downside</span>
                </div>
                <div className='text-end leading-5'>
                    <h2>$144.70</h2>
                    <span className='text-theme-green'>-10.78% downside</span>
                </div>
            </div>
            <ProgressBar value={10} />
            <div className='flex justify-between items-center'>
                <div className='text-start leading-5'>
                    <h2>14th Mar 2025</h2>
                    <span className='text-theme-muted-foreground'>10 days ago</span>
                </div>
                <div className='text-end leading-5'>
                    <h2>14th Mar 2025</h2>
                    <span className='text-theme-muted-foreground'>10 days ago</span>
                </div>
            </div>
        </div>
    )
}