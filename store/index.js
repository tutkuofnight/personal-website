import division from '../utils/division.json'
const state = () => ({
  app: {
    theme: division[4]
  },
  developer: {
    fullname: "Tutku Uçan",
    age: 19
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