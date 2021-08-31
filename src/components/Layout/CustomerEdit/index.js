import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useParams } from 'react-router';
import moment from 'moment';

import { fetchApi } from '../../../utils/fetchApi';

import './CustomerEdit.scss';


/**
 * CustomerEdit
 * 
 * Displays CustomerEdit
 * 
 * @return CustomerEdit
 * 
*/
const CustomerEdit = ({ history }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [customer, setCustomer] = useState({});
	const [customerDuplicate, setCustomerDuplicate] = useState({});
	const [newKeyAttribute, setNewKeyAttribute] = useState("");
	const [newValueAttribute, setNewValueAttribute] = useState("");
	const [attributesToRemove, setAttributesToRemove] = useState([]);
	const [attributesToAdd, setAttributesToAdd] = useState({});
	const [addAttrError, setAddAttrError] = useState("");

	let { id } = useParams();
	const immutableFields = ["id", "email", "created_at"]

	useEffect(() => {
		setIsLoading(true);
        const asyncFetchApi = async () => await fetchApi(`customers/${id}`, 'GET')

		// fetch customer data from api
        asyncFetchApi()
            .then((data) => {
				setCustomer(data.customer);
				setCustomerDuplicate(JSON.parse(JSON.stringify(data.customer)));
				setIsLoading(false);
            })
		
    }, [id])

	// removes attribute from customer's attribute data
	const removeAttribute = (attributeKey) => {
		delete customer.attributes[attributeKey];

		attributeKey in attributesToAdd ?
			delete attributesToAdd[attributeKey] : attributesToRemove.push(attributeKey)

		setAttributesToRemove(attributesToRemove);
		setCustomer({...customer});
	}

	// reset user changes to customer's attribute data
	const discardChanges = (e) => {
		e.preventDefault();
		setNewKeyAttribute("");
		setNewValueAttribute("");
		setAddAttrError("");
		setCustomer(JSON.parse(JSON.stringify(customerDuplicate)));
	}

	// keeps track of changes made to each attribute
	const onChangeInput = (e) => {
		e.preventDefault();
		customer.attributes[e.target.name] = e.target.value
		setCustomer({...customer});
	}

	// handles adding new customer attribute
	const addNewAttribute = (e) => {
		e.preventDefault();

		if (newKeyAttribute && newValueAttribute) {
			if (customer.attributes.hasOwnProperty(newKeyAttribute.toLowerCase())) {
				setAddAttrError("Please ensure the attribute keys are not duplicated");
			} else {
				setAddAttrError("");
				customer['attributes'][newKeyAttribute.toLowerCase()] = newValueAttribute
				attributesToAdd[newKeyAttribute.toLowerCase()] = newValueAttribute

				setCustomer({...customer});
				setAttributesToAdd(attributesToAdd);
				setNewKeyAttribute("");
				setNewValueAttribute("");
			}
		} else {
			setAddAttrError("Please ensure the name and value fields are not empty");
		}
	}

	// save updated customer attribute
	const saveAttribute = (e) => {
		e.preventDefault();

		if (JSON.stringify(customer.attributes) !== JSON.stringify(customerDuplicate.attributes)) {
			immutableFields.map((key) => delete customer.attributes[key]);

			setIsLoading(true);
			const asyncFetchApi = async () => await fetchApi(
					`customers/${id}`,
					'PATCH',
					{
						customer: {
							attributes: attributesToAdd,
							remove_attributes: attributesToRemove
						}
					}
				)

			// update customer attribute
			asyncFetchApi()
            .then((data) => {
				setIsLoading(false);
				history.push(`/customer/${id}`)
            })
		} else {
			history.push(`/customer/${id}`)
		}
	}

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
						{/* go back link - to customer page */}
						<div className="mt-5 mb-2 p-0">
							<Link
								to={`/customer/${id}`}
								className="btn-link fs-6 go-back-link"
							>
								Go back
							</Link>
						</div>
						{/* map through customer attributes */}
						{
							customer && Object.keys(customer).length !== 0 ?
							(
								<>
									<p>
										<span className="h1 col-xs-12">{customer.attributes.email}</span>
									</p>

									<p className="mt-2 mb-5 text-muted">
										{`Last updated: ${moment.unix(customer.last_updated).format('MMM Do YYYY, h:mm a')}`}
									</p>

									<div className="mb-5">
										<p className="h2 mb-5">
											Attributes
										</p>

										<div className="">
											<div className="row mb-4 mb-md-2 input-row" key={'customer_id'}>
												<div className="col-12 col-sm-4 text-muted">id</div>
												<div className="col-12 col-sm-8">
													{customer.id}
												</div>
												<div className="col-12 col-sm-2"></div>
											</div>

											{/* map through customer attributes to edit mutable fields */}
											{
												Object.keys(customer.attributes).map((attributeKey, index) => 
													(
														<div className="row mb-4 mb-md-2 input-row" key={`${attributeKey}-${index}`}>
															<div className="col-12 col-sm-4 text-muted"
															>{attributeKey}</div>
															<div className="col-12 col-sm-6">
																<input 
																	type="text"
																	name={attributeKey}
																	className="form-control"
																	aria-label="Sizing example input"
																	aria-describedby="inputGroup-sizing-default"
																	placeholder="value"
																	onChange={immutableFields.indexOf(attributeKey.toLowerCase()) === -1 ? onChangeInput : () => {}}
																	value={customer['attributes'][attributeKey]}
																/>
															</div>
															<div className="col-12 col-sm-2">
																{
																	immutableFields.indexOf(attributeKey.toLowerCase()) === -1 &&
																	(
																		<button
																			type="button"
																			className="btn btn-link fs-6 text-danger"
																			onClick={() => {removeAttribute(attributeKey)}}
																		>
																			Remove
																		</button>
																	)
																}
															</div>
														</div>
													)
												)
											}

											{/* add new customer attribute */}
											<div className="row mt-5 input-row">
												<div className="col-12 col-sm-5 mb-2 mb-sm-0">
													<input 
														type="text"
														name="newKeyAttribute"
														className="form-control"
														aria-label="Sizing example input"
														aria-describedby="inputGroup-sizing-default"
														placeholder="name"
														onChange={(e) => {setNewKeyAttribute(e.target.value)}}
														value={newKeyAttribute}
													/>
												</div>
												<div className="col-12 col-sm-5 mb-2 mb-sm-0">
													<input 
														type="text"
														name="newValueAttribute"
														className="form-control"
														aria-label="Sizing example input"
														aria-describedby="inputGroup-sizing-default"
														placeholder="value"
														onChange={(e) => {setNewValueAttribute(e.target.value)}}
														value={newValueAttribute}
													/>
												</div>
												<div className="col-12 col-sm-2">
													<button
														type="button"
														className="btn btn-link fs-6 text-muted"
														onClick={addNewAttribute}
													>
														Add
													</button>
												</div>
											</div>
										</div>

										{/* display errors */}
										{
											addAttrError && (
												<p className="text-danger fs-6">{addAttrError}</p>
											)
										}

										<div className="row mt-5 input-row">
											<div className="col-12">
												{/* update attributes */}
												<button
													type="button"
													className="btn btn-style ms-3 ms-md-5 float-end"
													onClick={saveAttribute}
												>
													Save Changes
												</button>
												{/* discard changes made to attributes */}
												<button
													type="button"
													className="btn btn-link fs-6 text-dark float-end"
													onClick={discardChanges}
												>
													Discard Changes
												</button>
											</div>
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

export default withRouter(CustomerEdit);
