const router = require('express').Router()
const controller = require('app/controllers/healthPrograms')

router.route('/')
    .get(controller.list)
    .post(controller.new)

router.route('/:id')
    .get(controller.get)
    .put(controller.update)
    .delete(controller.delete)

router.param('id', controller.healthProgramsId)

module.exports = router 