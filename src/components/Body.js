import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "../assets/Profile_Pic.jpg"

function body(props) {
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
       <img id="pic" src={img} alt="profile pic" width="100%" height="auto%" />
      </div>

    <div className="col-md-8">

    <p>What the</p>
    
    <p>Heck </p>
        
    <p>Is</p>
    <p>Going on?</p>
 </div>
  </div>
   </blockquote>
   </div>
 </div>
            </div>

        </div>
            )
        }
export default body