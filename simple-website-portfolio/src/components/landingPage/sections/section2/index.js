import React from 'react';
import './index.css';
import BG from '../../../../assets/images/bgs2.jpeg';

//get grid from mui
import {Grid, Container, Typography} from '@mui/material';


function Section2() {
  return (
    <>
    <Grid container sx={{
      backgroundImage: `url(${BG})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      justifyContent: "center",
      height: "100vh",
      width: "100vw",
      position: "relative",
    }}> 
      <Grid container xs={12} sx={{ justifyContent: "center", alignItems: "flex-start", position: "absolute", width: "100%", height: "100%" }}>
        <Grid container xs={12} sx={{ justifyContent: "center", alignItems: "flex-start" }}>
          <Grid item xs={12} className='titleBoxSection2' sx={{ marginBottom: "5px" }}> {/* Adjust margin-bottom */}
            <h1 className='titleSection2'>About Me</h1>
          </Grid>
        </Grid>
        <Grid container xs={11} md={8} sx={{ marginTop: "5px" }}> {/* Adjust margin-top */}
          <p className='descriptionAbout'>I’m a 21 year old software developer with a
            strong passion for learning and a drive for
            success. I thrive in collaborative
            environments, where I can code and
            brainstorm creative solutions with my team.
            I love what I do, and I’m always eager to
            grow and take on new challenges.</p>
        </Grid>
      </Grid>
    </Grid>
    </>
    
  );
}

export default Section2;





