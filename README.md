# DNA

Creation of a fullstack project in Typescript, with the objective of joining three well-regarded tools in the community (back-end NestJS/Directus, front-end Angular) in order to create an application that will serve as a prototype for projects that want to have the current best practices in the market for development and for management

<br />

## **Development**

### Local development environment:

<br />

1. Clone this repo with git.

2. Install back-end and front-end dependencies by running `npm install` within both directories (`dna-backend` and `dna-frontend`).

3. Start the back-end development server with `docker-compose up`.

4. Start the front-end development server with `ng serve`.

5. Open development site by going to [`http://localhost:4200`](http://localhost:4200) in your browser.
6. Open Directus configuration site by going to [`http://localhost:8055`](http://localhost:8055) in your browser.

<br />

---

<br />

## **GraphQL Sdk**

### Steps to generate the database models and operations in typescript for equalized use on back-end between NestJS & Directus:

<br />

1. Generate admin access token using Directus authentication login: <br />

   > **[[Directus] Authentication reference](https://docs.directus.io/reference/api/system/authentication/)**

2. Store access token in the DOCKER_DNA_DIRECTUS_ACCESS_TOKEN enviroment variable.

3. With development docker environment running, run `npm run generate`.

4. The sdk will be available in the **`dna-backend/graphql`**
   folder, under the **`sdk`** file.
