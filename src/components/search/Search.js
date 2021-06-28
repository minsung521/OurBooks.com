import React from "react";
import Api from "./Api";
import "./Search.css";
import Options from "./Options";

//파라미터 입력부분 만들예정
class Search extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			answerIn: false,
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
		this.setState((preventState) => ({
			params: {
				...preventState.params,
				query: event.target[0].value,
			},
		}));
		console.log(event.target[0].value);
		event.preventDefault();
	}
	render() {
		const { params } = this.state;
		return (
			<div className="row_wrapper">
				<div className="wrap">
					<div className="search">
						<form onSubmit={this.handleSubmit}>
							<input
								type="text"
								className="searchIn"
								name="textInPut"
								placeholder="검색어 입력"
								// onChange={this.handleChange}
							/>
							<button type="submit" className="searchButton">
								<i className="fa fa-search"></i>
							</button>
						</form>
					</div>
					<div className="resultsSection">
						<Api params={params} />
					</div>
				</div>
				<Options />
			</div>
		);
	}
}

export default Search;
