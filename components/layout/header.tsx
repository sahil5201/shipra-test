"use client";
import { Badge } from '../ui/badge'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import { useQuery } from '@tanstack/react-query';
import { fetchInfo } from '@/lib/services';
import { Skeleton } from '../ui/skeleton';
import { format } from 'date-fns';
import ErrorFallback from '../common/error-fallback';
import HeatMap from '../common/heat-map';
import { Button } from '../ui/button';
import { CircleChevronRight, EllipsisVertical } from 'lucide-react';
import TrendIndicator from '../common/trend-indicator';
import { useRef } from 'react';

function Header() {
    const viewportRef = useRef<HTMLDivElement>(null)
    const { data, isLoading, isSuccess, isError } = useQuery({
        queryKey: ["info"],
        queryFn: fetchInfo
    });

    if (isLoading) {
        return (
            <header className='h-32 w-full p-4 bg-theme-blue-50'>
                <div>
                    <Skeleton className='w-xl h-10' />
                </div>

                <div className='grid grid-cols-7 gap-x-20 mt-4'>
                    <Skeleton className='w-full h-10' />
                    <Skeleton className='w-full h-10' />
                    <Skeleton className='w-full h-10' />
                    <Skeleton className='w-full h-10' />
                    <Skeleton className='w-full h-10' />
                    <Skeleton className='w-full h-10' />
                    <Skeleton className='w-full h-10' />
                </div>
            </header>
        )
    }

    if (isError) {
        return (
            <header className='h-32 w-full p-4 bg-theme-blue-50'>
                <ErrorFallback />
            </header>
        )
    }

    if (isSuccess) {
        const { logo, nm, ticker, latestClose, change, percentageChange, remaining_opportunity, nextEarningsDate,
            SRT_124, DMA_200, RSI, hedgedCurrency,
            ...rest
        } = data.result
        const formattedDate = format(new Date(nextEarningsDate), 'MMMM d, yyyy');

        function scroll(value: number) {
            const scrollArea = viewportRef.current?.querySelector(
                '[data-radix-scroll-area-viewport]'
            )
            if (scrollArea) {
                scrollArea.scrollLeft = scrollArea.scrollLeft += value
            }
        }

        return (
            <header className='h-32 w-full p-4 bg-theme-blue-50 relative'>
                <div id='top' className='flex justify-between items-center'>
                    <div className='flex justify-start items-center gap-x-2'>
                        <div className='size-9 flex justify-center items-center'>
                            <img src={logo} alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl font-medium leading-8'>{nm}</h1>
                        </div>
                        <div>
                            <span className='text-muted-foreground text-xs'>{ticker}</span>
                        </div>
                        <HeatMap data={rest.heatMap.historical_data} />
                    </div>

                    <div className='flex justify-end items-center gap-x-1'>
                        <TrendIndicator />

                        <Button className='hover:text-theme-blue hover:bg-theme-blue-50' variant={'ghost'}>
                            Actions
                        </Button>

                        <Button className='size-7 hover:text-theme-blue hover:bg-theme-blue-50' variant={'ghost'} size={'icon'}>
                            <EllipsisVertical />
                        </Button>
                    </div>
                </div>
                <ScrollArea className="whitespace-nowrap mt-4" ref={viewportRef}>
                    <div className='flex justify-start items-center gap-x-32 mb-2.5 w-[calc(100dvw_-_32px)]'>
                        <div>
                            <span className='text-xs text-muted-foreground'>Price</span>
                            <h1 className='text-foreground font-medium text-sm'>${latestClose}  <Badge variant={'green'} className=''>{change} ({percentageChange}%)</Badge> </h1>
                        </div>
                        <div className='border-l pl-3'>
                            <span className='text-xs text-muted-foreground'>Opportunity Buy</span>
                            <h1 className='text-foreground font-medium text-sm'>{remaining_opportunity}%</h1>
                        </div>
                        <div className='border-l pl-3'>
                            <span className='text-xs text-muted-foreground'>Leveraged</span>
                            <h1 className='text-foreground font-medium text-sm space-x-1.5'>
                                <span className='text-theme-red'>1x</span>
                                <span className='text-theme-green'>2x</span>
                            </h1>
                        </div>
                        <div className='border-l pl-3'>
                            <span className='text-xs text-muted-foreground'>Currency Hedged</span>
                            <div className='text-sm font-medium space-x-1'>
                                {hedgedCurrency.map(({ currency }: { currency: string }, key: number) => {
                                    if (key < 4)
                                        return <span key={`hedged-currency-${currency}-${key}`}>{currency}</span>
                                })}
                                {hedgedCurrency.length > 4 &&
                                    <span className='text-theme-blue'>
                                        {`+${hedgedCurrency.length - 4}`}
                                    </span>
                                }
                            </div>
                        </div>
                        <div className='border-l pl-3'>
                            <span className='text-xs text-muted-foreground'>RSI</span>
                            <h1 className='font-medium text-sm text-theme-red'>{RSI}</h1>
                        </div>
                        <div className='border-l pl-3'>
                            <span className='text-xs text-muted-foreground'>200 Day DMA</span>
                            <h1 className='text-foreground font-medium text-sm'>{DMA_200}</h1>
                        </div>
                        <div className='border-l pl-3'>
                            <span className='text-xs text-muted-foreground'>SRT (124 DMA)</span>
                            <h1 className='text-foreground font-medium text-sm'>{SRT_124}</h1>
                        </div>
                        <div className='border-l pl-3'>
                            <span className='text-xs text-muted-foreground'>Earnings</span>
                            <h1 className='text-foreground font-medium text-sm'>{formattedDate}</h1>
                        </div>

                        <div className='absolute right-0'>
                            <Button onClick={() => scroll(150)} variant={'ghost'} className='rounded-full size-8 hover:text-theme-blue hover:bg-theme-blue-50'><CircleChevronRight /></Button>
                        </div>
                    </div>
                    <ScrollBar orientation="horizontal" className='h-1.5' />
                </ScrollArea>
            </header>
        )
    }
}

export default Header