# DNA

Fullstack prototipe project in Typescript, with the objective of joining three well-regarded tools in the community (`back-end` **[NestJS](https://nestjs.com/)** / **[Directus](https://docs.directus.io/getting-started/introduction/)**, `front-end` **[Angular](https://angular.io/)**) in order to create an initial environment with the main necessary settings that a project commonly requires during its lifetime, so during its development try to focus as much as possible only on the code development required by the application.

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

A momentary and functional solution was found in a [discussion topic](https://github.com/directus/directus/discussions/3891) related to the subject, where a contributor provided the necessary commands to be run, so that it is possible to migrate the schema difference between two Directus databases without data loss [**[Directus Migration Script Link](https://gist.github.com/tspvivek/242c33a5dbfb149c9057f93041e4450d)**]

1. Copy the file _migration.sh_ from the folder dna-migration.

2. Paste the file to the database docker volume path (_dna-backend/data/database_).

3. The file will then be available in the database path within the docker environment (_/var/lib/postgresql/data_).

4. Open the Docker CLI, go to the step 3 route, and run the script with the desired source and target database url's values.

<br />

## **Tests** ✅

For the testing stage, all the well-known and recommended structure of the **[NestJS Testing Module](https://docs.nestjs.com/fundamentals/testing)** was used, leaving it responsible for `UNIT TESTING` and `INTEGRATED TESTING`, applying them according to what the system needs during its development.

For the `END-TO-END`, **[Cypress](https://github.com/cypress-io/cypress)** will be used, a framework already well recognized and recommended by the community, due to its ease and great integration with Angular.

### Examples:

> **[UNIT TESTING](https://github.com/cesarsalesgomes/dna/blob/main/dna-backend/src/system/system.spec.ts)**

_Test example in which were concerned with covering a portion of the business layer of the system module, without integration with other layers, such as the data layer._

> **[INTEGRATION TESTING](https://github.com/cesarsalesgomes/dna/blob/main/dna-backend/src/cat/cat.spec.ts)**

_Example of test in call of a system route, in which the call to the data layer was abstracted, trying to cover as much as possible the Directus service._

_The automatic generation of false data, generated from the **[graphql-codegen-typescript-mock-data plugin](https://github.com/ardeois/graphql-codegen-typescript-mock-data#readme)**, was also provided in the `generate` script, so as to take advantage of `GraphQL` and thus obtain agility in the development of the tests._

> **[E2E TEST]()**

_Will be documented when starting Angular development ..._
