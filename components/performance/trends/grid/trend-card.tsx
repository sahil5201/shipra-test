import { cn } from "@/lib/utils";
import { StockDataType } from "@/types";
import { ArrowDown, ArrowUp } from "lucide-react";

type Props = StockDataType & {

}

export default function TrendCard({ date, day, current_price, change, change_pct }: Props) {
    const type: "up" | "down" = Math.sign(change) == 1 ? 'up' : 'down'
    return (
        <div className={cn('p-3 space-y-3 bg-theme-green/5 font-semibold leading-5 text-sm', type == 'down' && 'bg-theme-red/5')}>
            <div>
                <h1>{date}</h1>
                <span className='text-xs font-medium'>{day}</span>
            </div>

            <div>
                <span>${current_price}</span>
                <div className={cn('flex justify-start items-center text-theme-green', type == 'down' && 'text-theme-red')}>
                    {type == 'down' ? <ArrowDown /> : <ArrowUp />}
                    <span> {change} ({change_pct}%) </span>
                </div>
            </div>
        </div>
    )
}