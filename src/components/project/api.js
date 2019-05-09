const express = require('express')
const ctrl = require('./controller')

const router = express.Router()

router.get('/', ctrl.getProjects)
router.post('/', ctrl.createProject)
router.put('/:_id', ctrl.updateProject)
router.delete('/:_id', ctrl.removeProject)

module.exports = router
