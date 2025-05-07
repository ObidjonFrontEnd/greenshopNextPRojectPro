import React from 'react'
import HeaderMD from './headerMd'
import HeaderSm from './headerSm'

const ResponsiveHeader = () => {
	return (
		<div>
			<div className="hidden md:block">
				<HeaderMD/>
				
			</div>
			<div className="md:hidden">
				<HeaderSm/>
			</div>
		</div>
	)
}

export default ResponsiveHeader