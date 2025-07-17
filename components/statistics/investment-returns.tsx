import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import ProgressBar from "../common/progress-bar"
import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"

function InvestmentReturns() {

    const longTermReturns = [
        {
            label: "1 Year",
            term: 1,
            returns: 2.62
        },
        {
            label: "2 Year",
            term: 2,
            returns: 7.51
        },
        {
            label: "3 Year",
            term: 3,
            returns: 3.70
        },
        {
            label: "4 Year",
            term: 4,
            returns: -1.52
        },
        {
            label: "5 Year",
            term: 5,
            returns: -18.85
        }
    ]

    const shortTermReturns = [
        {
            label: "1 Day",
            term: 1,
            returns: 2.62
        },
        {
            label: "1 Week",
            term: 2,
            returns: 7.51
        },
        {
            label: "2 Weeks",
            term: 3,
            returns: 3.70
        },
        {
            label: "1 Month",
            term: 4,
            returns: -1.52
        },
        {
            label: "3 Months",
            term: 5,
            returns: -18.85
        }
    ]
    return (
        <div className='col-span-2'>
            <Card className='shadow-none rounded-lg gap-2 w-full p-4'>
                <CardHeader className='p-0'>
                    <CardTitle className='text-sm font-semibold'>Investment Returns</CardTitle>
                </CardHeader>
                <CardContent className='text-xs font-normal space-y-1.5 p-0'>
                    <ScrollArea className="whitespace-nowrap w-full">
                        <div className="grid grid-cols-2 min-w-4xl mb-2.5 xl:mb-0">
                            <div className="pe-5 space-y-2">
                                <h1 className="leading-5 font-semibold">Long Term</h1>

                                {longTermReturns.map((term, index) => (
                                    <div className="flex justify-between items-center gap-x-3" key={`long-term-returns-${index}-${term.label}`}>
                                        <div className="w-1/8" >{term.label}</div>
                                        <div className="w-full">
                                            <ProgressBar className="h-2" />
                                        </div>
                                        <div className={cn("w-1/8 text-end ", Math.sign(term.returns) == 1 ? 'text-theme-green' : 'text-theme-red')}>{term.returns}%</div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-l ps-5 space-y-2">
                                <h1 className="leading-5 font-semibold">Short Term</h1>
                                {shortTermReturns.map((term, index) => (
                                    <div className="flex justify-between items-center gap-x-3" key={`short-term-returns-${index}-${term.label}`}>
                                        <div className="w-1/8" >{term.label}</div>
                                        <div className="w-full">
                                            <ProgressBar className="h-2" />
                                        </div>
                                        <div className={cn("w-1/8 text-end ", Math.sign(term.returns) == 1 ? 'text-theme-green' : 'text-theme-red')}>{term.returns}%</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <ScrollBar orientation="horizontal" className="h-2" />
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
    )
}

export default InvestmentReturns