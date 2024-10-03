
import React,  { useEffect } from 'react';
import './index.css';
import { Element, scroller } from 'react-scroll';

import Section1 from '../../components/landingPage/sections/section1/index';
import Section2 from '../../components/landingPage/sections/section2/index';
import Section3 from '../../components/landingPage/sections/section3/index';
import Section4 from '../../components/landingPage/sections/section4/index';


function LandingPage() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['section1', 'section2', 'section3', 'section4'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            scroller.scrollTo(sections[i], {
              duration: 500,
              delay: 0,
              smooth: 'easeInOutQuart',
            });
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Element name="section1" id="section1">
        <Section1 />
      </Element>
      <Element name="section2" id="section2">
        <Section2 />
      </Element>
      <Element name="section3" id="section3">
        <Section3 />
      </Element>
      <Element name="section4" id="section4">
        <Section4 />
      </Element>
    </>
  );
}

export default LandingPage;





