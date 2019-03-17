//A simple test to demonstate the innate testing capabilities of React.js
//Jest is the testing framework (comes with create-react-app)
//To run a test, in terminal use 'npm test'

import React from "react";
import ReactDOM from 'react-dom';
<<<<<<< HEAD
=======
// import jest from "jest";

>>>>>>> c59fbd86479d7aaa8a4ee65a95f32d8beafd654a

function Hello(props){
  return <h1>Hello at {props.now}</h1>
}

const moment = new Date(158894600000);

describe("When testing directly", () => {
  let result;
  beforeAll(() => {
    //Props object contains a time-stamp as an ISO String.
    result = Hello({now: moment.toISOString})
  });
  it("returns a value", () => {
    //does the result have a value.
    expect(result).not.toBeNull();
  });
  it("is an h1 element", () => {
    //is the result's type h1?
    expect(result.type).toBe("h1");
  });
  it("has children", () => {
    //does the result have a value.
    expect(result.props.children).toBeTruthy();
  });
});

//ReactDOM is the module used to render a React Component into a webpage.
describe("When testing with ReactDOM", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Hello now={moment.toISOString()} />, div);
  })
});

//describe is used to group a series of tests.
//This test is used to test a simple sum funciton.
//This test does not require the 'react' import
describe("When setting up testing", () => {
  //tests in Jest are made using an it function to make an expectation based on an assertion.
  //It is advisable to test a condition that should fail, in order to make sure the tests are working properly.
  it("should fail", () => {
    expect(1 + 1).toBe(3);
  });
});

export default Hello;
