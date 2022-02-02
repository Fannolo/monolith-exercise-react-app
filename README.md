# Monolith Exercise - React

Please perform this exercise in a private fork of this repository and share it with us here at Monolith.

## Who we are

Monolith is a cutting-edge technology company that is shaping the future of banking by building decentralised payment solutions on the Ethereum Network. As the cryptocurrency market continues to grow and outpace traditional asset classes, there is a need to provide products and services to benefit its growing user-base. One such product is the Monolith debit card.

## The task

Create a React app that fetches data containing a list of card transactions for a group of users. Process the transactions and compute the final balance for each user. Display the final balances in the app in a sensible way for a fraud department to review.

We have started you off with a basic project using [Create React App](https://create-react-app.dev/docs/getting-started). When running locally, transaction files can be fetched from:

- http://localhost:3000/transactions-small.json
- http://localhost:3000/transactions-medium.json
- http://localhost:3000/transactions-large.json

How you fetch the files and store the data is up to you.

The transactions files contain an array of objects:

```json
[
  {
    "user_id": "4a1b84f7-9756-4549-837e-9574c7ffc142",
    "timestamp": "1970-01-01T00:00:00Z",
    "currency": "GBP",
    "amount": "+12.00"
  },
  {
    "user_id": "4a1b84f7-9756-4549-837e-9574c7ffc142",
    "timestamp": "1970-01-01T00:00:00Z",
    "currency": "USD",
    "amount": "-12.00"
  },
  {
    "user_id": "faf4a6fe-c839-4ee3-ac11-ee3957ac6332",
    "timestamp": "1970-01-01T00:00:00Z",
    "currency": "EUR",
    "amount": "-3.99"
  }
]
```

Each object represent a single card transaction.

- `user_id` is a string with the UUID associated with each user;
- `timestamp` is a string with a UTC date-time as per ISO 8601;
- `currency` is a string with the alphabetic code of the currency used in the transactions;
- `amount` is a string containing the amount to be credited (`+` sign prefix) or debited (`-` sign prefix). The amount is always expressed with the maximum number of digits after the decimal separator for the given currency.

The app should display users in a tabular format using the following layout as a guide:

```
User ID                                  GBP     USD    EUR  Last Activity
4a1b84f7-9756-4549-837e-9574c7ffc142  +12.00  -12.00      -     1970-01-01
faf4a6fe-c839-4ee3-ac11-ee3957ac6332       -       -  -3.99     1970-01-01
```

- _User ID_ column contains the user UUID
- _GBP_ column contains the final balance for any transactions in GBP
- _USD_ column contains the final balance for any transactions in USD
- _EUR_ column contains the final balance for any transactions in GBP
- _Last Activity_ contains the date of the last transaction for the given user

## Assumptions

- A user can have multiple transactions.
- A user can have transactions in multiple currencies.
- There are no duplicated transactions. Two transactions with the same timestamp for the same user are 2 distinct transactions.
- We assume the currencies are limited to: GBP, EUR, USD.
- We assume that the balance is calculated from with the same currency.
- We assume that the transactions does not have a starting balance and whatever value is calculated will be the resulting balance
- We assume that the list of transactions can be switched using a select in the header of the screen

**Please write down any other assumptions you need to make to continue the exercise.**

## Notes

- We expect you to compute the main balance processing logic without the help of any dedicated third party libraries, but you can leverage any general purpose tools (e.g. [lodash](https://lodash.com/) or [decimal.js](https://mikemcl.github.io/decimal.js/)).
- You can use specialized libraries for any other aspect functional to the task (e.g. UI components, testing libraries).
- You'll have to make network requests, but use whatever API or library you're familiar with. Loading indicators and HTTP mocks are nice-to-haves.
- Imagine this to be a project you submit to the team for code review, if approved we should be in a position to ship it to all our users.
- Take care of edge cases (e.g. misuse of the tool, missing or malformed data, large input files). Handle exceptions if necessary.
- The solution should include some tests that cover the main processing logic. The granularity of the tests is left for you to decide. The project template includes a sample test using Jest and `@testing-library/react`, however you may use any testing library you are comfortable with.
- Include a minimal `README.md` file with any assumptions, decisions or notes about your approach to the problem.

## How much time do I have?

We don’t mean to take too much of your time. Our hope is this won't take more than a few hours, but we appreciate there is a lot of different pieces you can get stuck in. Don't stress if it's taking longer. We'd like to hear how long it took so we can better set expectations.

We look forward to receiving your results. Good luck!
