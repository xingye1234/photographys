'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h2 className='font-bold'>Something went wrong!</h2>
      <p className='my-4 text-red-500 w-1/2 indent-8 text-center'>{error && error.message}</p>
      <button className='font-bold hover:text-blue-500 bg-gray-300 px-2 py-1 rounded-md'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again !
      </button>
    </div>
  )
}