import ProgressBar from "@/components/common/progress-bar";
import { TradingDataType } from "@/types";
import { format } from "date-fns";

const HighLowCard = (data: TradingDataType) => {
    const formattedDateHigh = format(new Date(data.highDate), 'do MMM yyyy');
    const formattedDateLow = format(new Date(data.lowDate), 'do MMM yyyy');
    return (
        <div className='last:border-none border-r pr-5 space-y-2'>
            <div className='flex justify-between items-center border-b pb-1'>
                <h1>{data.week} Week</h1>
            </div>
            <div className='flex justify-between items-center'>
                <div className='text-start leading-5'>
                    <h2>${data.low}</h2>
                    <span className='text-theme-red'>{data.lowPercentage}% downside</span>
                </div>
                <div className='text-end leading-5'>
                    <h2>${data.high}</h2>
                    <span className='text-theme-green'>{data.highPercentage}% downside</span>
                </div>
            </div>
            <ProgressBar up={data.highPercentage} down={Math.abs(data.lowPercentage)} />
            <div className='flex justify-between items-center'>
                <div className='text-start leading-5'>
                    <h2>{formattedDateLow}</h2>
                    <span className='text-theme-muted-foreground'>{data.lowDaysAgo ? `${data.lowDaysAgo} days ago` : '-'}</span>
                </div>
                <div className='text-end leading-5'>
                    <h2>{formattedDateHigh}</h2>
                    <span className='text-theme-muted-foreground'>{data.highDaysAgo ? `${data.highDaysAgo} days ago` : '-'}</span>
                </div>
            </div>
        </div>
    )
}

export default HighLowCard;