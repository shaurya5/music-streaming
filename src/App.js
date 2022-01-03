import './App.css';
import Home from './Components/Pages/Home';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import DashBoard from './Components/Pages/DashBoard';
import LoginButton from './Components/LoginButton';
import routes from './Components/routes';
import HeaderDash from './Components/HeaderDash';
import HeaderHome from './Components/HeaderHome';

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
