import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import './Chart.css';

class Chart extends Component {

    render() {

        const data = {
            labels: ['1/31/20','End of Feb','End of Mar','Until Today'],
            datasets: [
                {
                    label: 'COVID-19 Cases',
                    data: [9927,86011,857487,this.props.total],
                    borderColor: [
                        '#85C1E9'
                    ],
                    backgroundColor: '#2980B9',
                    borderWidth: 2
                }
            ]
        };

        const options = {
            title: {
                display: true,
                text: 'Increasing of COVID-19 cases from Jan until today.'
            },
            maintainAspectRatio: false
        };

        return(
            <div className="chart-container mb-4 bg-dark text-white" data-aos="zoom-in" data-aos-duration="500">
                <Line data={data} options={options} />
            </div>
        );
    }
}

export default Chart;