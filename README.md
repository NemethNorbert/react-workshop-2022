# Bootstrap

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```sh
npx create-react-app react-workshop-2022
cd react-workshop-2022
yarn start
```
App is now running at [http://localhost:3000](http://localhost:3000).

# Goal

We are going to create an Euro BTC converter application

## Week 1

1. Add a number input with a label, "Euros".
2. Extract the input into a separate component called ```<Amount />``` that takes a name (eg. "Euros") prop.
3. Teach ```<Amount />``` input to show a red outline for negative amounts.
4. Make ```<Amount />``` a controlled component (ie. pass it its value as a prop).
5. Add a second, read-only ```<Amount />``` component that shows $BTC instead of Euros; use this function to get the exchange rate:
```javascript
    function exchangeRate() {
      return Math.random() * 10000;
    }
```
6. Use setTimeout to make the $BTC price crash to zero after 5 seconds of inactivity.
7. Use React.createContext() to provide a dark/light theme toggle.

Help:

(Context API described using React class components)
https://reactjs.org/docs/context.html

(useContext hook and how to use it in functional components)
https://reactjs.org/docs/hooks-reference.html#usecontext
