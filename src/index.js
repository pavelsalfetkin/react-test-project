import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


ReactDOM.render(
	<App />,
	document.getElementById('root')
);

// setTimeout(()=>{
// 	ReactDOM.render(
// 		<h1>Components Will Unmount</h1>,
// 		document.getElementById('root')
// 	);
// }, 8000);