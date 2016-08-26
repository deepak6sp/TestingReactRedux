import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "./../actions";

class CommentBox extends Component {
	constructor(props){
		super(props);
		this.state = {textValue: ""};
	}
	_handleTextChange(e){
		this.setState ({textValue : e.target.value});
	}
	_handleSubmit(e){
		e.preventDefault();
		this.props.saveComment(this.state.textValue);
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


export default connect(null,actions)(CommentBox)