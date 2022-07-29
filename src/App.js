import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home'
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';


const App = () => {
	// state = {
	// 	users:[],
	// 	user:{},
	// 	repos:[],
	// 	loading:false,
	// 	alert:null
	// }
	// async componentDidMount(){
	// 	setLoading(true)

	// 	const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
	// 	// console.log(res.data)
	// 	this.setState({users:res.data, loading:false})
	// 	set
	// }

	// Search Users
	// const searchUsers = async (text) =>{
	// 	setLoading(true);
	// 	const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
	// 	// console.log(res.data)
	// 	setUsers(res.data.items);
	// 	setLoading(false)
	// }


	return (
		<GithubState>
			<AlertState>	
				<Router>
					<div className="App">
						<Navbar />  
						{/* <Alert alert={alert}/>   */}
						<div className="container">       
							<Alert/>  
							<Switch>
								{/* Multiple component Route */}
								<Route exact path = '/' component = {Home}/>
								{/* Single component Route */}
								<Route exact path='/about' component={About}/>
								{/* Must use render, to pass in state and props */}
								<Route exact path='/user/:login' component = {User} />
								<Route component={NotFound}/>
								
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>	
		</GithubState>
	);
	
	
}


export default App;
