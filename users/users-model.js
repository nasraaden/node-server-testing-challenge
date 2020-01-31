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
    return null;
}

function insert(user) {
    return db("users")
    .insert(user, "id")
}

function update(id) {
    return null;
}

function remove(id) {
    return db("users")
    .where({ id })
    .del();
}