const capitalizeRouter = require('../routes/capitalize.js');

const request = require('supertest');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/', capitalizeRouter);

/* Testing Capitalization */
test("Capitalization", done => {
  const values = {
    request: "vacuum",
    result: "Vacuum",
  };

  request(app)
    .post("/capitalize")
    .type("form")
    .send({ item: values.request })
    .expect("Content-Type", /json/)
    .expect({ data: values.result })
    .expect(200, done);
});

/* String Reversal */
test("String Reversal", done => {
  const values = {
    request: "vacuum",
    result: "muucav",
  };

  request(app)
    .post("/reverse")
    .type("form")
    .send({ item: values.request })
    .expect("Content-Type", /json/)
    .expect({ data: values.result })
    .expect(200, done);
});

/* Calculator Multiply */
test("Calculator Multiply", done => {
  const values = {
    first: 1,
    second: 2,
    operator: "*",
    result: 2
  };

  request(app)
    .post("/calculator")
    .type("form")
    .send({
      first: values.first,
      second: values.second,
      operator: values.operator,
    })
    .expect("Content-Type", /json/)
    .expect({ data: values.result })
    .expect(200, done);
});

/* Calculator Add */
test("Calculator Add", done => {
  const values = {
    first: 1,
    second: 2,
    operator: "+",
    result: 3
  };

  request(app)
    .post("/calculator")
    .type("form")
    .send({
      first: values.first,
      second: values.second,
      operator: values.operator,
    })
    .expect("Content-Type", /json/)
    .expect({ data: values.result })
    .expect(200, done);
});

/* Caesar Cipher */
test("Caesar Cipher", done => {
  const values = {
    request: "zebra",
    result: "afcsb",
  };

  request(app)
    .post("/cipher")
    .type("form")
    .send({ item: values.request })
    .expect("Content-Type", /json/)
    .expect({ data: values.result })
    .expect(200, done);
});

/* Analyize Array */
test("Analyize Array", async () => {
  const array = [1, 2, 6];
  const result = {
    average: 3,
    min: 1,
    max: 6,
    length: 3,
  }

  const response = await request(app)
    .post("/analyze")
    .type("form")
    .send({ item: JSON.stringify(array) })

  const responseBody = response.body.data;

  expect(response.status).toBe(200);
  expect(responseBody.average).toBe(result.average);
  expect(responseBody.min).toBe(result.min);
  expect(responseBody.max).toBe(result.max);
  expect(responseBody.length).toBe(result.length);
});

