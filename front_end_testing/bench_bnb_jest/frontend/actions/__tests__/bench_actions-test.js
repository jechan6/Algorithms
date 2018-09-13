import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../bench_actions";
import * as ApiUtil from "../../util/bench_api_util";

import { testBenches, newBench } from "../../testUtil/bench_helper";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  test("fetchBenches creates RECEIVE_BENCHES after fetching benches", () => {
    const expectedActions = [
      {
        type: actions.RECEIVE_BENCHES,
        benches: testBenches
      }
    ];
    ApiUtil.fetchBenches = jest.fn(() => {
      return Promise.resolve(testBenches)
    });
    let store = mockStore({ benches: {} });
    return store.dispatch(actions.fetchBenches()).then( () => {
      expect(store.getActions()).toEqual(expectedActions)
      // .getActions on the store to return an array of actions called on our mock store
    });
  
  });


  test("receiveBench should create an action to receive one bench", () => {
    let store = mockStore({ benches: {} });
    const expectedActions = 
      {
        type: actions.RECEIVE_BENCH,
        bench: newBench
      };
  
    expect(actions.receiveBench(newBench)).toEqual(expectedActions);
  });

  test("fetchBench creates RECEIVE_BENCH after fetching new bench", () => {
    const store = mockStore({ benches: {} });
    const expectedActions = [{                                                 
      type: actions.RECEIVE_BENCH,
      bench: newBench
    }]
    ApiUtil.fetchBench = jest.fn(() => {
      return Promise.resolve(newBench)
    });
    return store.dispatch(actions.fetchBench()).then( () => {
      expect(store.getActions()).toEqual(expectedActions)
    });
    // You can call .getActions() on the store to return an array of actions
  });
});
