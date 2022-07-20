import React from "react";
import "./stylesheets/About.css";
import senior2 from "./images/senior2.jpg";
import me from "./images/me.jpg"; 
import bigevent from "./images/big.JPG"; 
import auburn from "./images/auburn.jpg";
import acc from "./images/acc.png";
import sase from "./images/sase.png";
import am from "./images/am.png";
import honors from "./images/honors.png";
import nhs from "./images/nhs.png";
import nths from "./images/nths.png";
import {motion} from "framer-motion/dist/framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About(props) {
    AOS.init();
    return (
        <motion.div className="about" 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <div className="AboutPage"> 
                <h2 id="about-featured" data-aos="slide-right" data-aos-delay="300" data-aos-duration="1000"> About Me </h2>
                <div class="container" data-aos="flip-up" data-aos-delay="300" data-aos-duration="1000">
                <div class="col" id="about-pic">
                            <img class="senior-pic" src={senior2} alt="senior2" />
                        </div>
                    <div class="row" id="row-about">
                        <div class="col-md-8" id="about-des">
                            <p id="first-intro"> Howdy! I'm Subrajit Surendran - a computer engineer and graduate of
                                <div class="am-words">Texas A&amp;M University (Class of 22')</div> - who loves to design code and create new applications.
                                I enjoy solving complex problems and being able to design algorithms that run efficiently. 
                                My goal is to innovate new technologies that can be used for generations. 
                                <div id="sports-talk">
                                But when I'm not coding, I'm probably at the gym, watching a superhero movie, or watching my favorite sports teams. I enjoy watching football, basketball, and European soccer among other sports.
                                Something I would love to do in the future is travel the world and visit different sporting venues.
                                </div>
                            </p>
                            <div class="sports-logoos">
                                <img class="am-logo" src={am} alt="Texas A-M"/>
                                <img class="saints-logo" src="https://cdn.cdnlogo.com/logos/n/66/new-orleans-saints.svg" alt="Saints"/>
                                <img class="thunder-logo" src="https://cdn.cdnlogo.com/logos/o/46/oklahoma-city-thunder.png" alt="Thunder"/>
                                <img class="psg-logo" src="https://cdn.cdnlogo.com/logos/p/96/psg.svg" alt="PSG"/>
                            </div>                            
                        </div>
                    </div>
                </div>
                
        
                <h2 id="skills-featured" data-aos="slide-left" data-aos-delay="300" data-aos-duration="1000"> Skills / Experience </h2>
                <div class="skills" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                    <div class="row" id="row2">
                        <div class="col" data-aos="fade-up" id="col2">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12vh" height="12vh" viewBox="0 0 48 48"><path fill="#283593" fill-rule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clip-rule="evenodd"></path><path fill="#5c6bc0" fill-rule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clip-rule="evenodd"></path><path fill="#3949ab" fill-rule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z" clip-rule="evenodd"></path></svg>
                            <p class="experience">3+ years</p>
                        </div>
                        <div class="col" id="col2">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12vh" height="12vh" viewBox="0 0 48 48"><path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path></svg>
                            <p class="experience">3+ years</p>
                        </div>
                        <div class="col" id="col2">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12vh" height="12vh" viewBox="0 0 48 48"><path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle></svg>
                            <p class="experience">2+ years</p>
                        </div>
                    </div>
                    <div class="row" id="row2">      
                        <div class="col" id="col2">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12vh" height="12vh" viewBox="0 0 48 48"><path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path></svg>
                            <p class="experience">5+ years</p>
                        </div>
                        <div class="col" id="col2">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12vh" height="12vh" viewBox="0 0 48 48"><path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path></svg>
                            <p class="experience">5+ years</p>
                        </div>
                        <div class="col" id="col2">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12vh" height="12vh" viewBox="0 0 32 32"><path fill="#cc0000" d="M 10.03125 9.5742188 C 9.78025 9.5742188 9.5228594 9.5890938 9.2558594 9.6210938 L 9.4082031 10.099609 C 9.6432031 10.074609 9.8763281 10.066406 10.111328 10.066406 L 10.193359 10.066406 L 10.03125 9.5742188 z M 13.117188 10.050781 L 13.085938 10.583984 C 13.352938 10.673984 13.611141 10.771953 13.869141 10.876953 L 13.902344 10.333984 C 13.829344 10.293984 13.626187 10.196781 13.117188 10.050781 z M 6.4667969 10.357422 C 6.2647969 10.462422 6.0539375 10.575078 5.8359375 10.705078 L 6.2070312 11.271484 C 6.4170312 11.141484 6.6200781 11.021016 6.8300781 10.916016 L 6.4667969 10.357422 z M 10.134766 10.382812 C 9.9080981 10.384485 9.6785937 
                            10.396797 9.4492188 10.419922 C 7.0892188 10.629922 4.19 12.779609 2.5 15.599609 C 0.8 18.429609 0.5703125 20.830078 0.5703125 20.830078 L 6.9492188 20.830078 C 6.9492187 20.830078 5.7295312 15.26 9.7695312 13 C 10.609531 12.59 13.220937 11.109219 17.460938 13.949219 L 17.779297 13.660156 C 16.579297 12.628906 13.534778 10.357727 10.134766 10.382812 z M 13.101562 12.589844 L 13.070312 13.097656 C 13.337312 13.105656 13.602141 13.138313 13.869141 13.195312 L 13.902344 12.693359 C 13.628344 12.637359 13.360563 12.605844 13.101562 12.589844 z M 11.210938 12.783203 C 10.935938 12.863203 10.702 12.953969 10.5 13.042969 L 10.685547 13.599609 C 10.919547 13.486609 11.154672 13.389406 11.388672 13.316406 L 11.210938 12.783203 z M 3.2011719 12.816406 C 2.9911719 13.018406 2.7895156 13.219875 2.6035156 13.421875 L 3.2246094 13.955078 C 3.3946094 13.737078 3.5813906 
                            13.518406 3.7753906 13.316406 L 3.2011719 12.816406 z M 8.9882812 14.011719 C 8.8022813 14.182719 8.6313281 14.366734 8.4863281 14.552734 L 8.875 15.134766 C 9.012 14.932766 9.1735625 14.746547 9.3515625 14.560547 L 8.9882812 14.011719 z M 10.150391 15.164062 L 10.150391 20.726562 L 11.503906 20.726562 L 11.503906 19.189453 L 11.675781 19.367188 L 12.945312 20.726562 L 15 20.726562 L 13.216797 18.927734 L 13.429688 18.908203 C 13.482687 18.903203 14.753906 18.768547 14.753906 17.060547 C 14.753906 15.349547 13.195672 15.170063 13.138672 15.164062 L 10.150391 15.164062 z M 17.109375 15.203125 C 16.059375 15.203125 15.705078 16.168422 15.705078 16.607422 L 15.705078 20.726562 L 17.082031 20.726562 L 17.082031 19.716797 L 18.761719 19.716797 L 18.761719 20.726562 L 20.087891 20.726562 L 20.087891 16.607422 C 20.087891 15.462422 19.049547 15.203125 18.685547 15.203125 L 17.109375 
                            15.203125 z M 21.007812 15.203125 L 21.007812 20.724609 L 22.449219 20.724609 L 22.449219 15.203125 L 21.007812 15.203125 z M 23.318359 15.203125 L 23.318359 20.726562 L 26.960938 20.726562 L 26.960938 19.447266 L 24.753906 19.447266 L 24.753906 15.203125 L 23.318359 15.203125 z M 29.03125 15.203125 C 28.43925 15.203125 27.619141 15.698859 27.619141 16.630859 L 27.619141 17.140625 C 27.619141 18.098625 28.46225 18.544922 29.03125 18.544922 L 29.748047 18.546875 C 29.861047 18.543875 30.376953 18.544922 30.376953 18.544922 L 30.376953 19.455078 L 27.699219 19.462891 L 27.699219 20.724609 L 30.244141 20.724609 C 30.770141 20.724609 31.616484 20.343266 31.646484 19.322266 L 31.646484 18.755859 C 31.646484 17.877859 30.933141 17.353516 30.244141 17.353516 L 28.826172 17.353516 L 28.826172 16.474609 L 31.4375 16.474609 L 31.4375 15.203125 L 29.03125 15.203125 z M 7.5585938 16.265625 C 7.4525937 
                            16.565625 7.3794531 16.86525 7.3144531 17.15625 L 7.9707031 17.673828 C 8.0027031 17.358828 8.059625 17.042562 8.140625 16.726562 L 7.5585938 16.265625 z M 17.667969 16.369141 L 18.207031 16.369141 C 18.629031 16.369141 18.749906 16.637203 18.753906 16.783203 L 18.753906 18.283203 L 17.074219 18.283203 L 17.074219 16.783203 C 17.074219 16.779203 17.081969 16.369141 17.667969 16.369141 z M 11.505859 16.408203 L 12.884766 16.414062 C 12.900766 16.421062 13.296875 16.576062 13.296875 17.164062 C 13.296875 17.751063 12.895797 17.913734 12.841797 17.927734 L 11.505859 17.927734 L 11.505859 16.408203 z M 0.40429688 16.591797 C 0.25129687 16.938797 0.081 17.342547 0 17.560547 L 0.9296875 17.900391 C 1.0346875 17.625391 1.2039844 17.228687 1.3339844 16.929688 L 0.40429688 16.591797 z M 7.1933594 19.208984 C 7.2093594 19.636984 7.2510156 19.984562 7.2910156 20.226562 L 8.2617188 20.574219 C 8.1887187 20.259219 
                            8.1154063 19.903437 8.0664062 19.523438 L 7.1933594 19.208984 z"></path>
                            </svg>
                            <p class="experience">1+ year</p>
                        </div>
                    </div>
                    <div class="row" id="row2">      
                        <div class="col" id="col2">
                            <svg xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="12vh" height="12vh" viewBox="0 0 48 48"><path fill="#ECEFF1" d="m20.1 16.2l.1 2.3l-1.6 3l-2.5 4.9l-.5 4.1l1.8 5.8l4.1 2.3h6.2l5.8-4.4l2.6-6.9l-6-7.3l-1.7-4.1z"></path><path fill="#263238" d="M34.3 21.9c-1.6-2.3-2.9-3.7-3.6-6.6c-.7-2.9.2-2.1-.4-4.6c-.3-1.3-.8-2.2-1.3-2.9c-.6-.7-1.3-1.1-1.7-1.2c-.9-.5-3-1.3-5.6.1c-2.7 1.4-2.4 4.4-1.9 10.5c0 .4-.1.9-.3 1.3c-.4.9-1.1 1.7-1.7 2.4c-.7 1-1.4 2-1.9 3.1c-1.2 2.3-2.3 5.2-2 6.3c.5-.1 6.8 9.5 6.8 9.7c.4-.1 2.1-.1 3.6-.1c2.1-.1 3.3-.2 5 .2c0-.3-.1-.6-.1-.9c0-.6.1-1.1.2-1.8c.1-.5.2-1 .3-1.6c-1 .9-2.8 1.9-4.5 2.2c-1.5.3-4-.2-5.2-1.7c.1 0 .3 0 .4-.1c.3-.1.6-.2.7-.4c.3-.5.1-1-.1-1.3c-.2-.3-1.7-1.4-2.4-2c-.7-.6-1.1-.9-1.5-1.3l-.8-.8c-.2-.2-.3-.4-.4-.5c-.2-.5-.3-1.1-.2-1.9c.1-1.1.5-2 1-3c.2-.4.7-1.2.7-1.2s-1.7 4.2-.8 5.5c0 0 .1-1.3.5-2.6c.3-.9.8-2.2 1.4-2.9s2.1-3.3 2.2-4.9c0-.7.1-1.4.1-1.9c-.4-.4 6.6-1.4 7-.3c.1.4 1.5 4 2.3 5.9c.4.9.9 1.7 1.2 2.7c.3 1.1.5 2.6.5 4.1c0 .3 0 .8-.1 1.3c.2 0 4.1-4.2-.5-7.7c0 0 2.8 1.3 2.9 3.9c.1 2.1-.8 3.8-1 4.1c.1 0 2.1.9 2.2.9c.4 0 1.2-.3 1.2-.3c.1-.3.4-1.1.4-1.4c.7-2.3-1-6-2.6-8.3z"></path><g fill="#ECEFF1" transform="translate(0 -2)"><ellipse cx="21.6" cy="15.3" rx="1.3" ry="2"></ellipse><ellipse cx="26.1" cy="15.2" rx="1.7" ry="2.3"></ellipse></g><g fill="#212121" transform="translate(0 -2)"><ellipse cx="21.7" cy="15.5" rx="1.2" ry=".7" transform="rotate(-97.204 21.677 15.542)"></ellipse><ellipse cx="26" cy="15.6" rx="1" ry="1.3"></ellipse></g><path fill="#FFC107" d="M39.3 35.6c-.4-.2-1.1-.5-1.7-1.4c-.3-.5-.2-1.9-.7-2.5c-.3-.4-.7-.2-.8-.2c-.9.2-3 1.6-4.4 0c-.2-.2-.5-.5-1-.5s-.7.2-.9.6s-.2.7-.2 1.7c0 .8 0 1.7-.1 2.4c-.2 1.7-.5 2.7-.5 3.7c0 1.1.3 1.8.7 2.1c.3.3.8.5 1.9.5c1.1 0 1.8-.4 2.5-1.1c.5-.5.9-.7 2.3-1.7c1.1-.7 2.8-1.6 3.1-1.9c.2-.2.5-.3.5-.9c0-.5-.4-.7-.7-.8zm-20.1.3c-1-1.6-1.1-1.9-1.8-2.9c-.6-1-1.9-2.9-2.7-2.9c-.6 0-.9.3-1.3.7c-.4.4-.8 1.3-1.5 1.8c-.6.5-2.3.4-2.7 1c-.4.6.4 1.5.4 3c0 .6-.5 1-.6 1.4c-.1.5-.2
                            .8 0 1.2c.4.6.9.8 4.3 1.5c1.8.4 3.5 1.4 4.6 1.5c1.1.1 3 0 3-2.7c.1-1.6-.8-2-1.7-3.6zm1.9-18.1c-.6-.4-1.1-.8-1.1-1.4c0-.6.4-.8 1-1.3c.1-.1 1.2-1.1 2.3-1.1s2.4.7 2.9.9c.9.2 1.8.4 1.7 1.1c-.1 1-.2 1.2-1.2 1.7c-.7.2-2 1.3-2.9 1.3c-.4 0-1 0-1.4-.1c-.3-.1-.8-.6-1.3-1.1z"></path><path fill="#634703" d="M20.9 17c.2.2.5.4.8.5c.2.1.5.2.5.2h.9c.5 0 1.2-.2 1.9-.6c.7-.3.8-.5 1.3-.7c.5-.3 1-.6.8-.7c-.2-.1-.4 0-1.1.4c-.6.4-1.1.6-1.7.9c-.3.1-.7.3-1 .3h-.9c-.3 0-.5-.1-.8-.2c-.2-.1-.3-.2-.4-.2c-.2-.1-.6-.5-.8-.6c0 0-.2 0-.1.1l.6.6zm3-2.2c.1.2.3.2.4.3c.1.1.2.1.2.1c.1-.1 0-.3-.1-.3c0-.2-.5-.2-.5-.1zm-1.6.2c0 .1.2.2.2.1c.1-.1.2-.2.3-.2c.2-.1.1-.2-.2-.2c-.2.1-.2.2-.3.3z"></path><path fill="#455A64" d="M32 32.7v.3c.2.4.7.5 1.1.5c.6 0 1.2-.4 1.5-.8c0-.1.1-.2.2-.3c.2-.3.3-.5.4-.6c0 0-.1-.1-.1-.2c-.1-.2-.4-.4-.8-.5c-.3-.1-.8-.2-1-.2c-.9-.1-1.4.2-1.7.5c0 0 .1 0 .1.1c.2.2.3.4.3.7c.1.2 0 .3 0 .5z"></path></svg>
                            <p class="experience">4+ years</p>
                        </div>
                        <div class="col" id="col2">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12vh" height="12vh" viewBox="0 0 48 48"><path fill="#F4511E" d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"></path></svg>
                            <p class="experience">4+ years</p>
                        </div>
                        <div class="col" id="col2">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12vh" height="12vh" viewBox="0 0 48 48"><path fill="#fff" d="M44.083,29.79c-0.183-0.829-0.935-1.796-2.452-1.796c-0.31,0-0.649,0.039-1.035,0.119c-0.708,0.146-1.311,0.217-1.842,0.241c4.133-7.04,6.816-16.819,4.159-20.214c-3.501-4.473-8.214-5.141-10.711-5.141L31.967,3c-0.929,0.015-1.893,0.129-2.863,0.339l-3.583,0.774C25.033,4.052,24.536,4.009,24.018,4l-0.03,0l-0.016,0l-0.152-0.001c-1.593,0-3.046,0.338-4.341,0.973l-1.251-0.493c-1.72-0.678-4.308-1.485-6.868-1.485c-0.144,0-0.287,0.003-0.431,0.008C8.407,3.093,6.241,4.05,4.664,5.769C2.696,7.915,1.8,11.054,2.003,15.1C2.013,15.309,4.461,36,11.4,36h0.025l0.064-0.001c0.901-0.022,1.76-0.384,2.563-1.077c0.613,0.46,1.406,0.732,2.145,0.84c0.488,0.115,1.366,0.278,2.418,0.278c1.284,0,2.442-0.263,3.44-0.738c-0.001,0.88-0.006,1.994-0.016,3.418l-0.001,0.075l0.005,0.075c0.097,1.419,0.342,2.698,0.711,3.701c1.051,2.859,2.866,4.434,5.111,4.434c
                                0.093,0,0.188-0.003,0.284-0.009c1.846-0.114,3.717-1.151,5.004-2.772c1.393-1.755,1.715-3.607,1.839-5.026L35,39.111v-0.088v-4.079l0.103,0.01l0.436,0.038l0.042,0.004l0.042,0.002c0.124,0.006,0.252,0.008,0.381,0.008c1.507,0,3.362-0.391,4.616-0.974C41.819,33.476,44.559,31.948,44.083,29.79z"></path><path fill="#0277bd" d="M33,34c0-0.205,0.012-0.376,0.018-0.565C33.008,33.184,33,33,33,33s0.012-0.009,0.032-0.022c0.149-2.673,0.886-3.703,1.675-4.29c-0.11-0.153-0.237-0.318-0.356-0.475c-0.333-0.437-0.748-0.979-1.192-1.674l-0.082-0.158c-0.067-0.164-0.229-0.447-0.435-0.819c-1.183-2.14-3.645-6.592-1.96-9.404c0.738-1.232,2.122-1.942,4.121-2.117C33.986,11.718,30.925,6.115,23.985,6c-0.002,0-0.004,0-0.006,0c-6.041-0.098-8.026,5.392-8.672,8.672c0.89-0.377,1.906-0.606,2.836-0.606c0.014,0,0.029,0,0.043,0c2.29,0.017,3.865,1.239,4.323,3.354c0.335,1.552,0.496,2.91,0.492,4.153c-0.01,2.719-0.558,4.149-1.042,5.411l-0.154,0.408c-0.124,0.334-0.255,0.645-0.379,0.937c-0.126,0.298-0.237,0.563-0.318,0.802c0.484,0.11,0.864,0.265,1.125,0.38l0.151,0.066c0.047,0.02,0.094,0.043,0.137,0.069c0.848,0.516,1.376,1.309,1.489,2.233c0.061,0.498,0.051,3.893,0.03,6.855c0.087,1.285,0.305,2.364,0.593,3.146c0.409,1.114,1.431,3.241,3.394,3.119c1.37-0.085,2.687-0.919,3.561-2.019c0.938-1.181,1.284-2.487,1.414-3.958V34z"></path><path fill="#0277bd" d="M15.114 28.917c-1.613-1.683-2.399-3.947-2.104-6.056.285-2.035.124-4.027.037-5.098-.029-.357-.048-.623-.047-.77 0-.008.002-.015.003-.023 0-.004-.002-.007-.002-.011.121-3.021 1.286-7.787 4.493-10.62C15.932 5.724 13.388 4.913 11 5 7.258 5.136 3.636 7.724 4 15c.137 2.73 3.222 19.103 7.44 19 .603-.015 1.229-.402 1.872-1.176 1.017-1.223 2.005-2.332 2.708-3.104C15.705 29.481 15.401 29.217 15.114 28.917zM37.023 14.731c.015.154.002.286-.022.408.031.92-.068 1.813-.169
                                2.677-.074.636-.15 1.293-.171 1.952-.021.645.07 1.282.166 1.956.225 1.578.459 3.359-.765 5.437.225.296.423.571.581.837 4.61-7.475 6.468-16.361 4.695-18.626C38.655 5.944 34.941 4.952 31.999 5c-.921.015-1.758.139-2.473.294C34.602 7.754 36.863 13.026 37.023 14.731zM41 30.071c-2.665.55-3.947.257-4.569-.126-.1.072-.2.133-.293.19-.372.225-.961.583-1.105 2.782.083.016.156.025.246.044L35.714 33c1.32.06 3.049-.31 4.063-.781C41.962 31.205 43.153 29.627 41 30.071zM22.023 32.119c-.037-.298-.198-.539-.492-.732l-.108-.047C21.062 31.181 20.653 31 20 31h-.004c-.127.01-.253.019-.38.019-.052 0-.103-.007-.155-.009-.474.365-1.148.647-2.816.99-2.98.759-1.221 1.655-.078 1.794 1.106.277 3.735.614 5.481-.809C22.043 32.537 22.035 32.229 22.023 32.119z"></path><path fill="#0277bd" d="M20.681 18.501c-.292.302-.753.566-1.262.484-.828-.134-1.463-1.133-1.417-1.508h0c.044-.374.751-.569 1.578-.435.287.047.548.128.768.228-.32-.688-.899-1.085-1.782-1.182-1.565-.174-3.226.644-3.56 1.097.007.11.02.251.033.417.093 1.147.265 3.284-.05 5.537-.208 1.485.393 3.169 1.567 4.395.757.79 1.641 1.29 2.513 1.438.111-.478.309-.944.513-1.425.113-.265.233-.547.346-.852l.162-.427c.443-1.155.9-2.35.909-4.703C21.003 20.66 20.892 19.627 20.681 18.501zM34.847 22.007c-.104-.729-.211-1.484-.185-2.303.023-.742.105-1.442.184-2.119.062-.533.11-1.045.138-1.55-1.289.107-2.145.479-2.551 1.108.168-.057.358-.102.568-.129.892-.116 1.543.141 1.618.637.055.363-.253.705-.388.836-.277.269-.626.442-.981.488-.064.008-.129.012-.192.012-.353 0-.69-.121-.949-.3.112 1.973 1.567 4.612 2.283 5.907.153.277.271.498.369.688C35.154 24.163 35.009 23.143 34.847 22.007z"></path></svg>
                            <p class="experience">6 months</p>
                        </div>
                    </div>
                    <div class="row" id="row2">  
                        <div class="col" id="col2">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12vh" height="12vh" viewBox="0 0 50 50"><path fill="#F0DB4F" d="M45.274,2.325C45.084,2.118,44.817,2,44.536,2H5.464C5.183,2,4.916,2.118,4.726,2.325S4.443,2.81,4.468,3.089l3.52,39.427 c0.037,0.412,0.324,0.759,0.722,0.873l16.01,4.573C24.809,47.987,24.902,48,24.994,48s0.185-0.013,0.274-0.038l16.024-4.573 c0.398-0.114,0.685-0.461,0.722-0.873l3.518-39.427C45.557,2.81,45.463,2.532,45.274,2.325z M12,29.004l7,1.942V11h4v26l-11-3.051 V29.004z M38.054,22L37,34.25L27,37v-4.601l6.75-1.855l0.25-3.75L27,28V11h12l-0.345,4H31v8L38.054,22z"></path></svg>
                            <p class="experience">2+ years</p>
                        </div>
                        <div class="col" id="col2">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12vh" height="12vh" viewBox="0 0 48 48"><path fill="#F44336" d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"></path><path fill="#F44336" d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"></path><g><path fill="#1565C0" d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"></path><path fill="#1565C0" d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"></path><path fill="#1565C0" d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"></path><path fill="#1565C0" d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"></path><path fill="#1565C0" d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"></path></g></svg>
                            <p class="experience">2+ years</p>
                        </div>
                        <div class="col" id="col2">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12vh" height="12vh" viewBox="0 0 48 48"><path fill="#673ab7" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"></path><path fill="#fff" d="M33.03,25.6c-0.65-0.9-1.59-1.52-2.8-1.85c0,0,1.02-0.37,1.94-1.75c0.55-0.88,0.83-1.94,0.83-3.18 c0-2.15-0.78-3.8-2.34-4.93C29.1,12.76,27.34,12,24.35,12H15v24h10.43c2.83-0.02,4.96-0.63,6.41-1.8c1.44-1.19,2.16-2.95,2.16-5.3 C34,27.6,33.68,26.5,33.03,25.6z M21,16c0,0,4.17,0,4.25,0c1.52,0,2.75,1.23,2.75,2.75c0,1.52-1.23,2.75-2.75,2.75 c-0.08,0-4.25,0-4.25,0V16z M26,32h-5v-6h5c1.66,0,3,1.34,3,3C29,30.66,27.66,32,26,32z"></path></svg>
                            <p class="experience">4+ years</p>
                        </div>
                    </div>
                </div>
                <h2 id="skills-featured" data-aos="slide-right" data-aos-delay="300" data-aos-duration="1000"> Organizations </h2>
                <div class="row org-logos" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                    <div class="col">
                        <img class="acc" src={acc} alt="Aggie Coding Club"/>
                    </div>
                    <div class="col">
                        <img class="sase" src={sase} alt="Society of Asian Scientists and Engineers"/>
                    </div>
                </div>   
                <h2 id="honors-featured" data-aos="slide-left" data-aos-delay="300" data-aos-duration="1000"> Honors </h2>
                <div class="row honor-logos" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                    <div class="col">
                        <img class="nths" src={nths} alt="NTHS"/>
                    </div>
                    <div class="col">
                        <img class="honors" src={honors} alt="Honors"/>
                    </div>
                    <div class="col">
                        <img class="nhs" src={nhs} alt="NHS"/>
                    </div>
                </div>   
                <h2 id="photos-featured" data-aos="slide-right" data-aos-delay="300" data-aos-duration="1000"> Photo Gallery </h2>
                <div class="row photo-wrapper" data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="1000">
                    <div class="col photo-item">
                        <div class="polaroid"><img src={auburn} alt="auburn"/>
                        <div class="caption">Beating #13 Auburn 11/6/21 </div>
                        </div>
                    </div>
                    <div class="col photo-item">
                        <div class="polaroid"><img src={bigevent} alt="bigevent"/>
                        <div class="caption">Volunteering in Big Event 3/30/19</div>
                        </div>
                    </div>
                    <div class="col photo-item">
                        <div class="polaroid"><img src={me} alt="me"/>
                            <div class="caption">SASE Meeting (Spring 2019) </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}