import React from 'react';
import CardList from './CardList';


const pushState = (obj, url) => {
	window.history.pushState(obj, '', url);
}

class App extends React.Component {

	fetchCard(id) {
		console.log("fetchCard", id);
		pushState({ currentId: id }, `/card/${id}`)
	}

	render() {
		return (
			<CardList data={this.props} onCardClick={this.fetchCard} />
		);
	}
}

export default App;


// $r.setState({ keys: $r.state.keys.slice(1) }) - in chrome console