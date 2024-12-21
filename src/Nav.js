import React from 'react';
import NetflixLogo from './images/NetflixLogo.png';

export const Nav = () => {
  return (
    <>
     <ul className='NavBar'>
        <li><img src={NetflixLogo} alt='Netflix Logo' className='Netflix-logo' /></li>
        <li>Sign Up</li>
     </ul>
     <hr />
    </>
  )
}
