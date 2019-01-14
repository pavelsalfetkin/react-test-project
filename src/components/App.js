import React from 'react';
import Card from './Card';


// $r.setState({ keys: $r.state.keys.slice(1) }) - in chrome console


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.initialContests,
			keys: Object.keys(this.props.initialContests)
		}
	}

	componentDidMount() {
	}

	// {console.log(this.state.data)}
	// {console.log(this.state.keys)}

	render() {
		return (
			<div id="container">
				{this.state.keys.map(key => <Card key={this.state.data[key].id} user={this.state.data[key]} updateTime={2000}/> )}
			</div>
		);
	}
}

export default App;