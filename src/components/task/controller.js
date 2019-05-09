const repository = require('./repository')

module.exports.getTasks = (req, res) => {
  repository
    .getTasks(req.query)
    .then(result => res.status(200).json(result))
    .catch(err => {
      console.log(err)
      res.status(500).send()
    })
}

module.exports.createTask = (req, res) => {
  const props = req.body

  repository
    .createTask(props)
    .then(result => res.status(200).json(result))
    .catch(err => {
      console.log(err)
      res.status(500).send()
    })
}

module.exports.updateTask = (req, res) => {
  const { _id } = req.params
  const props = req.body

  repository
    .updateTask(_id, props)
    .then(result => res.status(200).json(result))
    .catch(err => {
      console.log(err)
      res.status(500).send()
    })
}

module.exports.removeTask = (req, res) => {
  const { _id } = req.params

  repository
    .removeTask(_id)
    .then(() => res.status(200).json({}))
    .catch(err => {
      console.log(err)
      res.status(500).send()
    })
}
