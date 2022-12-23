import React, { useEffect, useState } from 'react'
import ProfilePic from '../Image/Pragati.jpeg';
import '../index.css'

export default function ProfilePage() {

  const [Profile, setProfile]=useState(' Pragati Gupta');
  const [Summary , setSummary]=useState('I am second year student pursuing B.tech Computer science at SGSITS Indore . I am inquisitive in nature means , who always ready to have new experiences of learning .');

  const ProfileValue=[
    {
        value:'Web developer'
    },
    {
       value: 'Web Designer'
    }
    ,
]

   useEffect(()=>
   {
      setTimeout((Profile)=>
      {
         ProfileValue.map((d)=>
        {
         setProfile( Profile=d.value );
        }) 
        
      },1000);
   }
   )
  return (
    <div className="Intro">
    <div className="Intro-left">
    <h4>Welcome to Progress Profile </h4>
        
        <h1 className="Intro">
            Hey folks , I'm  
            { Profile}
        </h1>
        <h4 className="Summary">
            {Summary}
        </h4>
    </div>
       <div className="Intro-Right">
        <img src={ProfilePic} alt="" srcset="" />
       </div>
    </div>
  )
}
