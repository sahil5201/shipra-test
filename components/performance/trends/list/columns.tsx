"use client"

import { cn } from "@/lib/utils";
import { StockDataType } from "@/types";
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<StockDataType>[] = [
    {
        accessorKey: "date",
        header: "date",
    },
    {
        accessorKey: "current_price",
        header: "price",
        cell: ({ row }) => {
            const currentPrice: number = row.getValue("current_price")
            return <div className={cn('text-start')}> ${currentPrice} </div >
        }
    },
    {
        accessorKey: "change",
        header: "price change",
        cell: ({ row }) => {
            const amount: number = row.getValue("change")
            const colorClass = Math.sign(amount) == 1 ? "text-theme-green" : "text-theme-red"
            return <div className={cn('text-start', colorClass)}> ${amount.toFixed(2)} </div >
        }
    },
    {
        accessorKey: "change_pct",
        header: "% Change",
        cell: ({ row }) => {
            const amount: number = row.getValue("change_pct")
            const colorClass = Math.sign(amount) == 1 ? "text-theme-green" : "text-theme-red"
            return <div className={cn('text-start', colorClass)}> {amount}</div >
        }
    },
    {
        accessorKey: "pe_change_pct",
        header: "PE % Change",
        cell: ({ row }) => {
            const amount: number = row.getValue("pe_change_pct")
            const colorClass = Math.sign(amount) == 1 ? "text-theme-green" : "text-theme-red"
            return <div className={cn('text-start', colorClass)}> {amount}</div >
        }
    },
    {
        accessorKey: "pe",
        header: "PE",
        cell: ({ row }) => {
            const amount: number = row.getValue("pe")
            const colorClass = Math.sign(amount) == 1 ? "text-theme-green" : "text-theme-red"
            return <div className={cn('text-start', colorClass)}> {amount}</div >
        }
    }
]