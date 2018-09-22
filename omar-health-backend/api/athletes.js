const router = require('express').Router()
const controller = require('app/controllers/athletes')

router.route('/')
    .get(controller.list)
    .post(controller.new)

router.route('/:id')
    .get(controller.get)
    .put(controller.update)
    .delete(controller.delete)

router.param('id', controller.athleteId)

module.exports = router 