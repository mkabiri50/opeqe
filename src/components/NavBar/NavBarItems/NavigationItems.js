import React from 'react';
import './NavBarItems.css';
import NavigationItem from './NavBarItem/NavBarItem';


const navigationItems = () => (

    <ul className='NavigationItems' >
        <NavigationItem link='/Reservation' > Reservation</NavigationItem>
        <NavigationItem link='/Orders' >  Orders </NavigationItem>
        <NavigationItem LogIn link='/Login' > <span style={{ color: 'white' }}>Log in </span> </NavigationItem>
        <NavigationItem signUp link='/signup' >  Sign up </NavigationItem>

    </ul>





);
export default navigationItems;
