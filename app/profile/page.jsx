import React from 'react'
import ProfilNav from './components/nav'
import { Button, Form, Input, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import ProfileForm from './components/PofilForm'
import HeaderSm from '../Components/header/Responsive/headerSm'

const onFinish = values => {
	console.log('Submitted values:', values)
}

const Profile = () => {
	return (
		<div className='max-w-[1200px] mx-auto px-[15px]'>
			<div className="md:hidden">
				<HeaderSm/>
			</div>
			<div className='flex flex-col md:flex-row w-full h-full mt-[50px] gap-[40px]'>
				<div className="">
					<ProfilNav />
				</div>
				<div className="w-full">
					<ProfileForm />
				</div>
			</div>
		</div>
	)
}

export default Profile
