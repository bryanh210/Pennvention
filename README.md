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



model creation:
```
node_modules\.bin\sequelize model:create --name User --attributes email:string,hash:string,salt:string,role:string
node_modules\.bin\sequelize model:create --name Student --attributes firstName:string,lastName:string,phoneNumber:string,skypeUsername:string,typeOfStudent:string,school:string,expectedYearOfGraduation:string
node_modules\.bin\sequelize model:create --name StudentMajor --attributes major:string
node_modules\.bin\sequelize model:create --name Mentor --attributes approved:boolean,firstName:string,lastName:string,phoneNumber:string,skypeUsername:string,biography:text
node_modules\.bin\sequelize model:create --name MentorExpertise --attributes subject:string
node_modules\.bin\sequelize model:create --name Judge --attributes approved:boolean,phoneNumber:string,biography:text
node_modules\.bin\sequelize model:create --name JudgeExpertise --attributes subject:string
node_modules\.bin\sequelize model:create --name Admin --attributes securityQuestion:string,securityAnswer:string
node_modules\.bin\sequelize model:create --name TeamStrength --attributes strength:string
node_modules\.bin\sequelize model:create --name TeamWeakness --attributes weakness:string
node_modules\.bin\sequelize model:create --name TeamMentorExpertiseRequested --attributes expertise:string
node_modules\.bin\sequelize model:create --name Team --attributes name:string,projectName:string,projectIdea:text,deckLink:string,videoLink:string
node_modules\.bin\sequelize model:create --name Iteration --attributes competitionPeriod:string
node_modules\.bin\sequelize model:create --name TeamLogo --attributes logoPicture:blob
node_modules\.bin\sequelize model:create --name Stage --attributes name:string,dateToRevealInformation:date
node_modules\.bin\sequelize model:create --name QualifyingTeam --attributes
node_modules\.bin\sequelize model:create --name SponsorAward --attributes amount:integer,name:string,description:text
node_modules\.bin\sequelize model:create --name TechAward --attributes amount:integer,place:string,description:text
node_modules\.bin\sequelize model:create --name TeamScore --attributes comment:text
node_modules\.bin\sequelize model:create --name Rubric --attributes
node_modules\.bin\sequelize model:create --name Question --attributes question:text,maxScore:integer
node_modules\.bin\sequelize model:create --name Mark --attributes score:integer
```
