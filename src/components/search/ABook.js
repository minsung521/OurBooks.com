import React from "react";
import "./ABook.css";
//책 한권의 정보를 담은 컴포넌트

class ABook extends React.Component {
	render() {
		const book = this.props.bookInfo;
		return (
			<div className="boxWrapper">
				<div className="infoBox">
					<h2 className="title">{book.title}</h2>
					<img className="thumbnail" src={book.thumbnail} alt="a"></img>
					<span className="content">{book.contents}</span>
				</div>
			</div>
		);
	}
}
export default ABook;
