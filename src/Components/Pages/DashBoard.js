import HeaderDash from '../HeaderDash';
import Profile from '../Profile';
import LogoutButton from '../LogoutButton';
import MyProfile from '../MyProfile';

const DashBoard = () => {
	return (
		<div>
			<HeaderDash />
			<Profile />
			<MyProfile />
		</div>
	);
}

export default DashBoard;