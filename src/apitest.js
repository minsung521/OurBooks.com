import React from "react";
import axios from "axios";

//const naverId = "https://openapi.naver.com/v1/search/book.json";
// const naverKey = "uqWxjCVN5L";
// const interparkKey =
// 	"0FBB9FFB66E0ABF8B79A7E209F994AE120D3FBB5F3A1F222B20213E5A597C15A";

const client = axios.create({
	baseURL: "https://dapi.kakao.com", // 공통 요청 경로를 지정해준다.
	headers: {
		Authorization: "KakaoAK 71bda41554c55f199979f42becc433c9", // 공통으로 요청 할 헤더
	},
});

const params = {
	query: "돼지",
	sort: "accuracy", // accuracy | recency 정확도 or 최신
	page: 1, // 페이지번호
	size: 10, // 한 페이지에 보여 질 문서의 개수
};

class Apitest extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isJsonLoaded: false,
			category: "100",
			bestSeller: [],
		};
	}
	// getBooks = async () => {
	// 	const bestSeller = await axios.get(
	// 		"http://book.interpark.com/api/bestSeller.api?key=0FBB9FFB66E0ABF8B79A7E209F994AE120D3FBB5F3A1F222B20213E5A597C15A&categoryId=200&output=json"
	// 	);
	// 	console.log(bestSeller);
	// 	console.log("3");
	// };

	getBooks = async () => {
		const bestSeller = await client.get("/v3/search/book", { params });
		console.log(bestSeller);
		console.log("3");
	};
	componentDidMount() {
		console.log("1");
		this.getBooks();
		console.log("2");
	}
	render() {
		const { isJsonLoaded } = this.state;
		return <h1>Apitest - {isJsonLoaded ? "Loaded!" : "not yet.."}</h1>;
	}
}

export default Apitest;
