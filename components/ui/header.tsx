'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './mobile-menu'

export default function Header() {

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className='fixed w-full z-30 bg-white'>
      <div className="flex items-center justify-center h-8 md:h-10 bg-aip-orange-bittersweet text-white">
        <p>📣 aiphrodite selected from 1,000s of startups to <a href='https://www.pwc.co.uk/industries/technology-media-and-telecommunications/insights/scale-media.html' className='underline'>PwC Scale | AdTech! ↪</a></p>
      </div>
      <div className="px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <a href="/">
              <Image src="/images/logo-full-color.svg" alt="aiphrodite logo" width={180} height={80} />
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop menu links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Home</Link>
              </li>
              {/* <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">About Us</Link>
              </li> */}
              {/* <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Blog</Link>
              </li> */}
              <li>
                <Link href="/docs" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Case Studies & Docs</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Contact</Link>
              </li>
            </ul>

            <ul className="flex justify-end flex-wrap items-center">
              <li>
                <Link href="https://sales.aiphrodite.ai/meetings/willsong/discover" className="btn-sm text-gray-200 bg-purple-primary hover:bg-purple-hover ml-3">
                  <span>Book a Discovery Call</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
                </Link>
              </li>
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
