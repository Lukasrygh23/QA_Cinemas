# QA Cinemas

QA Cinemas is a full stack web application in which users are able to view all titles available in the cinema as well as upcoming titles. Users can also book the movie they would like to see. The web application has a comment section with full CRUD functionality and a rating system to rate the movies and share their thoughts. The web application has a section entitled 'help' on the navbar whereby users can contact the team if any issues/information or if they would like to view information about the site and team.

## Getting Started

The following instructions will get your copy of the web application running on your system.

### Prerequisites

- MongoDB Atlas Database
- NodeJS
- Express
- ReactJS
- Optional but recommended - visual studio code (IDE) with live server extension
- Optional but recommended - google chrome browser

### Installing

**MongoDB Atlas Database**
Follow the link and instructions to register for a free account https://www.mongodb.com/try

**NodeJS**
Download and install the corresponding nodeJS package which is compatible with your operating system
https://nodejs.org/en/download/

**Visual Studio code (optional)**
Recommended IDE for HTML, CSS and JavaScript developers https://code.visualstudio.com/download

**Google Chrome**
Recommended browser for use, development and testing https://www.google.co.uk/chrome/?brand=CHBD&brand=NMEO&gclid=Cj0KCQjwrJOMBhCZARIsAGEd4VGrSNL3Uj9eLtKq9JJUgklE5-ceqnOiup9GvoExasCqs_Tvy0HjErUaAvdqEALw_wcB&gclsrc=aw.ds

**Running QA Cinemas**

1. Git clone this repository into your local machine within your preferred location.
2. Open a terminal within VS Code or your preferred IDE, change directory into the server folder of the project and run the command `npm install`.
3. Change directory from the terminal into the client folder and run `npm install`.
4. Create a database on your MongoDB Atlas account (noting the host, username and password you chose as well as the database URL as you will need these for the next step).
5. Create a .env file within the server folder and enter the following information:
   DB_HOST=(your host link here)
   DB_USER=(your username here)
   DB_PASS=(your password here)
   URL=(your Database URL here)
6. Within the terminal, change directory into the server folder and run `npm run dev`.

## Running the tests

To test the application, type `npm run test` in the command line

This will run the Mocha and Chai tests (see below for details)

To test check the coverage of the tests, type `npm run coverage` in the command line

This will utilise the Istanbul testing framework and will display the percentage of covered units.

### Unit Tests

The unit test files test whether each 'unit' i.e. method of the application is functioning as expected.

Unit tests have been written to cover the following file types:

1. Routes

## Built With

Create-React-App
Node JS

## Authors

- **Daniel Li** - [danielli](https://github.com/DanLi14)
- **Gabriel Jose** - [gabrieljose](https://github.com/gabejose)
- **Lukas Rygh** - [lukasrygh](https://github.com/lukasrygh23)
- **Samuel Sheldon** - [samuelsheldon](https://github.com/samkazshel)
- **Solomon Boundy** - [solomonboundy](https://github.com/solomonboundy1)

## License

This project is licensed under the MIT license - see the [LICENSE.md](LICENSE.md) file for details
[Bootstrap](BOOTSTRAP.md) - Bootstrap License

_For help in [Choosing a license](https://choosealicense.com/)_

## Acknowledgments

- Aswene Sivaraj, Reece Elder
