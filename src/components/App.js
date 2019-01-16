import React from 'react';
import CardList from './CardList';


class App extends React.Component {

	render() {
		return (
			<CardList data={this.props} />
		);
	}
}

export default App;


// $r.setState({ keys: $r.state.keys.slice(1) }) - in chrome console