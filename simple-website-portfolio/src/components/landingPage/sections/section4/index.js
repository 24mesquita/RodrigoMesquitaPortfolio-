import React, { useState } from 'react';
import './index.css';
import { Grid, TextField, Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
import { ClipLoader } from 'react-spinners';

function Section4() {
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Email validation function
    const validateEmail = (email) => {
        // Check if email contains text before and after '@', and a valid domain format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { name: '', email: '', description: '' };

        // Name field validation
        if (!formData.name) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        // Email field validation
        if (!formData.email) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email format';
            isValid = false;
        }

        // Description field validation
        if (!formData.description) {
            newErrors.description = 'Description is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;  // Don't submit if the form is invalid
        }

        setLoading(true);

        emailjs.send('service_wji5su8', 'template_kbi1sda', formData, 'XpOGHHT8ludThwjWM')
            .then((response) => {
                toast.success('Email sent successfully!');
                setLoading(false);
                // Clear the form fields after submission
                setFormData({ name: '', email: '', description: '' });
                console.log('SUCCESS!', response.status, response.text);
            }, (error) => {
                toast.error('Failed to send email.');
                setLoading(false);
                console.log('FAILED...', error);
            });
    };

    return (
        <>
            <ToastContainer />

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
                <Grid item sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "40px",
                    width: "100%",
                    maxWidth: "600px",
                }}>
                    <TextField
                        label="Name"
                        fullWidth
                        name='name'  // Correct field name
                        variant="outlined"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}  // Check if there's an error
                        helperText={errors.name}  // Display the error message
                        sx={{
                            width: "100%",
                            marginBottom: "15px",
                            backgroundColor: "#2D2D2D",
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'transparent',
                                    borderRadius: '0',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'transparent',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#fff',
                                },
                                '& input': {
                                    color: '#fff',
                                },
                            },
                            '& .MuiInputLabel-root': {
                                color: '#fff',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: '#fff',
                            },
                        }}
                    />

                    <TextField
                        label="Email"
                        type="email"
                        name='email'  // Correct field name
                        fullWidth
                        variant="outlined"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}  // Check if there's an error
                        helperText={errors.email}  // Display the error message
                        sx={{
                            width: "100%",
                            marginBottom: "15px",
                            backgroundColor: "#2D2D2D",
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'transparent',
                                    borderRadius: '0',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'transparent',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#fff',
                                },
                                '& input': {
                                    color: '#fff',
                                },
                            },
                            '& .MuiInputLabel-root': {
                                color: '#fff',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: '#fff',
                            },
                        }}
                    />

                    <TextField
                        label="Description"
                        name='description'  // Correct field name
                        multiline
                        rows={4}
                        fullWidth
                        variant="outlined"
                        value={formData.description}  // Bind to description field
                        onChange={handleChange}
                        error={!!errors.description}  // Check if there's an error
                        helperText={errors.description}  // Display the error message
                        sx={{
                            width: "100%",
                            marginBottom: "15px",
                            backgroundColor: "#2D2D2D",
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'transparent',
                                    borderRadius: '0',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'transparent',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#fff',
                                },
                                '& textarea': {
                                    color: '#fff',
                                },
                            },
                            '& .MuiInputLabel-root': {
                                color: '#fff',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: '#fff',
                            },
                        }}
                    />

                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{
                            borderRadius: "0",
                            width: "100%",
                            backgroundColor: "#000",
                            '&:hover': {
                                backgroundColor: "#333",
                            },
                            color: "#fff",
                        }}
                    >
                        {loading ? <ClipLoader size={24} color="#fff" /> : 'Send Email'}
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}

export default Section4;
