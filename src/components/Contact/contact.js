import React from 'react';
import './contact.css';
import FrontendImg from '../../assets/frontend.png';
import BackendImg from '../../assets/backend.png';
import FullstackImg from '../../assets/fullstack.png';
import EcommerceImg from '../../assets/ecommerce.png';
import fbIcon from '../../assets/facebook.png';
import igIcon from '../../assets/instagram.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';

const Contact = () => {
    return (
        <section id="contactPage">
            <div id="services">
                <h1 className="servicePageTitle">Service Offer</h1>
                <p className="serviceDesc">
                    I love crafting websites with great care and expertide by offerring services: <br/>front and back-end development, Resposive Design, Full-stack development, and E-commerce ideas.
                </p>
                <div className="serviceImgs">
                    <div className="serviceContainer">
                        <img src={FrontendImg} alt="Service" className="serviceImg" style={{width: '200px', height: 'auto'}}></img>
                            <span className="serviceImgText"><p1>Front-end development</p1></span>
                    </div>
                    <div className="serviceContainer">
                        <img src={FullstackImg} alt="Service" className="serviceImg" style={{width: '200px', height: 'auto'}}></img>
                            <span className="serverImgText"><p1>Full-stack</p1></span>
                    </div>
                    <div className="serviceContainer">
                        <img src={EcommerceImg} alt="Service" className="serviceImg" style={{width: '200px', height: 'auto'}}></img>
                            <span className="serverImgText"><p1>E-commerce solutions</p1></span>
                    </div>
                    <div className="serviceContainer">
                        <img src={BackendImg} alt="Service" className="serviceImg" style={{width: '200px', height: 'auto'}}></img>
                            <span className="serverImgText"><p1>Back-end development</p1></span>
                    </div>
                </div>
            </div>
            <div id="contact">
                <h1 className="servicePageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out your details in the email form below for discussing work opportunity.</span>
                    <form className="contactForm">
                        <input type="text" className="firstName" placeholder='First name' />
                        <input type="text" className="lastName" placeholder='Last name' />
                        <input type="tel" className="phoneNum" placeholder='Phone number' />
                        <input type="email" className="email" placeholder='Email address' />
                        <textarea  className="message" name="message" rows="5" placeholder='Addition message' />
                        <button type='submit' value='send' className="submitBtn">Submit</button>
                        <div className="links">
                            <img src={fbIcon} alt="Facebook" className="link" style={{width: '40px', height: 'auto'}}/>
                            <img src={igIcon} alt="Instagram" className="link" style={{width: '40px', height: 'auto'}}/>
                            <img src={twitterIcon} alt="Twitter" className="link" style={{width: '40px', height: 'auto'}}/>
                            <img src={youtubeIcon} alt="Youtube" className="link" style={{width: '40px', height: 'auto'}}/>
                        </div>
                    </form>
            </div>
        </section>
    )
}

export default Contact;