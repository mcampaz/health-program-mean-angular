'use strict'

exports.athleteId = function(req, res, next, param){
    req.athlete = {
        firstName: 'Mario',
        lastName: 'Campaz'
    }
    next()
}

exports.get = function(req, res, next){
    if(req.athlete) return res.send(req.athlete)

    res.sendStatus(404)
}

exports.list = function(req, res, next){
    const sort = req.query.sort
    const fields = req.query.fields
    const level = req.query.level
    if(sort !== undefined){
        athletes = _.sortBy(athletes, sort)
    }

    if(level !== undefined){
        athletes = _.filter(athletes, {level: parseInt(level, 10)})
    }

    if(fields !== undefined){
        const fieldArr = fields.split('')

        athletes = _.map(athletes, (athlete)=>{
            return _.pick(athlete, fieldArr)
        })
    }
    res.send([athletes])
}


exports.new = function(req, res, next){
    res.send({})
}


exports.update = function(req, res, next){
    if(!req.athlete) return res.sendStatus(404)

    res.send({})
}


exports.delete = function(req, res, next){
    if (!req.athlete) return res.sendStatus(404)
    res.sendStatus(200)

}