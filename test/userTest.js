const chaiHTTP = require("chai-http");
const chai = require("chai");
const { assert } = require("chai");
const server = require("../app");
const { suite, test } = require("mocha");
const { checkOwnwerId } = require("../middlewares/ownership");
const { verifyToken, validateToken }  = require("../middlewares/index");
const jwt = require("jsonwebtoken")
const { development, jwtSecret } = require("../config/config")
require("dotenv").config();

chai.use(chaiHTTP);



//all user

test("Login",(done) => {
    chai
      .request(server)
      .post("/user/login")
      .send({
        email: "Bruno_nada@hotmail.com",
        password: "123",
      })
      .end((err, res) => {
        done();
      });
      
  });

  suite("Tests for Users Routes", function () {

  test("user", function (done) {
    chai
      .request(server)
      .get(`/user/?page=1`)
      .set("cookie", `${process.env.JWT_SECRET}`)
      .end((err, res,) => {
        assert(res.status, 403);
        assert.equal(res.status, 403);
        assert.equal(res.body.message, "list the user successfully");
        done();
      });
  });
})


