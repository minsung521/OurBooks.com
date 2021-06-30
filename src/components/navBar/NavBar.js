import React from "react";
import { MenuItems } from "./MenuItems";
import "./NavBar.css";

class NavBar extends React.Component {
	state = { isClicked: false };
	handleClick = () => {
		this.setState({ isClicked: !this.state.isClicked });
	};
	render() {
		return (
			<nav className="NavBarItems">
				<a className="titlelink" href="/">
					<h1 className="navbar-logo">
						OurBooks <span className="subtitle">- 당신의 독서 도우미</span>
						<i className="fas fa-book-open"></i>
					</h1>
				</a>
				<div className="menu-icon" onClick={this.handleClick}>
					<i
						className={this.state.isClicked ? "fas fa-times" : "fas fa-bars"}
					></i>
				</div>
				<ul className={this.state.isClicked ? "nav-menu active" : "nav-menu"}>
					{MenuItems.map((item, index) => {
						return (
							<li key={index}>
								<a className={item.cName} href={item.url}>
									{item.title}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		);
	}
}

export default NavBar;
