import { useEffect, useState } from "react";
import About from "./components/About";
import Feedback from "./components/Feedback";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Splash from "./assets/splash/Splash";
import { useThemeContext } from "./context/ThemeContextProvider";

function App() {
  const { isLightTheme, light, dark } = useThemeContext();
  const theme = isLightTheme ? light : dark;
  const [splashScreen, setSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 3000);
  }, []);
  return (
    <>
      {splashScreen ? (
        <div
          className={`flex justify-center items-center h-screen w-screen ${theme.bg}`}
        >
          <Splash />
        </div>
      ) : (
        <div className={`${theme.bg} overflow-hidden`}>
          <Navbar />
          <span className="bar">

            <Home />
            <About />
            <Skill />
            <Work />
            <Feedback />
            <Contact />
          </span>
        </div>
      )}
    </>
  );
}

export default App;
