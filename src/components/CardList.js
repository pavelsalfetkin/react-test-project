import React from 'react';
import Card from './Card';


class CardList extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		data: this.props.data,
	// 		keys: Object.keys(this.props.data)
	// 	}
	// }

	componentDidMount() {

	}

	render() {
		return (
			<div id="container">
				{Object.keys(this.props.data).map(key =>
					<Card
						onCardClick={this.props.onCardClick}
						key={this.props.data[key].id}
						user={this.props.data[key]}
						updateTime={2000}/> )}
			</div>
		);
	}
}

export default CardList;