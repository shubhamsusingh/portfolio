import React from 'react'
import my from '../assets/img/my.jpg'
import cv from '../assets/img/cv.pdf'
import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons';

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="myimg">
          <img src={my} alt="" />
        </div>
        <div className="about-content">
          <h1>LET ME INTRODUCE MYSELF</h1>
          <h4>I am student of computer science currently i am in final year of BCA.</h4>
          <h4>My field of interest's are building new Web technologies and products and I am also<br />
            fluent in classics like JAVA and OOPS,I earned certificates in java from hackerRank.<br />
            I fell in love with programming and I have at least learnt some thing, I think...🤷‍♂️</h4>
          <div className="buttons">
            {/* <a href={cv}>  <button className="btn">Download Resume.</button></a> */}

            <a href={cv}><Button type="primary" shape="round" icon={<DownloadOutlined />} >
              Download
            </Button>
            </a>

          </div>
        </div>
      </section>
    </>
  )
}

export default About
