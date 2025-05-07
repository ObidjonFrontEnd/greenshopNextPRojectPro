'use client'
import NavLink from '@/app/hook/NavLink'
import Link from 'next/link'
import React from 'react'
import { Search  , ShoppingCart , LogIn } from 'lucide-react';


const HeaderMD = () => {
	return (
		<header className='max-w-[1200px] mx-auto'>
			<nav className='flex justify-between h-[78px] w-full px-[10px] items-center border-b-[#46A35880] border-b-[1px]'>
				<div className="logo">
					<Link href={'/home'}>Logo</Link>
				</div>
				<ul className='items-center md:gap-[25px] gap-[10px] lg:gap-[50px]  text-[#3D3D3D] font-normal leading-[100%] text-[16px] h-full flex'>
					<li >
						<NavLink  href={'/home'}>
								Home
						</NavLink>
					</li>
					<li>
						<NavLink href={'/blog'}>
							Blog
						</NavLink>
					</li>
				</ul>

				<ul className='flex gap-[30px] items-center '>
					<li>
						<Link href={'/'}>
							<Search/>
						</Link>
					</li>
					<li>
						<Link href={'/'}>
						<ShoppingCart/>
						</Link>
					</li>
					<li>
						<button className='bg-[#46A358] px-[19px] font-medium text-[16px] py-[10px] text-white flex gap-[5px] text-bold rounded-[6px]'>
								<LogIn/> Login
						</button>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default HeaderMD