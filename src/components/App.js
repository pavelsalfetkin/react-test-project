import React from 'react';
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

		fetch('/api/users')
			.then(response => {
				console.log(response.headers.get('Content-Type')); // application/json; charset=utf-8
				console.log(response.status); // 200
				return response.json();
			})
			.then(users => {
				// console.log(users);
				this.setState({
					data: users,
					keys: Object.keys(users),
				});
			})
			.catch( alert );

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