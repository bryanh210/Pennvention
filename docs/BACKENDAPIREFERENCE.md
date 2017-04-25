approvedStudentId# Contents

- [Introduction](#introduction)
- [Backend API Reference](#backend-api-refererence)
- [Login and Registration](#login-and-registration)
- [Students](#users)
  - User
- [Students](#students)
  - Student
  - StudentMajor
- [Teams](#teams)
  - Team
  - TeamLogo
  - TeamMentorExpertiseRequested
  - TeamStrength
  - TeamWeakness
- [Mentors](#mentors)
  - Mentor
  - MentorExpertise
- [Judges](#judges)
  - Judge
  - JudgeExpertise
- [TeamMentor](#teammentor)
- [TeamJudge](#teamjudge)
- [Admin](#admins)
- [Stages](#stages)
  - Iteration
  - Stage
  - QualifyingTeam
- [Winners and Awards](#winners-and-awards)
  - Sponsor awards
  - TechAwards
- [Score and Rubric](#score-and-rubric)
  - TeamScore
  - Rubric
  - Question
  - Mark

# Introduction

UPennTracker Backend

```
npm install
npm start
```

# Backend API Reference

**Base URL:** http:/localhost:3000/api/v1

All endpoints accept JSON data and return JSON data. All responses include
a boolean `success` field that indicates if request was successful.
You can also use the response status code to figure out if a request
was successful.

⚠️ All requests below with a 🔒 next to the title require authentication.

# Login and Registration

- `POST /register`: Register a new user. Does not automatically log user in.
  - Parameters:
    - `email`: Required String
    - `hash`: Required String
    - `salt`: Required String
    - `role`: Required String
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Registration successful

- `POST /login`: Log in as a pre-existing user.
  - Parameters:
    - `email`: Required String
    - `password`: Required String
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `401`: Bad email or password, includes `error` field indicating cause
    - `200`: Login successful

- `GET /login/success`: Check if the user is logged in.
  - Response codes:
    - `401`: User is not logged in
    - `200`: User is logged in

# Users

### User

- `GET /users`: Get all registered users in PennVention

  - Example response:

    ```javascript
    {
      "success": "true",
      "user": "users"
    }
    ```

- `GET /user/:UserId`: Get a user by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `POST /users`: Register a new user. Does not automatically log user in
  - Parameters:
    - `email`: Required String
    - `hash`: Required String
    - `salt`: Required String
    - `role`: Required String
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Registration successful

- `PATCH /user/:UserId`: Update properties of a user by their ID
  - Parameters:
    - `email`: Required String
    - `hash`: Required String
    - `salt`: Required String
    - `role`: Required String
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Update successful

- `DELETE /user/:UserId`: Delete a user by their ID
  - Response codes:
    - `200`: User successfully deleted

# Students

### Student

- `GET /students`: Get all registered students in PennVention

  - Example response:

    ```javascript
    {
      "success": "true",
      "user": "users"
    }
    ```

- `GET /student/:StudentId`: Get a user by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `POST /student`: Register a new user. Does not automatically log user in
  - Parameters:
    - `firstName`: Required String
    - `lastName`: Required String
    - `phoneNumber`: Required String
    - `skypeUsername`: String, Not Required
    - `typeOfStudent`: Required String (e.g. Undergraduate, Masters, PhD, MBA, Other/fill in)
    - `school`: Required String (e.g.SEAS, SAS, Wharton, Nursing, Med, Law, GSE, Other/fill in) (If not from Penn, please note university and respective school in "Other".)
    - `expectedYearOfGraduation`: Required Date (NOT SURE WHETHER THIS SHOULD BE DATE OR STRING ATTRIBUTE)
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Registration successful

- `PATCH /student/:StudentId`: Update properties of a user by their ID
  - Parameters:
    - `firstName`: Required String
    - `lastName`: Required String
    - `phoneNumber`: Required String
    - `skypeUsername`: String, Not Required
    - `typeOfStudent`: Required String (e.g. Undergraduate, Masters, PhD, MBA, Other/fill in)
    - `school`: Required String (e.g.SEAS, SAS, Wharton, Nursing, Med, Law, GSE, Other/fill in) (If not from Penn, please note university and respective school in "Other".)
    - `expectedYearOfGraduation`: Required Date (NOT SURE WHETHER THIS SHOULD BE DATE OR STRING ATTRIBUTE)
    - `TeamId`: Required String
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Update successful

- `DELETE /student/:StudentId`: Delete a user by their ID
  - Response codes:
    - `200`: User successfully deleted

### StudentMajor

- `GET /students/majors`: Get all majors for all users

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /student/major/:StudentMajorId`: Get a major by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```


- `GET /student/majors/:StudentId`: Get the majors for a user by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `POST /student/major/`: Create a major for a user by their ID
  - Parameters:
    - `StudentId`: Required String
    - `major`: Required String
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Registration successful

- `PATCH /student/major/:StudentMajorId`: Update a major for a user by their ID
  - Parameters:
    - `major`: Required String
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Registration successful

- `DELETE /student/major/:StudentMajorId`: Delete a major by their ID
  - Response codes:
    - `200`: Registration successful

# Teams

UPDATE THIS FOR THE SLIDE LINKS AND DECK LINKS

### Teams

- `GET /teams`: Get all registered teams in PennVention

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /team/:TeamId`: Get a team by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `POST /team`: Create a new team.
  - Parameters:
    - `name`: Required String
    - `projectName`: Required String
    - `projectDescription`: Required Text
    - `deckLink`: Required String
    - `videoLink`: Required String
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: New team successfully created

- `PATCH /team/:TeamId`: Update properties of a team by their ID
  - Parameters:
    - `name`: Required String
    - `projectName`: Required String
    - `projectDescription`: Required Text
    - `deckLink`: Required String
    - `videoLink`: Required String
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Update successful

- `DELETE /team/:TeamId`: Delete a team by their ID
  - Response codes:
    - `200`: Team successfully deleted

### TeamLogo

- `GET /teams/logos/`: Get the logo for all teams

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /team/logo/:TeamId`: Get the logo for a team by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `POST /team/logo`: Create the logo for a team by their ID
  - Parameters:
    - `TeamId`: Required String
    - `logoPicture`: Required Blob
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: New team successfully created

- `PATCH /team/logo/:TeamId/`: Update the logo for a team by their ID
  - Parameters:
    - `logoPicture`: Required Blob
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: New team successfully created

- `DELETE /team/logo/:TeamId`: Delete a logo for a team by their ID
  - Response codes:
    - `200`: Team successfully deleted

### TeamMentorExpertiseRequested

- `GET /teams/mentorExpertiseRequested`: Get all expertise for all teams

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /team/mentorExpertiseRequested/:TeamId`: Get the expertise for a team by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /team/mentorExpertiseRequested/:TeamMentorExpertiseRequestedId`: Get a expertise by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `POST /team/mentorExpertiseRequested`: Create a expertise for a team by their ID
  - Parameters:
    - `TeamId`: Required String
    - `expertise`: Required String
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: New team successfully created

- `PATCH /team/mentorExpertiseRequested/:TeamMentorExpertiseRequestedId`: Update a expertise for a team by their ID
  - Parameters:
s    - `expertise`: Required String
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: New team successfully created

- `DELETE /team/:TeamMentorExpertiseRequestedId`: Delete a expertise for a team by their ID
  - Response codes:
    - `200`: Team successfully deleted

### TeamStrength

- `GET /team/strengths/`: Get all strengths for all teams

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /team/strengths/:TeamId`: Get the strengths for a team by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /team/strength/:TeamStrengthId`: Get a strength by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `POST /team/strength`: Create a strength for a team by their ID
  - Parameters:
    - `TeamId`: Required String
    - `strength`: Required String
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: New team successfully created

- `PATCH /team/strength/:TeamStrengthId`: Update a strength for a team by their ID
  - Parameters:
    - `strength`: Required String
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: New team successfully created

- `DELETE /team/expertise/TeamMentorExpertiseRequested:Id`: Delete a expertise for a team by their ID
  - Response codes:
    - `200`: Team successfully deleted

### TeamWeakness

- `GET /team/weaknesses/`: Get all weaknesses for all teams

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /team/weaknesses/:TeamId`: Get the weaknesses for a team by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /team/weakness/:TeamWeaknessId`: Get a weakness by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `POST /team/weakness`: Create a weakness for a team by their ID
  - Parameters:
    - `TeamId`: Required String
    - `weakness`: Required String
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: New team successfully created


- `PATCH /team/weakness/:TeamWeaknessId`: Update a weakness for a team by their ID
  - Parameters:
    - `weakness`: Required String
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: New team successfully created

- `DELETE /team/weakness/:TeamMentorExpertiseRequested:Id`: Delete a weakness for a team by their ID
  - Response codes:
    - `200`: Team successfully deleted

# Mentors

### Mentor

- `GET /mentors`: Get all registered mentor in PennVention

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /mentor/:MentorId`: Get a mentor by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `POST /mentor/`: Register a new user as a mentor. Does not automatically log user in
  - Parameters:
    - `firstName`: Required String
    - `lastName`: Required String
    - `phoneNumber`: Required String
    - `skypeUsername`: String, Not Required
    - `biography`: Text, Not Required
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Registration successful

- `POST /mentor/approve/:MentorId`: Authenticate a mentor by their ID. Must be logged in as Admin
  - Parameters:
    - `MentorId`: Required String
    - `approved`: Required Boolean
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Successfully approved mentor.

- `PATCH /mentor/:MentorId`: Update properties of a mentor by their ID
  - Parameters:
    - `firstName`: Required String
    - `lastName`: Required String
    - `phoneNumber`: Required String
    - `skypeUsername`: String, Not Required
    - `biography`: Text, Not Required
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Update successful

- `DELETE /mentor/:MentorId`: Delete a mentor by their ID
  - Response codes:
    - `200`: User successfully deleted

### MentorExpertise

- `GET /mentors/expertise`: Get all expertise for all mentors

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /mentor/expertise/:MentorExpertiseId`: Get a expertise by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /mentor/expertise/:MentorId`: Get all expertise for a mentor by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `POST /mentor/expertise/`: Create a expertise for a mentor by their ID
  - Parameters:
    - `MentorId`: Required String
    - `expertise`: Required String
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Registration successful

- `PATCH /mentor/expertise/:MentorExpertiseId`: Update a expertise for a mentor by their ID
  - Parameters:
    - `MentorId`: Required String
    - `expertise`: Required String
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Registration successful

- `DELETE /mentor/expertise/:MentorExpertiseId`: Delete a expertise for a mentor by their ID
  - Parameters:
    - `MentorId`: Required String
  - Response codes:
    - `200`: User successfully deleted

# Judges

### Judge

- `GET /judges`: Get all registered judges in PennVention

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /judge/:JudgeId`: Get a judge by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `POST /judge`: Register a new user as a judge. Does not automatically log user in
  - Parameters:
    - `firstName`: Required String
    - `lastName`: Required String
    - `phoneNumber`: Required String
    - `skypeUsername`: String, Not Required
    - `biography`: Text, Not Required
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Registration successful

- `POST /judge/approve/:JudgeId`: Authenticate a judge by their ID. Must be logged in as Admin
  - Parameters:
    - `approved`: Required Boolean
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Successfully approved judge.

- `PATCH /judge/:JudgeId`: Update properties of a judge by their ID
  - Parameters:
    - `firstName`: Required String
    - `lastName`: Required String
    - `phoneNumber`: Required String
    - `skypeUsername`: String, Not Required
    - `biography`: Text, Not Required
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Update successful

- `DELETE /judge/:JudgeId`: Delete a judge by their ID
  - Response codes:
    - `200`: User successfully deleted

### JudgeExpertise

- `GET /judges/expertise`: Get all expertise for all judges

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /judge/expertise/:JudgeExpertiseId`: Get a expertise by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /judge/expertise/:JudgeId`: Get all expertise for a judge by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `POST /judge/expertise/`: Create a expertise for a judge by their ID
  - Parameters:
    - `JudgeId`: Required String
    - `expertise`: Required String
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Registration successful

- `PATCH /judge/expertise/:JudgeExpertiseId`: Update a expertise for a judge by their ID
  - Parameters:
    - `JudgeId`: Required String
    - `expertise`: Required String
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Registration successful

- `DELETE /judge/expertise/:JudgeExpertiseId`: Delete a expertise for a judge by their ID
  - Parameters:
    - `JudgeId`: Required String
  - Response codes:
    - `200`: User successfully deleted

# TeamMentor

- `GET /teams/mentors`: Get all mentors for all teams

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /team/mentors/:TeamId`: Get all the mentors for a team by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /teams/mentor/:MentorsId`: Get all the teams for a mentor by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

TRY TO MAKE THIS UNIQUE CONDITION?

- `POST /team/mentor/`: Assign a mentor to a team
  - Parameters:
    - `TeamId`: Required String
    - `MentorId`: Required String
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Mentor successfully assigned to team

- `DELETE /team/mentor/:TeamMentorId`: Delete a expertise for a judge by their ID
  - Response codes:
    - `200`: TeamMentor successfully deleted

# TeamJudge

- `GET /teams/judges`: Get all judges for all teams

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /team/judges/:TeamId`: Get all the judges for a team by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /teams/judge/:JudgesId`: Get all the teams for a judge by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

TRY TO MAKE THIS UNIQUE CONDITION?

- `POST /team/judge/`: Assign a judge to a team
  - Parameters:
    - `TeamId`: Required String
    - `MentorId`: Required String
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Mentor successfully assigned to team

- `DELETE /team/judge/:TeamJudgeId`: Delete a expertise for a judge by their ID
  - Response codes:
    - `200`: TeamMentor successfully deleted

# Admin

WE NEED TO WRITE ROUTES FOR LOGIN, SECURITY, AND PUT ALL ADMIN ONLY RELATED ACTIONS HERE.

# Stages

### Iteration

- `GET /iterations`: Get all the iterations

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /iteration/:competitionPeriod`: Get all the iterations for a specified competition period

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /iteration/:IterationId`: // Get an iteration by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `POST /iteration`: Create a new iteration
  - Parameters:
    - `competitionPeriod`: Required Date???
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Post successful

- `DELETE /iteration/:IterationId`: Delete an iteration by their ID
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Delete successful

### Stage

- `GET /stageDetails`: Get all the stageDetails

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /stageDetails/:IterationId`: Get all the stageDetails by their iteration

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /stageDetail/:StageId`: Get a stageDetail by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `POST /stageDetail`: Create a new stageDetail
  - Parameters:
    - `IterationId`: Required String
    - `name`: Required String
    - `dateToRevealInformation`: Required Date
    - `RubricId`: Required String
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Post successful

- `PATCH /stageDetail/:StageId`: Update a stageDetail by their ID
  - Parameters:
    - `IterationId`: Required String
    - `name`: Required String
    - `dateToRevealInformation`: Required Date
    - `RubricId`: Required String
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Update successful

- `DELETE /stageDetail/:StageId`: Delete a stageDetail by their ID
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Update successful

### QualfyingTeam

- `GET /qualifyingTeams`: Get all the QualifyingTeams

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /qualifyingTeams/:StageId`: Get all the QualifyingTeams by the StageId

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /qualifyingTeams/:QualifyingTeamId`: Get all the QualifyingTeam by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `POST /qualifyingTeams`: Create a new qualifying team
  - Parameters:
    - `TeamId`: Required String
    - `StageId`: Required String
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Post successful

- `DELETE /qualifyingTeams/:QualifyingTeamId`: Delete a qualifying team by their ID
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Delete successful

# Winners and Awards

### SponsorAward

- `GET /sponsorAwards`: Get all the teams with sponsor awards

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /sponsorAwards/:competitionPeriod`: Get all the teams with sponsor awards for a competition period

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `POST /sponsorAward'`: Mark a team with a sponsor award
  - Parameters:
    - `TeamId`: Required String
    - `awardName`: Required String
    - `rewardAmount`: Required Integer
    - `IterationId`: Required Date??
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: New sponsorAward for team successfully created

- `PATCH /sponsorAward/:SponsorAwardId'`: Update a sponsor award by their ID
  - Parameters:
    - `TeamId`: Required String
    - `awardName`: Required String
    - `rewardAmount`: Required Integer
    - `IterationId`: Required Date??
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Update successful

- `DELETE /sponsorAward/:SponsorAwardId`: Delete a team with a sponsor award
  - Response codes:
    - `200`: Delete successful

### TechAward

- `GET /techAwards`: Get all the teams with tech awards

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /techAwards/:competitionPeriod`: Get all the teams with tech awards for a competition period

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `POST /techAward'`: Mark a team with a tech award
  - Parameters:
    - `TeamId`: Required String
    - `awardName`: Required String
    - `rewardAmount`: Required Integer
    - `IterationId`: Required Date??
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: New techAward for team successfully created

- `PATCH /techAward/:TechAwardId'`: Update a tech award by their ID
  - Parameters:
    - `TeamId`: Required String
    - `awardName`: Required String
    - `rewardAmount`: Required Integer
    - `IterationId`: Required Date??
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Update successful

- `DELETE /techAward/:TechAwardId`: Delete a team with a tech award
  - Response codes:
    - `200`: Delete successful

# Score and Rubric

### TeamScore

- `GET /teamScores`: Get all the teamScores previously created

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /teamScores/:TeamId`: Get all the teamScores for a team

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /teamScores/:JudgeId`: Get all the teamScores a judge created

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /teamScore/:TeamScoreId`: Get a teamScore by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `POST /teamScore`: Create a new teamScore for a team from a judge
  - Parameters:
    - `TeamId`: Required String
    - `JudgeId`: Required String
    - `StageId`: Required String
    - `comment`: Required Text
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: New teamScore successfully created

- `PATCH /teamScore/:TeamScoreId`: Update a teamScore by their ID
  - Parameters:
    - `TeamId`: Required String
    - `JudgeId`: Required String
    - `StageId`: Required String
    - `comment`: Required Text
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Successfully updated

- `DELETE /teamScore/:TeamScoreId`: Delete a teamScore by their ID
  - Parameters:
    - `TeamScoreId`: Required String
  - Response codes:
    - `200`: Successfully deleted

### Rubric

- `GET /rubrics`: Get all the rubrics previously created

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /rubric/:RubricId`: Get a rubric by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `POST /rubric`: Create a new rubric for a team from a judge
  - Parameters:
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: New rubric successfully created

- `PATCH /rubric/:RubricId`: Update a rubric by their ID
  - Parameters:
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Successfully updated

- `DELETE /rubric/:RubricId`: Delete a rubric by their ID
  - Parameters:
    - `RubricId`: Required String
  - Response codes:
    - `200`: Successfully deleted

### Question

- `GET /questions`: Get all the questions previously created

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /questions/:RubricId`: Get all the questions for a rubric by RubricId

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `GET /question/:QuestionId`: Get a question by their ID

  - Example response:

    ```javascript
    {
      "test": "test"
    }
    ```

- `POST /question`: Create a new question for a team from a judge
  - Parameters:
    - `RubricId`: Required String
    - `question`: Required String
    - `maxScore`: Required Integer
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: New question successfully created

- `PATCH /question/:QuestionId`: Update a question by their ID
  - Parameters:
    - `RubricId`: Required String
    - `question`: Required String
    - `maxScore`: Required Integer
  - Response codes:
    - `400`: Bad user input, includes `error` field indicating cause
    - `200`: Successfully updated

- `DELETE /question/:QuestionId`: Delete a question by their ID
  - Parameters:
    - `QuestionId`: Required String
  - Response codes:
    - `200`: Successfully deleted

-
