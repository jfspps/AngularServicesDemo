# ServicesDemo

This project explores dependency injection in Angular and the communication between components using services. Services also circumvent duplicated code, making methods available to all components.

When a service is injected into appComponent, the same service is available to all child components of appComponent. Similarly, a service injected into a particular component will also be available to its child components, but not any parent component (e.g. appComponent) above it. In other words, __service injection is hierarchical__. As a result, care must be taken when injecting services since it may lead to unexpected behaviour.

Perhaps the major advantage with using services for large projects is the omission of data binding (event or property) with @Input and @Output. Instead, services provide a more centralised repository which is available to components which are injected with said service.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
