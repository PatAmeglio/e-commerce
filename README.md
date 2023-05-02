# E-commerce (Module 13 Challenge)

## Description

A E-commerce website with a preset database to connect the front and back end using mySQL and Sequelize to mimic a live envinronment. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Install the node packages with "npm i" within the application directory.  
Install the mySQL package in order to connect to the database with "npm i mysql2".  
Install the sequelize package to connect express to the mySQL database with "npm i sequelize".  
Install the dot.env package in order to hide important credentials needed to login to the mySQL database with "npm i dotenv".  
Install the Insomnia API platform to check your API route requests from: https://insomnia.rest/

Open up your mySQL Terminal and run "mysql -u root -p" to have the database start listening.  
Then run "source ./db/schema.sql" to create the database to set the database.  

After in your Gitbash Terminal then run "npm run seed" to seed data into the newly created database tables.
Finally run "npm start" to launch the sequelize connection and be able check your API routes in Insomnia.


Run the application with "npm start" in the terminal command line and follow the prompts!  

## Usage

### Link to video demos of application.
 
https://drive.google.com/file/d/1btIZ0K_FpbrqKbTmcdhK2CuT3Yoi_m-0/view?usp=sharing


## License

Please refer to the LICENSE in the repo.

---