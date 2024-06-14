'use client';

import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function Header() {
    const {user, isSignedIn} = useUser();
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
        <Image src={'./logo.svg'}
            alt='logo'
            width={160}
            height={100}
        />
        <div className='flex gap-4'>
        {isSignedIn ? <Link href={'/dashboard'}><Button>Dashboard</Button></Link> : <Link href={'/sign-in'}><Button className="bg-white border text-black">Dashboard</Button></Link>}
        {isSignedIn ? <UserButton/> : <Link href={'/sign-in'}><Button>Get Started</Button></Link>}
        </div>
    </div>
  )
}

export default Header