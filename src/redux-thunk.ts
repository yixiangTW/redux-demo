//@ts-nocheck
function thunk({dispatch, getState}){
  return next => action=>{
    if(typeof action === 'function'){
        return action(dispatch, getState)
    }
    return next(action)
  }
}

export default thunk