# MarsRoversPhotos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.4.

## Purpose

This project is ment for testing purposes only.

## Usage

After running the app you will find a simmple form where you can choose the Rover and the Sol. When clicking the search button
the app will connect to Nasa API and retrieve the photos according to the provided filter.
It will show you by default only 10 items of the retrieved data. Using the pagination component
you'll be able to navigate through all the items.

## Tests
Tests for the main form are provided

## Angular Material
All the imported modules are placed on the folder called material, located at /src/app/material.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Build for Production
Run `ng build --prod` to build the project for production environment. Remember to add the environment
variables need it for this to work properly. Location: /src/environments/environment.prod.ts
## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
