# express-passport-postgres
- ```npm dev``` to run the app

## Dev notes:
#### Windows: 
- ```set PATH=%PATH%;C:\Program Files\PostgreSQL\9.6\bin\```
- ```heroku pg:psql```
- ```node_modules\.bin\sequelize model:create --name User --attributes username:string, hash:string```
- ```node_modules\.bin\sequelize db:migrate```
- ```node_modules\.bin\sequelize db:migrate:undo```
- ```node_modules\.bin\sequelize help:migration:create```
#### Mac: 
- change all the above commands with a / instead of a \
