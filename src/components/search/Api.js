import React from "react";
import axios from "axios";
import ABook from "./ABook.js";

const kakao = axios.create({
	baseURL: "https://dapi.kakao.com", // 공통 요청 경로를 지정해준다.
	headers: {
		Authorization: "KakaoAK 71bda41554c55f199979f42becc433c9", // 공통으로 요청 할 헤더
	},
});

class Api extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isJsonLoaded: false,
			params: {
				query: props.query,
				sort: props.sort, //accuracy(정확도순) 또는 latest(발간일순), 기본값 accuracy
				page: props.page, //Integer	결과 페이지 번호, 1~50 사이의 값, 기본 값 1
				size: props.size, //	한 페이지에 보여질 문서 수, 1~50 사이의 값, 기본 값 10
				target: props.target, //title(제목), isbn (ISBN), publisher(출판사), person(인명)
			},
			booksInfo: [],
		};
	}
	getBooks = async (params) => {
		const booksInfo = await kakao.get("/v3/search/book", { params });
		console.log(booksInfo.data.documents);
		const documents = booksInfo.data.documents;
		this.setState({ isJsonLoaded: true, booksInfo: documents });
	};
	componentDidMount() {
		const { params } = this.state;
		this.getBooks(params);
	}
	render() {
		const { booksInfo } = this.state;
		//return <h1>Apitest - {isJsonLoaded ? "Loaded!" : "Wait a second..."}</h1>;
		return (
			<div className="apiSection">
				{booksInfo.map((book, index) => {
					return <ABook key={index} id={index} bookInfo={book} />;
				})}
			</div>
		);
	}
}

export default Api;
