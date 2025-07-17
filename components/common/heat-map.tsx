import { cn } from '@/lib/utils'
import React, { Fragment } from 'react'


/**
 * Heat map based on the percentage change in historical data.
 *
 *  @param {Object} props.data - heatMap.historical_data from the data.
 */
function HeatMap({ data }: { data: { percentage_change: number }[] }) {
    return (
        <Fragment>
            <div className='flex justify-center items-center gap-x-0.5'>
                {data.map((value, key) => (
                    <div key={`heat-map-${key}`} className={cn('size-2.5 rounded-full bg-theme-green', Math.sign(value.percentage_change) == -1 && `bg-theme-red`)}></div>
                ))}
            </div>
        </Fragment>
    )
}

export default HeatMap