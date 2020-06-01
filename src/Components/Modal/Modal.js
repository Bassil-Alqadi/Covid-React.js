import React from 'react';

import anime from 'animejs';

import './Modal.css';

const modal = (props) => {

    var confirmed = document.querySelector('.round-log-confirmed');
        anime({
            targets: confirmed,
            innerHTML: [0, props.confirmed],
            easing: 'linear',
            round: 1 // Will round the animated value to 1 decimal
        });

        var deaths = document.querySelector('.round-log-deaths');
        anime({
            targets: deaths,
            innerHTML: [0, props.deaths],
            easing: 'linear',
            round: 1 // Will round the animated value to 1 decimal
        });

        var recovered = document.querySelector('.round-log-recovered');
        anime({
            targets: recovered,
            innerHTML: [0, props.recovered],
            easing: 'linear',
            round: 1 // Will round the animated value to 1 decimal
        });

        var active = document.querySelector('.round-log-active');
        anime({
            targets: active,
            innerHTML: [0, props.active],
            easing: 'linear',
            round: 1 // Will round the animated value to 1 decimal
        });

    let modal = null;

    if(!props.err) {
        modal = (
            <div className="card-deck">
                <div className="card text-secondary mb-3" style={{maxWidth: "18rem"}}>
                    <div className="card-header text-secondary">Confirmed Cases</div>
                    <div className="card-body">
                        <h5 className="card-title header-text text-secondary round-log-confirmed"></h5>
                    </div>
                </div>
                <div className="card border-danger mb-3" style={{maxWidth: "18rem"}}>
                    <div className="card-header text-danger">Deaths Cases</div>
                    <div className="card-body">
                        <h5 className="card-title header-text text-danger round-log-deaths"></h5>
                    </div>
                </div>
                <div className="card border-primary mb-3" style={{maxWidth: "18rem"}}>
                    <div className="card-header text-primary">Recovered Cases</div>
                    <div className="card-body">
                        <h5 className="card-title header-text text-primary round-log-recovered"></h5>
                    </div>
                </div>
                <div className="card border-success mb-3" style={{maxWidth: "18rem"}}>
                    <div className="card-header text-success">Active Cases</div>
                    <div className="card-body">
                        <h5 className="card-title header-text text-success round-log-active"></h5>
                    </div>
                </div>
            </div>
        );
    } else {
        modal = (
            <div className="card border-danger mb-3" style={{maxWidth: "18rem", margin: "0 auto"}}>
                <div className="card-header text-danger">error</div>
                <div className="card-body">
                    <p className="text-danger">Please select a valid country name</p>
                </div>
            </div>
        );
        window.location.reload(false);
    }

    return(
        <div className="modal fade bd-example-modal-xl" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel"><i className="fas fa-map-marker-alt"></i> {props.location}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {modal}
                    <div className="info-footer">
                        <h5><i className="far fa-clock clock"></i> {props.time}</h5>
                        <h5><i className="fas fa-calendar-week calender"></i> {props.date}</h5>
                        <h4 className="hashtag">#Stay_home_stay_safe</h4>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default modal;