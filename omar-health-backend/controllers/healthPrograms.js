'use strict'

const HealthProgram = require('app/models/healthProgram')

exports.healthProgramId = function(req, res, next, param){
    HealthProgram
        .findById(param)
        .then(function(healthProgram) {
            req.healthProgram = healthProgram
            next()
        })
        .catch(next)
}

exports.get = function(req, res, next){
    if(req.healthProgram) return res.send(req.healthProgram)

    res.sendStatus(404)
}

exports.list = function(req, res, next){
    const sort = req.query.sort || null
    const fields = req.query.fields || null

    let query = HealthProgram.find()
    
    if(sort !== null){
        query.sort(sort.replace(',', ' '))
    }

    if(fields !== null){
        query.select(HealthProgram.reduceFields(fields))
    }
    query
        .then(function (healthPrograms){
            res.send(healthPrograms)
        })
        .catch(next)
}


exports.new = function(req, res, next){
    const data = req.body

    const newHealthProgram = new HealthProgram(data)
    newHealthProgram
        .save()
        .then(function(healthProgram){
            res.send(healthProgram)
        }) 
        .catch(next)
   
}


exports.update = function(req, res, next){
    if(!req.healthProgram) return res.sendStatus(404)

    const data = req.body

    req.healthProgram
        .set(data)
        .save()
        .then(function (healthProgram){
            res.send(healthProgram)
        })
        .catch(next)
}


exports.delete = function(req, res, next){
    if (!req.healthProgram) return res.sendStatus(404)

    req.healthProgram
        .remove()
        .then(function(){
            res.sendStatus(200)
        })
        .catch(next)}