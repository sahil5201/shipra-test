"use client"
import React, { useCallback } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Grid2x2, List } from 'lucide-react'
import { usePathname, useSearchParams } from 'next/navigation'

interface Props {
    toggleKey: string
}

function ToggleList({ toggleKey }: Props) {
    const searchParams = useSearchParams()
    const pathname = usePathname();
    const params = new URLSearchParams(searchParams.toString());

    const buildHref = useCallback(
        (value: string) => {
            params.set(toggleKey, value);
            return `${pathname}?${params.toString()}`;
        },
        [searchParams, pathname, toggleKey]
    );
    const listActiveClass = params.toString().includes(toggleKey + "=list") || !params.toString().includes(toggleKey) ? "active" : 'ghost'
    const gridActiveClass = params.toString().includes(toggleKey + "=grid") ? "active" : 'ghost'

    return (
        <div className="space-x-1">
            <Button size={'icon'} variant={listActiveClass} asChild className='p-0 size-6 hover:text-theme-blue'>
                <Link href={buildHref('list')} aria-label={`toogle to ${toggleKey} list`}>
                    <List />
                </Link>
            </Button>
            <Button size={'icon'} variant={gridActiveClass} asChild className='p-0 size-6 hover:text-theme-blue'>
                <Link href={buildHref('grid')} aria-label={`toogle to ${toggleKey} grid`}>
                    <Grid2x2 />
                </Link>
            </Button>
        </div>
    )
}

export default ToggleList