const request = require("supertest");

const server = require("./server.js");

describe("server", function() {
    it("runs the tests", function() {
        expect(true).toBe(true);
    })
    describe("GET to /", function() {
        it("should return res status 200", function() {
            return request(server).get("/")
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })
        
        it("should return JSON", function() {
            return request(server).get("/")
                .then(res => {
                    expect(res.type).toMatch(/json/i)
                })
        })
        it("should return the body of 'it's working!'", function() {
            // make a GET request to /
            return request(server).get("/")
                .then(res => {
                    // check that the body has {api: "up"}
                    expect(res.body).toBe("It's working!");
            })
        })
    })
    describe("GET to /users", function() {
        it("should return res status 200 also", function() {
            return request(server).get("/")
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })
        it("should return JSON", function() {
            return request(server).get("/")
                .then(res => {
                    expect(res.type).toMatch(/json/i)
                })
        })
        // it("should return users array", function() {
        //     // make a GET request to /
        //     return request(server).get("/users")
        //         .then(res => {
        //             // check that the body has {api: "up"}
        //             expect(res.body).toBe([users]);
        //     })
        // })
    })

})