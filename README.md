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
node_modules\.bin\sequelize model:create --name StudentDetails --attributes firstName:string,lastName:string,phoneNumber:string,skype:string,typeOfStudent:string,school:string,expectedYearOfGraduation:integer
node_modules\.bin\sequelize model:create --name StudentMajors --attributes major:string
node_modules\.bin\sequelize model:create --name MentorDetails --attributes approved:boolean,firstName:string,lastName:string,phoneNumber:integer,skype:string,bio:string
node_modules\.bin\sequelize model:create --name MentorExpertise --attributes subject:string
node_modules\.bin\sequelize model:create --name JudgeDetails --attributes approved:boolean,phoneNumber:string,bio:string
node_modules\.bin\sequelize model:create --name JudgeExpertise --attributes subject:string
node_modules\.bin\sequelize model:create --name AdminDetails --attributes securityQuestion:string,securityAnswer:string
node_modules\.bin\sequelize model:create --name TeamStrengths --attributes strength:string
node_modules\.bin\sequelize model:create --name TeamWeaknesses --attributes weakness:string
node_modules\.bin\sequelize model:create --name TeamMentorRequestedCategories --attributes category:string
node_modules\.bin\sequelize model:create --name Team --attributes name:string,projectName:string,projectIdea:string,deckLink:string,videoLink:string
node_modules\.bin\sequelize model:create --name Iteration --attributes competitionPeriod:string
node_modules\.bin\sequelize model:create --name TeamLogo --attributes logoPicture:string
node_modules\.bin\sequelize model:create --name StageDetails --attributes name:string,dateToRevealInfo:date
node_modules\.bin\sequelize model:create --name QualifyingTeams --attributes 
node_modules\.bin\sequelize model:create --name SponsorAwards --attributes amount:integer,name:string
node_modules\.bin\sequelize model:create --name TechAwards --attributes amount:integer,place:string
node_modules\.bin\sequelize model:create --name TeamScore --attributes comment:string
node_modules\.bin\sequelize model:create --name Rubric --attributes 
node_modules\.bin\sequelize model:create --name Question --attributes question:string,outOf:integer
node_modules\.bin\sequelize model:create --name Mark --attributes score:integer
```
