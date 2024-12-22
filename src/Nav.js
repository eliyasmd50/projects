import React from 'react';
import NetflixLogo from './images/NetflixLogo.png';

export const Nav = () => {
  return (
    <>
     <ul className='NavBar'>
        <li><p><img src={NetflixLogo} alt='Netflix Logo' className='Netflix-logo' /></p></li>
        <li ><p><a  href="www.google.com" target='_blank'><button className='sign-up-button' >Sign Up</button></a></p></li>
        <li ><p><a  href="www.google.com" target='_blank'><button className='sign-in-button' >Sign In</button></a></p></li>
     </ul>
    </>
  )
}
