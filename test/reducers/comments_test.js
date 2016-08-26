import { expect } from "../test_helper";
import CommentsReducer from "../../src/reducers/comments_reducer";
import { SAVE_COMMENT } from "./../../src/actions/constants";

describe("Testing comment reducer", ()=>{

	it("handles action of unkown type", ()=>{
		expect(CommentsReducer(undefined, {})).to.eql([]);

	});

	it("handles action of type SAVE_COMMENT", ()=>{
		const action = 	{  	type: SAVE_COMMENT,
							payload : 'new comment'
						};
		expect(CommentsReducer([],action)).to.eql(['new comment']);
	});


});