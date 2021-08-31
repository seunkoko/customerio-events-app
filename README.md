# CUSTOMERIO EVENTS APP

![img](https://raw.githubusercontent.com/seunkoko/customerio-events-app/master/public/responsive.png)

This application was bootstrapped using CRA (create-react-app).

Hosted on netlify [here](https://customerio-events.netlify.app)


### Site Preview
---
<details>
<summary>All Customers View</summary>

![img](https://raw.githubusercontent.com/seunkoko/customerio-events-app/master/public/customers.png)
</details>

<details>
<summary>Customer View</summary>

![img](https://raw.githubusercontent.com/seunkoko/customerio-events-app/master/public/customerView.png)
</details>

<details>
<summary>Customer Edit</summary>

![img](https://raw.githubusercontent.com/seunkoko/customerio-events-app/master/public/customerEdit.png)
</details>


### Technologies Used
---

- Javascript
- React
- React Router
- Bootstrap
- Node SASS


### Installation
---

- Clone the project repository.
- Run git clone https://github.com/seunkoko/customerio-events-app.git.
- Change directory into the `customerio-events-app` directory.
- Install all necessary packages in the package.json file by running the command `npm install`.
- Set up environment variables.
> Note: Checkout `.env.sample` in the root folder to do this.
- To start your app locally, run `npm run start`.


#### Contributing
---

1. Fork this repository to your account.
2. Clone your repository: git clone https://github.com/seunkoko/customerio-events-app.git.
4. Commit your changes: git commit -m "did something".
5. Push to the remote branch: git push origin new-feature.
6. Open a pull request.


### Implementation Assumptions
---
- Ignoring data without user_ids when summarizing (backend)
- While checking timestamps for customer attribute summary. Attributes are replaced when timestamps are greater than or equal to previous ones (backend)
- While summarizing attributes, old keys are replaced or retained depending on if there is a new value (backend)
- Data structure for attributes and events is in the same format in the generated file
- Request body will always be structured in a particular format
- Attributes from the request body will not have empty values (backend)
- Timezone is general
- Timestamp should be rounded up
- Duplicated event_ids belongs to the same user (backend)


### Known Issues
---
- Request body validation
- Lighthouse audit issues


### Future Futures
---
- Test frontend code
- Validation of request body on the backend
- More structured response format
- Improve Mobile design
- Sort and search customer data
- Authentication
- Data caching could be implemented to reduce database and api call/request
- Implementation of a messaging systems (Kafka or Redis) to help handle and listen for real-time changes/updates
- Better searching engine/algorithm (elastic search) to ensure proper data retrieval from large data-sets


Copyright (c) 2021 Oluwaseun Owonikoko
