const Project = require('./model')

const getProjects = () => {
  return Project.find()
}

const getProjectById = _id => {
  return Project.findOne({ _id })
}

const createProject = props => {
  const project = new Project(props)
  return project.save()
}

const updateProject = (_id, props) => {
  return Project.findOneAndUpdate({ _id }, props)
}

const removeProject = _id => {
  return Project.findOneAndDelete({ _id })
}

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  removeProject
}
