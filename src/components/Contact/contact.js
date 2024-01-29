import React from 'react';
import './contact.css';
import FrontendImg from '../../assets/frontend.png';
import BackendImg from '../../assets/backend.png';
import FullstackImg from '../../assets/fullstack.png';
import EcommerceImg from '../../assets/ecommerce.png';


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
                            <span className="serverImgText"><p1>Front-end development</p1></span>
                    </div>
                    <div className="serviceContainer">
                        <img src={FullstackImg} alt="Service" className="serviceImg" style={{width: '200px', height: 'auto'}}></img>
                            <span className="serverImgText"><p1>Front-end development</p1></span>
                    </div>
                    <div className="serviceContainer">
                        <img src={EcommerceImg} alt="Service" className="serviceImg" style={{width: '200px', height: 'auto'}}></img>
                            <span className="serverImgText"><p1>Front-end development</p1></span>
                    </div>
                    <div className="serviceContainer">
                        <img src={BackendImg} alt="Service" className="serviceImg" style={{width: '200px', height: 'auto'}}></img>
                            <span className="serverImgText"><p1>Front-end development</p1></span>
                    </div>
                </div>
            </div>
            <div id="contact">

            </div>
        </section>
    )
}

export default Contact;