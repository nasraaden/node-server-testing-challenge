const db = require("../data/db-config.js");

module.exports = {
    get,
    getById,
    insert,
    update,
    remove
}

function get() {
    return db("users");
}

function getById(id) {

}

function insert(user) {

}

function update(id) {

}

function remove(id) {

}