const mongoose = require('mongoose')

const User = {
  _id: String,
  name: String
}

const Label = {
  _id: String,
  name: String
}

const EventSchema = new mongoose.Schema({
  projectId: String,
  taskId: String,
  type: String,
  date: Date,
  detail: String,
  user: User,

  users: [User],
  labels: [Label]
})

module.exports = mongoose.model('Event', EventSchema)
