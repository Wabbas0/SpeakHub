/* ------------- Actions ------------- */
export const LOAD_ASSIGNEE_REQUEST = "SpeakHub/ASSIGNEE/LOAD_ASSIGNEE_REQUEST";
export const LOAD_ASSIGNEE_SUCCESS = "SpeakHub/ASSIGNEE/LOAD_ASSIGNEE_SUCCESS";
export const LOAD_ASSIGNEE_ERROR = "SpeakHub/ASSIGNEE/LOAD_ASSIGNEE_ERROR";

/* ------------- initial state ------------- */
export const initialState = {
  loading: false,
  error: false,
  data: []
};

/* ------------- Reducer ------------- */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_ASSIGNEE_REQUEST:
      return { ...state, loading: true };

    case LOAD_ASSIGNEE_ERROR:
      return { ...state, error: true, loading: false };

    case LOAD_ASSIGNEE_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        data: data.length > 0 ? data.map(assignee => assignee.login) : data,
        loading: false,
        error: false
      };

    default:
      return state;
  }
}

/* ------------- Action Creators ------------- */
export function loadAssigneeRequest() {
  return { type: LOAD_ASSIGNEE_REQUEST };
}

export function loadAssigneeSuccess(result) {
  return { type: LOAD_ASSIGNEE_SUCCESS, payload: result };
}

export function loadAssigneeError(error) {
  return { type: LOAD_ASSIGNEE_ERROR, payload: { error } };
}

/* ------------- Thunks ------------- */
export function loadAssignee(repoName, repoOwner) {
  return async (dispatch, getState, api) => {
    try {
      dispatch(loadAssigneeRequest());
      const result = await api.RepoModel.getRepoData(
        repoName,
        repoOwner,
        "assignees",
        {},
        100
      );

      dispatch(loadAssigneeSuccess(result));
    } catch (err) {
      dispatch(loadAssigneeError(err));
    }
  };
}
