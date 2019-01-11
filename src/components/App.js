import React from 'react';
import axios from 'axios';
import Card from './Card';
// import users from '../data/users';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			keys: []
		}
	}

	componentDidMount() {
		console.log("App - componentDidMount");

		axios.get('/api/users')
			.then(resp => {
				// console.log(resp);
				// console.log(resp.data);
				this.setState({
					data: resp.data,
					keys: Object.keys(resp.data),
				});
			})
			.catch(console.error);

		// this.setState({
		// 	data: users,
		// 	keys: Object.keys(users),
		// });

		// debugger;
		// $r.setState({ keys: $r.state.keys.slice(1) }) - in chrome console
	}

	render() {
		return (
			<div id="container">
				{console.log(this.state.data)}
				{console.log(this.state.keys)}
				{this.state.keys.map(key => <Card key={this.state.data[key].id} user={this.state.data[key]} updateTime={2000}/> )}
			</div>
		);
	}
}

export default App;