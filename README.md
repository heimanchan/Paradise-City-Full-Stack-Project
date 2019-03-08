# Paradise City

[Live Demo](https://paradise-city.herokuapp.com/#/)

Paradise City is a single-page Airbnb clone application. Users can search rooms for different places as well as booking them. User can also update their booking and leave reviews for a room. This project makes use of Rails and PostgreSQL on the backend, and React.js and Redux on the frontend.

The project was designed and built within a two-week timeframe, but improvements will be adding over time.

## Technologies
### Backend
* Ruby v2.5.1
* Rails v5.2.2
* Postgresql
### Frontend
* React
* Redux
### APIs
* Google Maps API
* Google Geocoding API
* React Dates
* React Star Rating Component
* Sweetalert

## Features
* Full frontend to backend user authentication using BCrypt.
* Users can search for rooms in any location using the Google Maps API.
* After logged in
  * Users can book a room and update their booking using React Dates calendar.
  * Users can cancel their booking in their profile page.
  * Users can leave reviews for a room

## Splash
![splash](https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/readMe/splash.png)
The splash page has a search bar in the center of the page. The search function is implemented using Google Maps API and Google Geocoding API. There are sign up and log in buttons on the top-right corner. Modal of a corresponding form is rendered after a button is clicked and user will be redirected to the serach page. User will be redirected back to this page after log out.

## Search for rooms
The search bar on the navigation bar is the same as on the splash page. Default searching result is San Francisco. User can search for any location and the map on the right hand side will be updated. Rooms on the left are reflected according to the markers on the map. Each room is a link to its show page.

