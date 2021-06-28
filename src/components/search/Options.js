import React, { useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import "./Options.css";

const Options = ({}) => {
	return (
		<div className="options_container">
			<form>
				<select name="sort">
					<option value="accuracy">정확도순</option>
					<option value="recency">최신순</option>
				</select>
				<input type="checkbox" name="title" value="title"></input>
				<input type="checkbox" name="isbn" value="isbn"></input>
				<input type="checkbox" name="publisher" value="publisher"></input>
				<input type="checkbox" name="person" value="person"></input>
				<input type="submit" className="optionSubmit"></input>
			</form>
		</div>
	);
};

export default Options;
