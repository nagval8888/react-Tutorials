import React from 'react';
import ReactDOM  from 'react-dom';

/* 1.
let name = 'Sergeiko';
let obj = {
	fName: 'Sergei',
	lName: 'Korovin'
};
const element = <h1>Welcome {name} to {obj.lName} and see {obj.fName}!</h1>;
ReactDOM.render(
	element,
	document.getElementById('root')
);*/
/*2.
function cartoon(name='Bear', show='Masha') {
	return (
		<div>
			<h1 className="someClass">Cartoon name is {name} and its show {show}</h1>
			<h2>Hello</h2>
		</div>
	);
}
ReactDOM.render(
	cartoon('Yasmin', 'Ser'),
	document.getElementById('root')
);*/
/*3.*/
setInterval(function(){
	ReactDOM.render(
		<h1>Time now - {new Date().toLocaleTimeString()}</h1>,
		document.getElementById('root')
	);
}, 1000);


