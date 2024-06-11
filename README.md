# Stream API Nest

API built with NestJS, Fastify, and Postgres. 

## Technologies

- NestJS 10
- Fastify
- Postgres 16
- Mikro ORM
- Swagger

## Installation

```bash
$ git pull {URL}
$ cd stream-nest
$ yarn install
```

## Running the app

```bash

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

- NestJS App opens on http://localhost:3001

Also -
- NextJS App opens on http://localhost:3000
- SvelteKit App opens on http://localhost:5173


## Tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## ORM
```bash
# see all available options
$ npx mikro-orm
```


## Postgres commands
```bash
$ createdb --username=USERNAME stream_db # create db
$ dropdb stream_db # drop db
$ psql stream_db # enter shell
```