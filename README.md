# multitenancy

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

## Prepare the application

1. Create `User` & `UserCredentials` for integrating JWT

```sh
$ lb4 model User
? Please select the model base class Entity (A persisted model with an ID)
? Allow additional (free-form) properties? No
Model User will be created in src/models/user.model.ts

Let's add a property to User
Enter an empty property name when done

? Enter the property name:
   create src/models/user.model.ts
   update src/models/index.ts

Model User was/were created in src/models
```

```sh
$ lb4 model UserCredentials
? Please select the model base class Entity (A persisted model with an ID)
? Allow additional (free-form) properties? No
Model UserCredentials will be created in src/models/user-credentials.model.ts

Let's add a property to UserCredentials
Enter an empty property name when done

? Enter the property name:
   create src/models/user-credentials.model.ts
   update src/models/index.ts

Model UserCredentials was/were created in src/models
```

2. Replace `models/user.model.ts` & `models/user-credentials.model.ts` by [user.model.ts](https://github.com/strongloop/loopback-next/blob/master/extensions/authentication-jwt/src/models/user.model.ts) & [user-credentials.model.ts](https://github.com/strongloop/loopback-next/blob/master/extensions/authentication-jwt/src/models/user-credentials.model.ts)

3. Create repositories for `User` and `UserCredentials`

```sh
$ lb4 repository
? Please select the datasource PostgresqlDatasource
? Select the model(s) you want to generate a repository for UserCredentials, User
? Please select the repository base class DefaultCrudRepository (Juggler bridge)
? Please enter the name of the ID property for UserCredentials: id
? Please enter the name of the ID property for User: id
   create src/repositories/user-credentials.repository.ts
   create src/repositories/user.repository.ts
   update src/repositories/index.ts
   update src/repositories/index.ts

Repositories UserCredentialsRepository, UserRepository was/were created in src/repositories
```

4. Run `npm run build`

5. Modify `datasources/postgresql.datasource.ts` to meet the proper PostgreSQL configurations then create a new PostgreSQL database depending on your configurations.

6. Run `npm run migrate`

7. Delete the following files:

- `models/user.model.ts`
- `models/user-credentials.model.ts`
- `repositories/user.repository.ts`
- `repositories/user-credentials.repository.ts`

8. Modify `models/index.ts` by deleting the following lines:

```ts
export * from './user.model';
export * from './user-credentials.model';
```

9. Modify `repositories/index.ts` by deleting the following lines:

```ts
export * from './user-credentials.repository';
export * from './user.repository';
```

## Run the application

```sh
npm start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

## Rebuild the project

To incrementally build the project:

```sh
npm run build
```

To force a full build by cleaning up cached artifacts:

```sh
npm run rebuild
```

## Fix code style and formatting issues

```sh
npm run lint
```

To automatically fix such issues:

```sh
npm run lint:fix
```

## Other useful commands

- `npm run migrate`: Migrate database schemas for models
- `npm run openapi-spec`: Generate OpenAPI spec into a file
- `npm run docker:build`: Build a Docker image for this application
- `npm run docker:run`: Run this application inside a Docker container

## Tests

```sh
npm test
```

## What's next

Please check out [LoopBack 4 documentation](https://loopback.io/doc/en/lb4/) to
understand how you can continue to add features to this application.

[![LoopBack](<https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png>)](http://loopback.io/)
