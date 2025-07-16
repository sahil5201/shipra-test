import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

function DMA() {
    const header = ['Days', '5', '10', '20', '50', '100', '200', '300']
    const rows = [
        ['DMA Price', '$155.15', '$155.27', '$155.76', '$164.13', '$177.23', '$171.98', '$168.22']
    ]
    return (
        <Card className='shadow-none rounded-lg gap-2 w-full p-4'>
            <CardHeader className='p-0'>
                <CardTitle className='text-sm font-semibold'>Daily Moving Average (DMA)</CardTitle>
            </CardHeader>
            <CardContent className='p-0 text-xs font-normal space-y-1.5'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            {header.map((head, index) => (
                                <TableHead key={`table-head-${head}-${index}`} className="first:w-[100px] text-xs">{head}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={`table-row-${index}`}>
                                {row.map((cell, index) => (
                                    <TableCell key={`table-row-cell-${index}`} className="first:font-medium text-xs">{cell}</TableCell>
                                ))}
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default DMA