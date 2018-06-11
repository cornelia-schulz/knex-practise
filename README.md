# knex-practise

1. yarn init -y 

2. yarn add knex sqlite3

3. yarn knex init  // creates a configuration file for knex

4. Create a migration with: yarn knex migrate:filename

5. under development in the knex config file add: useNullAsDefault: true

6. open up the newly created filename file in the migrations folder and fill in exports.up and exports.down

7. use DB Browser for SQLite to check the db has been created

8. you can use yarn knex migrate:rollback to run what's in exports.down

9. run yarn knex seed:make filename to create a file that will be used to populate the db, the file is create in the seeds folder

10. open up the seed file and replace table and coumn names with the correct data

11. run yarn knex seed:run

12. create an index.js file to run queries on the db