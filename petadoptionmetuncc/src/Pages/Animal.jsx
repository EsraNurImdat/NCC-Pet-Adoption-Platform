import * as React from 'react';
import Button from '@mui/material/Button';
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
import  { useState, useEffect } from 'react';
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
];

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#ad1457', // Purple color
    },
  },
});

export default function Animal() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/animals')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          setAnimals(data);
        } else {
          console.warn('Empty response received from the server.');
        }
      })
      .catch((error) => console.error('Hata:', error));
  }, []);
  
  console.log("data",animals);
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <AppBarFunction />
      <main>
        <Box sx={{ bgcolor: 'background.paper', pt: 2, pb: 6 }}>
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
                    <Typography gutterBottom variant="h5" component="h2" color="primary.main">
                      {card.title}
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Apply to Adoption
                    </Button>
                    <Button size="small" color="primary">
                      See Details
                    </Button>
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
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
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