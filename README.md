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


## Nginx Configuration 
- Local Physical Server -
- - Navigate to nginx configuration file and add the block below
       ```server {
        # this server listens on port 80
        listen 5033 default_server;
        listen [::]:5033 default_server;
        
        # name this server "nodeserver", but we can call it whatever we like
        server_name tutorialapisv1;

        # the location / means that when we visit the root url (localhost:80/), we use this configuration
        # location /apis { for  http://localhost:80/apis
        location / { 
                # a bunch of boilerplate proxy configuration
                proxy_http_version 1.1;
                proxy_cache_bypass $http_upgrade;

                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-Forwarded-Proto $scheme;

                # the real magic is here where we forward requests to the address that the Node.js server is running on
                proxy_pass http://localhost:8083;
        }
    } ```

All your traffic recived through  [http://localhost:5033] will ne routed to your API [http://localhost:8083]


## Next Steps ---------------

* Github Actions for deployment -- To read
* Deployment on Docker
* Deployement on Kubtl
* Deployment to Cpanel
* Deployment on AWS

## More References
 * [Deploying Node JS on docker--- Using Express Server](https://nodejs.org/en/docs/guides/nodejs-docker-webapp)
 * [How to dockerize node js API](https://buddy.works/guides/how-dockerize-node-application)
 * [Dockerize Node JS APi which runs on NGINX Load Balancer](https://ashwin9798.medium.com/nginx-with-docker-and-node-js-a-beginners-guide-434fe1216b6b)

