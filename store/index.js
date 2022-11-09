import division from '../utils/division.json'
import specialMoment from '../utils/special-moment.json'
const state = () => ({
  app: {
    theme: process.env.specialEvent ? specialMoment[process.env.themeType] : division[process.env.themeType]
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