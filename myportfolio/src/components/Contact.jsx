import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Row, Col, Form, Input, Button } from 'antd';
const { TextArea } = Input;

const Contact = () => {
    return (
        <>

            <section className="contact" id="contact">
                <Row>
                    <Col span={14} offset={2}>
                        <div className="contact-text">
                            <h2>Contact Me</h2>
                            <h4>Let's Work together</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit<br />
                                . Provident assumenda necessitatibus, unde ipsam molestiae<br />
                                exercitationem voluptas, <br />
                                fugit, dolorem beatae eaque voluptatem? Aspernatur quos porro suscipit?</p>
                            {/* <!--</div>--> */}

                            <div className="contact-list">
                                <li><i className='bx bxl-gmail'></i>singhshubham68738@gmail.com</li>
                                <li><i className='bx bx-phone-call'></i>9334864117</li>

                                <div className="contact-icons">
                                    <a href="https://www.facebook.com/profile.php?id=100064764007563"><FontAwesomeIcon icon={faFacebookSquare} className='i' /></a>
                                    <a href="https://web.whatsapp.com/"><FontAwesomeIcon icon={faWhatsapp} /></a>
                                    <a href="https://mail.google.com/mail/u/0/?hl=en_GB#inbox"><FontAwesomeIcon icon={faGoogle} /></a>
                                    <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
                                </div>


                            </div>
                        </div>
                    </Col>
                    <Col span={7} style={{ marginRight: '10px' }}>
                        {/* <div className="contact-form" >
                            <form action="mailto:singhshubham68738@gmail.com" method="post" encType="text/plain" >
                                <input type="text" id="name" name="name" placeholder="Enter Your Name" required />
                                <input type="email" id="email" name="email" placeholder="xxxx2151@gmail.com" required />

                                <input type="text" id="subject" name="subject" placeholder="Enter Your subject" />
                                <textarea id="textarea" name="textarea" cols="40" rows="10" placeholder="Enter your Name"></textarea>
                                <input type="submit" value="submit" className="send" />
                            </form>
                        </div> */}
                        <Row>
                            <Col span={24}>
                                <div className="contact-form" >
                                    {/* <form action="mailto:singhshubham68738@gmail.com" method="post" encType="text/plain" >
                                        <input type="text" id="name" name="name" placeholder="Enter Your Name" required />
                                        <input type="email" id="email" name="email" placeholder="xxxx2151@gmail.com" required />

                                        <input type="text" id="subject" name="subject" placeholder="Enter Your subject" />
                                        <textarea id="textarea" name="textarea" cols="40" rows="10" placeholder="Enter your Name"></textarea>
                                        <input type="submit" value="submit" className="send" />
                                    </form> */}
                                    <Form>
                                        <Row>
                                            <Col span={12}>
                                                <Form.Item>
                                                    <Input placeholder='Enter Name' />
                                                </Form.Item>
                                            </Col>
                                            <Col span={10} offset={2}>
                                                <Form.Item>
                                                    <Input type='email' placeholder='Enter email' />
                                                </Form.Item>
                                            </Col>
                                            <Col span={24}>
                                                <Form.Item>
                                                    <Input placeholder='Subject' />
                                                </Form.Item>
                                            </Col>
                                            <Col span={24}>
                                                <Form.Item>
                                                    <TextArea rows={4} id="textarea" className='textarea' placeholder='Write Your Intrest' />
                                                </Form.Item>
                                            </Col>
                                            <Col span={16} offset={8}>
                                                <Form.Item>
                                                    <Button type="primary" style={{ width: '10vw' }}>Submit</Button>
                                                </Form.Item>
                                            </Col>

                                        </Row>

                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>


        </>
    )
}

export default Contact
