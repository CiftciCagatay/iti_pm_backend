const Task = require('./model')

const getTasks = params => {
  // TODO: build query from params
  let query = {}
  return Task.find(query)
}

const createTask = props => {
  const task = new Task(props)
  return task.save()
}

const updateTask = (_id, props) => {
  return Task.findOneAndUpdate({ _id }, props)
}

const removeTask = _id => {
  return Task.findOneAndDelete({ _id })
}

module.exports = {
  getTasks,
  createTask,
  updateTask,
  removeTask
}
