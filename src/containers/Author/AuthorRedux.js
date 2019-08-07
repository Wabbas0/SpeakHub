/* ------------- Actions ------------- */
export const LOAD_AUTHOR_REQUEST = "SpeakHub/Author/LOAD_AUTHOR_REQUEST";
export const LOAD_AUTHOR_SUCCESS = "SpeakHub/Author/LOAD_AUTHOR_SUCCESS";
export const LOAD_AUTHOR_ERROR = "SpeakHub/Author/LOAD_AUTHOR_ERROR";

/* ------------- initial state ------------- */
export const initialState = {
  loading: false,
  error: false,
  data: []
};

/* ------------- Reducer ------------- */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_AUTHOR_REQUEST:
      return { ...state, loading: true };

    case LOAD_AUTHOR_ERROR:
      return { ...state, error: true, loading: false };

    case LOAD_AUTHOR_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        data:
          data.length > 0
            ? data.map(author => {
                return { label: author.login, value: author.login };
              })
            : data,
        loading: false,
        error: false
      };

    default:
      return state;
  }
}

/* ------------- Action Creators ------------- */
export function loadAuthorRequest() {
  return { type: LOAD_AUTHOR_REQUEST };
}

export function loadAuthorSuccess(result) {
  return { type: LOAD_AUTHOR_SUCCESS, payload: result };
}

export function loadAuthorError(error) {
  return { type: LOAD_AUTHOR_ERROR, payload: { error } };
}

/* ------------- Thunks ------------- */
export function loadAuthor(repoName, repoOwner) {
  return async (dispatch, getState, api) => {
    try {
      dispatch(loadAuthorRequest());
      const result = await api.RepoModel.getRepoData(
        repoName,
        repoOwner,
        "contributors",
        {},
        100
      );

      dispatch(loadAuthorSuccess(result));
    } catch (err) {
      dispatch(loadAuthorError(err));
    }
  };
}
