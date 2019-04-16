let initState = {
  info: '',
  meta: ''
};

function updateUserInfo(state = initState, action) {  
  switch (action.type) {
    case "UPDATE_USERINFO":
      return {
        ...initState,
        ...action.info
      };
    default:
      return state;
  }
}
export default updateUserInfo;
