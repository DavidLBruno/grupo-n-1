const chaiHTTP = require("chai-http");
const chai = require("chai");
const { assert } = require("chai");
const server = require("../app");
const { suite, test } = require("mocha");
const { checkOwnwerId } = require("../middlewares/ownership");
const { verifyToken }  = require("../middlewares/index");

chai.use(chaiHTTP);


//all user
suite("Tests for Users Routes", function () {

    let token;

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

  suite("user", function (done) {
    chai
      .request(server)
      .get(`/user/?page=1`)
      .send(token)
      .end((err, res) => {
        assert(res.status, 403);
        assert.equal(res.status, 200);
        assert.equal(res.body.message, "list the user successfully");
        done();
      });
  });
})


