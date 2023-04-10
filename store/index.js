const client_id = '048f67de7bc24eac8ce38a8d8e915f8e'
const client_secret = '586de56a7639448a8364e54c9ffb1e57'

const state = () => ({
  track: null
})

const getters = {

}

const mutations = {
  SET_CURRENT_PLAYING: (state , data) => state.track = data
}

const actions = {
  setCurrentPlaying({commit} , data){
    return commit('SET_CURRENT_PLAYING' , data ? data : null)
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
