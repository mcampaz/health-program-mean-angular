'use strict'

const Athlete = require('app/models/athlete')

exports.athleteId = function(req, res, next, param){
    Athlete
        .findById(param)
        .then(function(athlete) {
            req.athlete = athlete
            next()
        })
        .catch(next)
}

exports.get = function(req, res, next){
    if(req.athlete) return res.send(req.athlete)

    res.sendStatus(404)
}

exports.list = function(req, res, next){
    const sort = req.query.sort || null
    const fields = req.query.fields || null

    let query = Athlete.find()
    
    if(sort !== null){
        query.sort(sort.replace(',', ' '))
    }

    if(fields !== null){
        query.select(Athlete.reduceFields(fields))
    }
    query
        .then(function (athletes){
            res.send(athletes)
        })
        .catch(next)
}

exports.new = function(req, res, next){
    const data = req.body

    const newAthlete = new Athlete(data)
    newAthlete
        .save()
        .then(function(athlete){
            res.send(athlete)
        }) 
        .catch(next)
   
}

exports.update = function(req, res, next){
    if(!req.athlete) return res.sendStatus(404)

    const data = req.body

    req.athlete
        .set(data)
        .save()
        .then(function (athlete){
            res.send(athlete)
        })
        .catch(next)
}


exports.delete = function(req, res, next){
    if (!req.athlete) return res.sendStatus(404)

    req.athlete
        .remove()
        .then(function(){
            res.sendStatus(200)
        })
        .catch(next)
}