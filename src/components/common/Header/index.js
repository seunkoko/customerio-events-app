import React from 'react';

import "./Header.scss";


/**
 * Header
 * 
 * Displays Header
 * 
 * @return Header
 * 
*/
const Header = () => {

	return (
		<>
			<nav className="navbar navbar-expand-lg fixed-top navbar-dark cio-navbar">
				<div className="container">
					<a className="navbar-brand" href="/home">Customer.io</a>

					<button
						className="navbar-toggler"
						type="button" 
						data-bs-toggle="collapse"
						data-bs-target="#navbarTogglerDemo01"
						aria-controls="navbarTogglerDemo01"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon">
						</span>
					</button>

					<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
						
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="/home">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/customers">Customers</a>
							</li>
						</ul>
						<ul className="navbar-nav d-flex">
							<li className="nav-item">
								<a className="nav-link" aria-current="page" href="#profile">take-home@customer.io</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/logout">Log out</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
