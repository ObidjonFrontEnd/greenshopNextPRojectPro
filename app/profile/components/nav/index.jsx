'use client'
import NavLinkProfil from '@/app/hook/NavLink/navlink'
import useUserStore from '@/app/redux/usetData/userData'
import { LogOut, ShoppingBasket, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const ProfilNav = () => {
	const { clearUser } = useUserStore()
const router = useRouter()
	const logOut =async () => {
		await clearUser()
		router.push('/home')
	}
	return (
		<div className=' w-full  rounded-[6px] md:w-[200px] bg-[#FBFBFB] h-full px-[15px] py-[20px]'>
			<h2 className='text-[#3D3D3D] text-center md:text-start font-bold text-[18px] mb-[20px]'>
				My account
			</h2>
			<div className='flex justify-between h-[85%] px-[15px] flex-col'>
				<ul className=' flex justify-between md:justify-start md:flex-col gap-[15px] text-[16px] text-[#3D3D3D]'>
					<li>
						<NavLinkProfil href={'/profile'}>
							<span className='flex items-center justify-between'>
								<User /> Profile Detail
							</span>
						</NavLinkProfil>
					</li>
					<li>
						<NavLinkProfil href={'/profile/myproducts'}>
							<span className='flex items-center justify-between'>
								<ShoppingBasket /> My Products
							</span>
						</NavLinkProfil>
					</li>
				</ul>

				<button
					onClick={logOut}
					className='flex items-center justify-between  w-full cursor-pointer text-red-500'
				>
					<span className='flex items-center justify-betwee w-full gap-[15px]'>
						<LogOut className='mr-2' /> Logout
					</span>
				</button>
			</div>
		</div>
	)
}

export default ProfilNav
