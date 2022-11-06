import division from '../utils/division.json'
const state = () => ({
  app: {
    theme: division[process.env.themeType]
  },
  developer: {
    fullname: "Tutku Uçan",
    title: "Full-Stack Web Developer"
  }
})

const getters = {
  
}

const mutations = {

}

const actions = {

}

export default {
  state , getters , mutations , actions
}