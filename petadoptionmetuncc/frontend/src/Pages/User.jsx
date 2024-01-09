// ColumnGroupingTable.js

import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import AppBarFunction from './AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
export default function UserTable() {
  const [userInfo, setUserInfo] = useState([]);
  const [fIds, setFIds] = useState([]);
  const [fNames, setFnames] = useState([]);
  const [lNames, setLnames] = useState([]);
  const [emails, setEmails] = useState([]);
  const [phoneNums, setPnums] = useState([]);
  const [adrs, setAddrs] = useState([]);
  const [aIds, setAids] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.post('http://localhost:5000/getUser');
      console.log(response.data.user);
      setUserInfo(response.data.user)

      setFIds(response.data.formId);
      setAddrs(response.data.address);
      setFnames(response.data.firstName);
      setLnames(response.data.lastName);
      setEmails(response.data.userEmail);
      setPnums(response.data.phoneNum);
      setAids(response.data.petID);

    } catch (error) {
      console.log(error.response);
      alert(error.response.data.message);
    }
  };
  
  React.useEffect(() => {
    fetchData();
  }, []);

    return ( <Box sx={{backgroundImage:'url("https://s.tmimgcdn.com/scr/800x500/296200/premium-vektor-arkaplan-resimleri--yuksek-kaliteli-arkaplan--modern-hd-arka-plan-goruntuleri_296286-original.jpg")',backgroundSize: 'cover',
          minHeight: '1000px',}}>
      <ThemeProvider theme={customTheme}>
       
      <div style={{ textAlign: 'center' }}>
        <AppBarFunction />
        <Box sx={{ pt: 4, pb: 6 }}>
          <Container maxWidth="md">
            <Typography style={{ marginBottom: '-8rem' }} component="h2" variant="h3" align="center" color="#ad1457" gutterBottom>
              User Information
            </Typography>
          </Container>
        </Box>
        <TableContainer component={Paper} style={{ width: '50%', margin: 'auto', marginTop: '80px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold' }}>User Email</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>User Name</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>User Surname</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>User Password</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow key={userInfo.email}>
                  <TableCell>{userInfo.email}</TableCell>
                  <TableCell>{userInfo.fName}</TableCell>
                  <TableCell>{userInfo.lName}</TableCell>
                  <TableCell>{userInfo.pwd}</TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer component={Paper} style={{ width: '100%', margin: 'auto', marginTop: '20px'}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold' }}>Form Id:</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>First Name:</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Last Name:</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Email:</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Phone Number:</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Address:</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Pet ID:</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {emails.map((email,index) => (
                <TableRow key={index}>
                  <TableCell>{fIds[index]}</TableCell>
                  <TableCell>{fNames[index]}</TableCell>
                  <TableCell>{lNames[index]}</TableCell>
                  <TableCell>{emails[index]}</TableCell>
                  <TableCell>{phoneNums[index]}</TableCell>
                  <TableCell>{adrs[index]}</TableCell>
                  <TableCell>{aIds[index]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div></ThemeProvider></Box>
    );
  }
   