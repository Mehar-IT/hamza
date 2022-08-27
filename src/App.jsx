import { useEffect, useState } from 'react'
import About from './components/About'
import Feedback from './components/Feedback'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skill from './components/Skill'
import Work from './components/Work'
import Splash from './assets/splash/Splash';


function App() {
  const [splashScreen, setSplashScreen] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false)
    }, 3000)
  }, [])
  return (
    <>
      {splashScreen ? <div className='flex justify-center items-center h-screen w-screen bg-gray-900'><Splash /></div> :

        <div >
          <Navbar />
          <Home />
          <About />
          <Skill />
          <Work />
          <Feedback />
          <Contact />
        </div>
      }
    </>
  )
}

export default App
