# BenchBnB- Frontend Tests

## Useful Docs

* http://redux.js.org/docs/recipes/WritingTests.html
* https://facebook.github.io/jest/docs/en/expect.html

---

## Today's Goals

* Learn what Jest and Enzyme are
* Get aquainted with docs
* Lay a foundation for more independent testing

---

## Agenda

* Set up
* Practice
* Reducers
* Action Creators
* Async Action Creators

---

## Why test?

* Prevents fear of refactoring
* Documentation
* Catches potential bugs
* TDD

---

## Jest

* Jest
  * Facebook's JS testing framework
  * Great for React
  * Simple mocking of components, libraries, etc.

---

## Setup

* `npm install --save-dev jest`
* `npm install --save-dev redux-mock-store`
* Edit `package.json` to run jest when you run `npm test`
* Add `.babelrc` file

---

## .babelrc file

```js
{
  "presets": [
    "es2015",
    "react"
  ]
}
```

---

## Jest Test Naming Conventions

* Put in a folder `__tests__`
* Name it `#{file-being-tested}-test.js`

---

## Practice

* Set up a `__tests__` folder in `practice`
* Import functions that we want to test
* Write tests

---

## Testing Redux

* Relatively simple
* Pure functions

---

## Reducers

```js
describe("BenchesReducer", () => {
  test("should initialize with an empty object as the default state", () => {
    // Your code here
  });

  // More code...
});
```

---

## Reducers(solution)

```js
test("should initialize with an empty object as the default state", () => {
  expect(BenchesReducer(undefined, {})).toEqual({});
});
```

---

## Reducers Part II

* use testUtil file
* If you finish early, write tests for `filters_reducer.js` for extra practice!

```js
describe("handling the RECEIVE_BENCHES action", () => {
  let action;

  beforeEach(() => {
    // Set up the action that will be passed into the reducer:
    // Your code here
  });

  test("should replace the state with the action's benches", () => {
    // Your code here
  });

  test("should not modify the old state", () => {
    // Your code here
  });
});
```

---

## Reducers Part II (Solution)

```js
beforeEach(() => {
  action = {
    type: BenchActions.RECEIVE_BENCHES,
    benches: testBenches
  };
});

test("should replace the state with the action's benches", () => {
  const state = BenchesReducer(undefined, action);
  expect(state).toEqual(testBenches);
});

test("should not modify the old state", () => {
  let oldState = { 1: "oldState" };
  BenchesReducer(oldState, action);
  expect(oldState).toEqual({ 1: "oldState" });
});
```

---

## Action Creators

```js
describe("actions", () => {
  test("receiveBenches should create an action to receive benches", () => {
    // refer to https://redux.js.org/docs/recipes/WritingTests.html
  });
});
```

---

## Action Creators Solution

```js
describe("actions", () => {
  test("receiveBenches should create an action to receive benches", () => {
    const expectedAction = {
      type: actions.RECEIVE_BENCHES,
      benches: testBenches
    };

    expect(actions.receiveBenches(testBenches)).toEqual(expectedAction);
  });
});
```

---

## Async Action Creators

```js
test("fetchBenches creates RECEIVE_BENCHES after fetching benches", () => {
  // REFER TO REDUX TESTS DOCS
  // Set up expectedActions:
  // Your code here

  ApiUtil.fetchBenches = jest.fn(() => {
    return Promise.resolve(testBenches);
  });

  const store = mockStore({ benches: {} });

  return store.dispatch(actions.fetchBenches()).then(() => {
    // Your code here
  });
});
```

---

## Async Action Creators (Solution)

```js
test("fetchBenches creates RECEIVE_BENCHES after fetching benches", () => {
  const expectedActions = [
    {
      type: actions.RECEIVE_BENCHES,
      benches: testBenches
    }
  ];

  ApiUtil.fetchBenches = jest.fn(() => {
    return Promise.resolve(testBenches);
  });

  const store = mockStore({ benches: {} });

  return store.dispatch(actions.fetchBenches()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
```

---

## Component Testing

* Enzyme
* jQuery like API on components

---

## Component Testing Set-up

* `npm install --save-dev enzyme

---

## Where To Go From Here

* Add tests to your FSP
* Add tests to JS project
* Add Jest to your resume
* Add tests whenever possible on coding challenges!

---

## Additional Resources

* https://github.com/appacademy/a06-prep/tree/master/solution/frontend/__tests__
* https://redux.js.org/docs/recipes/WritingTests.html

---
