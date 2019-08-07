import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

import mockData from "authorData";
import * as authorRedux from "../../containers/Author/AuthorRedux";
import api from "../../api";

const mockStore = configureStore([thunk.withExtraArgument(api)]);
const axiosMock = new AxiosMockAdapter(axios);
const store = mockStore({ global: {} });

describe("Author actions", () => {
  afterEach(() => {
    store.clearActions();
  });

  it("dispatches LOAD_AUTHOR_REQUEST correctly", () => {
    store.dispatch(authorRedux.loadAuthorRequest());

    const expectedActions = [{ type: authorRedux.LOAD_AUTHOR_REQUEST }];

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("dispatches LOAD_AUTHOR_SUCCESS correctly", () => {
    store.dispatch(authorRedux.loadAuthorSuccess({ result: { data: [] } }));

    const expectedActions = [
      {
        type: authorRedux.LOAD_AUTHOR_SUCCESS,
        payload: { result: { data: [] } }
      }
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("dispatches LOAD_AUTHOR_ERROR correctly", () => {
    store.dispatch(authorRedux.loadAuthorError({ message: "Network Error" }));

    const expectedActions = [
      {
        type: authorRedux.LOAD_AUTHOR_ERROR,
        payload: { error: { message: "Network Error" } }
      }
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });

  //async action
  it("fetches author data and dispatch subsequent actions when the response 200", () => {
    axiosMock
      .onGet("/repos/facebook/react/contributors")
      .reply(200, mockData);

    const expectedActions = [
      { type: authorRedux.LOAD_AUTHOR_REQUEST },
      {
        type: authorRedux.LOAD_AUTHOR_SUCCESS,
        payload: mockData  
      }
    ];

    return store
      .dispatch(authorRedux.loadAuthor("react", "facebook"))
      .then(() => {

        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
