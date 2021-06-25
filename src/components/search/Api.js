import React, { useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import axios from "axios";
import ABook from "./ABook.js";

const kakao = axios.create({
	baseURL: "https://dapi.kakao.com", // 공통 요청 경로를 지정해준다.
	headers: {
		Authorization: "KakaoAK 71bda41554c55f199979f42becc433c9", // 공통으로 요청 할 헤더
	},
});

const Api = ({ params }) => {
	const [booksInfo, setBooksInfo] = useState([]);
	const previousQuery = useRef("");

	const getBooks = useDebouncedCallback(async (params) => {
		const booksInfo = await kakao.get("/v3/search/book", { params });
		console.log(booksInfo.data.documents);
		const { documents } = booksInfo.data;
		setBooksInfo(documents);
	}, 1000);

	useEffect(() => {
		if (previousQuery.current !== params.query && params.query !== "") {
			getBooks(params);
			previousQuery.current = params.query;
		}
	}, [params, previousQuery, getBooks]);

	return (
		<div className="apiSection">
			{booksInfo.map((book, index) => {
				return <ABook key={index} id={index} bookInfo={book} />;
			})}
		</div>
	);
};

// class Api extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			isJsonLoaded: false,
// 			booksInfo: [],
// 		};
// 	}
// 	getBooks = async (params) => {
// 		const booksInfo = await kakao.get("/v3/search/book", { params });
// 		console.log(booksInfo.data.documents);
// 		const documents = booksInfo.data.documents;
// 		this.setState({ isJsonLoaded: true, booksInfo: documents });
// 	};
// 	shouldComponentUpdate(nextProps, nextState) {
// 		if (this.props.params.query !== nextProps.params.query) {
// 			const { params } = nextProps;
// 			console.log(params);
// 			this.getBooks(params);
// 		}

// 		return true;
// 	}
// 	render() {
// 		const { booksInfo } = this.state;
// 		//return <h1>Apitest - {isJsonLoaded ? "Loaded!" : "Wait a second..."}</h1>;
// 		return (
// 			<div className="apiSection">
// 				{booksInfo.map((book, index) => {
// 					return <ABook key={index} id={index} bookInfo={book} />;
// 				})}
// 				{/* {query} */}
// 			</div>
// 		);
// 	}
// }

export default Api;
