import React  from 'react';
import './NavBarItem.css';
import {Link} from 'react-router-dom';
const navigationItem =(props) =>{
const logInClasses=props.LogIn ? "Log-in":''
const signInClasses=props.signUp ? "Sign-up":''
  return(
    <li className={['NavigationItem ',logInClasses,signInClasses].join('')}> 
    <Link 
     to ={props.link} 
     activeClassName='active'>
   {props.children }</Link>
</li>
  )

};
export default navigationItem;