import React from 'react'
import {skillsCategories} from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-50 py-20 relative z-0">
      <div className="container mx-auto px-5 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Technical expertise organized by domain and specialization
          </p>
        </div>

        {/* Grid of category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-blue-500"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.skills.map((item, skillIdx) => (
                  <div key={skillIdx} className="flex justify-between items-center pb-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-800 font-medium">{item.skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
