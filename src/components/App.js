import React from 'react';
import CardList from './CardList';


const pushState = (obj, url) => {
	window.history.pushState(obj, '', url);
}


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.indexData
		}
		this.onCardClick = this.onCardClick.bind(this);
	}

	componentDidMount() {

	}

	onCardClick(id) {
		console.log("fetchCard", id);
		pushState({ currentId: id }, `/card/${id}`);
		this.setState({ data: { [id]: this.state.data[id] } });
	}

	render() {
		return (
			<CardList data={this.state.data} onCardClick={this.onCardClick} />
		);
	}
}

export default App;


// $r.setState({ keys: $r.state.keys.slice(1) }) - in chrome console