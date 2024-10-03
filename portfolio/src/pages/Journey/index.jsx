import * as React from 'react';
import './index.css';
import { Link } from 'react-router-dom';


function Journey() {
 
  return (
    <div className='content'>
        <div className='container'>
            <section>
         
                <div className="main">
                <div className="about-text">
                  <h2 >24-07-2003</h2>
                  <h5 >How everything started</h5>
                  <p>It was on this day that I was born, in Póvoa de Varzim, neither I nor anyone else knew what I liked or what I wanted to be when I grew up. </p>
                </div>
  
              </div>
              <svg className="arrows" >
							<path className="a1" d="M0 0 L30 32 L60 0"></path>
							<path className="a2" d="M0 20 L30 52 L60 20"></path>
							<path className="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
              </section>
            
            
              <section >
     
                <div className="main">
                <div className="about-text">
                  <h2 >2009 / 2013</h2>
                  <h5 >Primary School</h5>
                  <p>Theres not much to say in this one because the only thing that i wanted is play football and eat junk food. Oh and i wanted to be a cop. </p>
                </div>
              </div>
	         
              </section>


            <section>
        
                <div className="main">
                <div className="about-text">
                  <h2 >2013 / 2017</h2>
                  <h5 >Middle School</h5>
                  <p>That's basically the same thing as the last one, only wanted eat junk food and play football, but in the end about 2016 / 2017 my parents gave me my first pc, and thats where the passion kicks in and i started to knew that my future was the technology because I loved to play videogames and in the head of a kid the technology is all around the videogames. </p>
                </div>
              </div>
	        
              </section>

              <section>
            
                <div className="main">
                <div className="about-text">
                  <h2>2017 / 2021</h2>
                  <h5 >High School</h5>
                  <p>High school, in high school I graduated in Management Information Technology
at Escola Secundária Rocha Peixoto, in the 11th grade I had my first class on web development, I hated it, but in the 12th grade I had to do a final project and I had to make a website, in the middle of the project I was passionate about web development. I also did 2 internships in the company Trium Sistemas Informáticos. </p>
                </div>
              </div>
              </section>

              <section>
              <div className="main">
                <div className="about-text">
                  <h2 >2021 / Current</h2>
                  <h5 >University</h5>
                  <p>Thats where I am now in the Instituto Politécnico de Viana Do Castelo, I'm loving it, I already did a lot of projects about the web development and now I know that this what I want. Can't wait to be in the field </p>
                </div>
              </div>
              </section>

              
        </div>
    </div>  
  );
}



export default Journey;

