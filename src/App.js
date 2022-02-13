import React, {useState, useEffect, lazy, Suspense} from "react";
import HashLoader from 'react-spinners/HashLoader';
import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AboutPerson from "./components/AboutPerson";
import Cv from "./components/CV";
import Video from "./components/Video";
import Timeline from "./components/Timeline";
import Community from "./components/Community";


const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));


function App() {

    // const Projects = lazy(() => import('./components/Projects'));

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => setLoading(true), 2800)
    }, [])


    return (
        <>
            {loading === false ? (
                <div className="App">

                </div>
            ) : (
                <loader/>
            )}

            <main className="App scroll-auto bg-slate-100 body-font ">
                <Suspense fallback={ <header className="App-header">
                    <p className="text-black">Loading...</p>
                    <br/>
                    <br/>
                    <HashLoader></HashLoader>
                    <br/>
                    <p className="hidden">
                        you'll have to wait a second and should think about a new wifi connection. </p>
                    <br/>
                    <br/>
                    <p className="hidden">Thank you!</p>
                    <p className="hidden">Paul :)</p>

                </header>}>
                    <Navbar></Navbar>
                    <Video></Video>
                    <About></About>
                    <Community></Community>
                    <Projects></Projects>
                    <Skills></Skills>
                    <AboutPerson></AboutPerson>
                    <Cv></Cv>
                    <Contact></Contact>
                    <Footer></Footer>
                </Suspense>
            </main>
        </>
    );
}

export default App;
