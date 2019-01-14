import React from 'react';
import ReactDOM from 'react-dom';
// import { hydrate } from "react-dom"
import App from './components/App';


ReactDOM.hydrate(
	<App initialContests={[]} />,
	document.getElementById('root')
);



// ReactDOM.render(
// 	<App initialContests={[]} />,
// 	document.getElementById('root')
// );

// setTimeout(()=>{
// 	ReactDOM.render(
// 		<h1>Components Will Unmount</h1>,
// 		document.getElementById('root')
// 	);
// }, 8000);