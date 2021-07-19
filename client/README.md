<p align="center">
    <img height=100 src="https://avatars.githubusercontent.com/u/139426?s=200&v=4"/>
</p>

<p align="center">
    <strong>🚀 Angular Marketplace 🚀</strong>
</p>

<br/>

## What is this folder?

This folder is called client, it is currently used for our Angular frontend. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## How can I contribute?

**We're using [NPM](https://www.npmjs.com/) for this project**

Compile angular-marketplace by executing the following commands:

```bash
cd client/angular-marketplace
npm install
```

## Plugins
We use for this project these plugins in VSCODE to help us with the development:
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
- [Angular Snippets](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)


## Code Linting Rules
In this project is provided the .prettierrc file which has the basic configuration for Prettier. In the case of not being present, these are the settings:

```JSON
{
  "semi": true,
  "trailingComma": "none",
  "singleQuote": true,
  "printWidth": 300,
  "html.format.wrapLineLength": 300,
  "html.format.wrapAttributes": "auto"
}
```

The file .prettierrc is placed outside the /src folder, we can format all the .ts files by running:
```BASH
npm run prettier-format
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
