// import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Navbar from "./Navbar"
import image from "../assets/image.jpg"
function Home() {
  return (
    <div>
      {/* <Navbar /> */}

      <section className="intro-container">
      <div className='navbar'>
      <Navbar />
      </div>
    <div className='inside-container'>
        <div className="intro-text">
          <h1>Welcome to TimeMerge!</h1>
          <h3>Effortless Time Zone Collaboration for Remote Teams</h3>
          <p>
            Are you part of a remote team spread across different time zones? <br />
            TimeMerge is your ultimate solution for seamless connection and enhanced collaboration. <br />
            Input your time zone, and let TimeMerge handle the rest!
          </p>
          <Link className="link" to="/api">
            Get Started!
          </Link>
        </div>

        <div className="intro-image">
          <img src={image} alt="TimeMerge" />
        </div>
        </div>
      </section>
    </div>
  );
}

export default Home;