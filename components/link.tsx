'use client';
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props {
    path: string,
    title: string
}

function NavLink({ path, title }: Props) {
    const pathname = usePathname()
    return (
        <Link href={path} className={cn("block pb-2 mx-auto text-foreground font-medium text-sm", pathname === path && 'text-theme-blue border-b-2 border-theme-blue')} aria-current="page">
            {title}
        </Link>
    )
}

export default NavLink