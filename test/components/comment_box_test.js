import { renderComponent, expect } from "../test_helper";
import CommentBox from "../../src/components/comment_box";

describe ("CommentBox Testing", ()=>{
	let component;
	beforeEach(()=>{
		component = renderComponent(CommentBox);
	});
	
	it("has class comment-box",()=>{
		expect(component).to.have.class('comment-box');
	});

	it ("has a text area", ()=>{
		expect(component.find("textarea")).to.exist;
	});

	it ("has a button", ()=>{
		expect(component.find("button")).to.exist;
	});

	describe("entering text area ", ()=>{
		beforeEach(()=>{
			component.find("textarea").simulate("change", "new comment");
		});
		it ("has a text value", ()=>{
			expect(component.find("textarea")).to.have.value("new comment");
		});

		it ("clears text value on submit", ()=>{
			component.find("form").simulate("submit");
			expect(component.find("textarea")).to.have.value("");
		});
	});

});