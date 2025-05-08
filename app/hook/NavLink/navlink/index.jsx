'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLinkProfil({ href, children }) {
	const pathname = usePathname()
	const isActive = pathname === href

	return (
		<Link href={href} className={` ${isActive ? 'text-[#46A358] font-bold' : ''}`}>
			{children}
		</Link>
	)
}
