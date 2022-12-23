import React from 'react'
import {skills} from "../data/skills";
// import ProgressBar from "react-bootstrap/ProgressBar";

const Skills = () => {
  return (
    <section id="skills">
    <div className="container px-5 py-10 mx-auto">
      <div className="text-center mb-20">
        {/* <ChipIcon className="w-10 inline-block mb-4" /> */}
        <h1 className="sm:text-4xl text-3xl font-medium title-font font-spans text-black mb-4">
          Skills &amp; Technologies
        </h1>
        <p className="text-base xl:w-2/4 lg:w-3/4 mx-auto">
         My skills , which I had learned by exploring and by working with multiple Organization
        </p>
      </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        {skills.map((skill) => (
          <div key={skill} className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              {/* <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" /> */}
              <p className="px-2 bg-green-500 rounded-full mx-2">&#x2713;</p>
              <span className="title-font font-medium text-white">
                {skill.skills} 
                {/* <ProgressBar now={60} />; */}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Skills