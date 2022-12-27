const express = require('express');
const app = express();
const {static} = express;
const path = require('path');
const {db, Contact, syncAndSeed} = require('./db/Email')
const axios = require('axios');

app.use('/dist', static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));


app.get('/api/contacts', async (req, res, next) => {
  try {
    const contacts = await Contact.findAll();
    res.send(contacts)
    
  } catch (error) {
    next(error)
  }
})


const init = async () => {
  try {
    await db.authenticate();
    await syncAndSeed();

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`listening on port ${port}`))
    
  } catch (error) {
    console.log(error)
  }
}

init();