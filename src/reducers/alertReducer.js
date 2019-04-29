export default  (state=null,action)=> {
  if (action.type == 'ALERT'){
    return action.payload;
  } else {
    return state
  }
}