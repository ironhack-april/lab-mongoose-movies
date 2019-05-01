const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.js')
mongoose.connect('mongodb://localhost/mongoose-movies')

const celebrities = [
  {
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "...help me help you."
  },
  {
    name: "Sandra Bullock",
    occupation: "Actress",
    catchPhrase: "...are you serious?"
  },
  {
    name: "Al Pacino",
    occupation: "Actor",
    catchPhrase: "...say hello to my little friend!"
  }
]

Celebrity.insertMany(celebrities).then(res=>{
  console.log('inserted ',celebrities.length, ' celebs')
  mongoose.connection.close()
}).catch(err=>console.log(err))