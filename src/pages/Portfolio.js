import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import codequiz from "../assets/Code_Quiz.png";
import weather from "../assets/weather.jpg";
import basketball from "../assets/Who_Got_Game_Image.png";
import movie from "../assets/DMC-MC-Home.png";

const portfolio = () => {
    return (
        <div className="portfolioApp">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            Portfolio
                    </h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-1">
                            </div>

                            <div className="col-md-3">
                                <a href="https://gallm1.github.io/codequiz/" target="_blank">
                                    <img src={codequiz}
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Code Quiz</p>
                                <p id="repo"><a href="https://github.com/gallm1/codequiz" target="_blank">https://github.com/gallm1/codequiz</a></p>
                            </div>
                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a href="https://glacial-taiga-86866.herokuapp.com/" target="_blank">
                                    <img src={movie}
                                        className="card-img-top" alt="img-two" />
                                </a>
                                <p className="card-text">Movie Club</p>
                                <p id="repo"><a href="https://github.com/gallm1/movie-club" target="_blank">https://github.com/gallm1/movie-club</a></p>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-3">
                                <a href="https://gallm1.github.io/track-my-pack/" target="_blank">
                                    <img src={basketball}
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Who Got Game?</p>
                                <p id="repo"><a href="https://github.com/gallm1/track-my-pack" target="_blank">https://github.com/gallm1/track-my-pack</a></p>
                            </div>
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-3">
                                <a href="https://gallm1.github.io/weather-dashboard/" target="_blank">
                                    <img src={weather}
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Weather Dashboard</p>
                                <p id="repo"><a href="https://github.com/gallm1/weather-dashboard" target="_blank">https://github.com/gallm1/weather-dashboard</a></p>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <a href="">
                                    <img src=""
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">E-Commerce</p>
                                <p id="repo"><a href="https://github.com/gallm1/ecommerce" target="_blank">https://github.com/gallm1/ecommerce</a></p>

                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a href="">
                                    <img src=""
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Team Profile Generator</p>
                                <p id="repo"><a href="https://github.com/gallm1/teamprofilegen" target="_blank">https://github.com/gallm1/teamprofilegen</a></p>

                            </div>
                        </div>
                        <br></br>
                        {/* <div className="gitProfile">
                            <p>GitHub Profile: <a href="">
                            </a> </p>
                            <p>Linkedin Profile: <a href=""
                            ></a></p>
                            <p>Email Address: </p>
                            <p>Phone Number:</p>
                            <a href=""
                            > Resume</a>

                        </div> */}
                    </div>

                </div>






            </div>
        </div>
    )
}
export default portfolio;