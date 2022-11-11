const express = require('express')
const app = express()

app.get('/spotify' , (req , res) => {
  return res.redirect('https://open.spotify.com/user/8a9sj2ijmfftz57lttyqa0ann?si=e99f4d639fa84f4d')
})

module.exports = {
  path: '/',
  handler: app
}