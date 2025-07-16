import React from 'react'
import { Progress } from './ui/progress'
import { cn } from '@/lib/utils'

interface Props {
  className?: string
  value: number
}

function ProgressBar({ value, className }: Props) {
  const up = Math.sign(value) && value * 2
  const down = Math.sign(value) == -1 ? Math.abs(value * 2) : 0;
  return (
    <div className='flex justify-center items-center'>
      <Progress value={down} className={cn('bg-theme-muted rounded-l-none h-1 rotate-180', className)} indicatorClassName={'bg-theme-red'} />
      <Progress value={up} className={cn('bg-theme-muted rounded-l-none h-1', className)} indicatorClassName={'bg-theme-green'} />
    </div>
  )
}

export default ProgressBar