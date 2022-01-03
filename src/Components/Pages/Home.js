import '../../styles/home.css';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';

const Home = () => {
	return (
		<div className='background'>
			<div className='bg-image'></div>
			<div className='login'>
				<LoginButton />
			</div>
		</div>
	)
}

export default Home;