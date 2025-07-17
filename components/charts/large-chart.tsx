"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { Button } from "../ui/button"
import { useQuery } from "@tanstack/react-query"
import { fetchClosingPrices } from "@/lib/services"
import { Skeleton } from "../ui/skeleton"
import ErrorFallback from "../common/error-fallback"
import { differenceInCalendarDays, endOfToday, startOfYear } from "date-fns"

export const description = "An interactive area chart"

const chartConfig = {
    value: {
        label: "value",
        color: "var(--color-theme-green)",
    }
} satisfies ChartConfig


const ytdTotal = () => {
    const today = endOfToday();
    const start = startOfYear(today);
    const totalDays = differenceInCalendarDays(today, start) + 1;
    return totalDays;
}


const timeRangeButton = [
    { value: 5, label: '5D' },
    { value: 30, label: '1M' },
    { value: 90, label: '3M' },
    { value: 180, label: '6M' },
    { value: ytdTotal(), label: 'YTD' },
    { value: 365, label: '1Y' },
    { value: 365 * 3, label: '3Y' },
    { value: 365 * 5, label: '5Y' },
    { value: 365 * 10, label: '10Y' },
]

export function ChartArea() {

    const { data, isLoading, isSuccess, isError } = useQuery({
        queryKey: ["closing-prices"],
        queryFn: fetchClosingPrices
    })

    const [timeRange, setTimeRange] = React.useState<number>(30)

    if (isLoading) {
        return (<Card className="pt-0 shadow-none gap-4">
            <CardContent className="px-2 pt-2 sm:px-4 sm:pt-4 space-x-4">
                <Skeleton className="w-full h-10" />
                <Skeleton className="h-96 mt-4" />
            </CardContent>
        </Card>)
    }

    if (isError) {
        return (
            <Card className="pt-0 shadow-none gap-4">
                <CardContent className="px-2 pt-2 sm:px-4 sm:pt-4 space-x-4 h-96">
                    <ErrorFallback />
                </CardContent>
            </Card>
        )
    }

    if (isSuccess) {
        const chartData = data.result;

        const filteredData = chartData.filter((item: { time: string, value: number }) => {
            const date = new Date(item.time)
            const referenceDate = new Date()
            const daysToSubtract = timeRange
            const startDate = new Date(referenceDate)
            startDate.setDate(startDate.getDate() - daysToSubtract)
            return date >= startDate
        })

        return (
            <Card className="p-0 shadow-none gap-4">
                <CardHeader className="flex items-center gap-2 space-y-0 pt-4 sm:flex-row">
                    <div className="bg-theme-blue-50 h-10 w-full rounded-xl flex justify-between items-center px-5 text-muted-foreground">
                        {timeRangeButton.map((range, index) => (
                            <Button className="w-8 h-7 leading-5 hover:text-theme-blue hover:bg-white hover:shadow-xs"
                                variant={timeRange == range.value ? 'active_white' : 'ghost'}
                                size={'icon'}
                                key={`${index}_time-range-button_${range.label}`}
                                onClick={() => setTimeRange(range.value)}
                            >
                                {range.label}
                            </Button>
                        ))}
                        <Button className="w-8 h-7 leading-5"
                            variant={'ghost'}
                            size={'icon'}
                            key={`max_time-range-button_`}
                            onClick={() => setTimeRange(chartData.length)}
                        >
                            MAX
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="px-2 pt-2 sm:px-4 sm:pt-4">
                    <ChartContainer
                        config={chartConfig}
                        className="aspect-auto h-96 w-full"
                    >
                        <AreaChart data={filteredData}>
                            <defs>
                                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                                    <stop
                                        offset="5%"
                                        stopColor="var(--color-value)"
                                        stopOpacity={0.8}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="var(--color-value)"
                                        stopOpacity={0.1}
                                    />
                                </linearGradient>
                            </defs>
                            <CartesianGrid vertical={true} />
                            <YAxis
                                type="number"
                                dataKey="value"
                                tickLine={false}
                                axisLine={false}
                            />
                            <XAxis
                                dataKey="time"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                minTickGap={32}
                                tickFormatter={(value) => {
                                    const date = new Date(value)
                                    return date.toLocaleDateString()
                                }}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={
                                    <ChartTooltipContent
                                        labelFormatter={(value) => {
                                            return new Date(value).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                            })
                                        }}
                                        indicator="dot"
                                    />
                                }
                            />
                            <Area
                                dataKey="value"
                                type="linear"
                                fill="url(#fillDesktop)"
                                stroke="var(--color-desktop)"
                                stackId="a"
                            />
                            <ChartLegend content={<ChartLegendContent />} />
                        </AreaChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        )
    }
}

function LargeChart() {
    return (
        <ChartArea />
    )
}

export default LargeChart