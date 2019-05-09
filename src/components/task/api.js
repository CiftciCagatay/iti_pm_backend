const express = require('express')
const ctrl = require('./controller')

const router = express.Router()

router.get('/', ctrl.getTasks)
router.post('/', ctrl.createTask)
router.put('/:_id', ctrl.updateTask)
router.delete('/:_id', ctrl.removeTask)

module.exports = router
