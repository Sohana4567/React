import React from 'react'
import {useParams} from 'react-router-dom';
import user from '../user.json';
import '../pages/Profiledetail.css'
const Profiledetail=()=>{
  const {productId} = useParams();
  const singleProduct=user.find(username=>username.id===parseInt(productId))
  console.log("single",singleProduct)
  const { id, name, username,email,profilepicture,address:{street,suite,city,zipcode}}=singleProduct
  return(
    <>
    <div class="profilecontainer">
    <div className='profileheader w-1/2'>
      <h1 className='text-2xl'>Profile</h1>
     
    </div>
    <div class="employeeInformation">
    <div className='profiledetails'>
      <div className='profileImage relative left-80 top-24'>
      <img src={profilepicture} alt="profile" className='w-2/12 rounded-full'/>
      <h1 className='profilename text-base'>{name}</h1>
      </div>
       <div className='profileInformation absolute bottom-60 left-96'>
        <p>Username : {username}</p>
        <p>e-mail:{email}</p>
        <p>Phone:9999999999</p>
        <p>leannegraham.com</p>
       </div>
    </div>
  </div>
  </div>
    </>
  )
}

export default Profiledetail