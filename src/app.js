const express = require('express');

const app = express()
const PORT = 8000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/about', (req, res) => {
  res.send('About route 🎉 ')
})

app.get('/contact', (req, res) => {
    res.send('contact route 🎉 ')
  })
  app.get('/signout', (req, res) => {
    res.send('signout routesssssssssss 🎉 ')
  })
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})