/* ------------- Actions ------------- */
import { push } from "connected-react-router";
import qs from "query-string";
export const LOAD_RESULTS_REQUEST = "SpeakHub/Search/LOAD_RESULTS_REQUEST";
export const LOAD_RESULTS_SUCCESS = "SpeakHub/Search/LOAD_RESULTS_SUCCESS";
export const LOAD_RESULTS_ERROR = "SpeakHub/Search/LOAD_RESULTS_ERROR";

/* ------------- initial state ------------- */
export const initialState = {
  query: {},
  resource: null,
  repoName: null,
  repoOwner: null,
  loading: false,
  error: false,
  data: [],
  pagination: null
};

/* ------------- Reducer ------------- */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_RESULTS_REQUEST:
      return { ...state, loading: true };

    case LOAD_RESULTS_ERROR:
      return { ...state, error: true, loading: false };

    case LOAD_RESULTS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false,
        pagination: action.payload.pagination,
        query: action.payload.query,
        ...action.payload.params
      };

    default:
      return state;
  }
}

/* ------------- Action Creators ------------- */
export function loadResultsRequest() {
  return { type: LOAD_RESULTS_REQUEST };
}

export function loadResultsSuccess(result) {
  return { type: LOAD_RESULTS_SUCCESS, payload: result };
}

export function loadResultsError(error) {
  return { type: LOAD_RESULTS_ERROR, payload: { error } };
}

/* ------------- Thunks ------------- */
export function queryChange(change) {
  return (dispatch, getState) => {
    const { query, resource, repoName, repoOwner } = getState().search;
    const url = `/search/${repoOwner}/${repoName}/${resource}`;

    dispatch(
      push(
        `${url}?${qs.stringify({
          ...query,
          ...change
        })}`
      )
    );
  };
}

export function loadResults(query, params) {
  return async (dispatch, getState, api) => {
    try {
      dispatch(loadResultsRequest());

      const { resource, repoOwner, repoName } = params;
      const result = await api.RepoModel.getRepoData(
        repoName,
        repoOwner,
        resource,
        query
      );

      dispatch(loadResultsSuccess({ ...result, params, query }));
    } catch (err) {
      dispatch(loadResultsError(err));
    }
  };
}
