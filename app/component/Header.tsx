import React from 'react'
import Image from 'next/image'
import Logo from '../../public/M Logo.png'
import Button from './HeaderButton'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='bg-white'>
      <nav className='flex justify-between items-center lg:mx-20 p-7 flex-col sm:flex-row'>
        <section className='flex justify-start items-center gap-4'>
          <Image src={Logo} alt="Logo" className='w-20 h-20 object-contain' />
          <h1 className='font-bold text-lg font-sans'> Misbah </h1>
        </section>
        <section>
          <ul className='flex justify-between items-center gap-4 lg:gap-8 font-sans'>
            <li>
              <Link href="/" className='hover:text-amber-500'>Home</Link>
            </li>
            <li>
              <Link href="/About" className='hover:text-amber-500'>About</Link>
            </li>
            <li>
              <Link href="/Skills" className='hover:text-amber-500'>Skills</Link>
            </li>
            <Link href="/Contact">
              <Button className='bg-purple-800 hover:bg-amber-500 py-3 px-5 text-white rounded-md font-semibold font-sans text-sm'/>
            </Link>
          </ul>
        </section>
      </nav>
    </div>
  )
}



