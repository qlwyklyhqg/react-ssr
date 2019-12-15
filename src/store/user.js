
import axios from "axios";

const GET_LIST = 'INDEX/USER_INFO'

const changeList = data => ({
  type: GET_LIST,
  data
})

export const getUserInfo = server => {
  return (dispatch, getstate, axiosInstance) => {
    return axios.get('/api/user/userinfo')
      .then(res => {
        const { userinfo } = res.data
        dispatch(changeList(userinfo))
      })
  }
}

const defaultState = {
  userinfo: {}
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        userinfo: action.data
      }
    default:
      return state
  }
}