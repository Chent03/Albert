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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
