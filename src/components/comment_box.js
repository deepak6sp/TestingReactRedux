import React, { Component } from 'react';

export default class CommentBox extends Component {
	constructor(props){
		super(props);
		this.state = {textValue: ""};
	}
	_handleTextChange(e){
		this.setState ({textValue : e.target.value});
	}
	_handleSubmit(e){
		e.preventDefault();
		this.setState ({textValue : ""});
	}
  	render() {
	    return (
	    	<div className="comment-box">
		      	<form onSubmit={this._handleSubmit.bind(this)} >
		      		<br/>
			      	<textarea onChange={this._handleTextChange.bind(this)} value={this.state.textValue}/>
			      	<br/>
			      	<button>submit</button>
		      	</form>
		    </div>
	    );
  	}
}