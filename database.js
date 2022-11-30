const mongoose = require("mongoose");

class Database {

    constructor() {
        this.connect(); 
    }

    connect() {
        mongoose.connect('mongodb://guavas:gusvas@ac-eqyqh1y-shard-00-00.adw458e.mongodb.net:27017,ac-eqyqh1y-shard-00-01.adw458e.mongodb.net:27017,ac-eqyqh1y-shard-00-02.adw458e.mongodb.net:27017/?ssl=true&replicaSet=atlas-wkqn5z-shard-0&authSource=admin&retryWrites=true&w=majority')
        .then(() => {
            console.log("Database connection successful");
        })
        .catch((err) => {
            console.log("Database connection failed" + err);
        })
    }
}

module.exports = new Database();