import HeaderDash from '../HeaderDash';
import MusicCard from '../MusicCard';
import '../../styles/dashboard.css';
import Upload from '../Upload';
import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
// import '@supabase/supabase-js';

const DashBoard = () => {
	const[musicList, setMusicList] = useState([]);

	async function getSongs() {
		const { data } = await 
			supabase
				.from("songs")
				.select();
		setMusicList(data);
	}

	useEffect(() => {
		getSongs();
	}, []);

	return (
		<div>
			<HeaderDash />
			<Upload />
			{/* <div className='music-grid'>
				{musicList.map((m) => {
					<MusicCard musicList={m} />
				})} */}
			{/* </div> */}
		</div>
	);
}

export default DashBoard;