import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
	return (
		<footer>
			<img src={Logo} alt="main_logo" />
			<span>
				Made by Aarav, Raghav & Aditi using{" "}
				<b>React.JS, Node.JS, MySQL & Sass</b>.
			</span>
		</footer>
	);
};

export default Footer;