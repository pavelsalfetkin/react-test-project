import React from 'react';


class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: 0 };
		this.onCardClick = this.onCardClick.bind(this);
		this.onBackClick = this.onBackClick.bind(this);
	}

	updateDate() {
		this.setState({ date: new Date().toLocaleTimeString() });
	}

	componentDidMount() {
		this.setState({ date: new Date().toLocaleTimeString() });
		// this.upDate = setInterval( () => this.updateDate(), this.props.updateTime );
		// debugger;
	}

	componentWillUnmount() {
		console.log("Card - componentWillUnmount");
		clearInterval(this.upDate);
		// debugger;
	}

	onCardClick() {
		this.props.onCardClick(this.props.user.id);
	}

	onBackClick(e) {
		e.stopPropagation();
		console.log("Card - onBackClick");
		this.props.onBackClick();
	}

	render() {
		return (
			<div className="card" onClick={this.onCardClick}>
				<div className="name-block">
					<div className="avatar"><div className="image"></div></div>
					<div className="name"><span>{this.props.user.name}</span></div>
				</div>
				<div className="about-block">
					<div className="about"><span>{this.props.user.about}</span></div>
					<div className="date"><span>{this.state.date}</span></div>
				</div>
				<div className="text"><span>{this.props.user.text}</span></div>
				<div className="back"><span onClick={this.onBackClick}>Back</span></div>
			</div>
		);
	}
}


export default Card;