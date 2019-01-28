import React from 'react';
import CardList from './CardList';
import * as api from '../api';


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
		console.log("this.state", this.state.data);
	}

	onCardClick(id) {
		console.log("id", id);
		pushState({ currentId: id }, `/card/${id}`);
		api.apiDataId(id)
			.then(dataId => {
				console.log("api.apiDataId(id)", dataId);
				console.log("this.setState", { data: { [id]: dataId } });
				this.setState({ data: { [id]: dataId } });
				console.log("this.state", this.state.data);
			})
	}

	render() {
		return (
			<CardList data={this.state.data} onCardClick={this.onCardClick} />
		);
	}
}

export default App;


// $r.setState({ keys: $r.state.keys.slice(1) }) - in chrome console