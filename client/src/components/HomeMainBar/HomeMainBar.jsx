import React from 'react'
import './HomeMainBar.css'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import QuestionList from './QuestionList'
import { useSelector } from 'react-redux'
// import Questions from './Questions'


const HomeMainBar = () => {

  
    // const location=useLocation();

    // const user=1; //null -> user not logged in

    // const navigate=useNavigate();

    // const questionsLis=useSelector(state=>state.questionsReducer)
    // console.log(questionsLis);

    const location = useLocation()
    const user = 1;
    const navigate = useNavigate()

    const questionsList = useSelector(state => state.questionReducer)
    // console.log(questionsList)
  
  // var questionsList = [{ 
  //       _id: 1,
  //       UpVotes: 3,
  //       downVotes:2,
  //       noOfAnswers: 2,
  //       questionTitle: "What is a function?",
  //       questionBody: "It meant to be",
  //       questionTags: ["java", "node js", "react js", "mongo db", "express js"],
  //       userPosted: "mano",
  //       userId: 1,
  //       askedOn: "jan 1",
  //       answer: [{
  //           answerBody: "Answer",
  //           userAnswered: 'kumar',
  //           answeredOn: "jan 2",
  //           userId: 2,
  //       }]
  //   },{ 
  //       _id: 2,
  //       upVotes: 3,
  //       downVotes:2,
  //       noOfAnswers: 0,
  //       questionTitle: "What is a function?",
  //       questionBody: "It meant to be",
  //       questionTags: ["javascript", "R", "python"],
  //       userPosted: "mano",
  //       askedOn: "jan 1",
  //       userId: 1,
  //       answer: [{
  //           answerBody: "Answer",
  //           userAnswered: 'kumar',
  //           answeredOn: "jan 2",
  //           userId: 2,
  //       }]
  //   },{ 
  //       _id: 3,
  //       upVotes: 3,
  //       downVotes:2,
  //       noOfAnswers: 0,
  //       questionTitle: "What is a function?",
  //       questionBody: "It meant to be",
  //       questionTags: ["javascript", "R", "python"],
  //       userPosted: "mano",
  //       askedOn: "jan 1",
  //       userId: 1,
  //       answer: [{
  //           answerBody: "Answer",
  //           userAnswered: 'kumar',
  //           answeredOn: "jan 2",
  //           userId: 2,
  //       }]
  //   }]

    // console.log(questionsList);


    const checkAuth=()=>{
      if(user===null){
        alert("login or signup to ask a question")
        navigate('/Auth')
    }
    else{
      navigate('/AskQuestion')
    }
  }

  return (
    <div className='main-bar'>
      <div className="main-bar-header">

        {/* check the location */}
        {
          location.pathname==='/'?<h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>

      <div>
        {
          questionsList.data===null? <h1>Loading...</h1> : 
          <>
            <p>{questionsList.data.length} questions</p>
            <QuestionList questionsList={questionsList.data} />
          </>
        }
      </div>

    </div>
  )
}

export default HomeMainBar


