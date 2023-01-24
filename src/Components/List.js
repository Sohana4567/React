import React, { useState } from 'react'
import {Link,NavLink} from 'react-router-dom'

import users from '../user.json';

import '../Components/List.css'
function List() {
 
    console.log(users);
  return (
  <div className='profilelist'>
    <div class="wave wave1"></div>
    <div class="wave wave2"></div>
    <div class="wave wave3"></div>
    <div class="wave wave4"></div>
    <div className='child bg-white w-1/4 fixed top-8 left-1/3 rounded-3xl'>
      <div className="heading">
     <h1 className='text-black h-10 text-base'>Select an account</h1>
     </div>
     {
      users.map(usename=>(
        <ul key={usename.id}>
         <li  className='text-black text-base border-b-2'>
          <img  src={usename.profilepicture}  alt="profilepicture"  className='w-1/12 rounded-2xl relative top-6 left-20'/>
          <Link to={`/${usename.id}`} className="cursor-pointer">{usename.name}</Link>
         </li>     
        </ul>
      ))}
   </div>
  </div>
  )
}

export default List