import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h2 className='font-bold text-2xl'>Not Found</h2>
      <p className='my-2'>Could not find requested resource</p>
      <Link href="/" className='text-blue-400'>Return Home</Link>
    </div>
  )
}