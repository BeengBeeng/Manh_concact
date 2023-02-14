import React, { Component } from "react";
import image from "../assets/Rectangle3.png";
function kubet() {
  return (
    <div>
      <div className="container">
        <div className="introduce">
          <div className="introduce-1">
            <span className="span-1">MED</span>
            <span className="span-2">DICAL</span>
          </div>
          <div className="introduce-2">
            <div className="introduce-2-1">
              <div className="introduce-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="information">
                <p>EMERGENCY</p>
                <i>(237) 681-812-255</i>
              </div>
            </div>
            <div className="introduce-2-1">
              <div className="introduce-icon">
                <i className="fa-solid fa-clock"></i>
              </div>
              <div className="information">
                <p>WORK HOUR</p>
                <i>9:00-20:00 Everyday</i>
              </div>
            </div>
            <div className="introduce-2-1">
              <div className="introduce-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="information">
                <p>LOCATION</p>
                <i>0123 Some place</i>
              </div>
            </div>
          </div>
        </div>
        <div className="tools">
          <div className="tools-1">
            <span>Home</span>
            <span>About us</span>
            <span>Services</span>
            <span>Doctors</span>
            <span>News</span>
            <span>Contact</span>
          </div>
          <div className="tools-2">
            <div className="tools-2-1">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="tools-2-2">
              <input type="text" placeholder="Appointment" />
            </div>
          </div>
        </div>
        <div className="advertisement">
          <img src={image} alt="" />
          <div className="home-concact">
            <span>Home</span> / <span>Concact</span>
            <h2>Our Contacts</h2>
          </div>
        </div>
        <div className="map"></div>
        <div className="content">
          <div className="content-1">
            <div className="content-1-1">
              <div className="get-in-touch">
                <p>GET IN TOUCH</p>
              </div>
              <div className="contact">
                <p>Contact</p>
              </div>
            </div>
            <div className="content-1-2">
              <div className="name-email">
                <div className="name">Name</div>
                <div className="email">Email</div>
              </div>
              <div className="name-email">Subject</div>
              <div className="message">Message</div>
            </div>
            <div className="content-1-3">
              <button>SUBMIT</button>
            </div>
          </div>
          <div className="content-2">
            <div className="content-2-1">
              <div className="card inside distinctive">
                <div className="card-content ">
                  <i className="fa-solid fa-phone"></i>
                  <h4>EMERGENCY</h4>
                  <p>(237) 681-812-255</p>
                  <p>(237) 666-331-894</p>
                </div>
              </div>
              <div className="card distinctive">
                <div className="card-content ">
                  <i className="fa-solid fa-envelope"></i>
                  <h4>EMAIL</h4>
                  <p>fildineeesoe@gmil.com</p>
                  <p>myebstudios@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="content-2-2">
              <div className="card inside distinctive-1">
                <div className="card-content ">
                  <i className="fa-solid fa-location-dot"></i>
                  <h4>LOCATION</h4>
                  <p>0123 Some place</p>
                  <p>9876 Some country</p>
                </div>
              </div>
              <div className="card distinctive">
                <div className="card-content ">
                  <i className="fa-solid fa-clock"></i>
                  <h4>WORKING HOURS</h4>
                  <p>Mon-Sat 09:00-20:00</p>
                  <p>Sunday Emergency only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="favourite"></div>
        <div className="the-end">
          <div className="the-end-one">
            <div className="the-end-1">
              <div className="the-end-1-1">
                <div>
                  <h2>MEDDICAL</h2>
                </div>
                <div className="alike">
                  <p>Leading the Way in Medical</p>
                  <p>Execellence, Trusted Care.</p>
                </div>
              </div>
              <div className="the-end-1-2">
                <div>
                  <h4>Important Links</h4>
                </div>
                <div className="alike">
                  <p>Appointment</p>
                  <p>Doctors</p>
                  <p>Services</p>
                  <p>About Us</p>
                </div>
              </div>
              <div className="the-end-1-3">
                <div>
                  <h4>Contact Us</h4>
                </div>
                <div className="alike">
                  <p>Call: (237) 681-812-255</p>
                  <p>Email: fildineesoe@gmail.com</p>
                  <p>Address: 0123 Some place</p>
                  <p>Some country</p>
                </div>
              </div>
              <div className="the-end-1-4">
                <div>
                  <h4>Newsletter</h4>
                </div>
                <div>
                  <button>
                    Enter your email address
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="the-end-2">
              <div>
                <p>© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</p>
              </div>
              <div>
                <span>
                  <i className="fa-sharp fa-solid fa-circle-info"></i>
                </span>
                <span>
                  <i className="fa-brands fa-facebook"></i>
                </span>
                <span>
                  <i className="fa-solid fa-camera"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default kubet;
