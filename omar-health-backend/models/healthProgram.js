'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId
//const RESTRICTED = new Set(['email'])

/**
 * HealthProgram Schema
 */

 const HealthProgramSchema = new Schema({
     firstName: {
         type: String,
         required: true
     },
     lastName: {
        type: String,
        required: true
     },
     address: String,
     cellNumber: String,
     createdOn: {
        type: Date,
        default: Date.now
     },
     updatedOn: {
        type: Date,
        default: Date.now
     },
     officeNumber: String,
     createdOn: {
        type: Date,
        default: Date.now
     },
     updatedOn: {
        type: Date,
        default: Date.now
     },
     email:  {
        type: String,
        select: false
     },
     age: {
        type: Number,
        required: true
     },
     gender: {
        type: String,
        required: true
     },
     healthProgram: [{
         type: ObjectId,
         ref: 'HealthProgram'
     }]

 })

 HealthProgramSchema.pre('save', function(next){
     // Update the timestamp
     this.updatedOn = Date.now()

     return next()
 })

 // Convert from 'firstName, ladtName' to
 // { firstNam: 1, lastName: 1}
 HealthProgramSchema.statistics.reducedFields = function(fields){
     return fields.split(',').reduce((memo, field)=>{
         if(RESTRICTED.has(field)) return memo
         memo[field] = 1
         return memo
        },{})
 }

 module.exports = mongoose.model('HealthProgram', HealthProgramSchema, 'healthPrograms')