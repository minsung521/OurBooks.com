import React, { useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import "./Options.css";

const Options = ({}) => {
	return (
		<div className="options_container">
			<form>
				<input list="sort" placeholder="accracy"></input>
			</form>
			<datalist id="sort">
				<option>accuracy</option>
				<option>latest</option>
				<option>recency</option>
			</datalist>
		</div>
	);
};

export default Options;
