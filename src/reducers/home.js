
const INITIAL_STATE = {
  home:{}
}
export default async function getHomeData (state = INITIAL_STATE, action) {

  return {
    ...state,
    home: action.home
  }

}
