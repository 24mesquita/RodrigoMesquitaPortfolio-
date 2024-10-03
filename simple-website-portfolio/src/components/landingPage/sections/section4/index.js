import React from 'react';
import './index.css';
import BG from '../../../../assets/images/pastelnata.jpg';
import BRAIN from '../../../../assets/images/brain.svg';

//get grid from mui
import { TextField, Button, Grid, Container, Typography, LinearProgress } from '@mui/material';

function Section4() {
  return (
    <>
      <Grid container sx={{
        backgroundColor: "#404040",
        justifyContent: "flex-start",
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
          mt: "80px",
          width: "100%",
        }}>
          <h1 className='titleSection2'>Contact</h1>
        </Grid>

        {/* Contact Form Section */}
        <Grid item  sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
          width: "100%",  // Ensure the form container takes full width
          maxWidth: "600px",  // But not exceed 600px
        }}>
          <TextField
            label="Name"
            fullWidth
            variant="outlined"
            sx={{
              width: "100%",  // Take full width of the container
              marginBottom: "15px",
              backgroundColor: "#2D2D2D",
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'transparent',  // Default border color
                  borderRadius: '0',  // Remove border radius
                },
                '&:hover fieldset': {
                  borderColor: 'transparent',  // Border color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#fff',  // Border color on focus
                },
                '& input': {
                  color: '#fff',  // Text color
                },
              },
              '& .MuiInputLabel-root': {
                color: '#fff',  // Label color
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#fff',  // Label color on focus
              },
            }}
          />
          
          <TextField
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            sx={{
              width: "100%",  // Take full width of the container
              marginBottom: "15px",
              backgroundColor: "#2D2D2D",
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'transparent',  // Default border color
                  borderRadius: '0',  // Remove border radius
                },
                '&:hover fieldset': {
                  borderColor: 'transparent',  // Border color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#fff',  // Border color on focus
                },
                '& input': {
                  color: '#fff',  // Text color
                },
              },
              '& .MuiInputLabel-root': {
                color: '#fff',  // Label color
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#fff',  // Label color on focus
              },
            }}
          />
          
          <TextField
            label="Description"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            sx={{
              width: "100%",  // Take full width of the container
              marginBottom: "15px",
              backgroundColor: "#2D2D2D",
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'transparent',  // Default border color
                  borderRadius: '0',  // Remove border radius
                },
                '&:hover fieldset': {
                  borderColor: 'transparent',  // Border color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#fff',  // Border color on focus
                },
                '& textarea': {
                  color: '#fff',  // Text color for multiline input
                },
              },
              '& .MuiInputLabel-root': {
                color: '#fff',  // Label color
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#fff',  // Label color on focus
              },
            }}
          />

          <Button 
            variant="contained" 
            sx={{ 
                borderRadius: "0",  // Remove border radius
              width: "100%",  // Take full width of the container
              backgroundColor: "#000", 
              '&:hover': {
                backgroundColor: "#333",  // Slightly lighter black on hover
              },
              color: "#fff"  // Ensure the text color is white
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Section4;