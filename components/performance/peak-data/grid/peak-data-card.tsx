import { cn } from "@/lib/utils";
import { PeakDataType } from "@/types";
import { format } from "date-fns";
import { ArrowDown, ArrowUp } from "lucide-react";

type Props = PeakDataType & {

}

export default function PeakDataCard({ Date: dataDate, timeDiff, time_diff_str, Close, change, percentageChange, reverseChange, reversePercentageChange }: Props) {
    const formattedDate = format(new Date(dataDate), 'dd MMM yyyy');
    return (
        <div className={cn('p-3 space-y-3 font-semibold leading-5 border rounded-lg text-sm')}>
            <div>
                <div className='flex justify-between items-center'>
                    <h1>{formattedDate}</h1>
                    <h2>${Close}</h2>
                </div>
                <span className='text-xs font-medium text-muted-foreground'>{timeDiff} ({time_diff_str})</span>
            </div>

            <div>
                <div className={cn('flex justify-start items-center text-theme-green')}>
                    <ArrowUp />
                    <span> {change} ({percentageChange}%) </span>
                </div>

                <div className={cn('flex justify-start items-center text-theme-red')}>
                    <ArrowDown />
                    <span> {reverseChange} ({reversePercentageChange}%) </span>
                </div>
            </div>
        </div>
    )
}