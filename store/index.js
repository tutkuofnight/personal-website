const state = () => ({
  developer: {
    fullname: "Tutku Uçan",
    age: 18
  }
})

const getters = {
  getDeveloperName(state){
    return state.developer.fullname
  }
}

const mutations = {
  SET_DEVELOPER_AGE(state , val){
    state.developer.age = val
  }
}

const actions = {
  setDeveloperAge({commit} , val){
    commit('SET_DEVELOPER_AGE' , val)
  }
}

export default {
  state , getters , mutations , actions
}