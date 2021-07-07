const express = require("express");

const Users = require("../users/users-model.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json("It's working!")
})

server.get("/users", (req, res) => {
    Users.get()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: "There was an error getting users."})
    })
})

module.exports = server;