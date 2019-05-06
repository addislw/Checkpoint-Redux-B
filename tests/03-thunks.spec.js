/*
 * READ THIS FIRST
 *
 * The default initial state of the store is the following:
 *
 * {
 *   balloons: [],
 *   balloonsError: null
 * }
 *
 * Look at the file `src/03-thunks/reducer.js`
 *
 * Included in that file is a function named: `createGetBalloonsThunk`.
 *
 * This is for you to implement as a thunk creator.
 *
 * The object of this thunk is to issue a GET request to `/balloons` with the
 * axios library.
 *
 * There are two specs, one simulates a successful response that responds with
 * an array of balloons: `["red baloon", "yellow balloon", "green ballooon"]`
 *
 * The other spec simulates a failed response with a status code `400`.
 *
 * Write this thunk creator in a way that, upon success the list of balloons
 * is placed on state at the `balloons` key. And upon failure, places the error
 * object on state at the `balloonsError` key.
 *
 */
import { expect } from "chai";
import axios from "axios";
import { createStore, applyMiddleware } from "redux";
import MockAxiosAdapter from "axios-mock-adapter";
import thunkMiddleware from "redux-thunk";

import combineReducers, {
  createGetBalloonsThunk
} from "../src/03-thunks/reducer"

let store;
let mockAxios;

describe("Thunks", () => {
  beforeEach(() => {
    mockAxios = new MockAxiosAdapter(axios);
    store = createStore(combinedReducers, applyMiddleware(thunkMiddleware));
  });

  afterEach(() => {
    mockAxios.restore();
  });

  describe("GET /balloons succeeds", () => {
    beforeEach(() => {
      mockAxios
        .onGet("/balloons")
        .reply(200, ["red balloon", "yellow balloon", "green balloon"]);
    });

    xit("sets the recieved balloons on state", async () => {
      await store.dispatch(createGetBalloonsThunk());
      const state = store.getState()
      expect(state.balloons).to.deep.equal([
        "red balloon",
        "yellow balloon",
        "green balloon"
      ]);
    });
  });

  describe("GET /balloons fails", () => {
    beforeEach(() => {
      mockAxios.onGet("/balloons").reply(404, "No balloons today!");
    });

    xit("sets the thrown error on state", async () => {
      await store.dispatch(createGetBalloonsThunk());
      const state = store.getState()
      expect(state.balloonsError.response.data).to.deep.equal(
        "No balloons today!"
      );
    });
  });
});
