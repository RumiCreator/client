const express = require('express');
const Datastore = require('nedb');

const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

const Database = new Datastore('database.db');
Database.loadDatabase();

app.post('/', (request, response) => {
  const data = request.body;
  console.log('It seems that we have recieved a request!')
  console.log(`Body request: ${data}`)
  if(!Datastore.find({})
});

app.get('/', (request, response) => {
  // Yes, completely pointless, doesn't really matter though.
  
})
