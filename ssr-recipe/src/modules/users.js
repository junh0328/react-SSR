import axios from 'axios';

const GET_USERS_LOADING = 'GET_USERS_LOADING';
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

const getUsersLoading = () => ({ type: GET_USERS_LOADING });
const getUsersSuccess = (payload) => ({ type: GET_USERS_SUCCESS, payload });
const getUsersFailure = (payload) => ({
  type: GET_USERS_FAILURE,
  error: true,
  payload,
});

export const getUsers = () => async (dispatch) => {
  try {
    dispatch(getUsersLoading());
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch(getUsersSuccess(response));
  } catch (error) {
    dispatch(getUsersFailure(error));
    throw error;
  }
};

const initialState = {
  users: null,
  user: null,
  loading: {
    users: false,
    user: false,
  },
  error: {
    users: null,
    user: null,
  },
};

function users(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_LOADING:
      return { ...state, loading: { ...state.loading, users: true } };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, users: false },
        users: action.payload.data,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: { ...state.loading, users: false },
        error: { ...state.error, users: action.payload },
      };
    default:
      return state;
  }
}

export default users;
