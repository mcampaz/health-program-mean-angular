'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId
const RESTRICTED = new Set(['email'])

/**
 * Athelete Schema
 */

 const AtheleteSchema = new Schema({
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
     officeNumber: String,
     createdOn: {
        type: Date,
        default: Date.now
     },
     email:  {
        type: Number,
        select: false
     },
     age: {
        type: Number,
        required: true
     },
     gender: {
        type: String,
        required: true
     }
     

 })