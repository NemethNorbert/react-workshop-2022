# Bootstrap

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```sh
npx create-react-app react-workshop-2022
cd react-workshop-2022
yarn start
```
App is now running at [http://localhost:3000](http://localhost:3000).

# Goal

We are going to create an App where we can query github users

# Steps (Week 5)

1. Create a form with an input field, where the user can type in a github user name and receive a card with user informations, for example: profile picture, name, company, email etc...
Make sure to provide an ejoyable user experience. However it is up to you how to implement this app. You can use any 3rd party library to help with styling, however making the app look good is not a requirement.
2. The app's components should use proptypes and you should define an error bounadry as well. Feel free to use all the trickery we learnt so far on the workshop.
3. The App's feature list:
  - User is able to search for github users trough the github API
  - The github user is displayed on a card after the search
  - When the user initiates another search, another card will be displayed
  - The card has an `x` button to remove it from the results list
  - If the github user cannot be found, the error should be handled and well explained to our user
  - Feel free to add aditional features to the app, test your skills.

This homework will help you put last weeks learnings and experience into practice. It's time for you to start building a new application from scratch, where you can hone your fresh and crisp React skills :) As before, the goal here is to write good reusable components and make a small robust application. Don't stress yourself too much on the look and feel of your application ;)
Be aware, the github API limits your requests: https://docs.github.com/en/rest/rate-limit however it should be sufficent to develop and test your application.

Help:

(Github API)
https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api

