# Web Application - blog
Blog is a CURD application build on NodeJS with mongo DB cloud for Database and EJS for HTML templating. You create, view and delete the blogs.
## Getting Started
1. Clone the project locally.

## Prerequisites
The application to operate locally needs a way to connect & communicate with the Database. T achieve it are:
1.	Go to https://www.mongodb.com/cloud/atlas/ create a cluster and collections(Add My Own Data) in the database. You can create a database name(I have named it as ‘node-blog’, You can find it in app.js dbURI), if you have created a new database name then please update the database name in the dbURI string where it says ‘node-blog’.

## Running the application
Install required dependencies
```
npm install
```
Run the application in development mode with `dev` script
```
npm start
```

Navigate to http://localhost:9000/ in your browser window