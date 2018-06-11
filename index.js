const knex = require('knex')
const config = require('./knexfile').development
const db = knex(config)

function listAll() {
  db('tasks')
  .select()                   // this is a select * in sql
  .then((tasks) => {
    tasks.forEach(item => {
      console.log(`${item.id}: ${item.task}`)
    }) 
    db.destroy()             // this is only needed for console apps, it closes the process
  })
}

listAll()