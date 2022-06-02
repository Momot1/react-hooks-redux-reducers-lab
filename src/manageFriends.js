export function manageFriends(state, action) {
  const updatedState = [...state.friends]

  switch (action.type){
    case "friends/add":
      updatedState.push(action.payload)
      return{friends: updatedState}
    case "friends/remove":
      return{friends: updatedState.filter(friend => {friend.id !== action.payload})}
    default:
      return state
  }
}
