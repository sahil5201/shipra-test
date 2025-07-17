import { TriangleAlert } from 'lucide-react'
import React from 'react'

/**
 * Error fallback to manage and handle React Query-related errors. 
 *
 * 
 */
function ErrorFallback({ message }: { message?: string }) {
    return (
        <div className='mx-auto w-fit text-red-600 text-center mt-5'>
            <p className='inline-flex gap-2'> <TriangleAlert /> Oops! Something went wrong.</p>
            {message && <p className='text-sm'>{message}</p>}
        </div>
    )
}

export default ErrorFallback

