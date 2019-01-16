import React from 'react';
import Card from './Card';


class CardList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data.initialContests,
			keys: Object.keys(this.props.data.initialContests)
		}
	}

	componentDidMount() {
	}

	render() {
		return (
			<div id="container">
				{this.state.keys.map(key => <Card key={this.state.data[key].id} user={this.state.data[key]} updateTime={2000}/> )}
			</div>
		);
	}
}

export default CardList;