const initState = {
  collegeList: [],
  dormitoryList: [],
  isCollege: false,
  isDormitory: false
}

function ajaxReducer(state = initState, action) {
  switch (action.type) {
    case 'GET_COLLEGE':
    // ...
      break;
    case 'GET_DORMITORY':
    // ...
      break;
    default:
      return state;
  }
}
export default ajaxReducer;