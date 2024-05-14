# Albert Take Home Assessment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting started

1. `npm install`
2. `npm start`
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
4. Search for a stock to add to your watch list
5. `npm run test` if you wish to run some of the unit/component test.

## React and React Native engineering case study

Welcome to the Albert React and React Native engineering case study. At Albert, we value focused work and shipping product.
Instead of spending hours interviewing and talking about building things, we would like to give you the opportunity to show us what you can actually build.
Everything at Albert on web or mobile uses React or React Native, feel free to choose either for this case study.
Please approach this case study as if you were working on a real project at Albert with production quality design decisions, architecture, documentation, and code.

### The project

- Build a stock watchlist application that allows users to view their favorite stock prices.
- The application should be implemented in React or React Native with a main screen that contains a search bar and a user's watchlist of stocks and corresponding prices.
- Users should be able to search for stocks by name or ticker and add them to their watchlist.
- Users should be able to remove a stock from their watchlist.
- Users should be able to see both the current price of the stocks and the change from the last close price in their watchlist.
- Users should see the stock as green if the current price is above the last close, or red if below the last close.
- Users should be able to toggle between seeing the price change as amount (e.g. -$1.33) or percent (e.g. -0.44%)
- Prices should update every 5 seconds.
- User data should be persisted locally and re-used when the app is restarted.

### Getting started

Albert has a set of REST endpoints to provide stock information for the case study. The API provides two endpoints, one to search available stock tickers and another to get the current stock prices. Note that not all public stocks are available on this endpoint.
You will need to use the API key provided in the case study email to access the endpoints. Pass the API key in an `Albert-Case-Study-API-Key` header to the REST endpoints.

`GET /casestudy/stock/v2/search/?query=QUERY`

- Searches for stock tickers and company names that are available for use with the case study. The search string must match
  (case insensitive) any portion of either the ticker or the company name.

```commandline
curl "https://app.albert.com/casestudy/stock/v2/search/?query=A" -H "Albert-Case-Study-API-Key: <token>"

{
    "AAPL": "Apple",
    "GOOG": "Alphabet",
    ...
}
```

`GET /casestudy/stock/v2/prices/?tickers=[TICKERS]`

- Returns the current price and last close price for each of the tickets.

```commandline
curl "https://app.albert.com/casestudy/stock/v2/prices/?tickers=AAPL,MSFT" -H "Albert-Case-Study-API-Key: <token>"

{
    "AAPL": {
        "price": 122.21,
        "last_close": 124.12
    },
    "MSFT": {
        "price": 193.62,
        "last_close": 192.33,
    }
}
```

### Deliverables

- A working application and source code.
- Once you have completed the project create a solution.zip that contains your source code and project files and email the results to Albert.
