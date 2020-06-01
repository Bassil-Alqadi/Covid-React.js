import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

import anime from 'animejs';
import Navbar from '../Navbar/Navbar';

import './Jumpotron.css';

class Jumpotron extends Component {

    continueHandler() {
        this.props.history.replace('/country');
    }

    killVirus = () => {
        anime({
            targets: '.test',
            duration: 1000,
            rotate: '1turn',
            scale: 0
        });
        setTimeout(function() {
            document.getElementById('test').src="https://img.icons8.com/cute-clipart/100/000000/like.png";
        },500);
        anime({
            targets: '.test',
            duration: 5000,
            rotate: '1turn'
        });
        document.getElementById('display-8').style.opacity="1";
        document.getElementById('display-8').style.transitionDuration='4s';
        document.getElementById('stayAtHome').style.opacity="1";
        document.getElementById('stayAtHome').style.transitionDuration='4s';
        setTimeout(function() {
            this.location.replace('/search-by-country');
        },3000);
    }

    render() {
        return(
            <div>
                <Navbar />
                <div className="jumbotron text-center" data-aos="fade-right" data-aos-duration="1000">
                    <h1 className="display-4">Welcome to COVID-19 App</h1>
                    <p className="lead">This is an application for showing coronavirus readings and information all over the world</p>
                    <p className="lead">The data in this site is updated every day with new readings</p>
                    <hr className="my-4" />
                    <h4 className="display-6">Click on the virus to kill it</h4>
                    <img className="test" id="test" src="https://img.icons8.com/color/100/000000/coronavirus.png" alt="virus" onClick={this.killVirus} />
                    <h6 className="display-8" id="display-8">#Stay_Home_Stay_Safe</h6>
                    <h6 className="display-8" id="stayAtHome">خليك_بالدار#</h6>
                </div>
            </div>
        );
    }
}
export default withRouter(Jumpotron);
