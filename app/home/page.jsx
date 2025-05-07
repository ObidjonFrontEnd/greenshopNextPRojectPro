import Components from './components';

const Home = async({ searchParams }) => {
	const queryObj = await searchParams; 
	const query = queryObj?.search || '';
	const categories = queryObj?.category || 'beauty'


	return (
		<div>
			<Components query={query} categories={categories} />
		</div>
	);
};

export default Home;
