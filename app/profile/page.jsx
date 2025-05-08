import ProfilNav from './components/nav'

import HeaderSm from '../Components/header/Responsive/headerSm'
import ProfileForm from './components/PofilForm'

const Profile = () => {
	return (
		<div className='max-w-[1200px] mx-auto px-[15px]'>
			<div className='md:hidden'>
				<HeaderSm />
			</div>
			<div className='flex flex-col md:flex-row w-full h-full mt-[50px] gap-[40px]'>
				<div className=''>
					<ProfilNav />
				</div>
				<div className='w-full'>
					<ProfileForm />
				</div>
			</div>
		</div>
	)
}

export default Profile
