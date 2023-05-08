# Node JS | Express | Postgres and Sequalize

- GET     `api/tutorials`	            get all Tutorials
- GET     `api/tutorials/:id`         get Tutorial by id
- POST    `api/tutorials`             add new Tutorial
- PUT     `api/tutorials/:id`         update Tutorial by id
- DELETE  `api/tutorials/:id`         remove Tutorial by id
- DELETE  `api/tutorials`             remove all Tutorials
- GET     `api/tutorials/published`   find all published Tutorials
- GET     `api/tutorials?title=[kw]`  find all Tutorials which title contains 'kw'


### Testing the APIs
Run our Node.js application with command: `node server.js`.

Using Postman, we're gonna test all the Apis above.
Note, You can also use ThunderClient for testing Rest Endpoints

- Create a new Tutorial using `POST /tutorials` Api

After creating some new Tutorials, you can check PostgreSQL table:
```testdb=# select * from tutorials;
 id |    title    |    description    | published |         createdAt          |         updatedAt
----+-------------+-------------------+-----------+----------------------------+----------------------------

```

- Retrieve all Tutorials using `GET /tutorials` Api


Check `tutorials` table after some rows were updated:
```testdb=# select * from tutorials;
 id |     title      |    description    | published |         createdAt          |         updatedAt
----+----------------+-------------------+-----------+----------------------------+----------------------------

```

- Find all Tutorials which title contains 'js': `GET /tutorials?title=js`


Tutorial with id=4 was removed from `tutorials` table:
```testdb=# select * from tutorials;
 id |     title      |    description    | published |         createdAt          |         updatedAt
----+----------------+-------------------+-----------+----------------------------+----------------------------

```

- Delete all Tutorials using `DELETE /tutorials` Api


Now there are no rows in `tutorials` table:
```testdb=# select * from tutorials;
 id | title | description | published | createdAt | updatedAt
----+-------+-------------+-----------+-----------+-----------
```

For more detail, please visit:

## Project setup
```
npm install
```

### Run
```
node server.js
```


## Next Steps ---------------

Github Actions for deployment -- To read
Deployment on Docker
Deployement on Kubtl
Deployment to Cpanel
Deployment on AWS



