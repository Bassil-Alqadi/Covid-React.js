import React from 'react';
import { Component } from 'react';

import Typewriter from 'typewriter-effect';

import Navbar from '../Navbar/Navbar';
import './Developer.css';

class Developer extends Component {

    componentDidMount() {
        document.body.style['overflowY'] ="hidden";
        document.getElementById('contactMe').style['transform'] = "translateY(500px)";
    }

    render(){

        let FirstLn = 'Hello World, my name is Bassil Haitham and i am the developer of this application.';
        let SecondLn = "In these days we are facing a very dangerous virus.";
        let ThirdLn = "Sadly...many people have died because of this virus :(";
        let FourthLn = "So please be safe, wash your hands well.";
        let FifthLn = "I hope that things will get better in the next days, Good bye.";

        return(
            <div>
            <Navbar />
                <div id="dev" className="container">
                    <div className="row text-center">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString(FirstLn)
                                .pauseFor(500)
                                .deleteAll()
                                .callFunction(() => {
                                    document.body.style['transitionDuration'] = '2s';
                                    document.body.style['backgroundColor'] = 'black';
                                    document.getElementById('dev').style['opacity'] = '0';
                                    document.getElementById('dev').style['transitionDuration'] = '2s';
                                    setTimeout(function(){
                                        document.getElementById('contactMe').style['transform'] = "translateY(-500px)";
                                        document.getElementById('contactMe').style['transitionDuration'] = '2s';
                                    },2500);
                                })
                                .start();
                            }}
                        />
                    </div>
                </div>
                <div className="container" id="contactMe">
                    <div className="row text-white">
                        <h6 className="display-4">Contact Me</h6>
                    </div>
                    <div class="row aos-init aos-animate" data-aos="fade-left">
                        <div class="col-2">
                            <h5><i class="fas fa-map-marker-alt"></i> <b>Address</b></h5>
                            <small>Hawsha - East neighborhood</small>
                            <small>Mafraq - JOR</small>
                        </div>
                        <div class="divider"></div>
                        <div class="col-2">
                            <h5><i class="fas fa-mobile"></i> <b>Call Us</b></h5>
                            <small>+962791858735</small>
                        </div>
                        <div class="divider"></div>
                        <div class="col-2">
                            <h5><i class="fas fa-envelope-open-text"></i> <b>Email</b></h5>
                            <small>bassilalqadi65@gmail.com</small>
                        </div>
                        <div class="divider"></div>
                        <div class="col-2">
                            <h5><i class="fas fa-users"></i> <b>Social Networks</b></h5>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-snapchat-ghost"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Developer;