import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
  }

  return (
    <section id="about">
      <div className="row">
        <h2 className="abt">About Me</h2>
        <hr className="about__hr" />
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Sonny's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <p className="bio">{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <Router>
              <div className="columns download">
                <p>
                  <Link
                    to="/files/MdOmorResumi.pdf"
                    target="_blank"
                    download
                    className="button"
                  >
                    <i className="fa fa-download"></i>Download Resume
                  </Link>
                </p>
              </div>
            </Router>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
