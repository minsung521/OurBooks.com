import React from "react";
import Api from "./Api.js";
class Search extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Api
				query={"bee"}
				sort={"accuracy"}
				page={1}
				size={20}
				target={"title"}
			/>
		);
	}
}

export default Search;
