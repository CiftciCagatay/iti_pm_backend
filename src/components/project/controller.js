const repository = require('./repository')

module.exports.getProjects = (req, res) => {
  repository
    .getProjects()
    .then(result => res.status(200).json(result))
    .catch(err => {
      console.log(err)
      res.status(500).send()
    })
}

module.exports.createProject = (req, res) => {
  const props = req.body

  repository
    .createProject(props)
    .then(result => res.status(200).json(result))
    .catch(err => {
      console.log(err)
      res.status(500).send()
    })
}

module.exports.updateProject = (req, res) => {
  const { _id } = req.params
  const props = req.body

  repository
    .updateProject(_id, props)
    .then(result => res.status(200).json(result))
    .catch(err => {
      console.log(err)
      res.status(500).send()
    })
}

module.exports.removeProject = (req, res) => {
  const { _id } = req.params

  repository
    .removeProject(_id)
    .then(() => res.status(200).json({}))
    .catch(err => {
      console.log(err)
      res.status(500).send()
    })
}
