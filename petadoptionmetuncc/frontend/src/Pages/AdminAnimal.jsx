import * as React from 'react';
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
import PetsIcon from '@mui/icons-material/Pets';
import { Link as RouterLink } from "react-router-dom";
import AdminAnimalAppBarFunction from './AdminAnimalAppBar';
//It is the admin page where a user, when logged in as an admin, can view information about animals.
const cards = [
  {
    id: 1,
    image: 'https://pet-image-bucket.s3.amazonaws.com/Kakao.jpeg',
    title: 'Kakao',
    gender: "Male",
    age: "2",
    info:  "Friendly dog who loves to play"

   
  },
  {
    id: 2,
    image: 'https://pet-image-bucket.s3.amazonaws.com/Fluffy.jpeg',
    title: 'Fluffy',
    gender: "Female",
    age: "3",
    info:  "A playful cat with a fluffy coat."
  },
  {
    id: 3,
    image: 'https://pet-image-bucket.s3.amazonaws.com/Beyaz.jpeg',
    title: 'Beyaz',
    gender: "Male",
    age: "1",
    info:  "Adorable kitten with white whiskers."
  },
  
];

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

export default function AdminAnimal() {

  

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline  />
      <Box >
      <AdminAnimalAppBarFunction  />
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
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={card.image}
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
                      {card.title}
                    </Typography>
                    <Typography>
                    <p><strong>Animal ID:</strong> {card.id}</p>
                    <p><strong>Gender:</strong> {card.gender}</p>
                    <p><strong>Age:</strong> {card.age}</p>
                    <p><strong>Details:</strong> {card.info}</p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                 
                  <Link component={RouterLink} to="/adoptionform" > 
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

