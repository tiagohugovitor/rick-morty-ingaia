# Rick and Morty Challenge

This is a website developed to inGaia front-end challenge. The project is build using React. The application is available on prodution mode in [https://tiagohugovitor.github.io/rick-morty-ingaia/](https://tiagohugovitor.github.io/rick-morty-ingaia/).

## Running project

To locally build and run the project you have to first install the dependencies by running 

#### `npm install`

After that you can runs the app in the development mode, using

#### `npm start`

Open [http://localhost:3000/rick-morty-ingaia](http://localhost:3000/rick-morty-ingaia) to view it in the browser.

## Running tests

Use the command below to run tests. Tests were made using the Jest.

#### `npm test`

## Building a version

The command 

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

## CI/CD

The project uses Github Pages to be available on [https://tiagohugovitor.github.io/rick-morty-ingaia/](https://tiagohugovitor.github.io/rick-morty-ingaia/). It also has a Github action trigger to make automatically deploy, generating a CI/CD build. The deploy is triggered when there are modifications on the branch *master*.