const router = require('express').Router()
router.use('/athletes', require('./athletes'))
module.exports = router