import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
    return (
        <div className="aboutApp">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>Contact Information</h3>
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <div className="row">
                                <div className="col-md-3">
                                    
                                    </div>

                                    <div className="col-md-8">

                                   
                                        <p>GitHub Profile: <a href="https://github.com/gallm1" target="_blank">https://github.com/gallm1</a> </p>
                                        <p>Linkedin Profile: <a href="https://www.linkedin.com/in/michael-galloway-95823420a/" target="_blank"></a></p>
                                        <p>Email Address: </p>
                                        <p>Phone Number:</p>
                                        <a href=""
                                        > Resume</a>

                                </div>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact;