import React from "react";

const Navbar = ({ message, pages, characters }) => {
	return (
		<nav className="navbar navbar-dark bg-dark d-flex justify-content-center align-items-center  px-5">
			<h3 className="navbar-brand">Current Page: {pages}</h3>
			<h2 className="navbar-brand m-1">{message}</h2>
		</nav>
	);
};

export default Navbar;
