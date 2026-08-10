// import React from 'react'
// import rakutenLogo from '../Image/Rakuten_Symphony.png'
// import walkoverLogo from '../Image/walkover_logo.svg'

// const Experience = () => {
//   return (
//     <section id="experience" className="text-gray-800 bg-gray-900 body-font py-20 relative z-0">
//       <div className="container mx-auto px-5 max-w-4xl">
//         <div className="text-center mb-20">
//           <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
//             Professional Experience
//           </h1>
//           <p className="text-base leading-relaxed mx-auto text-gray-100 max-w-2xl">
//             2+ years of specialized experience in backend microservices, distributed systems, and cloud infrastructure
//           </p>
//         </div>  
//         <div className="space-y-8">
//           {/* Rakuten Experience */}
//           <div className="bg-gray-100 rounded-lg p-8 border-l-4 border-green-500 shadow-lg hover:shadow-green-500/20 transition-shadow">
//             <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-900 mb-2">
//                   Software Engineer
//                 </h2>
//                 <h3 className="text-lg font-semibold text-green-800 mb-2 flex items-center gap-2">
//                   <img src={rakutenLogo} alt="Rakuten" className="h-20"/>
//                   Rakuten Symphony
//                 </h3>
//               </div>
//               <p className="text-sm text-gray-600 font-semibold px-4 py-2 bg-gray-100 rounded-full">Aug 2024 - Present</p>
//             </div>
//             <p className="text-sm text-gray-600 mb-4">📍 Bangalore, India</p>
//             <ul className="text-gray-700 space-y-3">
//               <li className="flex gap-3">
//                 <span className="text-green-600 flex-shrink-0">▸</span>
//                 <span>Engineered high-throughput REST APIs and distributed data processing services using Java, Spring Boot, and Kafka-integrated workflows, ensuring data integrity and improving system scalability and reliability.</span>
//               </li>
//               <li className="flex gap-3">
//                 <span className="text-green-600 flex-shrink-0">▸</span>
//                 <span>Designed an advanced diagnostics engine within the "Holistic View" platform, systematically isolating schema mapping bugs and architecture bottlenecks across MinIO, YugabyteDB, and NFS tiers.</span>
//               </li>
//               <li className="flex gap-3">
//                 <span className="text-green-600 flex-shrink-0">▸</span>
//                 <span>Optimized product processing execution by 17% by automating distributed background task trackers and cron architectures to schedule variable loops down to 5-minute intervals.</span>
//               </li>
//               <li className="flex gap-3">
//                 <span className="text-green-600 flex-shrink-0">▸</span>
//                 <span>Orchestrated cloud-native microservices by developing custom configuration templates via Helm charts deployed directly onto cluster-wide Kubernetes nodes.</span>
//               </li>
//               <li className="flex gap-3">
//                 <span className="text-green-600 flex-shrink-0">▸</span>
//                 <span>Formulated zero-downtime hotfixes and mitigation parameters within intricate staging platforms to prevent critical data replication lag anomalies.</span>
//               </li>
//               <li className="flex gap-3">
//                 <span className="text-green-600 flex-shrink-0">▸</span>
//                 <span>Contributing to monitoring and data-processing workflows leveraging Kafka-based event streams to detect data ingestion failures and transaction irregularities in real-time processing pipelines.</span>
//               </li>
//             </ul>
//           </div>

//           {/* Walkover Experience */}
//           <div className="bg-gray-100 rounded-lg p-8 border-l-4 border-blue-500 shadow-lg hover:shadow-blue-500/20 transition-shadow">
//             <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-900 mb-2">
//                   Software Engineering Intern
//                 </h2>
//                 <h3 className="text-lg font-semibold text-blue-600 mb-2 flex items-center gap-2">
//                   <img src={walkoverLogo} alt="Walkover" className="h-8" />
//                   Walkover Web Solution
//                 </h3>
//               </div>
//               <p className="text-sm text-gray-600 font-semibold px-4 py-2 bg-gray-100 rounded-full">Feb 2024 - June 2024</p>
//             </div>
//             <p className="text-sm text-gray-600 mb-4">📍 Indore, India</p>
//             <ul className="text-gray-700 space-y-3">
//               <li className="flex gap-3">
//                 <span className="text-blue-600 flex-shrink-0">▸</span>
//                 <span>Developed full-stack web modules using React.js and Node.js, resulting in a direct 5% performance optimization in application layout responsiveness and state data updates.</span>
//               </li>
//               <li className="flex gap-3">
//                 <span className="text-blue-600 flex-shrink-0">▸</span>
//                 <span>Hardened database schemas and optimized endpoint routing targets, accelerating overall backend MySQL database execution and performance metrics by 20%.</span>
//               </li>
//               <li className="flex gap-3">
//                 <span className="text-blue-600 flex-shrink-0">▸</span>
//                 <span>Designed end-to-end integration and load-testing scripts using Selenium to validate data routing limits and track framework stability under simulated concurrency.</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Experience


