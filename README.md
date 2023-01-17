<a name="readme-top"></a>
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/akg07/Habit-tracker">
    <img src="https://cdn-icons-png.flaticon.com/512/3588/3588658.png" alt="habit-icon-common" alt="Logo" width="70" height="70">
  </a>

  <h3 align="center">Habit Traker</h3>

  <p align="center">
    A Habit tracker Applicaiton based on Node, express js and mongoDB
    <br />
    <a href="https://github.com/akg07/Habit-tracker"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/akg07/Habit-tracker#readme">View Demo</a>
    ·
    <a href="https://github.com/akg07/Habit-tracker/issues">Report Bug</a>
    ·
    <a href="https://github.com/akg07/Habit-tracker/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
    <a href="#Sample-images-from-postman">Sample Images</a>
    </li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#configure">Configure</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This habit tracker provides a list of all the habits created by user.
User can manupulate the habit status and it stores total 60 days of the habit-details.
By default it delivers 7 days details.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Sample Images
Here are some sample images of the CRUD Ops. Have a quick look

#### Habit home
![Habit home][habit-home-screenshot]

#### Habit details
![Habit details][habit-details-screenshot]

### Project Structure
```
Habit_tracker
    |-----assets
    |       |--- css
    |       |     |-- habit.css
    |       |     |-- home.css
    |       |     └-- layout.css
    |       |--- Images
    |       |     └-- Screenshots     
    |       |--- js
    |       |     |-- habit.js
    |       |     └-- moment.js
    |       |--- sass
    |             |-- habit.scss
    |             |-- home.scss
    |             └-- layout.scss
    |------ config
    |         └--- mongoose.js
    |------ controllers
    |         └--- habitControllers.js
    |------ models
    |         └--- habit.js
    |------ routers
    |         └--- index.js
    |------ views
    |         |--- habit..ejs
    |         |--- home.ejs
    |         └--- layout.ejs
    |------ .gitignore
    |------ app.js
    |------ package.json
    |------ package-lock.json
    └------ README.md
```

### Built With

This project is build with various libraries and frameworks. Some of them is listed below

* [Node Js](https://nodejs.org/en/)
* [Express Js](http://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Postman- API checking](https://www.postman.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

For start the project you need to have some prerequisites.

### Prerequisites
npm is mandatory for install and runing the project

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

Clone the project from Git and install all the required libraries for the project

1. Clone the repo
   ```sh
   git clone https://github.com/akg07/Habit-tracker
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Configure

Here you have to make some configuraiton to run this project on your system

1. Install nodemon using npm (Ignore if already Installed)
    ```
    npm install nodemon
    ```
2. Now all configurations has been completed, run below command in terminal to run the application
    ```
    npm start
    ```


<!-- CONTACT -->
## Contact
In Case of any issue related to project setup or anything please contact me on ayush3032@gmail.com 

Aayush Kumar Gupta - [@Aayushkg_07](https://twitter.com/Aayushkg_07) - ayush3032@gmail.com

Project Link: [Habit Tracker](https://github.com/akg07/Habit-tracker)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments


* [Open Source License](https://choosealicense.com)
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[linkedin-url]: https://linkedin.com/in/othneildrew

[habit-home-screenshot]: assets/images/Habit_Home.png

[habit-details-screenshot]: assets/images/Habit_details.png
