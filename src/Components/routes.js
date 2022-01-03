import { Router, Route } from "react-router-dom";
import DashBoard from "./Pages/DashBoard";
import Home from './Pages/Home';

const routes = () => {
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/dashboard" component={DashBoard} />  
  </Router>
}

export default routes;