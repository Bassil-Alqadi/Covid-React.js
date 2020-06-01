import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

import './BarChart.css';
import Axios from 'axios';

class BarChart extends Component {

    state = {
        location: '',
        confirmed: 0,
        deaths: 0,
        recovered: 0,
        active: 0,
        time: null,
        date: null
      }


    componentDidMount() {
        Axios.get('https://covid2019-api.herokuapp.com/v2/country/Jordan')
        .then(response => {
        let date = [];
        date = response.data.dt.split(" ");

        this.setState({
            location: response.data.data.location,
            confirmed: response.data.data.confirmed,
            deaths: response.data.data.deaths,
            recovered: response.data.data.recovered,
            active: response.data.data.active,
            time: date[1],
            date: date[0]
        });
        })
        .catch(error => {
            this.setState({error: true});
        });  
    }

    render() {
        const data = {
            labels: ['Confirmed Cases','Deaths Cases','Recoverd Cases','Active Cases'],
            datasets: [
                {
                    label: 'COVID-19 Cases',
                    data: [this.state.confirmed,this.state.deaths,this.state.recovered,this.state.active],
                    borderColor: [
                        'black'
                    ],
                    backgroundColor: [
                        '#85929E',
                        '#E74C3C',
                        '#3498DB',
                        '#27AE60'
                    ],
                    borderWidth: 1
                }
            ]
        };

        const options = {
            title: {
                display: true,
                text: 'Cases of COVID-19 in Jordan'
            },
            maintainAspectRatio: false
        };

        return(
            <div className="Barchart-container mb-4 bg-dark text-white" data-aos="fade-left" data-aos-duration="500">
                <Bar data={data} options={options} />
            </div>
        );
    }
}

export default BarChart;