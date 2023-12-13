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
import AppBarFunction from './AppBar';
import PetsIcon from '@mui/icons-material/Pets';
import { Link as RouterLink } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
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

export default function Animal() {

  

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

/*
const cards = [
  {
    id: 1,
    image: 'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
    title: 'Animal 1',
  },
  {
    id: 2,
    image: 'https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg',
    title: 'Animal 2',
  },
  {
    id: 3,
    image: 'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
    title: 'Animal 3',
  },
  {
    id: 4,
    image: 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
    title: 'Animal 4',
  },
  {
    id: 5,
    image: 'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
    title: 'Animal 5',
  },
  {
    id: 6,
    image: 'https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg',
    title: 'Animal 6',
  },
  {
    id: 7,
    image: 'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
    title: 'Animal 7',
  },
  {
    id: 8,
    image: 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
    title: 'Animal 8',
  },
  {
    id: 9,
    image: 'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
    title: 'Animal 9',
  },
  {
    id: 10,
    image: 'https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg',
    title: 'Animal 10',
  },
  {
    id: 11,
    image: 'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
    title: 'Animal 11',
  },
  {
    id: 12,
    image: 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
    title: 'Animal 12',
  },
  // Add more objects for each card
];

// TODO remove, this demo shouldn't need to reset the theme.
//const defaultTheme = createTheme();
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#ad1457', // Purple color
    },
  },
});
export default function Animal() {
 
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <AppBarFunction/>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="#ad1457"
              gutterBottom
            >
              Animals
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py:0 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={card.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" color="#ad1457">
                      {card.title}
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Apply to Adoption</Button>
                    <Button size="small">See Details</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
       
      </Box>
    </ThemeProvider>
  );
}
*/