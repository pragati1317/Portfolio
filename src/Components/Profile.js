import React from 'react'
import photo from '../Image/Pragati.jpeg';
import "../index.css";
const Profile = () => {
  return (
    <section id="about">
    <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
       <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hi, I'm Pragati Gupta.
            <br className="hidden lg:inline-block "/> <h4 className="text-green-500">I am a Future Engineer</h4>
      </h1> 
      <p className="mb-8 leading-relaxed text-gray-700">
      I am currently a third year college student.
I am working towards building strong problem solving
skills and look forward to exploring software, Robotics,
Machine learning /AI .I like to get into new things , like
in Technical events

          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div> 
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center  border-l-8 border-b-8 border-blue-500  rounded-full"
            alt="hero"
           src={photo}
          />
        </div>
     
    </div>
    </section>
  )
}

export default Profile