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
Every action triggered by Twitter reloaded should be registered as a new event at the event dashboard.

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
At the root of the project run

    >docker image build -t YOUR_NAME .

This will create a docker image using the `Dockerfile` with the image name `YOUR_NAME`

Run container

    >docker run YOUR_NAME
