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

# Steps (Week 2)

You can start from your own App from last week, or simply fetch the solution branch and start from there. 

8. Our Product Owner foresees a demand in conversion for other cryptocurrencies: extract the conversion logic into a `<Converter />` component that takes a `cryptoName` and a `exchangeRate`. We can drop the crash to zero after 5 seconds functionality along with our current exchangeRate logic. Use a hardcoded value for BTC `exchangeRate`, `995`. You can also create a little box for each conversion so they can sit nice next to each other. The converter component has 2 input fields. The base euro and the one that is provided trough the cryptoName property. Also Add a second converter to our app for Ethereum \$ETH with a `1.2` `exchangeRate`. You can actually Add as many as you want.
9. Our design team finds the lack of a title per `<Converter />` a usuabillity problem. Allow the `<Converter />` component to render some custom markup to render it at the top of the component.
10. Monetization is key. Add an alert to warn the user about our Premium conversion model after 5 convertions are performed in any of the <Converter /> components in our app. The alert could be 'Convert without limits by becoming a premium user'

## Week 1

1. Add a number ```input``` with a label, "Euros".
2. Extract the input into a separate component called ```<Amount />``` that takes a name (eg. "Euros") prop.
3. Teach ```<Amount />``` input to show a red outline for negative amounts.
4. Make ```<Amount />``` a controlled component (ie. pass it its ```value``` as a prop).
5. Add a second, read-only ```<Amount />``` component that shows $BTC instead of Euros; use this function to get the exchange rate:
```javascript
    function exchangeRate() {
      return Math.random() * 10000;
    }
```
6. Use ```setTimeout``` to make the $BTC price crash to zero after 5 seconds of inactivity.
7. Use ```React.createContext()``` to provide a dark/light theme toggle.

Help:

(Context API described using React class components)
https://reactjs.org/docs/context.html

(useContext hook and how to use it in functional components)
https://reactjs.org/docs/hooks-reference.html#usecontext