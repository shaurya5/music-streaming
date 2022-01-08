import HeaderDash from '../HeaderDash';
import MusicCard from '../MusicCard';
import '../../styles/dashboard.css';
import Upload from '../Upload';
import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
	const { isAuthenticated } = useAuth0();
	const[musicList, setMusicList] = useState([]);
	const navigate = useNavigate();

	async function getSongs() {
		const { data } = await supabase
			.from("songs")
			.select();
		setMusicList(data);
	}

	useEffect(() => {
		getSongs();
	}, []);
	console.log(musicList);

	if(!isAuthenticated){
		navigate('/');
	}

	return (
		isAuthenticated &&
		<div>
			<HeaderDash />
			<Upload />
			{/* <div className='music-grid'>
				{musicList.map((m, key) => (
					<MusicCard musicList={m} index={key}/>
				))}
			</div> */}
		</div>
	);
}

export default DashBoard;