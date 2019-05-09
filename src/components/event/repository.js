const Event = require('./model')

const getEvents = params => {
  // TODO
  let query = {}
  return Event.find(query)
}

const createEvent = props => {
  const event = new Event(props)
  return event.save()
}

module.exports = {
  getEvents,
  createEvent
}