import React from 'react'
import rakutenLogo from '../Image/Rakuten_Symphony.png'
import walkoverLogo from '../Image/walkover_logo.svg'

// 1. Define your dynamic data array
const experienceData = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Rakuten Symphony",
    logo: rakutenLogo,
    logoHeightClass: "h-20",
    colorTheme: {
      border: "border-green-500",
      hoverShadow: "hover:shadow-green-500/20",
      textAccent: "text-green-800",
      bullet: "text-green-600"
    },
    duration: "Aug 2024 - Present",
    location: "Bangalore, India",
    points: [
      "Engineered high-throughput REST APIs and distributed data processing services using Java, Spring Boot, and Kafka-integrated workflows, ensuring data integrity and improving system scalability and reliability.",
      "Designed an advanced diagnostics engine within the 'Holistic View' platform, systematically isolating schema mapping bugs and architecture bottlenecks across MinIO, YugabyteDB, and NFS tiers.",
      "Optimized product processing execution by 17% by automating distributed background task trackers and cron architectures to schedule variable loops down to 5-minute intervals.",
      "Orchestrated cloud-native microservices by developing custom configuration templates via Helm charts deployed directly onto cluster-wide Kubernetes nodes.",
      "Formulated zero-downtime hotfixes and mitigation parameters within intricate staging platforms to prevent critical data replication lag anomalies.",
      "Contributing to monitoring and data-processing workflows leveraging Kafka-based event streams to detect data ingestion failures and transaction irregularities in real-time processing pipelines."
    ]
  },
  {
    id: 2,
    role: "Software Engineering Intern",
    company: "Walkover Web Solution",
    logo: walkoverLogo,
    logoHeightClass: "h-8",
    colorTheme: {
      border: "border-blue-500",
      hoverShadow: "hover:shadow-blue-500/20",
      textAccent: "text-blue-600",
      bullet: "text-blue-600"
    },
    duration: "Feb 2024 - June 2024",
    location: "Indore, India",
    points: [
      "Developed full-stack web modules using React.js and Node.js, resulting in a direct 5% performance optimization in application layout responsiveness and state data updates.",
      "Hardened database schemas and optimized endpoint routing targets, accelerating overall backend MySQL database execution and performance metrics by 20%.",
      "Designed end-to-end integration and load-testing scripts using Selenium to validate data routing limits and track framework stability under simulated concurrency."
    ]
  }
]

// 2. Clean, dynamic Experience component
const Experience = () => {
  return (
    <section id="experience" className="text-gray-800 bg-gray-900 body-font py-20 relative z-0">
      <div className="container mx-auto px-5 max-w-4xl">
        
        {/* Header Block */}
        <div className="text-center mb-9">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Professional Experience
          </h1>
          <p className="text-base leading-relaxed mx-auto text-gray-100 max-w-2xl">
            2+ years of specialized experience in backend microservices, distributed systems, and cloud infrastructure
          </p>
        </div>  

        {/* Dynamic Experience List */}
        <div className="space-y-8">
          {experienceData.map((exp) => (
            <div 
              key={exp.id} 
              className={`bg-gray-100 rounded-lg p-8 border-l-4 ${exp.colorTheme.border} shadow-lg ${exp.colorTheme.hoverShadow} transition-shadow`}
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.role}
                  </h2>
                  <h3 className={`text-lg font-semibold ${exp.colorTheme.textAccent} mb-2 flex items-center gap-2`}>
                    <img src={exp.logo} alt={exp.company} className={exp.logoHeightClass}/>
                    {exp.company}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 font-semibold px-4 py-2 bg-gray-100 rounded-full">
                  {exp.duration}
                </p>
              </div>

              {/* Location */}
              <p className="text-sm text-gray-600 mb-4">📍 {exp.location}</p>
              
              {/* Dynamic Bullet Points */}
              <ul className="text-gray-700 space-y-3">
                {exp.points.map((point, index) => (
                  <li key={index} className="flex gap-3">
                    <span className={`${exp.colorTheme.bullet} flex-shrink-0`}>▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience
