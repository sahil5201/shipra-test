"use client"

import { cn } from "@/lib/utils";
import { PeakDataType } from "@/types";
import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns";
import { Fragment } from "react";

export const columns: ColumnDef<PeakDataType>[] = [
    {
        accessorKey: "peak",
        header: "PEAK NO",
        cell: ({ row }) => {
            const peak: string = row.getValue("peak")
            return <div className={'text-start w-fit xl:w-xs'}> {peak} </div >
        }
    },
    {
        accessorKey: "Date",
        header: "date",
        cell: ({ row }) => {
            const dataDate: string = row.getValue("Date")
            const formattedDate = format(new Date(dataDate), 'dd MMM yyyy');
            return <div className={'text-start'}> {formattedDate} </div >
        }
    },
    {
        accessorKey: "timeDiff",
        header: "timeline",
        cell: ({ row }) => {
            const timeDiff: string = row.getValue("timeDiff")
            const timeDiffStr: string = row.original['time_diff_str'] || ''
            return (<Fragment>
                <div className='text-start leading-5'> {timeDiff} </div >
                <span className="text-xs text-muted-foreground leading-5">
                    {timeDiffStr}
                </span>
            </Fragment>)
        }
    },
    {
        accessorKey: "Close",
        header: "peak price",
        cell: ({ row }) => {
            const amount: number = row.getValue("Close")
            return <div className={'text-start'}> ${amount.toFixed(2)} </div >
        }
    },
    {
        accessorKey: "reversePercentageChange",
        header: "downwards Change",
        cell: ({ row }) => {
            const amount: number = row.getValue("reversePercentageChange")
            const colorClass = Math.sign(amount) == 1 ? "text-theme-green" : "text-theme-red"
            return <div className={cn('text-start', colorClass)}> {amount}</div >
        }
    },
    {
        accessorKey: "percentageChange",
        header: "upside Change",
        cell: ({ row }) => {
            const amount: number = row.getValue("percentageChange")
            const colorClass = Math.sign(amount) == 1 ? "text-theme-green" : "text-theme-red"
            return <div className={cn('text-start', colorClass)}> {amount}</div >
        }
    }
]