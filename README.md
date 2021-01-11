# Make Hello World Starter Template (Angular)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Looking for a different language?
- [React](https://github.com/Outfitio/make-hello-world-react-template)
- [Vue](https://github.com/Outfitio/make-hello-world-vue-template)
- Angular

<img src="https://files.outfit.io/media_library_items/236739/Screen%2520Shot%25202020-11-03%2520at%252010.33.28%2520am.png" style="width: 60%; margin: 0 auto; display: block;" alt="make starter template" />

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Building for Make

Run `ng build --base-href . --outputPath=dist` to build the project with correct resource pathing for the sake of deploying to make.

## Importing into Make

When importing into Make be sure to import from the `/dist` folder.

The following `data` inputs are available as well.

- `headline`: string
- `backgroundImage`: string (public URL)
- `showLogos`: boolean

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
