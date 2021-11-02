# Installation

  - Install [Node.js](https://nodejs.org/) 12 or 14 and above. 
  - Then open terminal if isn't and navigate to path with [this](https://github.com/valeraparafin/asodesk_cy.git) cloned project.
```
cd /your/project/path
```
  - Use `npm init`

  - Install [Cypress](https://cypress.io/) in path with project.

 ```
 npm install cypress
 ```
 - Do some test with using command. 
 ```
 npx cypress open 
 ```
 If cypress will open, well, it means you're done here and could use commands bellow

# Common things and commands

Here are some commands

## Using this inside the parrent directory (folder)


### Run smoke suite tests

```
npm run smoke:chrome
```

This command includes test kit to check major api handles from tools, like: 

 - Auth
 - Track Appliaction
 - Keyword Analytics (Add keyword/Delete keyword)
 - Keyword Explorer
 - Keyword Auto-Suggestions
 - ASO Dashboard
 - Keyword-favorites
 - Keyword-highlights
 - Organic Report
 - Comparative Report
 - Optimizer
 - Keyword Density Counter
 - Keyword Shuffler
 
 Scenarios by UI
 
  - Sign up user by email
  - Confirm email
  - Choose tariff and complete registration (def. free)
  - Change password in profile
  - Delete user

### Set up an Environment

```
($env:CYPRESS_BASE_URL = "https://<env>.asodesk.com")
```

This command set environment in cy config file.

> Note: Some env doesn't support features like `delete user`, so be ready to some tests can failed. (def. evn is `hq`). In this case you should to delete user manually.

### Run healthy suite tests

```
npm run health:chrome
```

This command includes test kit to daily healthy check data in tools, like

 - Comparative Report (clear rank include)
 - Category Ranking (favorites locales)
 - Top-Charts by category
 - Compare Top-Charts to Category Ranking
 - Trending Searches
 - CVR Benchmark
 
 ### Github Actions
 
Every day github actions starts healthy check tests by cron at 5-00 GMT (8-00 am in Moscow) and pushes it to rep when finished.
Then you can analyse information by using the git public url

```
https://valeraparafin.github.io/asodesk_cy/
```
