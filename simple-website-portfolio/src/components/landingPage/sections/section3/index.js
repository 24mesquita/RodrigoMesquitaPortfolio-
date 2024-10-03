import React from 'react';
import './index.css';
import BG from '../../../../assets/images/pastelnata.jpg';
import BRAIN from '../../../../assets/images/brain.svg';


//get grid from mui
import {Grid, Container, Typography, LinearProgress} from '@mui/material';


function Section2() {
  return (
    <>


<Grid container sx={{
    backgroundColor: "#2D2D2D",
    justifyContent: "flex-start",  // Adjusted to start content at the top
    minHeight: "100vh",
    width: "100vw",
    position: "relative",
    flexDirection: "column", 
    alignItems: "center", 
    padding: "32px",
}}> 
    {/* Header Section */}
    <Grid item xs={12} sx={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        mt: "80px",  // Changed from position absolute to margin-top
        width: "100%",
    }}>
        <h1 className='titleSection2'>Skills</h1>
    </Grid>

    {/* Skill Boxes Section */}
    <Grid container item xs={11} md={10} sx={{
        display: "flex",
        justifyContent: "center",  
        alignItems: "flex-start", 
        flexWrap: "wrap", 
        mt: 5,  // Add margin-top for space between header and boxes
        paddingLeft: "16px",       
        paddingRight: "16px",
    }}>
        {/* Skill Box 1 */}
        <Grid item xs={12} sm={6} md={4} className='skillBox' 
            sx={{
                display: "flex", 
                flexDirection: "column", 
                alignItems: "flex-start", 
                textAlign: "left", 
                maxWidth: "400px", 
                padding: "10px",   
                order: { xs: 1, sm: 1, md: 1 },
            }}>
            <Typography variant="h6" sx={{color: "white"}}>React</Typography>
            <div style={{
                width: '100%',  
                height: '8px', 
                backgroundColor: '#555', 
                overflow: 'hidden',
                marginTop: '8px'
            }}>
                <div style={{
                    width: '90%',  
                    height: '100%',
                    backgroundColor: ' #fff',
                }}></div>
            </div>

            <Typography variant="h6" sx={{color: "white", marginTop: "15px"}}>MaterialUi</Typography>
            <div style={{
                width: '100%',  
                height: '8px', 
                backgroundColor: '#555', 
                overflow: 'hidden',
                marginTop: '8px'
            }}>
                <div style={{
                    width: '85%',  
                    height: '100%',
                    backgroundColor: ' #fff',
                }}></div>
            </div>

            <Typography variant="h6" sx={{color: "white", marginTop: "15px"}}>Laravel</Typography>
            <div style={{
                width: '100%',  
                height: '8px', 
                backgroundColor: '#555', 
                overflow: 'hidden',
                marginTop: '8px'
            }}>
                <div style={{
                    width: '70%',  
                    height: '100%',
                    backgroundColor: ' #fff',
                }}></div>
            </div>

            <Typography variant="h6" sx={{color: "white", marginTop: "15px"}}>Php</Typography>
            <div style={{
                width: '100%',  
                height: '8px', 
                backgroundColor: '#555', 
                overflow: 'hidden',
                marginTop: '8px'
            }}>
                <div style={{
                    width: '75%',  
                    height: '100%',
                    backgroundColor: ' #fff',
                }}></div>
            </div>
        </Grid>

        {/* Skill Box 2 */}
        <Grid item xs={12} sm={6} md={4} className='skillBox' 
            sx={{
                display: "flex", 
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "400px", 
                padding: "10px",
                order: { xs: 2, sm: 3, md: 2 },
                height: "250px",
            }}>
            <img 
                src={BRAIN} 
                alt="Skill Icon" 
                style={{
                    maxWidth: '100%',    
                    maxHeight: '150px',   
                    width: 'auto',        
                    height: 'auto',       
                }} 
            />
        </Grid>

        {/* Skill Box 3 */}
        <Grid item xs={12} sm={6} md={4} className='skillBox' 
            sx={{
                display: "flex", 
                flexDirection: "column", 
                alignItems: "flex-start", 
                maxWidth: "400px", 
                textAlign: "left", 
                padding: "10px", 
                order: { xs: 3, sm: 2, md: 3 },
            }}>
            <Typography variant="h6" sx={{color: "white"}}>NodeJs</Typography>
            <div style={{
                width: '100%',  
                height: '8px', 
                backgroundColor: '#555', 
                overflow: 'hidden',
                marginTop: '8px'
            }}>
                <div style={{
                    width: '80%',  
                    height: '100%',
                    backgroundColor: ' #fff',
                }}></div>
            </div>

            <Typography variant="h6" sx={{color: "white", marginTop: "15px"}}>.Net</Typography>
            <div style={{
                width: '100%',  
                height: '8px', 
                backgroundColor: '#555', 
                overflow: 'hidden',
                marginTop: '8px'
            }}>
                <div style={{
                    width: '70%',  
                    height: '100%',
                    backgroundColor: ' #fff',
                }}></div>
            </div>

            <Typography variant="h6" sx={{color: "white", marginTop: "15px"}}>C#</Typography>
            <div style={{
                width: '100%',  
                height: '8px', 
                backgroundColor: '#555', 
                overflow: 'hidden',
                marginTop: '8px'
            }}>
                <div style={{
                    width: '90%',  
                    height: '100%',
                    backgroundColor: ' #fff',
                }}></div>
            </div>

            <Typography variant="h6" sx={{color: "white", marginTop: "15px"}}>VisualBasic</Typography>
            <div style={{
                width: '100%',  
                height: '8px', 
                backgroundColor: '#555', 
                overflow: 'hidden',
                marginTop: '8px'
            }}>
                <div style={{
                    width: '60%',  
                    height: '100%',
                    backgroundColor: ' #fff',
                }}></div>
            </div>
        </Grid>
    </Grid>
</Grid>




    </>
    
  );
}

export default Section2;





