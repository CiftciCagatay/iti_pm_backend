const TaskStatus = require('./model')

const getTaskStatuses = projectId => {
  return TaskStatus.find({ projectId })
}

const createTaskStatus = props => {
  const taskStatus = new TaskStatus(props)
  return taskStatus.save()
}

const updateTaskStatus = (_id, props) => {
  return TaskStatus.findOneAndUpdate({ _id }, props)
}

const removeTaskStatus = _id => {
  return TaskStatus.findOneAndDelete({ _id })
}

module.exports = {
  getTaskStatuses,
  createTaskStatus,
  updateTaskStatus,
  removeTaskStatus
}
