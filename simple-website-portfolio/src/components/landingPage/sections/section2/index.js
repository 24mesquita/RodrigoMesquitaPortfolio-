import React from 'react';
import './index.css';
import BG from '../../../../assets/images/bgs2.jpeg';

//get grid from mui
import { Grid } from '@mui/material';

function Section2() {
  return (
    <>
      <Grid container sx={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        justifyContent: "flex-start",  // Align content to the top
        alignItems: "flex-start",      // Align content to the top
        paddingTop: "50px",            // Padding for the title section
        height: "100vh",
        width: "100vw",
        position: "relative",
      }}>
        <Grid container xs={12} sx={{ justifyContent: "center", alignItems: "flex-start", width: "100%" }}>
          <Grid item xs={12} className='titleBoxSection2' sx={{ marginBottom: "0px" }}> {/* Title stays in place */}
            <h1 className='titleSection2'>About Me</h1>
          </Grid>
          <Grid item xs={11} md={8} sx={{ marginTop: "100px" }}> {/* Increased marginTop to move text down */}
            <p className='descriptionAbout' style={{ marginTop: "10px" }}> {/* Description with extra space */}
              I’m a 21 year old software developer with a strong passion for learning and a drive for success.
              I thrive in collaborative environments, where I can code and brainstorm creative solutions with my team.
              I love what I do, and I’m always eager to grow and take on new challenges.
            </p>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Section2;
