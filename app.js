const express = require('express')
const Model = require('./model')
const bodyParser = require('body-parser')
var cors = require('cors')


// initialize our express app
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.get('/', (req, res)=> {
  res.status(200).send({status: 'up and running'})
})


app.post('/api/form', (req, res)=> {
  console.log('body ->', req.body)
  let model = new Model(req.body)

  model.save(function(err){
    if(err){
      res.status(400)
      console.log(err)
    }else{
      res.status(200).send({resp:'ok'})
    }
  })
})

let model = new Model()

app.get('/api/form/:id', async function (req, res) {
  let id = req.params.id
  console.log('GET ', id)
  try{
    let response = await Model.findById(id)
    res.status(200).send(response)
  }catch(err){
    res.status(500).send({error: "Error handling request."})
    console.log("Error: ", err)
  }
})


app.put('/api/form/:id', async function (req, res) {
  let id = req.params.id
  console.log('PUT ', id)
  console.log('body ->', req.body)
  try{
    let response = await Model.update({_id: id}, req.body, {upsert: true})
    res.status(200).send(response)
  }catch(err){
    res.status(500).send({error: "Error handling request."})
    console.log("Error: ", err)
  }
})

app.del('/api/form/:id', async function (req, res) {
  let id = req.params.id
  console.log('DELETE ', id)

  try{
    let response = await Model.remove({ _id: id })
    res.status(200).send(response)
  }catch(err){
    res.status(500).send({error: "Error handling request."})
    console.log("Error: ", err)
  }
})

app.get('/api/form', async (req, res)=> {
  console.log('Get All')
  try{
    let response = await Model.find({})
    res.status(200).send(response)
  }catch(err){
    res.status(500).send({error: "Error handling request."})
    console.log("Error: ", err)
  }
})


app.listen(8080, () => {
  console.log('Server is up and running on port numner 8080')
})
