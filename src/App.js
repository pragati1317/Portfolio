import React from 'react'
import Header from './Header'
import Profile from './Components/Profile'
import ProfilePage from './Components/ProfilePage'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
// import Experience from './Components/Experience'
import Contact from './Components/Contact'
function App() {
  return (
    <main className=" body-font bg-white-700">
    <Header/>
     {/* <ProfilePage/>   */}
     <Profile/>
     {/* about us */}
      <Projects/>
      <Skills/>
     {/* <Experience/> */}
     <Contact/>
     
   </main>
     
  );
}

export default App;