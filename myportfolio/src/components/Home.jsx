import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons';
import myImg from '../assets/img/i.png';
import Typed from 'typed.js'; // Import Typed.js

const Home = () => {
    useEffect(() => {
        // Initialize Typed.js after component mounts
        const typed = new Typed('#element', {
            strings: ['Web Developer', 'Database administrator', 'Java developer'],
            typeSpeed: 50,
        });

        // Clean up Typed.js instance on component unmount
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <Row>
                <section className="home" id="home">
                    <Col span={18}>
                        <div className="home-content">
                            <h1>Hello, It's Me</h1>
                            <h1>Shubham Kumar</h1>
                            <h2>And I'm a</h2>
                            <span id="element"></span>
                            <div className="home-sci">
                                <a href="https://www.facebook.com/profile.php?id=100064764007563">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                </a>
                                <a href="https://web.whatsapp.com/">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </a>
                                <a href="https://mail.google.com/mail/u/0/?hl=en_GB#inbox">
                                    <FontAwesomeIcon icon={faGoogle} />
                                </a>
                                <a href="https://www.instagram.com/">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="img1">
                            <img src={myImg} alt="Shubham Kumar" />
                        </div>
                    </Col>
                </section>
            </Row>
        </>
    );
};

export default Home;
