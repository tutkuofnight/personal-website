const express = require('express')
const fs = require('fs')
const cron = require('cron')
const config = require('./config.json')
const app = express()

app.get('/bg-type' , (req , res) => {
  return res.send(config.bgType)
})

const job = new cron.CronJob('* * * 1 * *' , function(){
  config.bgType = Math.floor((Math.random() * 13) + 1)
  fs.writeFileSync('./config.json' , JSON.stringify(config))
})
job.start()

module.exports = {
  path: '/api',
  handler: app
}