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

### Set up Environment

```
($env:CYPRESS_BASE_URL = "https://<env>.asodesk.com")
```

This command set environment in cy config file.

Info: Some env doesn't support features like `delete user`, so be ready to some tests can failed (def evn is hq)

### Run healthy suite tests

```
npm run health:chrome
```

This command includes test kit to daily healthy check data in tools, like

 - Comparative Report (clear rank include)
 - Category Ranking (favorites locals)
 - Top-Charts by category
 - Compare Top-Charts to Category Ranking
 - Trending Searches
 - CVR Benchmark
 
 ### Github Actions
 
Every day github starts healthy check tests at 5-00 GMT (8-00 am in Moscow) and pushes it, when finished.
Then you can analyse information by using the git public url

```
https://valeraparafin.github.io/asodesk_cy/
```
