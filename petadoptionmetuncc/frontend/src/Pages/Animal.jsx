import React, { useState } from "react";
import { Button, Link } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBarFunction from './AppBar';
import PetsIcon from '@mui/icons-material/Pets';
import { Link as RouterLink } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios  from 'axios';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#ad1457', // Purple color
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

export default function Animal() {
  const [petsList, setPetsList] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.post('http://localhost:5000/show');
      console.log(response.data.pets);
      setPetsList(response.data.pets)

    } catch (error) {
      console.log(error.response);
      alert(error.response.data.message);
    }
  };
  
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline  />
      <Box >
      <AppBarFunction />
      <main >
        <Box sx={{ pt: 2, pb: 6 }}>
          <Container maxWidth="md">
            <Typography style={{ marginBottom: '-8rem' }} component="h1" variant="h2" align="center" color="#ad1457" gutterBottom>
              Animals
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {petsList.map((pet) => (
              <Grid item key={pet.petID} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '105%',
                    }}
                    image={pet.pet_img}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      color="primary.main"
                      align="center"
                      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      <PetsIcon sx={{ marginRight: 1 }} />
                      {pet.petName}
                    </Typography>
                    <Typography>
                    <p><strong>Animal ID:</strong> {pet.petID}</p>
                    <p><strong>Gender:</strong> {pet.gender}</p>
                    <p><strong>Age:</strong> {pet.age}</p>
                    <p><strong>Details:</strong> {pet.info}</p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                 
                  <Link component={RouterLink} to="/adoptionform" >
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    startIcon={<FavoriteIcon/>}
                    
                  >
                  Apply Adoption
                  </Button> 
                  </Link>
                 
                
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </Box>
    </ThemeProvider>
    
  );
}

