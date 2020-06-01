import React from 'react';
import { Component } from 'react';

import anime from 'animejs';
import Axios from 'axios';

import DoughnutChart from '../DoughnutChart/DoughnutChart';
import BarChart from '../BarChart/BarChart';
import Chart from '../Chart/Chart';
import Navbar from '../Navbar/Navbar';

import './GlobeComponent.css';

class GlobeComponent extends Component {

    state = {
        confirmed: 0,
        deaths: 0,
        recovered: 0,
        active: 0,
        time: null,
        date: null,
        error: false
    }

    componentDidMount() {
        document.body.style.overflowX = "hidden";
        Axios.get('https://covid2019-api.herokuapp.com/v2/total')
        .then(response => {
    
          let date = [];
          date = response.data.dt.split(" ");
    
          this.setState({
            confirmed: response.data.data.confirmed,
            deaths: response.data.data.deaths,
            recovered: response.data.data.recovered,
            active: response.data.data.active,
            time: date[1],
            date: date[0]
          });
          console.log(response.data)
        })
        .catch(error => {
              this.setState({error: true});
        });  

    };

    render() {

        var confirmed = document.querySelector('.round-log-confirmed');
        anime({
            targets: confirmed,
            innerHTML: [0, this.state.confirmed],
            easing: 'linear',
            round: 10 // Will round the animated value to 1 decimal
        });

        var deaths = document.querySelector('.round-log-deaths');
        anime({
            targets: deaths,
            innerHTML: [0, this.state.deaths],
            easing: 'linear',
            round: 10 // Will round the animated value to 1 decimal
        });

        var recovered = document.querySelector('.round-log-recovered');
        anime({
            targets: recovered,
            innerHTML: [0, this.state.recovered],
            easing: 'linear',
            round: 10 // Will round the animated value to 1 decimal
        });

        var active = document.querySelector('.round-log-active');
        anime({
            targets: active,
            innerHTML: [0, this.state.active],
            easing: 'linear',
            round: 10 // Will round the animated value to 1 decimal
        });
        

        return(
            <div>
                <Navbar />
                <div className="container">
                    <div className="card bg-dark  mb-4" id="myCard" data-aos="zoom-in" data-aos-duration="500">
                        <div className="card-body">
                            <h5 className="card-title text-white"><img alt="total" src="https://img.icons8.com/plasticine/34/000000/total-sales.png"/> Total Corona Virus Cases </h5>
                            <h6 className="card-subtitle mb-2 text-muted">#Stay_Home</h6>
                            <div className="row text-center">
                                <div className="col">
                                    <h6 className="text-secondary">Confirmed Cases</h6>
                                    <small className="round-log-confirmed"></small>
                                </div>
                                <div className="col">
                                    <h6 className="text-danger">Deaths Cases</h6>
                                    <small className="round-log-deaths"></small>
                                </div>
                                <div className="col">
                                    <h6 className="text-primary">Recovered Cases</h6>
                                    <small className="round-log-recovered"></small>
                                </div>
                                <div className="col">
                                    <h6 className="text-success">Active Cases</h6>
                                    <small className="round-log-active"></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Chart total={this.state.confirmed} />
                    <BarChart />
                    <DoughnutChart />
                </div>
            </div>
        );
    }
}

export default GlobeComponent;