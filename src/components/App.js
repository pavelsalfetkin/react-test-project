import React from 'react';
import CardList from './CardList';
import * as api from '../api';


const pushState = (obj, url) => {
	window.history.pushState(obj, '', url);
}

const onPopState = (handler) => {
	window.onpopstate = handler;
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.indexData
		}
		this.onCardClick = this.onCardClick.bind(this);
		this.onBackClick = this.onBackClick.bind(this);
	}

	componentDidMount() {
		onPopState((e) => {
			// console.log(e.state.currentId);
			this.getApiDataId(e.state.currentId);
		});
	}

	getApiDataId(id) {
		if (id) {
			// console.log("if", id);
			api.apiDataId(id)
			.then(dataId => {
				this.setState({ data: { [id]: dataId } });
			})
		}
		else if (!id) {
			// console.log("else if(null)", id);
			api.apiDataList()
			.then(dataList => {
				this.setState({ data: dataList });
			})
		}
	}

	onCardClick(id) {
		// console.log("id", id);
		pushState({ currentId: id }, `/card/${id}`);
		this.getApiDataId(id);
	}

	onBackClick() {
		// console.log("App - onBackClick");
		pushState({ currentId: null }, `/`);
		this.getApiDataId();
	}

	render() {
		return (
			<CardList
				data={this.state.data}
				onCardClick={this.onCardClick}
				onBackClick={this.onBackClick}
			/>
		);
	}
}

export default App;


// $r.setState({ keys: $r.state.keys.slice(1) }) - in chrome console