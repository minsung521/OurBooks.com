import React, { useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import "./Options.css";

const Options = () => {
	return (
		<div className="options_container">
			<form>
				<select name="sort">
					<option value="accuracy">정확도순</option>
					<option value="recency">최신순</option>
				</select>
				<div className="checkboxcontainer">
					<div className="checkboxelements">
						<h4 className="checkboxtitle">제목</h4>
						<input type="checkbox" name="title" value="title"></input>
					</div>
					<div className="checkboxelements">
						<h4 className="checkboxtitle">ISBN</h4>
						<input type="checkbox" name="isbn" value="isbn"></input>
					</div>
					<div className="checkboxelements">
						<h4 className="checkboxtitle">출판사</h4>
						<input type="checkbox" name="publisher" value="publisher"></input>
					</div>
					<div className="checkboxelements">
						<h4 className="checkboxtitle">글쓴이</h4>
						<input type="checkbox" name="person" value="person"></input>
					</div>
				</div>
				<button type="submit" className="optionSubmit">
					적용하기
				</button>
			</form>
		</div>
	);
};

export default Options;
