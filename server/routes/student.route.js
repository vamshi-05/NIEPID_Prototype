const express=require('express')
const routes=express.Router()
const { viewDetails,viewEvaluation,viewHistory } =require( '../controllers/student.controller')

routes.get('/viewStudentDetails',viewDetails)
routes.get('/viewHistory',viewHistory)

module.exports=routes