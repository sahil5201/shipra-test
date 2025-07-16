import React from 'react'
import { Badge } from './ui/badge'
import { ScrollArea, ScrollBar } from './ui/scroll-area'
import { House } from 'lucide-react'

function Header() {
    return (
        <header className='h-32 w-full p-4 bg-theme-blue-50'>
            <div id='top' className='flex justify-between items-center'>
                <div className='flex justify-start items-center gap-x-2'>
                    <div className='size-9 flex justify-center items-center'>
                        <House className='size-6.5' />
                    </div>
                    <div>
                        <h1 className='text-2xl font-medium leading-8'>Alphabet Inc.</h1>
                    </div>
                    <div>
                        <span className='text-muted-foreground text-xs'>NEO-GOOG.NE</span>
                    </div>
                    <div className='flex justify-center items-center gap-x-0.5'>
                        <div className='size-2.5 rounded-full bg-theme-green'></div>
                        <div className='size-2.5 rounded-full bg-theme-green'></div>
                        <div className='size-2.5 rounded-full bg-theme-red'></div>
                        <div className='size-2.5 rounded-full bg-theme-red'></div>
                        <div className='size-2.5 rounded-full bg-theme-green'></div>
                        <div className='size-2.5 rounded-full bg-theme-green'></div>
                        <div className='size-2.5 rounded-full bg-theme-green'></div>
                    </div>
                </div>
            </div>
            <ScrollArea className="w-[calc(100dvw)] whitespace-nowrap mt-4">
                <div className='flex justify-start items-center gap-x-32 mb-2.5'>
                    <div>
                        <span className='text-xs text-muted-foreground'>Price</span>
                        <h1 className='text-foreground font-medium text-sm'>$161.12  <Badge variant={'green'} className=''>3.93 (2.53%)</Badge> </h1>
                    </div>
                    <div className='border-l pl-3'>
                        <span className='text-xs text-muted-foreground'>Opportunity Buy</span>
                        <h1 className='text-foreground font-medium text-sm'>29.42%</h1>
                    </div>
                    <div className='border-l pl-3'>
                        <span className='text-xs text-muted-foreground'>Opportunity Buy</span>
                        <h1 className='text-foreground font-medium text-sm'>29.42%</h1>
                    </div>
                    <div className='border-l pl-3'>
                        <span className='text-xs text-muted-foreground'>Opportunity Buy</span>
                        <h1 className='text-foreground font-medium text-sm'>29.42%</h1>
                    </div>
                    <div className='border-l pl-3'>
                        <span className='text-xs text-muted-foreground'>Opportunity Buy</span>
                        <h1 className='text-foreground font-medium text-sm'>29.42%</h1>
                    </div>
                    <div className='border-l pl-3'>
                        <span className='text-xs text-muted-foreground'>Opportunity Buy</span>
                        <h1 className='text-foreground font-medium text-sm'>29.42%</h1>
                    </div>
                    <div className='border-l pl-3'>
                        <span className='text-xs text-muted-foreground'>Opportunity Buy</span>
                        <h1 className='text-foreground font-medium text-sm'>29.42%</h1>
                    </div>
                    <div className='border-l pl-3'>
                        <span className='text-xs text-muted-foreground'>Opportunity Buy</span>
                        <h1 className='text-foreground font-medium text-sm'>29.42%</h1>
                    </div>
                    <div className='border-l pl-3'>
                        <span className='text-xs text-muted-foreground'>Opportunity Buy</span>
                        <h1 className='text-foreground font-medium text-sm'>29.42%</h1>
                    </div>
                    <div></div>
                </div>
                <ScrollBar orientation="horizontal" className='h-1.5' />
            </ScrollArea>
        </header>
    )
}

export default Header