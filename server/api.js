const express = require('express')
const path = require('path')
const cors = require('cors')

const games = require('./games.json')

const port = 5000;

const app = express()
app.use(cors())
app.use(express.json())
app.use('/public', express.static(path.resolve(__dirname, 'public')));


app.get('/games', (req, res) => {
  return res.json(games)
})

app.post('/contact', (req, res) => {
  const { name, email, phone} = req.body;

  if(!name.length){
    return res.status(400).send('Nome inválido')
  }

  if(!email.length){
    return res.status(400).send('E-mail inválido')
  }

  if(!phone.length){
    return res.status(400).send('Telefone inválido')
  }

  return res.send('Mensagem enviada com sucesso.')

})

app.listen(port, () => {
  console.log(`Api running in http://localhost:${port}`);
})