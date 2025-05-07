'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Search = () => {
	const searchParams = useSearchParams();
	const [query, setQuery] = useState('')
	const router = useRouter()

	useEffect(() => {
		if (searchParams.has('search')) {
			const params = new URLSearchParams(searchParams.toString());
			params.delete('search');
			router.replace(`?${params.toString()}`, { scroll: false });
		}
	}, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    router.push(`?search=${encodeURIComponent(query)}`, {
      scroll: false,
    });
  };



	return (
		<div>
			<div className="w-full mb-[30px] pt-[14px] flex gap-[10px]">
				 <input type="text" className='w-full focus:text-[#46A358] outline-none rounded-[30px] px-[15px] h-[40px] border-[1px] border-[#46A358]' placeholder='Search By Title' onChange={(e)=>{setQuery(e.target.value)}} />
				 <button className='bg-[#46A358] border-[1px] border-[#46A358] duration-300 px-[20px] py-[10px] rounded-[6px] text-white font-bold hover:bg-white hover:text-[#46A358]' onClick={handleSubmit}>Search</button>
			</div>
		</div>
	)
}

export default Search