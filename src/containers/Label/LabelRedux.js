/* ------------- Actions ------------- */
export const LOAD_LABEL_REQUEST = "SpeakHub/LABEL/LOAD_LABEL_REQUEST";
export const LOAD_LABEL_SUCCESS = "SpeakHub/LABEL/LOAD_LABEL_SUCCESS";
export const LOAD_LABEL_ERROR = "SpeakHub/LABEL/LOAD_LABEL_ERROR";

/* ------------- initial state ------------- */
export const initialState = {
  loading: false,
  error: false,
  data: []
};

/* ------------- Reducer ------------- */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_LABEL_REQUEST:
      return { ...state, loading: true };

    case LOAD_LABEL_ERROR:
      return { ...state, error: true, loading: false };

    case LOAD_LABEL_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        data: data.length > 0 ? data.map(label => label.name) : data,
        loading: false,
        error: false
      };

    default:
      return state;
  }
}

/* ------------- Action Creators ------------- */
export function loadLabelRequest() {
  return { type: LOAD_LABEL_REQUEST };
}

export function loadLabelSuccess(result) {
  return { type: LOAD_LABEL_SUCCESS, payload: result };
}

export function loadLabelError(error) {
  return { type: LOAD_LABEL_ERROR, payload: { error } };
}

/* ------------- Thunks ------------- */
export function loadLabel(repoName, repoOwner) {
  return async (dispatch, getState, api) => {
    try {
      dispatch(loadLabelRequest());
      const result = await api.RepoModel.getRepoData(
        repoName,
        repoOwner,
        "labels",
        {},
        100
      );

      dispatch(loadLabelSuccess(result));
    } catch (err) {
      dispatch(loadLabelError(err));
    }
  };
}
