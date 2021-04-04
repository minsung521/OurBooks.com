import React from "react";
import Api from "./Api.js";
import "./Search.css";
//파라미터 입력부분 만들예정
class Search extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			answerIn: false,
			query: "고양이",
			// value: {
			// 	sort: "accuracy",
			// 	page: 1,
			// 	size: 30,
			// 	target: "title",
			// },
		};
	}
	handleChange(event) {
		this.setState({ query: event.target.value });
		console.log(this.state.value);
	}
	handleSubmit(event) {
		alert("A name was submitted: " + this.state.value);
		event.preventDefault();
	}
	render() {
		const { value, query } = this.state;
		return (
			<div className="searchbig">
				<div className="searchSection">
					<div class="wrap">
						<div class="search">
							<form onSubmit={this.handleSubmit}>
								<input
									type="text"
									class="searchTerm"
									placeholder="검색어 입력"
									onChange={this.handleChange}
								></input>
								<button type="submit" class="searchButton">
									<i class="fa fa-search"></i>
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className="resultsSection">
					<Api
						query={`${query}`}
						// sort={"accuracy"}
						// page={1}
						// size={30}
						// target={"title"}
					/>
				</div>
			</div>
		);
	}
}

export default Search;
