var superagent = require('superagent')
var assert = require('chai').assert

const HOST = process.env.HOSTNAME || 'localhost'
const PROTOCOL = process.env.PROTOCOL || 'http'
const PORT = process.env.PORT || '8080'

let URL = `${PROTOCOL}://${HOST}:${PORT}`

describe('express rest api server', function(){
  var id

  it('post object', async function(){
    let r = await superagent.post(`${URL}/api/form`)
      .send({
        symptoms: 'Headache and Dry Caugh',
        diagnosed: false
      })

    console.log(r.status)
    console.log(r.body)
  })

  it('Get All', async function(){
    let resp = await superagent.get(`${URL}/api/form`)

    let list = resp.body
    
    assert.isArray(list)
    console.log('list: ', list)
    assert.isDefined(list[0]._id)
    assert.isDefined(list[0].symptoms)
    assert.isDefined(list[0].diagnosed)

    id = list[0]._id

  })

  it('Find By Id ', async function(){
    let resp = await superagent.get(`${URL}/api/form/${id}`)

    let item = resp.body
    assert.isDefined(item)
    assert.isDefined(item._id)
    assert.isDefined(item.symptoms)
    assert.isDefined(item.diagnosed)
  })


  it('updates an object', async function(){
    let resp = await superagent.put(`${URL}/api/form/${id}`)

    assert.isDefined(resp)
    let item = resp.body
    assert.isDefined(item)
  })

  it('updates an object', async function(){
    let resp = await superagent.put(`${URL}/api/form/${id}`).send({
      symptoms: 'Headache and Dry Cough',
      diagnosed: true
    })

    assert.isDefined(resp)
    let item = resp.body
    assert.isDefined(item)
    console.log(item)
  })

  it('removes an object', async function(){
    let resp = await superagent.del(`${URL}/api/form/${id}`)
     
    assert.isDefined(resp)

    let item = resp.body
    assert.isDefined(item)
    console.log(item)
  })      
})
