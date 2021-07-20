import React from "react";
import profileImg from "./myprofile.jpg";
import "./WhoMadeThis.css";

const WhoMadeThis = () => {
	return (
		<div>
			<h1>개발자 프로필</h1>
			<div className="profile">
				<img src={profileImg} alt="Developer profile" className="profileImg" />
			</div>
		</div>
	);
};

export default WhoMadeThis;
