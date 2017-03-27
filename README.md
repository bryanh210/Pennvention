# express-passport-postgres
- ```npm dev``` to run the app

## Dev notes:
#### Windows: 
- to get postgres remote command line to heroku: ```set PATH=%PATH%;C:\Program Files\PostgreSQL\9.6\bin\```
- ```heroku pg:psql``` to connect to the heroku remote postgres instance
- ```node_modules\.bin\sequelize model:create --name User --attributes username:string, hash:string``` to create a new model
- ```node_modules\.bin\sequelize db:migrate``` to run all migrations that haven't been run yet
- ```node_modules\.bin\sequelize db:migrate:undo``` undo last migration
- ```node_modules\.bin\sequelize db:migrate:undo``` undo last migration
- ```node_modules\.bin\sequelize help:migration:create``` create new migration
#### Mac: 
- change all the above commands with a / instead of a \
