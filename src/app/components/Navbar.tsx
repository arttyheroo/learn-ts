import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-rose-400 flex justify-between items-center px-20 py-10 h-16'>
        <div className='logo'><Link href="/">logo</Link></div>
        <ul className='menu flex space-x-5'>
            <li><Link href="/about-us">AboutUs</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/learnmore">Learnmore</Link></li>
        </ul>
    </div>
  )
}

export default Navbar