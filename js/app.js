// import users from './users';
import Card from './components/card';

// console.log(`users -`, users);
console.log(`Card -`, Card);


// function formatName(user) {
//   return `${user.firstName} ${user.lastName}`;
// }

// элемент hello, состовная часть "компонента"
// const hello = (
// 	<h1>Hello, {user.firstName} {user.lastName}</h1>
// );

// элемент hello, состовная часть "компонента"
// const hello = (
// 	<h1 className="greeting">Hello, {formatName(user)}</h1>
// );

// компонент на базе функции
// function Hello(props) {
// 	return <h1 className="greeting">Hello, {props.firstName} {props.lastName}</h1>;
// }

// компонент на базе класса
// class Hello extends React.Component {
// 	render() {
// 		return <h1 className="greeting">Hello, {this.props.firstName} {this.props.lastName}</h1>;
// 	}
// }

class App extends React.Component {
	render() {
		return (
			<div id="container">
				<Card user={users.user1} />
    		<Card user={users.user2} />
			</div>
		);
	}
}

// const component = <Hello firstName={user.firstName} lastName={user.lastName} />;

ReactDOM.render(
	<App />,
	document.getElementById('root')
);


// function loop() {
// 	const time = (
// 		<h2 className="time">{new Date().toLocaleTimeString()}</h2>
// 	);
// 	ReactDOM.render(
// 		<div id="container">
// 			<Hello/>
// 			{time}
// 		</div>,
// 		document.getElementById('root')
// 	);
// }

// setInterval(loop, 1000);