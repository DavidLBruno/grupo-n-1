const chaiHTTP = require("chai-http");
const chai = require("chai");
const { assert } = require("chai");
const server = require("../app");
const { suite, test } = require("mocha");

chai.use(chaiHTTP);


//all category

test("Get All Category", function (done) {
    chai
      .request(server)
      .get(`/categories/`)
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.message, "All Categories");
        done();
      });
  });

  //create category

  const createCategory = {
    name: "Incomes",
    description: "Ingreso",
  };

  suite("create Category ", function () {
    test("succesfull creation of category", function (done) {
      chai
        .request(server)
        .post("/categories")
        .send(createCategory)
        .end((err, res) => {
          assert(res.status, 500);
          assert.equal(res.status, 200);
          assert.equal(res.body.message, 'Category created successfully');
          done();
        });
    })
})

//Update category

const updatCategory = {
    id: 6,
    name: "Outcomes",
    description: "Egreso",
  };


  suite("Update Category ", function () {
    test("succesfull update of category", function (done) {
      chai
        .request(server)
        .put("/categories/"+updatCategory.id)
        .send(updatCategory)
        .end((err, res) => {
          assert(res.status, 500);
          assert.equal(res.status, 200);
          assert.equal(res.body.message, `Category #${updatCategory.id} updated!`);
          done();
        });
    })
})

//delete category




const deleteCategory = {
    id: 8,
    name: "Incomes",
    description: "Ingreso",
  };


  suite("Deleted Category ", function () {
    test("succesfull Deleted of category", function (done) {
      chai
        .request(server)
        .delete("/categories/"+deleteCategory.id)
        .send(deleteCategory)
        .end((err, res) => {
          assert(res.status, 500);
          assert.equal(res.status, 200);
          assert.equal(res.body.message, `Category #${deleteCategory.id} deleted!`,);
          done();
        });
    })
})

