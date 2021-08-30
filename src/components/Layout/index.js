import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../common/Header';
import Footer from '../common/Footer';
import Home from './Home';
import CustomerView from './CustomerView';
import CustomerEdit from './CustomerEdit';


/**
 * Layout
 * 
 * Displays Layout
 * 
 * @return Layout
 * 
*/
const Layout = () => {

	return (
		<Router>
			<Header />
			<div className="main">
                <Switch>
                    <Route exact path="/customer/:id/edit" children={<CustomerEdit />} />
                    <Route exact path="/customer/:id" children={<CustomerView />} />
					<Route exact path="/logout" children={<Home />} />
					<Route exact path="/customers" children={<Home />} />
                    <Route exact path="/home" children={<Home />} />
                    <Route path="/" children={<Home />} />
                </Switch>
			</div>
			<Footer />
		</Router>
	);
};

export default Layout;
