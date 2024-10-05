import React, { useEffect } from 'react';
import './styleSection1.css';
import Video from '../../../../assets/images/background.mp4';

import { ReactComponent as Facebook } from '../../../../assets/images/icons/facebook.svg';
import { ReactComponent as Instagram } from '../../../../assets/images/icons/instagram.svg';
import { ReactComponent as LinkedIn } from '../../../../assets/images/icons/linkedin.svg';
import { ReactComponent as GitHub } from '../../../../assets/images/icons/github.svg';
import { ReactComponent as Twitter } from '../../../../assets/images/icons/twitter.svg';
import { ReactComponent as Spotify } from '../../../../assets/images/icons/spotify.svg';

//get grid from mui
import { Grid } from '@mui/material';

function Section1() {
  useEffect(() => {
    const videoElement = document.querySelector('video');
    if (videoElement) {
      videoElement.muted = true; // Ensure the video is muted
      videoElement.play().catch(error => {
        console.log('Video play failed:', error);
      });
    }
    // Remove border after 3s and 4s
    setTimeout(() => {
      document.querySelector('.subtitle').style.border = "none";
    }, 3000);

    setTimeout(() => {
      document.querySelector('.title').style.border = "none";
    }, 4000);

    // Ensure video plays on mobile devices


    // Suppress ResizeObserver loop error
    const resizeObserverErrorHandler = (e) => {
      if (e.message === 'ResizeObserver loop completed with undelivered notifications.') {
        e.stopImmediatePropagation();
      }
    };
    window.addEventListener('error', resizeObserverErrorHandler);

    return () => {
      window.removeEventListener('error', resizeObserverErrorHandler);
    };
  }, []);

  return (
    <>
      <video src={Video} autoPlay loop muted />
      <Grid container sx={{
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        position: "relative",
      }}>
        <Grid container xs={12} sx={{ alignItems: "center", height: "100%" }}>
          <Grid container xs={12} sx={{ justifyContent: "center", alignItems: "center", position: "absolute", width: "100%", height: "100%" }}>
            <Grid container xs={12} sx={{ justifyContent: "center", alignItems: "center" }}>
              <Grid item xs={12} className='TitleBox'>
                <div className='titleBoxDiv'>
                  <h1 className='title'>Hi, my name is Rodrigo</h1>
                </div>
              </Grid>
              <Grid item xs={12} className='subtitleBox'>
                <div className='subtitleBoxDiv'>
                  <h2 className='subtitle'>I'm a Full Stack Developer</h2>
                </div>
              </Grid>

              <Grid container xs={12} sx={{ justifyContent: "center", alignItems: "flex-end", gap: 5, padding: "16px 0px" }}>
                <Grid item className='socialMediaBox'>
                  <a href="https://www.facebook.com/profile.php?id=100006312317655" target="_blank" rel="noreferrer">
                    <Facebook alt="Facebook" className="facebook" />
                  </a>
                </Grid>
                <Grid item className='socialMediaBox'>
                  <a href="https://www.instagram.com/24rodrigovm/" target="_blank" rel="noreferrer">
                    <Instagram className="instagram" />
                  </a>
                </Grid>
                <Grid item className='socialMediaBox'>
                  <a href="https://www.linkedin.com/in/rodrigo-mesquita-446275173/" target="_blank" rel="noreferrer">
                    <LinkedIn alt="Linkedin" className="linkedin" />
                  </a>
                </Grid>
                <Grid item className='socialMediaBox'>
                  <a href="https://github.com/24mesquita" target="_blank" rel="noreferrer">
                    <GitHub alt="GitHub" className="gitHub" />
                  </a>
                </Grid>
                <Grid item className='socialMediaBox'>
                  <a href="https://twitter.com/24mesquita" target="_blank" rel="noreferrer">
                    <Twitter alt="Twitter" className="twitter" />
                  </a>
                </Grid>
                <Grid item className='socialMediaBox'>
                  <a href="https://open.spotify.com/user/217i6bvum4xyiotpygncbutaq?si=28aa967e342c4e39" target="_blank" rel="noreferrer">
                    <Spotify alt="spotify" className="spotify" />
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container xs={12} sx={{ justifyContent: "center", alignItems: "flex-end", height: "100%" }}>
            <div className='mouse'></div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Section1;