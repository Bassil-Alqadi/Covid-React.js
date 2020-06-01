import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

import Axios from 'axios';

import './Doughnut.css';

class DoughnutChart extends Component {

    state = {
        C1: {
            name: '',
            confirmed: 0
        },
        C2: {
            name: '',
            confirmed: 0
        },
        C3: {
            name: '',
            confirmed: 0
        },
        C4: {
            name: '',
            confirmed: 0
        },
        C5: {
            name: '',
            confirmed: 0
        },
        C6: {
            name: '',
            confirmed: 0
        },
        C7: {
            name: '',
            confirmed: 0
        },
        C8: {
            name: '',
            confirmed: 0
        },
        C9: {
            name: '',
            confirmed: 0
        },
        C10: {
            name: '',
            confirmed: 0
        },
        data: ''
      }


    componentDidMount() {
        Axios.get('https://covid2019-api.herokuapp.com/current_list')
        .then(response => {
            console.log(response.data['countries'][0]);
            let date = response.data.dt;
            this.setState({
                C1: {
                    name: 'USA',
                    confirmed: response.data['countries'][0]['US'].confirmed
                },
                C2: {
                    name: 'Spain',
                    confirmed: response.data['countries'][0]['Spain'].confirmed
                },
                C3: {
                    name: 'Italy',
                    confirmed: response.data['countries'][0]['Italy'].confirmed
                },
                C4: {
                    name: 'France',
                    confirmed: response.data['countries'][0]['France'].confirmed
                },
                C5: {
                    name: 'Germany',
                    confirmed: response.data['countries'][0]['Germany'].confirmed
                },
                C6: {
                    name: 'China',
                    confirmed: response.data['countries'][0]['China'].confirmed
                },
                C7: {
                    name: 'Iran',
                    confirmed: response.data['countries'][0]['Iran'].confirmed
                },
                C8: {
                    name: 'United Kingdom',
                    confirmed: response.data['countries'][0]['United_Kingdom'].confirmed
                },
                C9: {
                    name: 'Turkey',
                    confirmed: response.data['countries'][0]['Turkey'].confirmed
                },
                C10: {
                    name: 'Belgium',
                    confirmed: response.data['countries'][0]['Belgium'].confirmed
                }
            })
            
        })
        .catch(error => {
            this.setState({error: true});
        });  
    }

    render() {
        const data = {
            labels: [
                this.state.C1.name,
                this.state.C2.name,
                this.state.C3.name,
                this.state.C4.name,
                this.state.C5.name,
                this.state.C6.name,
                this.state.C7.name,
                this.state.C8.name,
                this.state.C9.name,
                this.state.C10.name
            ],
            datasets: [
                {
                    label: 'Top Ten Countries in COVID-19 Cases',
                    data: [
                        this.state.C1.confirmed,
                        this.state.C2.confirmed,
                        this.state.C3.confirmed,
                        this.state.C4.confirmed,
                        this.state.C5.confirmed,
                        this.state.C6.confirmed,
                        this.state.C7.confirmed,
                        this.state.C8.confirmed,
                        this.state.C9.confirmed,
                        this.state.C10.confirmed,
                    ],
                    backgroundColor: [
                        '#85929E',
                        '#E74C3C',
                        '#3498DB',
                        '#27AE60',
                        '#AEB6BF',
                        '#F1C40F',
                        '#F5B7B1',
                        '#1F618D',
                        '#AF601A',
                        '#48C9B0'
                    ],
                    borderWidth: 1
                }
            ]
        };

        const options = {
            title: {
                display: true,
                text: 'Top 10 Countries with COVID-19 Cases'
            },
            maintainAspectRatio: false
        };

        return(
            <div className="Doughnutchart-container mb-4 bg-dark text-white" data-aos="fade-right" data-aos-duration="500">
                <Doughnut data={data} options={options} />
            </div>
        );
    }
}

export default DoughnutChart;