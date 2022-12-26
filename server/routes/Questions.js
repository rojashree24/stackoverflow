// import express from "express";
// import {AskQuestion} from '../controllers/Questions.js'
// import {getAllQuestions} from '../controllers/Questions.js'
// const router=express.Router();


// router.post('/Ask',AskQuestion)

// //retrieve all the data
// router.get('/get',getAllQuestions);


// export default router;



import express from 'express'

import { AskQuestion, getAllQuestions, deleteQuestion,voteQuestion} from '../controllers/Questions.js' 
// import auth from '../middleware/auth.js'

const router = express.Router()
import auth from '../middleware/auth.js'

router.post('/Ask',auth,AskQuestion)
router.get('/get', getAllQuestions)
router.delete('/delete/:id',auth,deleteQuestion );
router.patch('/vote/:id',auth,voteQuestion);

export default router