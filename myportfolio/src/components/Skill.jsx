import React from 'react'
import {
    Html5TwoTone,
    JavaOutlined,
    JavaScriptOutlined,
    ConsoleSqlOutlined
  } from '@ant-design/icons';
const Skill = () => {
  return (
    <>
      <h1 className="sub-title">My <span>Skills</span></h1>
    <section className="section" id="skill">


        <div className="skill-intro">
            <div className="intro"><h1>My Skill</h1></div>
            <div className="cont">I am passionate in programming,and<br/> 
                I got certificate in C and DBMS from<br/>
                 Code I Technology and I also get certificate<br/> 
                 in java from hackerRank I am good in problem <br/> 
                solvin, I solved more than 85 problem question<br/> of hackerRank
            </div>
        </div>



        <div className="skills">
            <div className="skill">
             <div className="skill-name"><Html5TwoTone />HTML</div>
             <div className="skill-bar">
                 <div className="skill-per" per="90%" style={{ maxWidth:'90%' }}></div>
             </div>
            </div> 
            <div className="skill">
                <div className="skill-name"><JavaOutlined /> Java</div>
                <div className="skill-bar">
                    <div className="skill-per" per="60%" style={{ maxWidth:'60%' }}></div>
                </div>
               </div> 
               <div className="skill">
             <div className="skill-name"><JavaScriptOutlined /> Javascript</div>
             <div className="skill-bar">
                 <div className="skill-per" per="70%" style={{ maxWidth:'70%' }}></div>
             </div>
            </div> 
            <div className="skill">
                <div className="skill-name"><ConsoleSqlOutlined /> SQL</div>
                <div className="skill-bar">
                    <div className="skill-per" per="80%" style={{ maxWidth:'80%' }}></div>
                </div>
               </div>
               <div className="skill">
             <div className="skill-name">css</div>
             <div className="skill-bar">
                 <div className="skill-per" per="70%" style={{ maxWidth:'70%' }}></div>
             </div>
            </div>

            <div className="skill">
                <div className="skill-name">c++</div>
                <div className="skill-bar">
                    <div className="skill-per" per="50%"  style={{ maxWidth:'50%' }}></div>
                </div>
               </div>

               <div className="skill">
                <div className="skill-name">DS</div>
                <div className="skill-bar">
                    <div className="skill-per" per="70%" style={{ maxWidth:'70%' }}></div>
                </div>
               </div>  
         </div>
    </section>

    </>
  )
}

export default Skill
