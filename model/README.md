We are using MongoDB database because of its schemaless nature make it fit for Agile application development. 

To make things easier we use Mongoose and we configure the MongoDB connection following Openshift environment variable naming convention.


![](https://github.com/cesarvr/crud-nodejs/blob/master/docs/env_vars.png?raw=true)

> Environment variables that comes out-of-the-box with the NodeJS container.


We reuse that convention to build the URL: 

```js

let PASSWORD = process.env.MONGODB_PASSWORD || 'dev-password'
let USER = process.env.MONGODB_USER || 'dev-user'
let HOSTNAME = process.env.DATABASE_SERVICE_NAME || '127.0.0.1'
let DB = process.env.MONGODB_DATABASE || 'dev-database'

let URI = `mongodb://${USER}:${PASSWORD}@${HOSTNAME}:27017/${DB}`


//Connecting...
mongoose.connect(URI)
```

