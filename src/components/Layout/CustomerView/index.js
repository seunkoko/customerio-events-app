import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import moment from 'moment';

import { fetchApi } from '../../../utils/fetchApi';

import './CustomerView.scss';


/**
 * CustomerView
 * 
 * Displays CustomerView
 * 
 * @return CustomerView
 * 
*/
const CustomerView = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [customer, setCustomer] = useState({});
	let { id } = useParams();

	useEffect(() => {
		setIsLoading(true);
        const asyncFetchApi = async () => await fetchApi(`customers/${id}`, 'GET')

		// fetch customer data from api
		asyncFetchApi()
            .then((data) => {
				setCustomer(data.customer);
				setIsLoading(false);
            })
    }, [id])

	return (
		<>
			<div className="container">
			{/* Customer Data */}
			{/* display loader when data is fetching */}
			{
				isLoading ? (
					<div className="loader"></div>
				) :
				(
					<>
						{/* go back link - to all customer page */}
						<div className="mt-5 mb-2 p-0">
							<Link
								to="/customers"
								className="btn-link fs-6 go-back-link"
							>
								Go back
							</Link>
						</div>
						{/* map through customer attribute and events to display */}
						{
							customer && Object.keys(customer).length !== 0 ?
							(
								<>
									{/* display edit attribute button */}
									<p className="">
										<span className="h1 col-xs-12">{customer.attributes.email}</span>
										<span className="h1 col-xs-12 float-sm-start float-md-end">
											<a href={`/customer/${customer.id}/edit`}>
												<button type="button" className="btn btn-style">Edit Attributes</button>
											</a>
										</span>
									</p>

									<p className="mt-2 mb-5 text-muted">
									{`Last updated: ${moment.unix(customer.last_updated).format('MMM Do YYYY, h:mm a')}`}
									</p>

									{/* display attributes */}
									<div className="mb-5">
										<p className="h2 mb-2">
											Attributes
										</p>

										<div className="">
											<table className="table">
												<tbody>
													<tr key={'customer_id'}>
														<td className="col-6 col-sm-4 text-muted"
														>id</td>
														<td className="col-6 col-sm-8">
															{customer.id}
														</td>
													</tr>
													{
														Object.keys(customer.attributes).map((attributeKey, index) => 
															(
																<tr key={`${attributeKey}-${index}`}>
																	<td className="col-6 col-sm-4 text-muted"
																	>{attributeKey}</td>
																	<td className="col-6 col-sm-8">
																		{customer['attributes'][attributeKey]}
																	</td>
																</tr>
															)
														)
													}
												</tbody>
											</table>
										</div>
									</div>

									{/* display events */}
									<div className="mb-5">
										<p className="h2 mb-2">
											Events
										</p>

										<div className="">
											<table className="table">
												<thead className="table-secondary">
													<tr>
														<th scope="col">Event name</th>
														<th scope="col">Count</th>
													</tr>
												</thead>

												<tbody>
													{
														Object.keys(customer.events).map((attributeKey, index) => 
															(
																<tr key={`${attributeKey}-${index}`}>
																	<td className="col-6 col-sm-4 text-muted attribute-table-data"
																	>{attributeKey}</td>
																	<td className="col-6 col-sm-8 attribute-table-data">
																		{customer['events'][attributeKey]}
																	</td>
																</tr>
															)
														)
													}
												</tbody>
											</table>
										</div>
									</div>
								</>
							):
							<div className="h3 mt-5 tex-muted">Customer not found</div>
						}
					</>
				)
			}	
			</div>
		</>
	);
};

export default CustomerView;
