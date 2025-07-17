import React from 'react'
import { Progress } from '../ui/progress'
import { cn } from '@/lib/utils'

interface Props {
  className?: string
  up?: number
  down?: number
}

/**
 * The progress-bar component accepts a numeric value to visually represent upward or downward progress.
 *
 * 
 */
function ProgressBar({ up, down, className }: Props) {
  return (
    <div className='flex justify-center items-center'>
      <Progress value={down || 0} className={cn('bg-theme-muted rounded-l-none h-1 rotate-180', className)} indicatorClassName={'bg-theme-red'} aria-label="down progress" />
      <Progress value={up || 0} className={cn('bg-theme-muted rounded-l-none h-1', className)} indicatorClassName={'bg-theme-green'} aria-label="up progress" />
    </div>
  )
}

export default ProgressBar