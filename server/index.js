const express=require('express');
const app=express();
const jwt=require('jsonwebtoken')
const cors=require('cors')
require('dotenv').config();
 app.use(cors()) 

// const allowedOrigins = ['https://niepid-presentation.vercel.app', 'http://localhost:3000'];

// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// }))

//Routes
const studentRoutes=require('./routes/student.route')
const adminRoutes=require('./routes/admin.route')
const teacherRoutes=require('./routes/teacher.route')
const loginRoutes=require('./routes/login.route')
const principleRoutes=require('./routes/principal.route')
const {verifyToken,isAdmin,isStudent,isTeacher,isPrinciple}=require('./middlewares/authorization')

//mongDB connection
const mongoose=require('mongoose')

mongoose.connect(process.env.MONGODB_URL)
// mongoose.connect("mongodb://127.0.0.1:27017/niepid_test")
.then((res)=>{console.log("connected successfully")})
.catch((err)=>{console.log(err)})

 app.use(express.json())
 app.use(express.urlencoded({extended : true}))

// //Routes

app.use('/login',loginRoutes)
app.use('/student',verifyToken,isStudent,studentRoutes)
app.use('/teacher',verifyToken,isTeacher,teacherRoutes)
app.use('/principle',verifyToken,isPrinciple,principleRoutes)
app.use('/admin',verifyToken,isAdmin,adminRoutes)

app.get('/',(req,res)=>{
    res.status(200).send("hello page")
})

//server connection
app.listen(4000,()=>{console.log(`server is listening at port 4000`)})