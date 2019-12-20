const request = require("supertest");
const server = require("./server");

describe("server.js", () => {
  describe("enviroment", () => {
    it("should be seeting up the enviroment to testing", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });

    describe("GET /", () => {
      it("should return 200 ok", () => {
        return request(server)
          .get("/")
          .then(res => {
            expect(res.status).toBe(200);
          });
      });
    });

    describe("POST /register", () => {
      it("should return 201 on success will fail if username already exists.", () => {
        return (
          request(server)
            .post("/api/auth/register")
            // requires a unique username so it needs to change to be retested
            .send({ username: "Samm", password: "ladisu" })
            .then(res => {
              expect(res.status).toBe(201);
            })
        );
      });
    });

    describe("POST /register", () => {
      it("Should return a json object", () => {
        return (
          request(server)
            .post("/api/auth/register")
            // requires a unique username so it needs to change to be retested
            .send({ username: "test", password: "ladisu" })
            .then(res => {
              expect(res.type).toMatch("application/json");
            })
        );
      });
    });

    describe("POST /login", () => {
      it("should return 200 on successful login.", () => {
        return (
          request(server)
            .post("/api/auth/login")
            // requires a unique username so it needs to change to be retested
            .send({ username: "test", password: "ladisu" })
            .then(res => {
              expect(res.status).toBe(200);
            })
        );
      });
    });

    describe("POST /login", () => {
      it("should return a json object", () => {
        return (
          request(server)
            .post("/api/auth/login")
            // requires a unique username so it needs to change to be retested
            .send({ username: "test", password: "ladisu" })
            .then(res => {
              expect(res.type).toMatch("application/json");
            })
        );
      });
    });
  });
});
