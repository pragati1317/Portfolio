import React from 'react'
import './index.css'

export default function Header() {
  return (
    <>
      
      <header className="bg-blue-500 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0" href="#">
          <a href="#about" className="ml-3 text-xl">
            Progress
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#experience" className="mr-5 hover:text-white">
            Experience
          </a>
          <a href="" className="mr-5 hover:text-white">
            Resume
          </a>
        </nav>
        <nav className="md:md:ml-4 md:py-1 md:pl-4  md:border-gray-700	flex flex-wrap items-flex-end text-base justify-center">
        <a href="https://www.linkedin.com/in/pragati-gupta-700321211/" className="mr-5 hover:text-white">
           linkedin
          </a>
          <a href="https://github.com/pragati1317" className="mr-5 hover:text-white">
            Github
          </a>
          <a href="https://leetcode.com/pragati1317/" className="mr-5 hover:text-white">
            LeetCode
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-50 border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-base mt-4 md:mt-0">
          Hire Me
          {/* <logo className="w-4 h-4 ml-1" /> */}
        </a>
        <p className="px-3"> &#x21D2;</p>
      </div>
    </header>
    </>
  )
}
