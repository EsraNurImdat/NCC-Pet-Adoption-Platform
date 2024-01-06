import React, { useState } from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AdminAppBarFunction from "./AdminAppBar";

//The Admin Page is a page that displays all adoption forms received by users with the admin role. 
//On this page, the admin can view all the forms and either approve or reject them.

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#ad1457',
     
    },
  },

});

const AdminPage = () => {
  const [adoptionForms, setAdoptionForms] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phonenumber: "",
    address: "",
    animalID: "",
  });
  // Sample data for the table
  const TableInformation = [
    { id: 1, firstName: 'Name 1', lastName: "LName ", email:"example@metu.edu", phoneNo:"123", address: "aa", petid:"1"},
    { id: 1, firstName: 'Name 1', lastName: "LName ", email:"example@metu.edu", phoneNo:"123", address: "aa", petid:"1"},
    { id: 1, firstName: 'Name 1', lastName: "LName ", email:"example@metu.edu", phoneNo:"123", address: "aa", petid:"1"},
    { id: 1, firstName: 'Name 1', lastName: "LName ", email:"example@metu.edu", phoneNo:"123", address: "aa", petid:"1"},
    { id: 1, firstName: 'Name 1', lastName: "LName ", email:"example@metu.edu", phoneNo:"123", address: "aa", petid:"1"},
    { id: 1, firstName: 'Name 1', lastName: "LName ", email:"example@metu.edu", phoneNo:"123", address: "aa", petid:"1"},
    { id: 1, firstName: 'Name 1', lastName: "LName ", email:"example@metu.edu", phoneNo:"123", address: "aa", petid:"1"},
    { id: 1, firstName: 'Name 1', lastName: "LName ", email:"example@metu.edu", phoneNo:"123", address: "aa", petid:"1"},
    { id: 1, firstName: 'Name 1', lastName: "LName ", email:"example@metu.edu", phoneNo:"123", address: "aa", petid:"1"},
    { id: 1, firstName: 'Name 1', lastName: "LName ", email:"example@metu.edu", phoneNo:"123", address: "aa", petid:"1"},
    { id: 1, firstName: 'Name 1', lastName: "LName ", email:"example@metu.edu", phoneNo:"123", address: "aa", petid:"1"},
    { id: 1, firstName: 'Name 1', lastName: "LName ", email:"example@metu.edu", phoneNo:"123", address: "aa", petid:"1"},
    { id: 1, firstName: 'Name 1', lastName: "LName ", email:"example@metu.edu", phoneNo:"123", address: "aa", petid:"1"},
    { id: 1, firstName: 'Name 1', lastName: "LName ", email:"example@metu.edu", phoneNo:"123", address: "aa", petid:"1"},
    { id: 1, firstName: 'Name 1', lastName: "LName ", email:"example@metu.edu", phoneNo:"123", address: "aa", petid:"1"},
    { id: 1, firstName: 'Name 1', lastName: "LName ", email:"example@metu.edu", phoneNo:"123", address: "aa", petid:"1"},
    { id: 1, firstName: 'Name 1', lastName: "LName ", email:"example@metu.edu", phoneNo:"123", address: "aa", petid:"1"},
    { id: 1, firstName: 'Name 1', lastName: "LName ", email:"example@metu.edu", phoneNo:"123", address: "aa", petid:"1"},
    { id: 1, firstName: 'Name 1', lastName: "LName ", email:"example@metu.edu", phoneNo:"123", address: "aa", petid:"1"},
    { id: 1, firstName: 'Name 1', lastName: "LName ", email:"example@metu.edu", phoneNo:"123", address: "aa", petid:"1"},
    { id: 1, firstName: 'Name 1', lastName: "LName ", email:"example@metu.edu", phoneNo:"123", address: "aa", petid:"1"},
    { id: 1, firstName: 'Name 1', lastName: "LName ", email:"example@metu.edu", phoneNo:"123", address: "aa", petid:"1"},
    { id: 1, firstName: 'Name 1', lastName: "LName ", email:"example@metu.edu", phoneNo:"123", address: "aa", petid:"1"},
    { id: 1, firstName: 'Name 1', lastName: "LName ", email:"example@metu.edu", phoneNo:"123", address: "aa", petid:"1"},
  ];

  const handleFormSubmission = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setFormData({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      phonenumber: data.get("phonenumber"),
      address: data.get("address"),
      animalID: data.get("animalID"),
    });

  };
   
  const handleDelete = () => {

   
 };

 const handleEdit = () => {

  
   
 };
  return (
    <ThemeProvider theme={customTheme}>
      <Box>
      <AdminAppBarFunction />
           
          <Container component="main" maxWidth="lg">
            <Box
              sx={{
                marginTop: 8,
              }}
            >
        <TableContainer component={Paper} style={{ width: '100%', margin: 'auto', marginTop: '20px'}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold' }}>Application ID:</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>First Name:</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Last Name:</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Email:</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Phone Number:</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Address:</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Pet ID:</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {TableInformation.map((info) => (
                <TableRow key={info.id}>
                  <TableCell>{info.id}</TableCell>
                  <TableCell>{info.firstName}</TableCell>
                  <TableCell>{info.lastName}</TableCell>
                  <TableCell>{info.email}</TableCell>
                  <TableCell>{info.phoneNo}</TableCell>
                  <TableCell>{info.address}</TableCell>
                  <TableCell>{info.petid}</TableCell>
            
                  <TableCell>
                    <Button variant="contained" size="small" sx={{ mt: 3, mb: 2, ":hover": { bgcolor: "#66bb6a" } }} onClick={() => handleEdit(info.id)}>
                      Accept
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" size="small" sx={{ mt: 3, mb: 2, ":hover": { bgcolor: "#d50000" } }}  onClick={() => handleDelete(info.id)}>
                      Reject
                    </Button>
                  </TableCell>
            
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
         
            </Box>
          </Container>
          <AdoptionFormList forms={adoptionForms} />
        
      </Box>
    </ThemeProvider>
  );
};

const AdoptionFormList = ({ forms }) => {
  return (
    <div>
      {forms.map((form, index) => (
        <div key={index}>
          <p>First Name: {form.firstName}</p>
          <p>Last Name: {form.lastName}</p>
          <p>Email: {form.email}</p>
          <p>Phone number: {form.phonenumber}</p>
          <p>Address: {form.address}</p>
          <p>ID of pet: {form.animalID}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminPage;
