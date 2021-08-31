import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import moment from 'moment';

import { fetchApi } from '../../../utils/fetchApi';

import './Home.scss';


/**
 * Home
 * 
 * Displays Home
 * 
 * @return Home
 * 
*/
const Home = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [customers, setCustomers] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [pageCount, setPageCount] = useState();

	useEffect(() => {
		setIsLoading(true);
        const asyncFetchApi = async () => await fetchApi(`customers?page=${currentPage}&per_page=10`, 'GET');

		// fetch customers data summary from api
        asyncFetchApi()
            .then((data) => {
				setPageCount(Math.ceil(data.meta.total / 10));
				setCustomers(data.customers);
				setIsLoading(false);
            });
    }, [currentPage])

	// handle pagination click
	const handlePaginationClick = (data) => {
		setCurrentPage(data.selected + 1)
	}

	return (
		<>
			<div className="container customer-table">
				<h1 className="h1 mt-5 mb-5">Customers</h1>
					{/* Customer Table Data */}
					{/* display loader when data is fetching */}
					{
						isLoading ? (
							<div className="loader"></div>
						) :
						(
							customers.length ? (
							<table className="table table-striped">
								<thead>
									<tr>
										<th scope="col">ID</th>
										<th scope="col">Email</th>
										<th scope="col">Last Updated</th>
										<th scope="col"></th>
									</tr>
								</thead>
								<tbody>
									{/* map through customer data to display each summary */}
									{
										customers.map((customer, index) => 
											(
												<tr key={customer.id}>
													<th scope="row">{customer.id}</th>
													<td className="table-data">{customer.attributes.email}</td>
													<td className="text-muted table-data">
														{
															moment.unix(customer.last_updated).format('MMM Do YYYY, h:mm a')
														}
													</td>
													<td>
														<Link
															to={`/customer/${customer.id}`}
														>
															<button type="button" className="btn btn-style">View</button>
														</Link>
													</td>
												</tr>
											)
										)
									}
								</tbody>
							</table>
							) :
							<div className="mt-3">No customers available</div>
						)
					}	

				{/* Pagination */}
				{
					customers.length > 0 && (
						<nav className="text-center mt-5">
							<ReactPaginate
								previousLabel={'<<'}
								nextLabel={'>>'}
								breakLabel={'...'}
								breakClassName={'break-me'}
								pageCount={pageCount}
								marginPagesDisplayed={5}
								pageRangeDisplayed={5}
								onPageChange={handlePaginationClick}
								containerClassName={'pagination'}
								activeClassName={'active page-active-color'}
								pageClassName="page-item"
								pageLinkClassName="page-link page-item-color"
								nextClassName="page-item"
								nextLinkClassName="page-link page-item-color"
								previousClassName="page-item"
								previousLinkClassName="page-link page-item-color"
								breakLinkClassName="page-link page-item-color"
							/>
						</nav>
					)
				}
			</div>
		</>
	);
};

export default Home;
