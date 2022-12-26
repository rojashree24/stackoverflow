import {BrowserRouter as Router} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes';
import { fetchAllQuestions } from './actions/question';
import './App.css';
import { getAllUsers } from './actions/users';

function App() {

  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(getAllUsers());
  }, [dispatch])
  

  return (
    <div className="App">
      <Router>
         <Navbar/>
         <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
