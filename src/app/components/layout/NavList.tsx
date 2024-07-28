import React from 'react'
import Link from 'next/link';
import { INavlist } from '@/app/types/navbar/types';

export default function NavList({ navlist }: { navlist: INavlist[] }) {
    return (
        <ul className='flex'>
            {
                navlist.map(item => {
                    return (
                        <li key={item.id} className='mx-3 lg:mx-4 cursor-pointer rounded-md py-1 px-4 text-lg hover:font-bold
                         hover:bg-[#cbd5e1] hover:text-white'>
                            <Link href={item.link}>{item.name}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}
