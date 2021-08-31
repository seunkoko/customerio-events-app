import React from 'react';
import { Link } from 'react-router-dom';

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
					<Link
						to="/home"
						className="navbar-brand"
					>
						Customer.io
					</Link>

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
								<Link
									to="/home"
									className="nav-link active"
								>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/customers"
									className="nav-link"
								>
									Customers
								</Link>
							</li>
						</ul>
						<ul className="navbar-nav d-flex">
							<li className="nav-item">
								<Link
									to="/#profile"
									className="nav-link"
									aria-current="page"
								>
									take-home@customer.io
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/logout"
									className="nav-link"
								>
									Log out
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
