import React, { useEffect, useState } from 'react'
import ProfilePic from '../Image/Pragati.jpeg';
import '../index.css'

export default function ProfilePage() {

  const [ProfileData, setProfile]=useState(' Pragati Gupta');
  const [Summary , setSummary]=useState('I am final year student pursuing B.tech Computer science at SGSITS Indore . I am working towards building strong problem solving skills and look forward to exploring software, Robotics, Machine learning /AI .I like to get into new things , like in Technical events I am inquisitive in nature means , who always ready to have new experiences of learning .');

  const ProfileValue=[
    {
        value:' Web developer'
    },
    {
       value: ' Web Designer'
    }
    ,
]

   useEffect(()=>
   { 
      const interval=setInterval((ProfileData)=>
      {
        ProfileValue.map((d)=>{
         setProfile( ProfileData=' Web Developer' );
         });   
      },500)
      
      const interval2=setInterval((ProfileData)=>
      {
        ProfileValue.map((d)=>{
         setProfile( ProfileData=' Web Designer' );
         });   
      },2000)

      const Myinterval=setInterval((ProfileData)=>
      {
        setProfile(ProfileData=' Pragati Gupta')
      }, 3000)
      //  setProfile(Profile=' Pragati Gupta');
   }, [])
  return (
    <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
    <div  className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
     <h4>Welcome to Progress Profile </h4>
        
        <h1 className="Intro title-font sm:text-4xl text-3xl mb-4 font-large text-black">
            Hey folks , I'm { ProfileData}
        </h1>
        <h4 className="Summary mb-8 leading-relaxed text-gray-700">
            {Summary}
        </h4>
    </div>
       <div  className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
        <img className="object-cover object-center  border-l-8 border-b-8 border-blue-500  rounded-full" src={ProfilePic} alt="" srcset="" />
       </div>
    </div>
  )
}
