const chaiHTTP = require("chai-http");
const chai = require("chai");
const { assert } = require("chai");
const server = require("../app");
const { suite, test } = require("mocha");

chai.use(chaiHTTP);



suite("Tests for Categories Routes", function () {
  const testReqBody = {
    name: "testCategory",
    description: "testCategory",
  };
  before((done) => {
    chai
      .request(server)
      .get("/categories")
      .end((err, res) => {
        done();
      });
  })
})





suite("Tests for Categories Routes", function () {
    const testReqBody = {
      name: "testTransactions",
      description: "testTransactions",
    };
    before((done) => {
      chai
        .request(server)
        .get("/transactions")
        .end((err, res) => {
          done();
        });
    })
  })



  suite("Tests for Categories Routes", function () {
    const testReqBody = {
      name: "testUser",
      description: "testUser",
    };
    before((done) => {
      chai
        .request(server)
        .get("/user")
        .end((err, res) => {
          done();
        });
    })
  })
