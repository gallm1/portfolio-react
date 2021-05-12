import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "../assets/Profile_Pic.jpg";

const mainPage = () => {
    return (
        <div className="aboutApp">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>About Me</h3>
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <div className="row">
                                <div className="col-md-3">
                                    <img id="pic" src={img} width="100%" height="auto%" />
                                    </div>

                                    <div className="col-md-8">

                                    <p>My name is Michael Galloway.  I was born and raised in Alaska.  I moved to the greater Houston area in 2015.  I enjoy hiking the outdoors, photography, traveling the world, sports, good food and craft beer.</p>

                                    <p>I have 16+ years of experience working supply chain and materials in the oil and gas industry with a vast knowledge in Warehousing and Inventory Management.  Highly skilled in analytics with a focus on zero inventory mindset and cost savings.</p>

                                    <p>In 2021, I enrolled in Rice University's Full Stack Developer Coding Boot Camp.  After 12 intense weeks, I've been exposed to (in no particular order): HTML, CSS, JavaScript, jQuery, Bootstrap, APIs, JSON, AJAX, React.js, PWAs, Heroku, Git, GitHub, MySQL, MongoDB, Templating Engines, Sessions, Writing tests, Node.js, Express.js, Creating APIs, MVC, User Authentication, ORM, Algorithms, and Data Structures.</p>

                                </div>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default mainPage;