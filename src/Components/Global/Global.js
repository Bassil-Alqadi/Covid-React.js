import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import anime from 'animejs';

import Navbar from '../Navbar/Navbar';
import './Global.css';

class Global extends Component {

    componentDidMount() {
        anime({
            targets: '.globe',
            rotate: {
                value: 360,
                easing: 'easeInOutSine',
                duration: 6000
            },
        });
        setTimeout(function() {
            anime({
                targets: '.globe',
                translateX: 2600,
                translateY: -1000,
                scale: 0,
                rotate: {
                    value: 360,
                    easing: 'easeInOutSine',
                    duration: 1000
                },
                duration: 20000,
            });
            document.body.style.overflowX = "hidden";
        }, 3000);

        setTimeout(function(){
            this.location.replace('/globe-results');
        }, 5000);
    }

    render() {
        return(
            <div>
                <Navbar />
                <div className="myContainer">
                    <div className="row">
                        <h4 className="display-4 text-center text-white">In this page, the world stats for injures in coronavirus is shown</h4>
                        <img 
                            alt="global"
                            className="globe" 
                            src="https://img.icons8.com/cotton/200/000000/globe.png"
                            onClick={this.showDataHandler}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Global);