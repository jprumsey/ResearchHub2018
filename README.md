# Duke Research Hub

## Project Description

Our group is building a webapp that will allow Duke faculty to upload postings for research projects at Duke. Our goal is to connect students to research opportunities by providing them up to date information that they need in order to determine which lab to research in. We will be developing a query system that would allow students to look for projects that have been posted, or look for Duke faculty to directly contact. Each project page will have information about what work the project entails, the number of spots available, a brief description of the necessary skills, and the date posted. Project Managers have the ability to register on the website and post projects for students to public brows. Students can search for a project on the project page and apply through an apply button that redirects to a form to fill out. Alternatively ,Students can search a separate faculty page that displays the name, title, department, phone number, email, and website of each faculty member at Duke. Information on faculty was scraped from Duke’s faculty directory (scholars.duke.edu).

Below, you will find some information on how to set up the database, scrape data, and set up the web app.

## Table of Contents

1.  Folder Structure
2.  Dependencies
3.  Database
4.  Scraping Data
5.  How to Run Project
.._ Set up server
.._ Run React Project
6.  Injecting Data (GET, POST requests)
7.  Current Limitations

## 1. Folder Structure

- flask-researchhub: Directory for Flask app
- db-researchhub: setup for PostgreSQL database
- python-scripts: Web-scraping scripts that scrape Duke faculty members from https://scholars.duke.edu

## 2. Dependencies

- Package.json lists dependencies needed for React portion of the application.
- Python Web-Scraping Package Requirements
    - Python3
    - pip
    - bs4 (BeautifulSoup)
    - pandas
    - numpy
     - requests
     - lxml
    - psycopg2_binary
    - urlib3
     - SQLAlchemy
- Server/Database Requirements
    - Flask, Flask SQL Alchemy
    - PostgreSQL

## 3. Database

- Navigate to db-research in the repository. Ensure PostgreSQL is installed on your system
- Run ./setup.sh in a shell. This runs create.sql (creating the schema) and load.sql (loading randomly generated data into the Postgres database).

## 4. Loading Scraped Data into Database

- To load scraped data into the database, cd to python_scripts and run python3 main_scrape.py
    - You must change the engine to take 'postgresql://ENTERUSERNAME:dbpasswd@localhost/researchhub' as the first argument
    - This must agree with SQLALCHEMY_DATABASE_URI in config.py (located in flask-researchhub)
    - To change the number of faculty scraped, modify the value attached to faculty_list[:xxx] in the for loop where faculty_data concatenates with scrape(site)
- There are a number of packages required to run these scripts. See “Python Web Scraping Package Requirements” in Dependencies.

## 5. Running Web-app

1.  Flask Server (Object-Relational Mapper and RESTful API)
    - Navigate to flask-researchhub
    - Run "python3 app.py"
2.  React App
    - Navigate into FrontEnd
    - Run npm install to download any package.json dependencies. Ensure npm (Node Package Manager) is installed on your machine.
    - Run npm start. In case of error, run "yarn install --> yarn start."

## 6. Injecting Data (GET, POST requests)

- We used Axios.js package to make HTTP request calls.
- To perform a GET request this syntax was used:

```javascript
// Make a request for a user with a given ID
axios
  .get("server site")
  .then(function(response) {
    // handle success
    console.log(response);
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  })
  .then(function() {
    // always executed
  });
```

- To perform a POST request:

```javascript
axios.post('server site', {
    name 'key',
    name: 'key'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

## 7. Current Limitations

Because this was a single semester project, we realized that we did not have enough time to implement all the features that we initially planned to. We planned to implement a student page that the professors could browse through to look for students to help them in their research. While we were unable to implement this page, we have built tables in the database that can be used for these purposes. We ultimately decided that the student page was something that would be nice to have, but is not necessary for the purposes of our goal. However, the framework allows for this feature to be added in future versions. We also planned on implementing a user authentication system. While we do not have a robust user authentication system in our current version, we have implemented a framework for registering with a username and password that can be expanded and built upon in later versions. There is also a framework for site admins who would have special permissions to delete projects or users on the site. Additionally, the apply button the the project page does not currently have the functionality to send an email/application to the posted project, as we currently only have randomly generated project data, not real projects.
