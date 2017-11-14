export default {
/**
  * @param {object} store
  * @param {object} newTournament
*/
  setArticleAppventure ({commit, state}, newTournament) {
    commit('setArticleAppventure', newTournament)
  },
  setLoginStatus ({commit, state}) {
    commit('setLoginStatus')
  }
}
