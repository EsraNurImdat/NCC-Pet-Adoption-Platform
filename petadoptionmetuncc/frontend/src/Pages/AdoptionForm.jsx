import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import InputLabel from "@mui/material/InputLabel";
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import PhoneIcon from '@mui/icons-material/Phone';
import PetsIcon from '@mui/icons-material/Pets';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBarFunction from "./AppBar";
import {useNavigate} from "react-router-dom";
import { useState } from 'react';
import axios  from 'axios';

const customTheme = createTheme({
    palette: {
      primary: {
        main: '#ad1457', 
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundImage: 'url("https://s.tmimgcdn.com/scr/800x500/296200/premium-vektor-arkaplan-resimleri--yuksek-kaliteli-arkaplan--modern-hd-arka-plan-goruntuleri_296286-original.jpg")', 
            backgroundSize: 'cover',
            minHeight: '1000px',
          },
        },
      },
    },
  });

export default function AdoptionForm(
) {
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phonenumber: "",
    address: "",
    animalID: "",
  });

  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phonenumber: formData.phonenumber,
      address: formData.address,
      animalID: formData.animalID,
    };

    axios.post('http://localhost:5000/application', data)
      .then(function (response) {
        console.log(response);
        alert(response.data.message)
        navigate("/animal");

      })
      .catch(function (error) {
        console.log(error.response.data);
        alert(error.response.data.message)
      });


  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 


  return (
    <ThemeProvider theme={customTheme}>
      <Box>
    <React.Fragment>
    <AppBarFunction />
      <Container component="main" maxWidth="lg">
        <Box
          sx={{
            marginTop: 8,
          }}
        >
          <Grid container>
            <CssBaseline />
            
            <Grid item xs={32} sm={18} md={15} component={Paper} elevation={6} square>
              <Box  component="form" noValidate onSubmit={handleSubmit}
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="h1" variant="h4" marginBottom="10px" color="#ad1457">
                  Pet Adoption Form
                </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                    <InputLabel >First Name:</InputLabel>
                      <TextField
                        required
                        id="firstName"
                        name="firstName"
                        fullWidth
                        variant="standard"
                        color="warning"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <ContactEmergencyIcon />
                            </InputAdornment> 
                          ),
                        }}
                        onChange={handleChange}
                        value={formData.firstName}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <InputLabel >Last Name:</InputLabel>
                      <TextField
                        required
                        id="lastName"
                        name="lastName"
                        
                        fullWidth
                        //autoComplete="family-name"
                        variant="standard"
                        color="warning"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <FamilyRestroomIcon />
                            </InputAdornment> //buraya bak
                          ),
                        }}
                        onChange={handleChange}
                        value={formData.lastName}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <InputLabel >Email:</InputLabel>
                      <TextField
                        required
                        id="email"
                        name="email"
                        type="email"
                        color="warning"
                        fullWidth
                        variant="standard"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailIcon />
                            </InputAdornment>
                          ),
                        }}
                        onChange={handleChange}
                        value={formData.email}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <InputLabel >Phone number:</InputLabel>
                      <TextField
                        required
                        id="phonenumber"
                        name="phonenumber"
                        fullWidth
                        autoComplete="phonenumber"
                        variant="standard"
                        color="warning"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PhoneIcon />
                            </InputAdornment> 
                          ),
                        }}
                        onChange={handleChange}
                        value={formData.phonenumber}
                      />
                    </Grid>
                    <Grid item xs={12}>
                    <InputLabel >Address:</InputLabel>
                      <TextField
                        required
                        id="address"
                        name="address"
                        fullWidth
                        autoComplete="address"
                        variant="standard"
                        color="warning"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <HomeIcon />
                            </InputAdornment> 
                          ),
                        }}
                        onChange={handleChange}
                        value={formData.address}
                      />
                    </Grid>

                    <Grid item xs={12}>
                    <InputLabel >ID of pet you're applying for:</InputLabel>
                      <TextField
                        required
                        id="animalID"
                        name="animalID"
                        fullWidth
                        autoComplete="animalID"
                        variant="standard"
                        color="warning"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PetsIcon/>
                            </InputAdornment> 
                          ),
                        }}
                        onChange={handleChange}
                        value={formData.animalID}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}></Grid>
                    <Grid container item>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                          
                          mt: 3,
                          mb: 2,
                          ":hover": {
                            bgcolor: "#f06292",
                          },
                        }}
                       
                      >
                        Apply for Adoption
                      </Button>

                    </Grid>
                  </Grid>
                
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
    </Box>
    </ThemeProvider>
  );
}