import React from "react";
import "./ABook.css";
import ErrorImg from "./images/imgERR.png";

class ABook extends React.Component {
	render() {
		const book = this.props.bookInfo;
		return (
			<div className="boxWrapper">
				{book.thumbnail === "" ? (
					<img className="thumbnail" src={ErrorImg} alt="thumbnail" />
				) : (
					<img className="thumbnail" src={book.thumbnail} alt="thumbnail" />
				)}
				<hr class="rounded"></hr>
				<div className="text">
					<h2 className="title">{book.title}</h2>
					<div>
						<span className="bookinfo">
							{book.authors.map((author, index) =>
								index === book.authors.length - 1
									? author + " 지음"
									: author + ", "
							)}
						</span>
						<span className="divider"> | </span>
						<span className="publisher">{book.publisher}</span>
						<hr class="rounded"></hr>
					</div>
					<p>
						<span className="content">{book.contents}</span>
					</p>
				</div>
			</div>
		);
	}
}
export default ABook;
