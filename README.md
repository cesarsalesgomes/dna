</br>

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://dna-pictures.s3.amazonaws.com/dna-high-resolution-logo-color-on-transparent-background.png">
    <img src="https://dna-pictures.s3.amazonaws.com/dna-high-resolution-logo-color-on-transparent-light-background.png" width="210" alt="Logo"/>
  </picture>
  </a>
</div>

<br />

<div align="center">
    <a href="https://codecov.io/gh/cesarsalesgomes/dna"><img src="https://codecov.io/gh/cesarsalesgomes/dna/branch/main/graph/badge.svg?token=YH13U4UY6V"></a>
    &nbsp;
    <a href="https://github.com/marketplace/actions/super-linter"><img src="https://github.com/cesarsalesgomes/dna/workflows/Lint%20Code%20Base/badge.svg"></a>
</div>

<br />

Fullstack Typescript project with the objective of joining four well-regarded tools (`back-end` **[NestJS](https://nestjs.com/)** / **[Directus](https://docs.directus.io)**, `front-end` **[React](https://reactjs.org/)** or **[Svelte](https://svelte.dev/)**), in order to create an initial typesafe environment with the main necessary settings that a project commonly requires during its lifetime.

<br />

## **Development** ⚡️

### Local development environment

1. Fork this repository to start a new project based on the **Dna** architecture (**[Github sync fork guide](https://docs.github.com/get-started/quickstart/fork-a-repo#configuring-git-to-sync-your-fork-with-the-original-repository)** to sync the fork with updates).

2. Rename the file `example.env` to `.env` (Contains the required initial environment variables).

3. Run **npm start** under the root folder. It will install the `Docker` images needed for development and start the `Nest`/`Directus` enviroments with `docker-compose`.

   1. **Optional:** To run the example route of the integration between `Nest`/`Directus` under the `cats` feature controller, start the application with **npm run start:migration-import** (It will import the necessary schema migration of the `cats` feature).

<br />

## **GraphQL SDK** 🚀

### Steps to generate the database models and operations in TypeScript for equalized use on Nestjs/React/Svelte with Directus

1. Install the dependencies under the `graphql` folder with **npm install**.

2. With development docker environment running, run **npm start** to execute the codegen script.

   1. **Optional:** pass the features as command arguments to generate specific codegens (e.g. **npm start cat bird**).

3. The script will look for all folders containing a `codegen.yml` configuration file, and then generate the 3 files below based on the queries/mutations within each feature:

   1. `folder_name.sdk.ts`: operations of the queries/mutations to be used in the `NestJS` environment.

   2. `folder_name.mock.ts`: mocks of the queries/mutations to be used in the spec tests of the `NestJS` environment.

   3. `folder_name.hooks.ts`: hooks of the queries/mutations to be used in the `React`/`Svelte` enviroment.

4. The files will be automatically copied and moved by the script to their usage directories on the `NestJS` and `React`/`Svelte` enviroments according to their folder names.

<br />

## **Migration** 🚚

`Directus` added a **[PR](https://github.com/directus/directus/pull/7939)**, thus being possible to easily generate and save snapshots of the development enviroment and export/import the data model from/to various Directus instances.

Below are the steps to export the schema generated by your docker Directus instance, to use on cloud Directus instances or another development enviroments:

1. Start the `Dna` development enviroment.
2. Under the folder `migration`, run **npm start**. It will generate the schema inside the `Docker` instance, that will be moved to the `Directus` migrations directory (`directus/migrations/...`), used as a volume on docker-compose to be imported on development initialization.

3. For import into development/production environment, use:

   1. `Development`: start the `Dna` application with the command `npm run start:migration-import` (It will import the schema `directus/migrations/schema.yaml` before start the `Directus` image).

   2. `Production`: on the cloud enviroment, copy the schema generated to your cloud Directus folder and run **npx directus schema apply ./path/to/schema.yaml**.

<br />

## **Response format** 👋

The response pattern followed the `Directus` return response. Thus, it was necessary to adjust the `NestJS` return pattern to fit and return in the same format.

For this, it was used the interface already provided by the [graphql-request](https://www.npmjs.com/package/graphql-request) library already installed, which returns the responses in the same standard as `Directus`.

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

## **Tests** ✅

For the testing stage, all the well-known and recommended structure of the **[NestJS Testing Module](https://docs.nestjs.com/fundamentals/testing)** was used, leaving it responsible for `UNIT TESTING` and `INTEGRATED TESTING`, applying them according to what the system needs during its development.

For the `END-TO-END`, **[Playwright](https://playwright.dev/)** was used, a modern test framework already well recognized and recommended by the community, due to its ease and quick generation of tests with the [**_Test Generator_**](https://playwright.dev/docs/codegen-intro) provided by it's powerful [**_VSCode Extension_**](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright).

### Examples

> **[UNIT TESTING](https://github.com/cesarsalesgomes/dna/blob/main/nestjs/src/system/system.spec.ts)**

_Test example in which were concerned with covering a portion of the business layer of the system module, without integration with other layers, such as the data layer._

> **[INTEGRATION TESTING](https://github.com/cesarsalesgomes/dna/blob/main/nestjs/src/cat/cat.spec.ts)**

_Example of test in call of a system route, in which the call to the data layer was abstracted, trying to cover as much as possible the Directus service._

_The automatic generation of false data, generated from the **[graphql-codegen-typescript-mock-data plugin](https://github.com/ardeois/graphql-codegen-typescript-mock-data#readme)**, was also provided in the `generate` script, so as to take advantage of `GraphQL` and thus obtain agility in the development of the tests._

> **[E2E TEST](https://github.com/cesarsalesgomes/dna/blob/main/playwright/tests/login-logout.spec.ts)**

_Login and logout test example of the React app. The example test uses servers running locally, which can be changed to cloud servers and thus perform integration with Github Actions._

<br />

## **Authentication** 🔒

### To obtain an authentication token and gain access to the routes developed in the application, perform the steps below

1. Generate access token using Directus authentication login: <br />

   > **[[Directus] Authentication reference](https://docs.directus.io/reference/api/system/authentication/)**

2. Pass the token in the Authorization header (`Authorization: Bearer <token>`):

   > **`Authorization: Bearer eyJh...KmUk`**

<br />

## **Deployment** ☁️

<br />

> **Directus / NestJS / Database**

_It was chosen to deploy the backend enviroment on the **[AWS](https://aws.com)**. It has a basic unpaid plan of 1 year to it's EC2 basic instance (Thus being more attractive to customers and creation of POC's) and greater freedom for configuration._

_Even having more steps of installation and manual configuration, the environment was chosen due to the idea of ​​integrating it with **[Nginx](https://www.nginx.com/)**, thus obtaining only one IP in production (with reverse proxy)._

_The idea behind the configuration of the reverse proxy, is to redirect all calls that contain `nestjs` in their route to NestJS, and redirect all other calls to Directus, thus obtaining the environment configuration with only one ip._

_For that, then, **ALL** controllers created in the NestJS environment will have a `nestjs` in their path (Ex: /nestjs/cats), being possible due to the **[configuration of global prefixes in all routes](https://docs.nestjs.com/faq/global-prefix)**._

_**IMPORTANT**: in the development environment, the docker image used by Directus will always try to use the latest version. Therefore, it is necessary to keep the same version in production. To update the environment when necessary, use the steps in **[Directus update guide](https://docs.directus.io/self-hosted/upgrades-migrations/)**._

_Below are the steps of creation:_

1. Have in hand the credentials of the chosen cloud database (Recommended: `AWS RDS Postgres Database`¹ / Free tier: `Render Postgres`).

2. Follow the steps of the **[Link](https://www.youtube.com/watch?v=adQDNRZ59r0)** to install `Nginx` and `Node.js` on an `AWS EC2` (**Obs**: Skip the certificate step via `Let's Encrypt`. It's recommended to create a subdomain and associate it with a certificate via `Api Gateway` (**[Create](https://codethief.io/aws-connect-api-gateway-to-ec2/)** and **[Certificate](https://www.youtube.com/watch?v=ESei6XQ7dMg&list=PLodrmGJuvVEW3RDUHRY_IkJbPQC2xI2Ze)** steps) or an **[Application Load Balancer](https://www.youtube.com/watch?v=JQP96EjRM98&list=PLodrmGJuvVEW3RDUHRY_IkJbPQC2xI2Ze)**).

3. Clone the `dna` repository.

4. Under the `dna` root folder, follow the steps below:

   1. **[Quickstart Directus](https://docs.directus.io/self-hosted/quickstart.html)** using the database production credentials (**Obs**: use a name other than `directus`).

   2. Move the `migrations` folder under `directus` to the created project (e.g. **mv directus/migrations directus-b**).

   3. Delete the `directus` folder (**rm -rf directus**).

   4. Rename the created folder project to `directus` (e.g. **mv directus-b directus**).

   5. Update the `start` script of the _package.json_ to `npx directus start`.

5. Set the production enviroment variables. NestJS enviroment variables go on the `.bashrc` script file; Directus environment variables must be inserted in the `.env` file (previously created by the Directus CLI). Below are environment variable settings in production different from development:

   1. **Directus:** HOST="127.0.0.1"

   2. **Nest:** export DIRECTUS_IP="127.0.0.1"

6. Start the Directus project using the **[Ubuntu](https://docs.directus.io/self-hosted/installation/ubuntu/#ubuntu)** with `pm2`, to keep the application alive **(pm2 start npm --name "Directus" -- start)**.

7. Start NestJS by going to the _nest_ folder, and also start the application with `pm2` **(pm2 start npm --name "Nest" -- start)**. The command will install the production modules, build and start the application.

8. Copy the _/nestjs_ and _/directus_ server locations of the `default-prod.conf` on the nginx folder², to the server locations of the `etc/nginx/conf.d/project-name.conf` file (necessary to be created) on the EC2 instance folder³.

9. Restart the Nginx server with the command `systemctl restart nginx`.

**Issues:**

1. **[Configuration to connect to AWS RDS MySql Database](https://www.youtube.com/watch?v=Ng_zi11N4_c&t=445s)**
2. Copying and pasting from the file generates unexpected nginx errors, so it is necessary to type the characters
3. Localhost on Docker containers is different from the localhost on the host machine. That's why the .conf file in the nginx directory has the names of the Nest and Directus containers in the `proxy_pass` properties. In production, the properties must be set to `localhost:port` of the respective applications

<br />

## **Monitoring** 🛡️

<br />

> **Frontend**

To collect and analyze possible production build errors, [**Highlight**](https://www.highlight.io/) was chosen.

Replay errors with high precision, outgoing network requests, dense stack traces and finding the reason for user drop offs to gain insight into UX, are some of the qualities of the tool.

To install, follow the steps below:

1. [**How to install on React**](https://docs.highlight.run/reactjs)

<br />

> **Backend**

Monitoring a Node.js application is a very important step in the system, so that it is possible to monitor the performance of the system in a fast, simple, efficient and intuitive way.

As the idea of the environment is to look for tools with the highest cost-benefit, **[Uptime Kuma](https://github.com/louislam/uptime-kuma)** was chosen, due to ease configuration, intuitive monitoring, and varied configuration of alert notifications.

To install the tool on an `AWS EC2` instance, follow the steps of the links below:

1. **[How to install](https://github.com/louislam/uptime-kuma/wiki/%F0%9F%94%A7-How-to-Install)**

2. **[Configure with Nginx](https://github.com/louislam/uptime-kuma/wiki/Reverse-Proxy)**

<br />

## **File Storage** 📁

Directus offers a complete **[solution](https://docs.directus.io/app/file-library/#file-library)** for file storage, with integration to the main cloud solutions available, like AWS S3, Azure, etc.

Because most of the architecture already built is on AWS, `S3` was chosen due to its ease, practicality, security and to centralize the solution layers. Follow the **[link](https://docs.directus.io/configuration/config-options/#s3-s3)** to configure the Directus environment for AWS S3.

**Issues:**

1. After creating a Bucket on S3, to avoid permission errors, it's necessary to add the `AmazonS3FullAccess` permission to the AWS admin user.

<br />

## **Cache** 🧠

Directus offers a built-in data cache **[solution](https://docs.directus.io/configuration/config-options/#cache)**, with the options of `local memory`, **[Redis](https://redis.io/)** and **[Memcache](https://memcached.org/)**.

Redis was chosen because is the most popular distributed caching engine today. It is production-proven and provides a host of capabilities that make it the ideal distributed caching layer for applications. **[Redis Cloud](https://redis.com/redis-enterprise-cloud/overview/)** was used to the cache cloud solution, due to its ease configuration, monitoring and better cost benefit.

For monitoring and visualization of the Redis health, **[RedisInsight](https://redis.com/redis-enterprise/redis-insight/)** was chosen because provides an intuitive and efficient GUI, allowing the interaction, monitor, and management of the data. For development use, follow the steps of the **[link](https://docs.redis.com/latest/ri/installing/install-docker/)**.

<br />

## **Logging** 🔎

The idea behind using the Directus platform, because it's a live system, will have it's most critical errors reported and corrected by the community in new updates, and so be necessary to always keep it updated in production/development environments to be less likely to have unwanted problems.

On the other hand, errors found in the business platform (the NestJS layer), must be minimized as much as possible through unit and integrated tests.

However, unexpected errors can occur, and a good error logging strategy will be helpful to resolve them as quickly and efficiently as possible.

For this, the combination of **[NestJS Error Filter](https://docs.nestjs.com/exception-filters)** (making it possible to centralize and capture all business exceptions), together with the **[winston-cloudwatch](https://www.npmjs.com/package/winston-cloudwatch)** package, made it possible to store the error logs found during the system's production runtime in the **[AWS CloudWatch](https://aws.amazon.com/pt/cloudwatch/)**.

This quickly find the possible errors through the filters provided by the tool, and solve them efficiently for having been reported with the necessary details.

**Observation:** It's necessary to configure the environment variables according to the **[winston-cloudwatch configuration GitHub link](https://github.com/lazywithclass/winston-cloudwatch#configuring)**

**Issues:**

1. After creating a Group/Stream Logs on CloudWatch, to avoid permission errors, it's necessary to add the `CloudWatchLogsFullAccess` permission to the AWS admin user.
2. Due to the NestJS configuration peculiarities, the steps reported in this **[Stack Overflow link](https://stackoverflow.com/questions/69433044/winston-with-aws-cloudwatch-on-nestjs)** were followed.

<br />

## **Continuous Integration** 🤖

`Continuous integration` is a way to increase code quality, removing the responsibility from the developers some manual steps that must be performed before merging to the main code. Tests and checks of the code are handled on a server and automatically reported back.

For this, **[GitHub Actions](https://docs.github.com/actions)** were used, due to the easy configuration with the repository already hosted on `GitHub`, and the many ready-made actions already shared by the community.

Below is the list of configured actions:

> **[TEST](https://github.com/cesarsalesgomes/dna/blob/main/.github/workflows/test.yml)**

_Battery of tests performed in the business layer when performing a pull request to the main branch. If any of the tests fail, merge will be canceled._

> **[BUILD](https://github.com/cesarsalesgomes/dna/blob/main/.github/workflows/build.yml)**

_Checks if the business layer build was performed normally, avoiding data typing errors and possible execution errors. If an error occurs, the merge will be canceled._

> **[COVERAGE](https://github.com/cesarsalesgomes/dna/blob/main/.github/workflows/coverage.yml)**

_Uploads generated coverage to **[Codecov](https://about.codecov.io/)**, highlighting and keeping history on which portions of the code that have not been properly tested or may require additional testing._

> **[DEPENDABOT](https://github.com/cesarsalesgomes/dna/blob/main/.github/dependabot.yml)**

_**[Dependabot](https://docs.github.com/en/enterprise-server@3.3/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/automating-dependabot-with-github-actions)** creates pull requests to keep your dependencies up to date, and uses GitHub Actions to perform automated tasks when these pull requests are created._

> **[LINTER](https://github.com/cesarsalesgomes/dna/blob/main/.github/workflows/linter.yml)**

_**[Super-linter](https://github.com/marketplace/actions/super-linter)** automate the process establishing coding best practices and prevent broken code from being uploaded to the main branch._

<br />

## **Continuous Deployment** 🦾

`Continuous deployment` allows you to automatically deploy revisions to a production environment without explicit approval from a developer, thus automating the entire software release process.

For this, **[AWS CodePipeline](https://aws.amazon.com/pt/getting-started/hands-on/continuous-deployment-pipeline/)** were used, for study purposes and ease `GitHub` integration.

Below is the list of required configuration steps:

> **1. EC2 startup script**

For automatic startup of backend applications, it's necessary to configure a script that will be run when restarting an `AWS EC2` instance.

Some steps are necessary before editing the instance **[User Data](https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/user-data.html)**, responsible for executing the initial script.

Because `Node` **bin** folder directory is not yet in the `PATH` environment variable at the time of **User Data** script execution, the `pm2` command, responsible for starting the `Directus` and `Nest` applications, is not found.

Thus, it's necessary to **[edit the PATH variable](https://opensource.com/article/17/6/set-path-linux)**, concatenating the directory path of the **bin** folder where `Node` was installed (**Obs:** Use the `whereis node` command, to get the directory).

To do so, edit the `~/.bashrc` file, adding the command `export PATH="$PATH:/path-to-bin-dir-node"` (**Ex:** `export PATH=$PATH:/root/.nvm/versions/node/v16.13.1/bin`).

After this step, **[pm2 startup script](https://pm2.keymetrics.io/docs/usage/startup/)** tutorial was used to restart the apps when the instance is restarted. Simply run the scripts below:

```sh
# Generate Startup Script
$ pm2 startup

 # Startup scripts of Directus and Nest
cd /home/dna/directus && pm2 start npm --name "Directus" -- start
cd /home/dna/nestjs && pm2 start npm --name "Nest" -- start

# Freeze your process list across server restart
$ pm2 save
```

After that, it remains to set the environment variables and start `nginx` when the instance is restarted, which can be either via **[User Data](https://aws.amazon.com/pt/premiumsupport/knowledge-center/execute-user-data-ec2)**, or **[Cloud-Init](https://stackoverflow.com/questions/23411408/how-do-i-set-up-cloud-init-on-custom-amis-in-aws-centos)**:

```sh
# Required to carry out the editing of the PATH environment variable (https://stackoverflow.com/questions/14637979/how-to-permanently-set-path-on-linux-unix).
source ~/.bashrc

# Nginx startup
systemctl restart nginx
```

**Observation:** To check for any possible errors, check the error logs in the file `/var/log/cloud-init-output.log`.

<br />

## **React** ⚛️

`React` is a great tool for building frontend applications. It has a very diverse ecosystem with hundreds of great libraries for literally anything you might need.

The goal of the React repository is to serve as a ready-to-start collection of resources and good practices when starting a new project.

> **DEV TOOLS**

The application has been bootstrapped using **[Vite](https://vitejs.dev/)**, a pre-configured dev server + bundler combo, but leaner and faster, recommended nowadays instead of the traditional `create-react-app`.

`Eslint` + `Prettier` were used for formatting code and receiving alerts to maintain the good practices of React codding.

> **SERVER STATE**

For server communication, **[React Query](https://react-query.tanstack.com/)** was used, a library that effectively helps manage and keep track of server state, providing a consistent and straightforward way of managing server state as all of this have been abstracted into the library.

> **CLIENT STATE**

To simplify application state control, two libraries are used: **[Jotai](https://jotai.org/)** for **global** state control due to its flexibility, scalability and easy sharing of state with the concept of atomic models; and **[Zustand](https://github.com/pmndrs/zustand)** for **machine** state, i.e., more complex state controls that require sending actions and subscriptions between components.

> **CSS**

**[Tailwindcss](https://tailwindcss.com/)** was chosen because it provides a lot more flexibility and control over what your application looks like than other CSS frameworks, enabling a creation of a more unique site.

> **STRUCTURE**

The project structure was inspired by the great article about the **[Screaming Architecture](https://dev.to/profydev/screaming-architecture-evolution-of-a-react-folder-structure-4g25)**, that motivates the developer to focus on what the system needs to the tell about code, not the framework used. Below is the explanation of the structure:

```sh
src
|
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # re-exporting different libraries preconfigured for the application
|
+-- providers         # all of the application providers
|
+-- routes            # routes configuration
|
+-- stores            # global state stores
|
+-- test              # test utilities and mock server
|
+-- types             # base types used accross the application
|
+-- utils             # shared utility functions
```

A feature could have the following structure:

```sh
src/features/awesome-feature
|
+-- api         # exported API request declarations and api hooks related to a specific feature
|
+-- assets      # assets folder can contain all the static files for a specific feature
|
+-- components  # components scoped to a specific feature
|
+-- hooks       # hooks scoped to a specific feature
|
+-- routes      # route components for a specific feature pages
|
+-- stores      # state stores for a specific feature
|
+-- types       # typescript types for TS specific feature domain
|
+-- utils       # utility functions for a specific feature
|
+-- index.ts    # entry point for the feature, it should serve as the public API of the given feature and exports everything that should be used outside the feature
```

<br />

## **Svelte** 🍿

The same architecture made before with `React` was replicated with `Svelte`, with the aim of comparing the two ecosystems and having a kickstart `Svelte` project.

The architecture between the two environments has remained practically the same, with `Svelte` not needing third-party state control dependencies.

Most of the advantages reported by the `Svelte` community over other environments were felt during development, such as small JavaScript bundle sizes. For comparison purposes, the same features made in `React` had the final bundle generated with a size 5x smaller on `Svelte`; another strong point also noted was the learning curve, i.e., it's functionalities are more natural and simple to be implemented.

It's weaknesses were also felt, such as limited library ecosystem for being a relatively new framework, so there are fewer options and less mature external libraries available.

For example, there is still no strongly adopted route control library (there are already libraries that meet the needs, but none stand out strongly); another example was the `GraphQL Codegen` generation for **[Svelte Query](https://sveltequery.vercel.app)**. There is still no plugin that generates them as easily as for `React`, being necessary to reuse the generated queries/mutations and adapt them via script to `Svelte` (This is an example that other features may not be as easy do adapt).

More detailed comparisons between the two environments can be found in the article **[Svelte vs. React: Comparing JavaScript component libraries](https://www.contentful.com/blog/svelte-vs-react/?utm_source=newsletter&utm_medium=email&utm_term=2023-03-09&utm_campaign=AI+movie+recommendations+Comparing+Svelte+React+Job+board+try+out)**.
