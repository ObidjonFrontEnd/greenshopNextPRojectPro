


import NavLinkProfil from '@/app/hook/NavLink/navlink'
import { ShoppingBasket, User } from 'lucide-react'
import React from 'react'

const ProfilNav = () => {
	return (
		<div className=' w-full md:w-[200px] bg-[#FBFBFB] h-full px-[15px] py-[20px]'>
				<h2 className='text-[#3D3D3D] text-center md:text-start font-bold text-[18px] mb-[20px]'>My account</h2>
				<ul className='px-[15px] flex justify-between md:justify-start md:flex-col gap-[15px] text-[16px] text-[#3D3D3D]'>
					<li>
						<NavLinkProfil href={'/profile'  }>
						<span className='flex items-center justify-between'><User/> Profile Detail</span>
						</NavLinkProfil>
					</li>
					<li>
						<NavLinkProfil href={'/profile/myproducts'}>
							<span className='flex items-center justify-between'><ShoppingBasket /> My Products</span>
						</NavLinkProfil>
					</li>
				</ul>
		</div>
	)
}

export default ProfilNav