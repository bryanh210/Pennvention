# express-passport-postgres
- ```npm dev``` to run the app
- was created to separate from express-postgres which has the routes but didn't have the best boilerplate or routes. Was best to start with an ```express -f``` and not have to refactor everything.

## Dev notes:
#### Windows: 
- ```set PATH=%PATH%;C:\Program Files\PostgreSQL\9.6\bin\```
- ```heroku pg:psql```
- ```node_modules\.bin\sequelize model:create --name User --attributes username:string, hash:string```
- ```node_modules\.bin\sequelize db:migrate```
- ```node_modules\.bin\sequelize db:migrate:undo```
- ```node_modules\.bin\sequelize migration:create --name [new-migration]```
#### Mac: 
- change all the above commands with a / instead of a \
