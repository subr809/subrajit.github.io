import React, {useState} from "react";
import './stylesheets/Projects.css';
import "./stylesheets/App.css";
import { ImGithub, ImGoogleDrive, ImPlay } from 'react-icons/im';
import aslatracker from "./images/asla-tracker.jpg";
import glasses from "./images/glasses.jpg";
import marketvision from "./images/marketvision.jpg";
import gui from "./images/gui.jpg";
import bball from "./images/bball.jpg";
import {motion} from "framer-motion/dist/framer-motion";
import Popup from './Popup';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projects(props) {
    const [horsePopup, sethorsePopup] = useState(false);
    const [marketPopup, setmarketPopup] = useState(false);
    const [glassesPopup1, setglassesPopup1] = useState(false);
    const [glassesPopup2, setglassesPopup2] = useState(false);
    const [glassesPopup3, setglassesPopup3] = useState(false);
    AOS.init();
    return (
        <motion.div className="projects" 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
        <div className="ProjectPage">
            <h2 id="projects-featured" data-aos="slide-right" data-aos-delay="300" data-aos-duration="1000"> Featured Projects </h2>
            <ul class="asla">
            <li class="major-content reveal">
                    <div div class="project-content">
                        <h3 class="project-titles"> ASLA Tracker Website </h3>
                        <p class="description"> As a member of a 6 person software development team, I worked on creating the first website for Texas A&amp;M's American Society of Landscape Architects (ASLA) organization. 
                        This project consisted of creating various member and administrator CRUD functionalities to help manage ASLA's growing student base. 
                        Our team developed tools to help manage members, interface with alumni and donors, track attendance, and 
                        coordinate registration for their major events such as career fairs, workshop/networking opportunities, and the professional advisory board (PAB).
                        </p> 
                        <ul class="tools">
                            <li id="rails">Ruby on Rails</li>
                            <li id="html">HTML</li>
                            <li id="css">CSS</li>
                            <li id="js">JavaScript</li>
                            <li id="heroku">Heroku</li>
                            <li id="google">Google OAuth</li>
                        </ul>
                        <div class="open-links"> 
                            <a href="https://github.com/Tarasso/ASLA_tracker" rel="noopener noreferrer" target="_blank"><h3><ImGithub /></h3></a>
                            &nbsp;&nbsp;
                            <a href="https://drive.google.com/file/d/1xnS15ReCGavJuviN2Z0zVztbm3FvihcF/preview" rel="noopener noreferrer" target="_blank"><h3><ImGoogleDrive /></h3></a>
                        </div>
                    </div>
                    <div class="proj-image">
                        <a href="https://tx.ag/asla" rel="noopener noreferrer" target="_blank"><img class="asla-tracker" height="100%" width="100%" src={aslatracker} alt="asla"/></a> 
                    </div>
                </li>
                <li class="major-content reveal">
                    <div div class="project-content">
                        <h3 class="project-titles"> Illuminate (Smart Glasses) </h3>
                        <p class="description"> Illuminate was designed to be a cost-efficient wearable device that could help alleviate problems for those with 
                        auditory impairments. This device shows the real-time text of those speaking around the user and notifies the 
                        user of potential obstacles such as traffic lights and stop signs. There are three main components to the software 
                        design of the smart glasses: speech to text translation, object detection, and langauge translation. On a 5 person team, I worked on 
                        the speech to text translation for the device using Deepgram API's speech recognition module.
                        </p> 
                        <ul class="tools">
                            <li id="pi">Raspberry PI</li>
                            <li id="py">Python</li>
                            <li id="socket">Socket Programming</li>
                            <li id="rest">REST API</li>
                            <li id="linux">Linux</li>
                        </ul> 
                        <div class="open-links"> 
                            <button class="popups" onClick={() => setglassesPopup1(true)}><h3><ImPlay /></h3></button>
                            <Popup trigger={glassesPopup1} setTrigger={setglassesPopup1}>
                                <iframe src={"https://drive.google.com/file/d/11QcRmJxdIT9-8n8kWZ1Few00Dx70ujoc/preview"} title="glassesVid1" width="100%" height="100%" frameborder="0"></iframe>
                            </Popup>
                            &nbsp;&nbsp;
                            <button class="popups" onClick={() => setglassesPopup2(true)}><h3><ImPlay /></h3></button>
                            <Popup trigger={glassesPopup2} setTrigger={setglassesPopup2}>
                                <iframe src={"https://drive.google.com/file/d/1hK-f1yen0jhcR1KXkeNLOkbuYA5n3gpi/preview"} title="glassesVid2" width="100%" height="100%" frameborder="0"></iframe>
                            </Popup>
                            &nbsp;&nbsp;
                            <button class="popups" onClick={() => setglassesPopup3(true)}><h3><ImPlay /></h3></button>
                            <Popup trigger={glassesPopup3} setTrigger={setglassesPopup3}>
                                <iframe src={"https://drive.google.com/file/d/1m5Vx8r4X13vJuMyh75vumEfPPXhcVOy_/preview"} title="glassesVid3" width="100%" height="100%" frameborder="0"></iframe>
                            </Popup>
                            &nbsp;&nbsp;
                            <a href="https://github.com/subr809/Illimunate" rel="noopener noreferrer" target="_blank"><h3><ImGithub /></h3></a>
                            &nbsp;&nbsp;
                            <a href="https://drive.google.com/file/d/13EVcBto6Vu_7BrPBbRiYCmgTKumRBaf5/preview" rel="noopener noreferrer" target="_blank"><h3><ImGoogleDrive /></h3></a>
                        </div>
                    </div>
                    <div class="proj-image">
                        <img class="asla-tracker" height="100%" width="100%" src={glasses} alt="glasses"/>
                    </div>
                </li>
                <li class="major-content reveal">
                    <div div class="project-content">
                        <h3 class="project-titles"> H.O.R.S.E Basketball Simulator </h3>
                        <p class="description"> The H.O.R.S.E Simulator was created to be a useful tool for anyone who enjoys playing 
                        arcade-style basketball mini-games. There are three primary objectives of this project: detect that a shot is made/missed, 
                        detect the distance a player is shooting from, and log scores during the game. On a 2 person team, I worked on the design of the
                        shot detection module and incorporated machine learning modules in Python to determine a player's position and when 
                        they have taken a shot.
                        </p> 
                        <ul class="tools">
                            <li id="pi">Raspberry Pi</li>
                            <li id="py">Python</li>
                            <li id="rest">Machine Learning</li>
                        </ul>
                        <div class="open-links"> 
                            <button class="popups" onClick={() => sethorsePopup(true)}><h3><ImPlay /></h3></button>
                            <Popup trigger={horsePopup} setTrigger={sethorsePopup}>
                                <iframe src={"https://drive.google.com/file/d/1HqhHM8fJsTyg5QtvbKaqppEX3Y5v1ZgG/preview"} title="horseVid1" width="100%" height="100%" frameborder="0"></iframe>
                            </Popup>
                            &nbsp;&nbsp;
                            <a href="https://github.com/jakerdou/horse-simulator" rel="noopener noreferrer" target="_blank"><h3><ImGithub /></h3></a>
                            &nbsp;&nbsp;
                            <a href="https://drive.google.com/file/d/1KO6R-nv18ThvdGrnEi-DDugGez4ee9Jp/preview" rel="noopener noreferrer" target="_blank"><h3><ImGoogleDrive /></h3></a>
                        </div>
                    </div>
                    <div class="proj-image">
                        <img class="asla-tracker" height="100%" width="100%" src={bball} alt="bbal" />
                    </div>
                </li>
                <li class="major-content reveal">
                    <div div class="project-content">
                        <h3 class="project-titles"> MarketVision </h3>
                        <p class="description"> MarketVision is a platform that can help both new and experienced investors filter information about stocks, cryptocurrencies, and 
                        NFTs. MarketVision contains a custom made stock screener and intrinsic value calculator which allows users to filter stocks based on a specific set 
                        of criteria. The cryptocurrency page of this application includes real time exchange rates and news for the most popular cryptocurrencies. 
                        Lastly, MarketVision's NFT page gives users an idea of what NFTs are and gives them some exposure to this emerging market. As a member of a 4 person team, 
                        I worked on the cryptocurrency page of this application.
                        </p> 
                        <ul class="tools">
                            <li id="react">React JS</li>
                            <li id="django">Django</li>
                            <li id="rest">REST APIs</li>
                            <li id="heroku">Heroku</li>
                        </ul>
                        <div class="open-links"> 
                            <button class="popups" onClick={() => setmarketPopup(true)}><h3><ImPlay /></h3></button>
                            <Popup trigger={marketPopup} setTrigger={setmarketPopup}>
                                <iframe src={"https://drive.google.com/file/d/1C6I8R7O5qeP5rEThIg28VxL7BQbsM0XY/preview"} title="marketVid1" width="100%" height="100%" frameborder="0"></iframe>
                            </Popup>
                            &nbsp;&nbsp;
                            <a href="https://github.com/subr809/MarketVision" rel="noopener noreferrer" target="_blank"><h3><ImGithub /></h3></a>
                        </div>
                    </div>
                    <div class="proj-image">
                        <img class="asla-tracker" height="100%" width="100%" src={marketvision} alt="marketvision"/>
                    </div>
                </li>
                <li class="major-content reveal">
                    <div div class="project-content">
                        <h3 class="project-titles"> Restaurant DBMS </h3>
                        <p class="description"> This project incorporated a Database Management System connected with a GUI 
                        in order to create a point of sale system that a restaurant could use. The application has both a customer and manager 
                        side. The customer side is able to see the menu, place orders, and get recommendations. The manager side enables changes 
                        to menu prices and availability, which are then reflected on the customer side. The system is
                        also able to manipulate customer data given by the restaurant in order to keep track of the ordering history. As a member of a 4 person team, 
                        I worked on the Java GUI design in IntelliJ (development environment) and created tables in a PostgreSQL database. 
                        </p> 
                        <ul class="tools">
                            <li id="java">Java</li>
                            <li id="postgres">PostgreSQL</li>
                            <li id="linux">Linux</li>
                        </ul>
                        <div class="open-links"> 
                            &nbsp;&nbsp;
                            <a href="https://github.com/subr809/Restaurant-DBMS/tree/master/Welcome" rel="noopener noreferrer" target="_blank"><h3><ImGithub /></h3></a>
                            &nbsp;&nbsp;
                            <a href="https://drive.google.com/file/d/11Bp0MEhibfB1b-hgNhW52KnbPfa6-5ys/preview" rel="noopener noreferrer" target="_blank"><h3><ImGoogleDrive /></h3></a>
                        </div>
                    </div>
                    <div class="proj-image">
                        <img class="asla-tracker" height="100%" width="100%" src={gui} alt="gui"/>
                    </div>
                </li>
            </ul>
        </div>
        </motion.div>
    );
}