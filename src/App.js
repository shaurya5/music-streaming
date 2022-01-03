import './App.css';
import Home from './Components/Pages/Home';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import DashBoard from './Components/Pages/DashBoard';
import LoginButton from './Components/LoginButton';
import routes from './Components/routes';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header />
      <DashBoard />
    </div>
  );
}

export default App;
