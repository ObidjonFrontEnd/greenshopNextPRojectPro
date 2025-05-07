import React from 'react'
import Cotegory from './cotegory'

const Cotegorys = ({categories}) => {
	return (
		<div className='px-[18px] py-[14px] h-full bg-[#FBFBFB]  rounded-[5px] w-[310px]'>	
			<Cotegory categories={categories}/>
		</div>
	)
}

export default Cotegorys