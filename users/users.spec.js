const db = require("../data/db-config.js");

const Users = require("./users-model.js");

describe("users model", function() {
    beforeEach(async () => {
        await db("users").truncate();
    })

    describe("test environment", function() {
        it("uses the testing environment", function() {
            expect(process.env.DB_ENV).toBe("testing")
        })
    })

    describe("insert()", function() {
        it("creates a new user", async function() {
            await Users.insert({name: "user4"});

            const users = await db("users");
            expect(users).toHaveLength(4)
        })
    })

    describe("delete()", function() {
        beforeEach(async () => {
            await db("users").truncate();
        })
        it("deletes a user", async function() {
            // check that the table is empty

            // check that the hobbit is gone
            await Users.delete({name: "user4"});
            //open the db and see that the hobbit is there
            const users = await db("users");
            expect(users).toHaveLength(3);
        })
    })
})