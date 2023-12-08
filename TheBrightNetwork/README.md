## The Bright NetWork Chatroom - The BRIGHT Way to Network

"Bright minds think alike!"


### The Contributers
* [Sarah](https://github.com/SarahOgunko)
* [Annie](https://github.com/anniewils97)
* [Rayster](https://github.com/rjrfrst)
* [Faiz](https://github.com/FaizF7)


### Introduction

The purpose of the application is to facilitate the learning and networking of BNTA coursemates via the following:

1. Enable BNTA trainers to create chatrooms for individual study groups and assign users to these rooms
2. Enable users to create their own study groups over the Winter Break
3. Enable users to create code challenge groups to study/work towards hackathons and codewars.
4. Enable current users to connect with BNTA graduates/consultants i.e. an alumni networking service


### Initial Diagrams and Routes

ERD 

<img width="1051" alt="Screenshot 2023-11-16 at 16 08 10" src="https://github.com/anniewils97/TheBrightNetwork/assets/145555841/1c375f3b-d447-4c3e-9f3d-0dcb4d197aed">


Class Diagrams

<img width="1051" alt="Screenshot 2023-11-16 at 16 08 00" src="https://github.com/anniewils97/TheBrightNetwork/assets/145555841/30bd3683-9600-4ff4-8460-f45a60edc306">


Routes

<img width="1176" alt="Screenshot 2023-11-16 at 16 15 44" src="https://github.com/anniewils97/TheBrightNetwork/assets/145555841/573a2a37-8d22-4760-b395-51ffe89c1f35">


### Core MVP
* Allow a user to post a message in a chatroom.
* Allow a new user to be added to an existing chatroom (via creating a new subscription for the user to the chatroom).
* Display all messages in a specific chatroom, with the most recent message first.


### Key Functionalities

Our program has the following main functionalities:

* Allow for the creation of a new user.
* Allow you to update the information of a user.
* Allow a user to update their message.
* Allow users to create a chatroom dependent on it having at least two members.
* Delete a message by Id.
* Display all users in a specific chatroom.
* Display a specific chatroom by Id.
* Display all existing chatrooms.
* Display all messages across all chatrooms.


### Extensions

There are a few functionalities which would really add to the program but are not necessary for the running and execution of the program:

- Allow user to search a message within a chatroom by keyword.
- Allow user to search a message across all chatrooms by keyword.
- Allow users to react to a message.
- Implemented simple user authenticator to view messages.
- Allow only trainers to create a chatroom of other users without joining them.


### Tech Stack and Technologies

- Java
- IntelliJ IDEA (Jdk17)
- PostgreSQL
- Spring boot
- Postman
- Postico
- JUnit5 Testing
