const express=require('express')
const routes=express.Router()
const { historyStudent,evaluateStudent,getStudents,getQuestions,getTeacher,getStudentbyId,submitForm,submitTermTypeComment,evaluateYearStudent,submitYearTypeComment } = require('../controllers/teacher.controller')

routes.get('/hist1',historyStudent)
routes.get('/abc',historyStudent)
routes.get('/evaluate',evaluateStudent)
routes.get('/getStudents',getStudents)
routes.get('/evaluate/questions',getQuestions)
routes.get('/getTeacher',getTeacher)
routes.get('/getStudentbyId',getStudentbyId)
routes.get('/evaluateYear',evaluateYearStudent)
routes.post('/eval/form',submitForm)
routes.post('/termTypeComment',submitTermTypeComment)
routes.post('/yearTypeComment',submitYearTypeComment)

module.exports=routes