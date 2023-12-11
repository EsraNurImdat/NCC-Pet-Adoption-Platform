const express = require('express');
const cors = require("cors");


const pool = require("/home/zeycan/Desktop/cloudProject/database.js");
const app = express();
app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 3001;



/*
app.post("/addanimal",(req,res)=>{

    const name = req.body["name"];
    const source = req.body["source"];
    const explanation = req.body["explanation"];

    const insertSTMT = `INSERT INTO animalimages (name,source,explanation) VALUES ('${name}','${source}','${explanation}');`;

    pool.query(insertSTMT)



});*/

app.get('/animals', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM animalimages;');
    res.json(result.rows);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);

});

