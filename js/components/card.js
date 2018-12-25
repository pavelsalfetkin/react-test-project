class Avatar extends React.Component {
	render() {
		return <div className="avatar"><div className="image"></div></div>;
	}
}

class Name extends React.Component {
	render() {
		return <div className="name"><span>{this.props.name}</span></div>;
	}
}

class About extends React.Component {
	render() {
		return <div className="about"><span>{this.props.about}</span></div>;
	}
}

class DateBlock extends React.Component {
	render() {
		return <div className="date"><span>{this.props.date}</span></div>;
	}
}

class Text extends React.Component {
	render() {
		return <div className="text"><span>{this.props.text}</span></div>;
	}
}

class NameBlock extends React.Component {
	render() {
		return <div className="name-block">
      <Avatar avatar={this.props.user.avatar} />
      <Name name={this.props.user.name} />
    </div>;
	}
}

class AboutBlock extends React.Component {
	render() {
		return <div className="about-block">
      <About about={this.props.user.about} />
      <DateBlock date={this.props.user.date} />
    </div>;
	}
}

class Card extends React.Component {
	render() {
		return <div className="card">
      <NameBlock user={this.props.user} />
      <AboutBlock user={this.props.user} />
      <Text text={this.props.user.text} />
    </div>;
	}
}

export default Card;