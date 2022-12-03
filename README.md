# Twitter Reloaded
Main characteristics to be implemented
<ul>
<li>Create tweets with 300 characters maximum. </li>
<li>Reply to tweets. </li>
<li>Tweets with a comment are displayed as a thread. </li>
<li>A Thread is a tweet with scrollable answers. </li>
<li>Users see their home dashboard with the recent 10 tweets. </li>
<li>The dashboard contains tweets and threads. </li>
</ul>

# Event Dashboard
<ul>
    <li>Every action triggered by Twitter reloaded should be registered as a new event at the event dashboard. </li>
    <li>Type of action: create tweet / reply tweet / open application </li>
    <li>User who did the action </li>
    <li>Timestamp </li>
    <li>What is the user who registered more events during the day? </li>
    <li>What is the most commented tweet of the day? </li>
    <li>How many users opened our application during the day? </li>
</ul>

# 5 SOLID Practices
The way the 5 SOLID Practices were implemented in this project were:
<ul>
    <li>SRP (Single Responsibility Principle): File "registerRoutes.js" uses two different functions that are different from each other and each one serves a particular functionality. This file uses this principle given that each of the functions in this class are unique and serve a specific purpose. </li>
    <li>OCP (Open Close Principle): File "posts.js" gives the developer the liberty of adding new functions and new code without altering the functions that are already in place; the functionality of the previous functions stay the same even if we add new code. </li>
    <li>LSP (The Liskov Substitution Principle): File "app.js" uses this principle given that the router behaves in a way in which the behavior of a subclass is not altered by the other subclasses of the superclass. The behavior of the functions is not altered when another one is being used. </li>
    <li>ISP (Interface Segregation Principle): File "app.js" uses this SOLID Principle given that each segment of code is divided by a function that is specifically used for a single variable, and through this principle, we can avoid using functions that are not needed for the app execution. </li>
    <li>DIP (Dependency Inversion Principle): File "loginRoutes.js" uses this principle given that the high-level modules, the post function in this case, does not depend on the low-level modules; this function is going to run regardless the low-level modules. </li>
</ul>

# 2 Design Patterns
The Design Patterns implemented in this project were:
<ul>
    <li>Chain of Responsibility: The file "posts.js" uses this design pattern given that there's a different petition for each get, in order to use a different request depending on the function and the ID of the post that is required. </li>
    <li>Strategy: The file "database.js" uses this design pattern given that this file uses the class Database to abstract an algorithm that will later be used for context creation in the application. </li>
</ul>

# Design Patterns Class Diagram

Testing

## Available Scripts

In the project directory, you can run:

### `npm install`

This will install the needed dependencies to start the project.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

# Building Docker image
Go to the directory that has your Dockerfile and run the following command to build the Docker image. The -t flag lets you tag your image so it's easier to find later using the docker images command:

    $ docker build -t <your name>/node-web-app .

Your image will now be listed by Docker:

    $ docker images

    # Example
    REPOSITORY                      TAG        ID              CREATED
    node                            16         3b66eb585643    5 days ago
    <your username>/node-web-app    latest     d64d3505b0d2    1 minute ago
    
# Run the image
Running your image with -d runs the container in detached mode, leaving the container running in the background. The -p flag redirects a public port to a private port inside the container. Run the image you previously built:

    $ docker run -it -p 8080:3000 <your username>/node-web-app

# Shut down the image
In order to shut down the app we started, we run the kill command. This uses the container's ID, which in this example was ecce33b30ebf.

    $ docker kill <container id>
   
# Class Diagram
![alt text](https://github.com/alexvasqxz/Twitter-Reloaded/blob/main/ClassDiagram.jpeg)
