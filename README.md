# MakeATransaction
deployed in Netlify
[click here](https://make-a-transaction-angular-11.netlify.app/) or follow below link:

https://make-a-transaction-angular-11.netlify.app/

## Development server
Run `npm install` to install the packages .
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
used Node js version 14, angular 11 .

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## approach
          Analyze json data provided and create interface for transaction to make sure data consistency.
          Created Custom theme to use custom color styling and fonts .
          Created service to fetch transactions data .
          Structured  folders for services, angular material and components (transfer,confirmation,transaction ).
          Outer Front end frame using flex and css .
          Transfer money form block using Reactive forms. Implemented validation, total amount conditions and test cases for the component .
          Confirmation Dialog and its user interface .
          Transactions table displaying mock data , filter and sorting .
          Communication between transfer and transaction components using service to save new transaction.

## to improve
  more tests
  custom validators for fields
  sorting on all fields
  User interface for table
  App is not completely responsive on mobile devices and the transfer form placeholder hides the amount field and is horizontally scrollable
  Form is not reset upon successful transfer and form fields are shown invalid.
  Transactions service is provided in root but is also added to `providers` array of the Shared Module
  Sporadic use of `any`. Not using proper types.
  No use of async pipes but subscribing in components without unsubscribing thus causing potential memory leaks
  Data mutation and impure functions used inside transactions and transfer components when it could have been avoided
