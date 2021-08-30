import React, { useState } from 'react';
import moment from 'moment';

import './Home.scss';

let dummyData = {
    "customers": [
        {
            "id": "11",
            "attributes": {
                "city": "Nathentown",
                "ip": "66.156.24.89",
                "toyotahazle": "ConsultantRodriguez",
                "created_at": "1539035840",
                "first_name": "Jackie",
                "last_name": "Lehner",
                "corvetteverna": "EngineerGislason",
                "email": "justonhane@dubuque.org",
                "spykerbrendan": "SupervisorNader",
                "volvooleta": "OrchestratorAnderson"
            },
            "last_updated": 1560981440,
            "events": {
                "backuplime": 9,
                "programdarkviolet": 5,
                "synthesizeantiquewhite": 8,
                "connectlightcyan": 6,
                "calculatedarkseagreen": 6
            }
        },
        {
            "id": "9",
            "attributes": {
                "aston martinjazmyne": "OfficerGaylord",
                "city": "Alenaberg",
                "created_at": "1544911040",
                "email": "khalidblanda@homenick.info",
                "first_name": "Katrina",
                "ip": "83.169.129.33",
                "last_name": "Dare",
                "rolls-roycevalentin": "ManagerKuhic",
                "skodapatsy": "ArchitectFadel",
                "toyotaemelie": "FacilitatorGrimes"
            },
            "last_updated": 1560981440,
            "events": {
                "hackmaroon": 6,
                "bypasscadetblue": 8,
                "calculatedarkgray": 5,
                "quantifythistle": 4,
                "bypasslightpink": 8
            }
        },
        {
            "id": "15",
            "attributes": {
                "benzquinn": "SpecialistLuettgen",
                "created_at": "1557007040",
                "last_name": "Lynch",
                "chevroletsheridan": "ExecutiveSenger",
                "chryslercaterina": "SpecialistKunde",
                "city": "Lake Rempel",
                "email": "chaimschowalter@smitham.com",
                "first_name": "Ezekiel",
                "ip": "165.70.184.130",
                "pontiackenya": "OfficerSwift"
            },
            "last_updated": 1560981440,
            "events": {
                "hackviolet": 3,
                "parsemintcream": 5,
                "transmitantiquewhite": 6,
                "rebootmaroon": 5,
                "indexlightpink": 8
            }
        },
        {
            "id": "1",
            "attributes": {
                "daihatsurashawn": "AssistantSchmidt",
                "email": "ginajacobi@jacobs.com",
                "skodatoni": "LiaisonUpton",
                "benzkatlyn": "PlannerWhite",
                "city": "Coralieborough",
                "created_at": "1544824640",
                "first_name": "Darren",
                "ip": "192.206.251.189",
                "last_name": "Schultz"
            },
            "last_updated": 1560981440,
            "events": {
                "connectdarkgreen": 7,
                "indexmoccasin": 5,
                "compresscoral": 5,
                "backupspringgreen": 4,
                "compressdarkgreen": 5
            }
        },
        {
            "id": "12",
            "attributes": {
                "city": "Briannechester",
                "created_at": "1531691840",
                "ip": "161.81.158.44",
                "bugattimarcos": "OrchestratorFunk",
                "first_name": "Norris",
                "email": "rickrippin@christiansen.info",
                "chevroletleone": "RepresentativeKuhn",
                "fiatkeaton": "EngineerOkuneva",
                "last_name": "Ferry"
            },
            "last_updated": 1560981440,
            "events": {
                "bypassmediumslateblue": 5,
                "transmitgray": 4,
                "bypassorangered": 4,
                "inputorchid": 1,
                "overridedarkturquoise": 3
            }
        }
    ],
    "meta": {
        "page": 1,
        "per_page": 5,
        "total": 20
    }
}


/**
 * Home
 * 
 * Displays Home
 * 
 * @return Home
 * 
*/
const Home = () => {
	const [customers, setCustomers] = useState(dummyData.customers);

	return (
		<>
			<div className="container customer-table">
				<p className="h1 mt-5 mb-5">Customers</p>
					{
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
									{
										customers.map((customer, index) => 
											(
												<tr key={customer.id}>
													<th scope="row">{customer.id}</th>
													<td className="table-data">{customer.attributes.email}</td>
													<td className="text-muted table-data">
														{
															moment(customer.last_updated).format('MMM Do YYYY, h:mm a')
														}
													</td>
													<td>
														<a href={`/customer/${customer.id}`}>
															<button type="button" className="btn btn-style">View</button>
														</a>
													</td>
												</tr>
											)
										)
									}
								</tbody>
							</table>
						) :
						<div className="mt-3">No customers available</div>
					}	

			</div>
		</>
	);
};

export default Home;
