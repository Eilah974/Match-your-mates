# Match-your-mates

This is the apotheosis project (vocationnal training project) of Alexis JABOUL, Melvin JOUVET, Yannick MORRIS and Nicolas NOURRY for O'clock school. (Project in SCRUM methodology)

## Introduction
Esports is now gaining momentum around the world thanks to the competitive scene of the League Of Legends game which gives rise to major global competitions bringing together millions of spectators, with prizes reaching millions of dollars. . In view of this enthusiasm, tens of thousands of “young” players are seeking to make a name for themselves and wish to join prestigious structures. But for that, you have to already prove yourself in smaller teams. You still have to find your teammates. Good luck!

---

## Objective
Match Your Mates is a matchmaking service for players looking to find a team or team looking to fill a vacancy. Players who wish to join a team can register on our site in order to be able to apply for announcements of teams looking for players. The teams, for their part, can register in order to submit their announcements.

---

## Used technologies
For this project, we used this technologies:<br>
<span style="text-decoration: underline">Front End</span>:<br>
  => React<br>
  => React router<br>
  => Bootstrap<br>
  => SCSS

<span style="text-decoration: underline">Back End</span>:<br>
  => Node.js<br>
  => Express<br>
  => Sequelize (ORM)<br>
  => JOI<br>
  => Sqitch<br>
  => CORS<br>
  => PostgreSQL<br>
  => JSON Web Token

---

## Present features
List of features present in project V1:<br>
<span style="text-decoration: underline">Front End</span>:<br>
  => Login page<br>
  => Register page<br>
  => Profile page<br>
  => Edit profile page<br>
  => Player list page<br>
  => Team list page<br>
  => Player detail page<br>
  => Team detail page<br>
  => Team offers list page<br>
  => Team offer detail page<br>
  => Team offer creation page<br>
  => 404 error page

<span style="text-decoration: underline">Back End API methods</span>:<br>
  => Login<br>
  => Register<br>
  => Get all players<br>
  => Get all teams<br>
  => Get one player or team (for detail)<br>
  => Get all team offers<br>
  => Get one team offer (for detail)<br>
  => Create one team offer<br>
  => Edit one team offer<br>
  => Delete one team offer<br>
  => Get player or team profile<br>
  => Edit profile<br>
  => Change user password<br>
  => Delete profile<br>
  => Search team or player

---

## Back API routes
### For players
Get player list (GET method)
```
/players
```
Get one player detail (GET method)
```
/players/:id(\\d+)
```
### For teams
Get teams list (GET method)
```
/teams
```
Get one team detail (GET method)
```
/teams/:id(\\d+)
```
Get team offers list (GET method)
```
/:id(\\d+)/offers
```
Get one team offer detail, modify it or delete it (GET, PATCH and DELETE methods. For PATCH and DELETE methods, use of a JSON Web Token)
```
/teams/:id(\\d+)/offers/:announcementId(\\d+)
```
### For login
User login (POST method)
```
/login
```
### For register
New user signup (POST method)
```
/signup
```
### For user profile
Get user profile or delete it (GET and DELETE methods with use of a JSON Web Token)
```
/profile
```
Edit profile (PATCH methode with a use of a JSON Web Token)
```
/profile/edit
```
Change password (PATCH method with a use of a JSON Web Token)
```
/profile/editPassword
```
Create one team offer (POST method with a use of a specific JSON Web Token)
```
/profile/createOffer
```

---

## Project's futur
For project's next version, it's what we've planned:<br>
  => finishing the missing pages in front side <br>
  => create an adiminsitrator side <br>
  => link with cloudinary API for avatars storage <br>
  => link with Riot league of legend API <br>
  => internal messassing <br>
  => create an event side <br>
  => implement other esport games (like Valorant or CS:GO)

---

## Project team roles
Here are team members roles for this vocationnal training project:

#### Melvin JOUVET
Product owner, front dev

#### Yannick MORRIS
Lead front dev

#### Alexis JABOUL
SCRUM master, back dev

#### Nicolas NOURRY
Git master, lead back dev
