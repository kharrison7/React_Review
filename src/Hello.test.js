//A simple test to demonstate the innate testing capabilities of React.js
//Jest is the testing framework (comes with create-react-app)

//describe is used to group a series of tests.
describe("When setting up testing", () => {
  //tests in Jest are made using an it function to make an expectation based on an assertion.
  it("should fail", () => {
    expect(1 + 1).toBe(3);
  });
});
