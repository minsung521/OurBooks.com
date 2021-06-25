import React from "react";
import Api from "./Api";
import "./Search.css";
//파라미터 입력부분 만들예정
class Search extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			answerIn: false,
			query: "",
			params: {
				query: "",
				sort: "accuracy",
				page: 1,
				size: 30,
				target: "title",
			},
		};
	}
	handleChange(event) {
		this.setState((preventState) => ({
			params: {
				...preventState.params,
				query: event.target.value,
			},
			query: event.target.value,
		}));
		// this.setState({ query: event.target.value });
		// console.log(this.state.value);
	}
	handleSubmit(event) {
		// alert("A name was submitted: " + this.state.query);
		this.setState((preventState) => ({
			params: {
				...preventState.params,
				query: this.state.query,
			},
		}));
		event.preventDefault();
	}
	render() {
		const { params } = this.state;
		return (
			<div class="wrap">
				<div class="search">
					<form onSubmit={this.handleSubmit}>
						<input
							type="text"
							class="searchTerm"
							placeholder="검색어 입력"
							onChange={this.handleChange}
						/>
						<button type="submit" class="searchButton">
							<i class="fa fa-search"></i>
						</button>
					</form>
				</div>
				<div className="resultsSection">
					<Api params={params} />
				</div>
			</div>
		);
	}
}

export default Search;
