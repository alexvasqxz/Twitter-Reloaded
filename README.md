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

Testing

# 2 Design Patterns
The Design Patterns implemented in this project were:
<ul>
<li>Chain of Responsibility: The file "posts.js" uses this design pattern given that there's a different petition for each get, in order to use a different request depending on the function and the ID of the post that is required. </li>
<li>Strategy: The file "database.js" uses this design pattern given that this file uses the class Database to abstract an algorithm that will later be used for context creation in the application. </li>

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
