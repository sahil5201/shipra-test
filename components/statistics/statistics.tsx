import React, { Fragment } from 'react'
import InvestmentReturns from './investment-returns'
import DMA from './dma/dma'
import HighLowStatistics from './high-low-statistics/high-low'

function Statistics() {
    return (
        <Fragment>
            <div className='my-4'>
                <HighLowStatistics />
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