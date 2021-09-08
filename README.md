# DNA

Creation of a fullstack project in Typescript, with the objective of joining three well-regarded tools in the community (back-end NestJS/Directus, front-end Angular) in order to create an application that will serve as a prototype for projects that want to have the current best practices in the market for development and for management

<br />

## **Development** ⚡️

### Local development environment:

1. Clone this repo with git.

2. Install back-end and front-end dependencies by running `npm install` within both directories (`dna-backend` and `dna-frontend`).

3. Start the back-end development server with `docker-compose up`.

4. Start the front-end development server with `ng serve`.

5. Open development site by going to [`http://localhost:4200`](http://localhost:4200) in your browser.
6. Open Directus configuration site by going to [`http://localhost:8055`](http://localhost:8055) in your browser.

<br />

## **GraphQL SDK** 🚀

### Steps to generate the database models and operations in typescript for equalized use on back-end between NestJS & Directus:

1. Generate admin access token using Directus authentication login: <br />

   > **[[Directus] Authentication reference](https://docs.directus.io/reference/api/system/authentication/)**

2. Store access token in the DOCKER_DNA_DIRECTUS_ACCESS_TOKEN enviroment variable.

3. With development docker environment running, run `npm run generate`.

4. The sdk will be available in the **`dna-backend/graphql`**
   folder, under the **`sdk`** file.

<br />

## **Response format** 👋

The response pattern followed the Directus return response. Thus, it was necessary to adjust the NestJS return pattern to fit and return in the same format.

For this, it was used the interface already provided by the [graphql-request](https://www.npmjs.com/package/graphql-request) library already installed and used in the GraphQL SDK, which returns the responses in the same standard as Directus.

<br />

```typescript
interface GraphQLResponse<T = any> {
  data?: T;
  errors?: GraphQLError[];
  extensions?: any;
  status: number;
  [key: string]: any;
}
```

<br />

## **Migration** 🚚

Migration is still an open topic in the directus community, where its team and community are looking for a viable solution to make migration between Directus databases possible and simple.

A momentary and functional solution was found in a [discussion topic](https://github.com/directus/directus/discussions/3891) related to the subject, where a contributor provided the necessary commands to be run, so that it is possible to migrate the schema difference between two Directus databases without data loss:

**[Directus Migration Script Link](https://gist.github.com/tspvivek/242c33a5dbfb149c9057f93041e4450d)**

<br />

_Migration steps on progress..._
