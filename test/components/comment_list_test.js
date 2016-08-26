import { renderComponent, expect } from "../test_helper";
import CommentList from "./../../src/components/comment_list";


describe("CommentList testing", ()=>{

	let component;
	beforeEach(()=>{
		const props = {comments : ["first comment","second comment"]};
		component = renderComponent(CommentList, null, props);
	});

	it("has li for each comment", ()=>{

		expect(component.find("li").length).to.equal(2);

	});

	it("shows each comment that is given", ()=>{
		expect(component).to.contain("first comment");
		expect(component).to.contain("second comment");
	});

});