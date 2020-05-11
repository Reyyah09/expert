import React from 'react';
import '../contact/contact.scss';
import Contactimg from '../../asserts/images/contactUs.jpg'
export default()=>{
    return(
        <>
        <div className="container-fluid pd-top-85 pd-bot-75">
        <div className="container">
        <div className="d-flex justify-content-between">
        <div className="d-flex flex-column form-div">
            <h2 className="clr-ocean mb-3">CONTACT US</h2>
            <p className="form-para mb-5">
            Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus 
            culpa dolore molestias blanditiis consequuntur sunt nisi.
            </p>
            <div className="d-flex mb-5">
            <input className="form mr-2" placeholder="First Name"></input>
            <input className="form mr-5" placeholder="Last Name"></input>
            </div>
            <div className="d-flex mb-5">
            <input className="form mr-5" placeholder="Subject"></input>
            </div>
            <div className="d-flex mb-5">
            <input className="form mr-5" placeholder="Email"></input>
            </div>
            <div className="d-flex mb-3">
            <textarea className="textarea form mr-5" placeholder="Write your message here"></textarea>
            </div>
            <div className="d-flex">
            <button className="btn-form btn-ocean">SEND MESSAGE</button>
            </div>
        </div>
        <div className="cont-img-div">
        <img className="cont-img" src={Contactimg} alt="Not Found"/>
        </div>
        </div>
        </div>
        </div>
        </>
    );
}