import authorData from 'authorData';
import AuthorReducer, {
  initialState,
  loadAuthorRequest,
  loadAuthorSuccess,
  loadAuthorError
} from '../../containers/Author/AuthorRedux';

describe('Author reducer', () => {
  it('renders the initial state when passing undefined as state', () => {
    expect(AuthorReducer(undefined, {})).toEqual(initialState);
  });

  it('it should handle LOAD_AUTHOR_REQUEST', () => {
    expect(
      AuthorReducer(initialState, loadAuthorRequest()),
    ).toEqual({
      ...initialState,
      loading: true
    });
  });

    it('it should handle LOAD_AUTHOR_ERROR', () => {
    expect(
      AuthorReducer(initialState, loadAuthorError()),
    ).toEqual({
      ...initialState,
      loading: false,
      error: true
    });
  });


  it('it should handle LOAD_AUTHOR_SUCCESS', () => {
    expect(AuthorReducer(initialState, loadAuthorSuccess(authorData))).toEqual(
      {
        ...initialState,
        data: authorData.data,
        loading: false,
        error: false,
      },
    );
  });
});
