import React from "react";
import "./ABook.css";
import ErrorImg from "./images/imgERR.png";
//책 한권의 정보를 담은 컴포넌트

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
				<div className="text">
					<h2 className="title">{book.title}</h2>
					<h4>
						{book.authors.map((author, index) =>
							index === book.authors.length - 1
								? author + " 지음"
								: author + ", "
						)}
					</h4>
					<h4 className="publisher">{book.publisher}</h4>
					<span className="content">{book.contents}</span>
				</div>
			</div>
		);
	}
}
export default ABook;
