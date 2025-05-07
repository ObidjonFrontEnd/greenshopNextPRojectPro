'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  HomeOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  ScanOutlined,
} from '@ant-design/icons'
import { motion } from 'framer-motion'



const HeaderSm = () => {

	const pathname = usePathname()

  const navItems = [
    { href: '/home', icon: <HomeOutlined />, label: 'Home' },
    { href: '/wishlist', icon: <HeartOutlined />, label: 'Wishlist' },
    { href: '/cart', icon: <ShoppingCartOutlined />, label: 'Cart' },
    { href: '/profile', icon: <UserOutlined />, label: 'Profile' },
  ]

  const isScanActive = pathname === '/scan'
	return (
		<div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md bg-white rounded-full shadow-lg px-6 py-4 flex justify-between items-center z-50">

      <div className="flex flex-1 justify-evenly gap-4">
        {navItems.slice(0, 2).map((item) => (
          <Link key={item.href} href={item.href}>
            <motion.div
              className={`text-2xl ${
                pathname === item.href ? 'text-green-500' : 'text-gray-400'
              }`}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.div>
          </Link>
        ))}
      </div>

      <div className="relative z-10 -mt-[40px]">
        <Link href="/scan">
          <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className={`w-[70px] h-[70px] rounded-full flex items-center justify-center border-4 border-white shadow-lg ${
              isScanActive ? 'bg-green-700' : 'bg-green-500'
            }`}
          >
            <ScanOutlined className="text-white text-2xl" />
          </motion.div>
        </Link>
      </div>


      <div className="flex flex-1 justify-evenly gap-4">
        {navItems.slice(2).map((item) => (
          <Link key={item.href} href={item.href}>
            <motion.div
              className={`text-2xl ${
                pathname === item.href ? 'text-green-500' : 'text-gray-400'
              }`}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
	)
}

export default HeaderSm