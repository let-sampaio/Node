const express = require('express');
const app = express()
const router = express.Router()


const {
    getPeople,
    creatPerson,
}= require('./app')

router.route('/'.get(getPeople).post(creatPerson))

module.exports = router
