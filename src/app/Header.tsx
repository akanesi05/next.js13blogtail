import React from 'react'
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-5 px-10 border-b flex justify-between center"> 
        <div><h1><Link href="/">Next.js</Link></h1>
        </div>

        <div>
            <nav className="text-sm font-medium">
            <Link href="/articles/new" className="bg-orange-300 px-3 py-3 ">記事を書く</Link>
            </nav>
        </div>
    </header>

  )
}

export default Header
