const express = require('express');
const app = express();
const port = 3000;
const middleware = require('./middleware');
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require("./database");
const session = require("express-session");
const User = require('./schemas/UserSchema');
const Login = require('./schemas/LoginSchema');
const Post = require('./schemas/PostSchema');

const server = app.listen(port, () => console.log("Server listening on port " + port));

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
    secret: "random bulldog",
    resave: true,
    saveUninitialized: false
}))

// Routes
const loginRoute = require('./routes/loginRoutes');
const logoutRoute = require('./routes/logout');
const registerRoute = require('./routes/registerRoutes');
const postRoute = require('./routes/postRoutes');

// API Routes
const postsApiRoute = require('./routes/api/posts');

app.use('/login', loginRoute)
app.use('/logout', logoutRoute)
app.use('/register', registerRoute)
app.use('/post', middleware.requireLogin, postRoute)

app.use('/api/posts', postsApiRoute)

app.get("/", middleware.requireLogin, async (req, res, next) => {

    var totalUsers = await User.countDocuments({ });
    var newUsersToday = await User.countDocuments({"createdAt" : {$gte:   new Date(new Date().setHours(00,00,00)), $lt :  new Date(new Date().setHours(23,59,59)) } });

    var totalLogs = await Login.countDocuments({ });
    var newLogstoday = await Login.countDocuments({"createdAt" : {$gte:   new Date(new Date().setHours(00,00,00)), $lt :  new Date(new Date().setHours(23,59,59)) } });

    var totalPosts = await Post.countDocuments({ });
    var newPostsToday = await Post.countDocuments({"createdAt" : {$gte:   new Date(new Date().setHours(00,00,00)), $lt :  new Date(new Date().setHours(23,59,59)) } });
    

    var payload = {
        pageTitle:"Home",
        userLoggedIn: req.session.user,
        totalUsers: totalUsers,
        newUsersToday: newUsersToday,
        totalLogs: totalLogs,
        newLogstoday: newLogstoday,
        totalPosts: totalPosts,
        newPostsToday: newPostsToday
    }

    res.status(200).render("home", payload);
})