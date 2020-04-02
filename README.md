# CRUD

Simple NodeJS CRUD (Create, Read, Update and Delete HTTP Verbs) using [Mongoose](https://www.npmjs.com/package/mongoose) and [Express.JS](https://expressjs.com/). 

#### Quick Start  

Create a ``NodeJS + MongoDB`` project on Openshift: 

![](https://github.com/cesarvr/crud-nodejs/blob/master/docs/start.gif?raw=true)

> In this example I reduce the memory consumptions to ``80MB`` because it works well enough for development. 


#### Delete

To remove this project: 

```sh
oc delete --all -l app=<name-of-your-app>
```

In this case I just need to do:

```sh
oc delete all -l app=nodejs-mongo-persistent
```

