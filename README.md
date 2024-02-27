<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) project for the online sales backend of [this course](https://www.udemy.com/course/nestjs-e-reactjs-do-zero-ao-avancado-utilizando-typescript/?couponCode=ST22FS22724).

## Installation

```bash
$ npm install
```

## Running the app

1. Create a .env.development with the data from .env.example.
2. Run the docker command below

```bash
#docker command
$ docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
```

3. Create a database with the name you prefer, remember that its name must be in the .env mentioned above. To create and use DBeaver.

4. Pay attention to the commands below:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

