import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

function OverviewCard() {
    return (
        <Card className='shadow-none min-w-xs rounded-lg gap-2 p-4'>
            <CardHeader className='p-0'>
                <CardTitle className='text-sm font-semibold'>Profile</CardTitle>
            </CardHeader>
            <CardContent className='p-0 text-xs font-normal space-y-1.5'>
                <div className='flex justify-between items-center border-b pb-1'>
                    <h1>Market Cap</h1>
                    <h2 className='font-medium'>CA$1.95T</h2>
                </div>
                <div className='flex justify-between items-center border-b pb-1'>
                    <h1>Market Cap</h1>
                    <h2 className='font-medium'>CA$1.95T</h2>
                </div>
                <div className='flex justify-between items-center border-b pb-1'>
                    <h1>Market Cap</h1>
                    <h2 className='font-medium'>CA$1.95T</h2>
                </div>
                <div className='flex justify-between items-center border-b pb-1 last:border-none'>
                    <h1>Market Cap</h1>
                    <h2 className='font-medium'>CA$1.95T</h2>
                </div>
            </CardContent>
        </Card>
    )
}

export default OverviewCard