import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface Props {
    title: string
    values: { [key: string]: string | number | null }
}

function OverviewCard({ title, values }: Props) {
    return (
        <Card className='shadow-none min-w-xs rounded-lg gap-2 p-4'>
            <CardHeader className='p-0'>
                <CardTitle className='text-sm font-semibold'>{title}</CardTitle>
            </CardHeader>
            <CardContent className='p-0 text-xs font-normal space-y-1.5'>
                {Object.entries(values).map((value, key) => {
                    return (
                        <div key={`overview-card-content-key-${key}`} className='flex justify-between items-center border-b last:border-none pb-1'>
                            <h1>{value[0]}</h1>
                            <h2 className='font-medium'>{value[1] || 0}</h2>
                        </div>
                    )
                })}
            </CardContent>
        </Card>
    )
}

export default OverviewCard