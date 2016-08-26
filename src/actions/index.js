import { SAVE_COMMENT } from "./constants";

export function saveComment(comment) {
	return {
		type: SAVE_COMMENT,
		payload : comment
	};
}