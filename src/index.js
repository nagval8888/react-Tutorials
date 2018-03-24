import React, { Component } from 'react';
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
/*3.
setInterval(function(){
	ReactDOM.render(
		<h1>Time now - {new Date().toLocaleTimeString()}</h1>,
		document.getElementById('root')
	);
}, 1000);*/
/*4. Component-functional
function Cartoon(props) {
	return <h1>Hello, {props.name}</h1>;
}
ReactDOM.render(
	<Cartoon name='Sergei'/>,
	document.getElementById('root')
);*/
/*5. Component-class
class Cartoon extends React.Component {
	render(){
		return <h1>Hello, {this.props.name}</h1>;
	}
}
ReactDOM.render(
	<Cartoon name='Sergei'/>,
	document.getElementById('root')
);*/
/*5. Component inside another Component
function Cartoon(props) {
	return <h1>Hello, {props.name} show {props.show}</h1>
}
function Show() {
	return (
		<div>
			<Cartoon name='Sergei' show='Your Love'/>
			<Cartoon name='Irena' show='My Love'/>
		</div>
	);
}
ReactDOM.render(
	<Show/>,
	document.getElementById('root')
);*/
/*6. State - clock
class Clock extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	date: new Date(),
		};
	}
	componentDidMount(){
		this.timer = setInterval( ()=> this.start(), 1000 );
	}
	componentWillUnmount() {
		clearInterval(this.timer);
	}
	start(){
		this.setState({
			date: new Date()
		})
	}
	render(){
		return <h1>Time is: {this.state.date.toLocaleTimeString()}</h1>;
	}
}
ReactDOM.render(
	<Clock/>,
	document.getElementById('root')
);*/
/*7.
class Inc extends Component {
    constructor(props){
        super(props);
        this.state = {
			counterLink: 0,
			counterButton: 0
        };
    }
    increment = (event)=>{
    	event.preventDefault();
    	this.setState({
			counterLink: this.state.counterLink+1,
			counterButton: this.state.counterButton+3
		});
	};
    render(){
    	return (
    		<div>
				<a href='http://google.com' onClick={this.increment}>
					Link Value is {this.state.counterLink}
				</a><br/><br/><br/>
				<button onClick={this.increment}>
					Button Value is {this.state.counterButton}
				</button>
			</div>
		);
	}
}
ReactDOM.render(
	<Inc/>,
	document.getElementById('root')
);*/
/*8.
function Message(props) {
	if (props.value) {
		return <h1>This is first message</h1>;
	}
	return <h1>I am second message</h1>;
}
class Btn extends Component {
    constructor(props){
        super(props);
        this.state = {
        	value: true
		};
    }
    handleClick = ()=>{
    	this.setState({
			value: !this.state.value
		});
	};
    render(){
    	return (
    		<div>
				<button onClick={this.handleClick}>Change the message</button>
				<Message value={this.state.value}/>
			</div>
		);
	}
}
ReactDOM.render(
	<Btn/>,
	document.getElementById('root')
);*/
/*9. List of massive
function ToonList(props) {
	const list = props.cartoon;
	const toons = list.map( (list,index)=>
		<li key={index}>{list}</li>
	);
	return <ul>{toons}</ul>;
}
const cartoons = ['Pikachu','Alladin','Tom','Tom'];
ReactDOM.render(
	<ToonList cartoon={cartoons}/>,
	document.getElementById('root')
);*/
/*10. Form,input,checkbox,textarea,select*/
class FormTest extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: '' // for checkbox->false, for select->'alladin'
        };
    }
	handleSubmit = (event)=>{
    	console.log(this.state.value);
		event.preventDefault();
	};
    handleChange = (event)=>{
    	this.setState({
			value: event.target.value // for checkbox,select->!this.state.value
		})
	};
    render(){
    	return (
			<form onSubmit={this.handleSubmit}>
				<input type='text' value={this.state.value}
					onChange={this.handleChange}/><br/><br/>
				
				<label>Checkbox</label>
				<input type='checkbox' value={this.state.value}
					   onChange={this.handleChange}/><br/><br/>
				
				<select value={this.state.value} onChange={this.handleChange}>
					<option value='pikachu'>Pikachu</option>
					<option value='alladin'>Alladin</option>
				</select>
				
				<textarea value={this.state.value} onChange={this.handleChange} cols="30" rows="10"/>
				
				<input type='submit' value='Go Ahead'/>
			</form>
		);
	}
}
ReactDOM.render(
	<FormTest />,
	document.getElementById('root')
);
