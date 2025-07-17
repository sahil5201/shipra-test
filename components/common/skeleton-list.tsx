import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Skeleton } from '../ui/skeleton'

/**
 * Skeleton list component for showing a skeleton loading effect while data is fetching.
 *
 * 
 */
function SkeletonList({ colSize, rowSize }: { colSize?: number, rowSize?: number }) {
    const size = new Array(colSize || 6).fill('skeletonlist');
    const rows = new Array(rowSize || 20).fill('skeletonlist');
    return (
        <Table>
            <TableHeader>
                <TableRow className='hover:bg-transparent'>
                    {size.map((_, key) => (
                        <TableHead key={`skeletonlist-table-head-${key}`}><Skeleton className="h-6 rounded-lg" /></TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {rows.map((_, key) => (
                    <TableRow key={`skeletonlist-table-row-${key}`} className='hover:bg-transparent'>
                        <TableCell colSpan={colSize || 6}><Skeleton className="h-6 rounded-lg" /></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default SkeletonList