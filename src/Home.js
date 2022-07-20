import React from 'react';
import { ImGithub, ImLinkedin } from 'react-icons/im';
import { SiGmail } from 'react-icons/si';
import './stylesheets/Home.css';
import "./stylesheets/App.css";
import {motion} from "framer-motion/dist/framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";
import bama from "./images/bama.jpg";
import misst from "./images/misst.jpg";
import hack from "./images/hackathon.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home(props) {
    AOS.init();
    return (
        <motion.div className="home" 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <div className="HomePage fade-in">
                <h1 class="initHeader" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">Subrajit Surendran</h1>
                <h2 class="finalHeader" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000"> Computer Engineer </h2>
                <div class="row" id='profile-links' data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000">
                    <div class="col"> 
                        <a class="profile-link" href="https://github.com/subr809" rel="noopener noreferrer" target="_blank"><h2><ImGithub /></h2></a>
                    </div>
                    <div class="col"> 
                        <a class="profile-link" href="https://www.linkedin.com/in/subrajit-surendran-7b930782" rel="noopener noreferrer" target="_blank"><h2><ImLinkedin /></h2></a>
                    </div>
                    <div class="col"> 
                        <CopyToClipboard text="subrajit2006@gmail.com" onCopy={() => alert("Copied")}>
                            <button class="profile-link"><h2><SiGmail /></h2></button>
                        </CopyToClipboard>
                    </div>     
                </div>
                <div class="row wrapper" data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="1000">
                    
                    <div class="col item">
                        <div class="polaroid"><img src={bama} alt="bama"/>
                        <div class="caption">Beating #1 Bama 10/9/21</div>
                        </div>
                    </div>
                    <div class="col item">
                        <div class="polaroid"><img src={hack} alt="hack"/>
                        <div class="caption">Meeting Reveille 1/25/20</div>
                        </div>
                    </div>
                    <div class="col item">
                        <div class="polaroid"><img src={misst} alt="misst"/>
                        <div class="caption">Pregame Pic 10/2/21 </div>
                        </div>
                    </div>


                </div>
            </div>
        </motion.div>
    )
}