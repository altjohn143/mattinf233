import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
 
import "./App.css";
 
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Profile />
      <Projects />
      <Contact />
    </>
  );
}
 
export default App;