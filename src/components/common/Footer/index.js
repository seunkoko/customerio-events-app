import React from 'react';

import './Footer.scss';


/**
 * Footer
 * 
 * Displays Footer
 * 
 * @return Footer
 * 
*/
const Footer = () => {

	return (
		<>
			<footer className="footer mt-auto py-3 bg-light">
				<div className="container">
					<span className="footer-text-color">Customer.io Frontend Take-Home Exercise</span>
					<span className="footer-text-color mt-2 mt-sm-0 float-end">Owonikoko Oluwaseun S.</span>
				</div>
			</footer>
		</>
	);
};

export default Footer;
