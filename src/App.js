import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


function App() {
  return (
      <main className="bg-gradient-to-r from-sky-800 to-indigo-500 body-font">
    <Navbar></Navbar>
        <About></About>
          <Projects></Projects>
        <Skills></Skills>
          <Contact></Contact>
          <Footer></Footer>
      </main>
  );
}

export default App;
