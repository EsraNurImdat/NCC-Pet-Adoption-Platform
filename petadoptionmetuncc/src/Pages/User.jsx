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



const columns = [
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'surname', label: 'Surname', minWidth: 100 },
  {
    id: 'age',
    label: 'Age',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'email',
    label: 'Email',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'gender',
    label: 'Gender',
    minWidth: 100,
    align: 'right',
  },
];

  

function createData(name, surname, age, email, gender) {
  return { name, surname, age, email, gender };
}

const rows = [
  createData('Ali', 'Yılmaz', 45, 'ali@email.com', 'Male','Müezzin Hasan Efendi Sokak No:4 Lefke'),
  createData('Ali', 'Yılmaz', 45, 'ali@email.com','Male'),
  createData('Ayşe', 'Yılmaz', 43, 'ayse@email.com','Female'),
  createData('Ece', 'Güneş', 16, 'ece@email.com','Female'),
  createData('Ahmet', 'Yıldız', 78, 'ahmet@email.com','Male'),
  createData('Selin', 'Demir', 19, 'selin@email.com','Female'),
  createData('Mehmet', 'Yeşil', 44, 'mehmet@email.com','Male'),
  createData('Yunus', 'Alp', 45, 'yunus@email.com','Male'),
  createData('İbrahim', 'Yılmaz', 63, 'ibrahim@email.com','Male'),
  createData('Zeynep', 'Yıldız', 58, 'zeynep@email.com','Female'),
  createData('Begüm', 'Güneş', 25, 'begüm@email.com','Female'),
  createData('Efe', 'Demir', 33, 'efe@email.com','Male'),
  createData('Esra', 'Yeşil', 17, 'esra@email.com','Female'),
  createData('Emre', 'Sarı', 21, 'emre@email.com','Male'),
  createData('Cemre', 'Mavi', 18, 'cemre@email.com','Female'),
  createData('Zeki', 'Alp', 15, 'zeki@email.com','Male'),
  createData('NUr', 'Alp', 10, 'nur@email.com','Female'),
];

export default function UserTable() {
    const userInformation = [
      { label: 'First Name', value: "firstName" },
      { label: 'Last Name', value: "lastName" },
      { label: 'Age', value: "age" },
      { label: 'Email', value: "email" },
      { label: 'Gender', value: "gender" },
      { label: 'Address', value: "address" },
    ];
  
    return (
      <div style={{ textAlign: 'center' }}>
        <AppBarFunction />
        <Box sx={{ bgcolor: 'background.paper', pt: 4, pb: 6 }}>
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
                <TableCell style={{ fontWeight: 'bold' }}>Attribute</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userInformation.map((info) => (
                <TableRow key={info.label}>
                  <TableCell>{info.label}</TableCell>
                  <TableCell>{info.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
    /*
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortedRows, setSortedRows] = useState([...rows]);
  const [sortDirection, setSortDirection] = useState(undefined);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSortByAge = () => {
    if (sortDirection === 'asc') {
      setSortDirection('desc');
      setSortedRows([...rows].sort((a, b) => b.age - a.age));
    } else {
      setSortDirection('asc');
      setSortedRows([...rows].sort((a, b) => a.age - b.age));
    }
  };

  return (
   
    <Paper style={{ width: '100%', overflow: 'hidden' }}>
        <AppBarFunction/>
      <TableContainer style={{ maxHeight: 'calc(100vh - 64px)' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth, fontWeight: 'bold', padding: '5px 30px' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.email}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} style={{ padding: '18px 40px' }}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={sortedRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <TableCell>
        <button onClick={handleSortByAge}>Sort By Age</button>
      </TableCell>
    </Paper>
    
  );
}
*/