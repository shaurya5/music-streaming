import './App.css';
import Home from './Components/Pages/Home';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import DashBoard from './Components/Pages/DashBoard';
import MyProfile from './Components/MyProfile';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
