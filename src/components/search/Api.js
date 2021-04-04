import React from "react";
import axios from "axios";

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
		};
	}
	// getBooks = async () => {
	// 	const bestSeller = await axios.get(
	// 		"http://book.interpark.com/api/bestSeller.api?key=0FBB9FFB66E0ABF8B79A7E209F994AE120D3FBB5F3A1F222B20213E5A597C15A&categoryId=200&output=json"
	// 	);
	// 	console.log(bestSeller);
	// 	console.log("3");
	// };

	getBooks = async (params) => {
		const bookInfo = await kakao.get("/v3/search/book", { params });
		console.log(bookInfo);
		this.setState({ isJsonLoaded: true });
	};
	componentDidMount() {
		const { params } = this.state;
		this.getBooks(params);
	}
	render() {
		const { isJsonLoaded } = this.state;
		return <h1>Apitest - {isJsonLoaded ? "Loaded!" : "Wait a second..."}</h1>;
	}
}

export default Api;
