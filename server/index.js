require('dotenv').config();
const express = require('express');
const {json} = require('body-parser');
const app = express();
const massive = require('massive');
const port = process.env.PORT || 3002;
const pc =  require('./controller');


massive( process.env.CONNECTION_STRING )
.then( dbInstace =>  
  // console.log('Copy of my DB: ', dbInstace);
  app.set('db', dbInstace)
)
.catch(erroe => console.log('DANGER! ERROR : ', error ));

app.use(json());

// ENDPOINT SET-UP
app.get('/api/products', pc.getAll )
app.post('/api/products', pc.addProduct)



app.listen(port, () => {
  console.log(`Server is UP and listening on prot ${port}`);
});