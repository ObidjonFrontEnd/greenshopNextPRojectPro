'use client'
import { Input } from 'antd'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SearchBar() {
  const router = useRouter()
  const [query, setQuery] = useState('')

  const onSearch = (value) => {
    
  
      router.push(`?search=${encodeURIComponent(value)}`)

  }

  return (
    <div className="flex justify-center mb-6">
      <Input.Search
        placeholder="Search..."
        className="max-w-lg w-full h-[40px]"
         enterButton={
          <button className='bg-[#46A358] h-[32px] rounded-[6px] px-[10px] text-white '><Search /></button>
        }
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={onSearch}
      />
    </div>
  )
}
