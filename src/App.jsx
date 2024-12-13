import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componets/Navbar'
import About from './componets/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        
    <main>
        <About/>

        <section id="skill">
            <header className="section-title">skill</header>
            <div className="skill-container">
                <div className="skill-templete">
                    <div className="skill-title">Html</div>
                    <div className="skill-bar">
                        <div className="inner-bar">

                        </div>
                    </div>
                </div>
                <div className="skill-templete">
                    <div className="skill-title">Css</div>
                    <div className="skill-bar">
                        <div className="inner-bar">
                
                        </div>
                    </div>
                </div>
                <div className="skill-templete">
                    <div className="skill-title">Java</div>
                    <div className="skill-bar">
                        <div className="inner-bar">
                
                        </div>
                    </div>
                </div>
                <div className="skill-templete">
                    <div className="skill-title">Adobe Photoshop</div>
                    <div className="skill-bar">
                        <div className="inner-bar">
                
                        </div>
                    </div>
                </div>
                <div className="skill-templete">
                    <div className="skill-title">Video Editing</div>
                    <div className="skill-bar">
                        <div className="inner-bar">
                
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="projects">
            <header className="section-title">Projects</header>
            <div className="project-container">
                <div className="project-template">
                    <div className="project-img"></div>
                    <div className="project-title">
                        <a href="" className="project-link"><button class="project-btn">Project title</button></a>
                    </div>
                </div>
                <div className="project-template">
                    <div className="project-img"></div>
                    <div className="project-title">
                    <a href="" className="project-link"><button class="project-btn">Project title</button></a>
                    </div>
                </div>
                <div className="project-template">
                    <div className="project-img"></div>
                    <div className="project-title">
                        <a href="" className="project-link"><button class="project-btn">Project title</button></a>
                    </div>
                </div>
                <div className="project-template">
                    <div className="project-img"></div>
                    <div className="project-title">
                        <a href="" className="project-link"><button class="project-btn">Project title</button></a>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact">
            <header className="section-title">Contact Me</header>
            <div className="contact-container">
                <div className="contact-templete">
                    
                    <div className="contact-logo"><i class="fab fa-free-code-camp"></i>
                    </div>
                    <div className="contact-title">Freecodecamp</div>
                </div>
                <div className="contact-templete">
                
                    <div className="contact-logo">
                        <i className="fab fa-github"></i>
                    </div>
                    <div className="contact-title">Github</div>
                </div>
                <div className="contact-templete">
                
                    <div className="contact-logo"><i class="fab fa-linkedin"></i>
                    </div>
                    <div className="contact-title">Linkedin</div>
                </div>
                <div className="contact-templete">
                
                    <div className="contact-logo"><i class="fab fa-instagram"></i>
                    </div>
                    <div className="contact-title">Instagram</div>
                </div>
                <div className="contact-templete">
                
                    <div className="contact-logo"><i class="fab fa-twitter"></i>
                    </div>
                    <div className="contact-title">Twitter/X</div>
                </div>
                <div className="contact-templete">
                
                    <div className="contact-logo"><i class="fab fa-telegram"></i>
                    </div>
                    <div className="contact-title">Telegram</div>
                </div>
            </div>
        </section>

    </main>

    <footer id="footer">
        <ul>
            <li><a href=""><button className="nav-btn">Home</button></a></li>
            <li><a href=""><button className="nav-btn">About</button></a></li>
            <li><a href=""><button className="nav-btn">Projects</button></a></li>
            <li><a href=""><button className="nav-btn">Contact</button></a></li>
        </ul>
    </footer>

  
    </>
  )
}

export default App
