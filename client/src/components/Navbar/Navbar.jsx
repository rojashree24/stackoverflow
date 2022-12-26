import React,{useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import decode from 'jwt-decode'

import logo from '../../assests/logo.png'
import search from '../../assests/magnifying-glass-solid.svg'
import Avatar from '../Avatar/Avatar'

// import Button from '../Button/Button'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'

const Navbar = () => {
    const dispatch=useDispatch();
    // var User=null
    // var User=JSON.parse(localStorage.getItem('Profile'))
    var User=useSelector((state)=>(state.currentUserReducer))
    const navigate=useNavigate();

    const handleLogout=()=>{
        dispatch({type:'LOGOUT'})
        navigate('/')
        dispatch(setCurrentUser(null))
    }

    useEffect(() => {
      const token=User?.token;
      if(token){
        const decodedToken=decode(token)
        if (decodedToken.exp*1000< new Date().getTime()) {
            handleLogout();
        }
      }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
     
    }, [dispatch])
    

  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-item nav-btn">
          <img src={logo} alt="logo" className="nav-logo" />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Problems
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link>

        <form>
          <input type="text" placeholder="Search..." />
          <img src={search} alt="search" width="18" className="search-icon" />
        </form>

        {User === null ? (
          <Link to="/Auth" className="nav-item nav-links">
            Login
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor="#009dff"
              px="10px"
              py="7px"
              borderRadius="50%"
              color="white"
            >
              <Link
                to={`/Users/${User?.result?._id}`}
                style={{ color: "white", textDecoration: "none" }}
              >
                {User.result.name.charAt(0).toUpperCase()}
              </Link>
            </Avatar>

            <button className="nav-item nav-links" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar
