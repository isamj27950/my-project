import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import HomePage from './component/pages/HomePage';
import AboutPage from './component/pages/AboutPage';
import LldPage from './component/pages/LldPage';
import TeamPage from './component/pages/TeamPage';

function App() {
  return (
   
     <Router>
			
			<Routes>
				
				<Route path='/home' element=<HomePage /> />
				<Route path='/about' element=<AboutPage /> />
				<Route path='/lld' element=<LldPage /> />
				<Route path='/team' element=<TeamPage /> />
			
			</Routes>
	
		</Router>

  );
}

export default App;
