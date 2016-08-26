import React, { Component } from 'react';
import { connect } from "react-redux";



class CommentList extends Component {
	constructor(props){
		super(props);
	}
  	render() {
  		var list = this.props.comments.map(function(comment, index){
  			return <li key={index}>{comment}</li>
  		});

	    return (
	    	<ul className="comment-list">
	      		{list}
		    </ul>
	    );
  	}
}


function mapStateToProps(state) {
	return { comments : state.comments }
}


export default connect(mapStateToProps)(CommentList)

