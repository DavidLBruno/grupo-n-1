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

  const createBodyRequest = {
    firstName: 'userCreate',
    lastName: 'userCreate',
    email: 'userCreate@email.com',
    password: 'passwordCreate'
    // lleva avatar??
  }
  const updateBodyRequest = {
    email: 'updated@email.com',
    firstName: 'updatedName',
    lastName: 'updatedLastname',
    password: 'passwordUpdate'
  }

  let token;
  

test("Login",(done) => {
    chai
      .request(server)
      .post("/user/login")
      .send({
        email: "diegoborja09@gmail.com",
        password: "123456",
      })
      .end((err, res) => {
        console.log(res.headers['Cookie'])
        token = res.headers['Cookie']

        done();
      });
      
  });
  
  test("user", function (done) {+
    
    chai
      .request(server)
      .get(`/user/?page=1`)
      .set('Cookie', token)
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.message, "list the user successfully");
        done()
      });
  });
})

