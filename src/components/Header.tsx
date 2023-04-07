import React from "react";

const Header = () => {
	return (
		<>
			<header>
				<div className="logoArea">
					<div className="logo">
						<h1>LOGO</h1>
					</div>
					<div className="searchWrap">
						<div className="search">search</div>
						<div className="linkArea">link</div>
					</div>
				</div>
				<div className="navArea">
					<div className="navInner">
						<nav>nav</nav>
						<div className="weather">날씨</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
