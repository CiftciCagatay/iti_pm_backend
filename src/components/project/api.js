const express = require('express')
const ctrl = require('./controller')

const router = express.Router()

router.get('/', ctrl.getProjects)
router.get('/:_id', ctrl.getProjectById)
router.post('/', ctrl.createProject)
router.put('/:_id', ctrl.updateProject)
router.delete('/:_id', ctrl.removeProject)

module.exports = router
