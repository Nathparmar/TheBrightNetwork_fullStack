# Super Chatroom Bros


## Tech Team: Kacper, Nathan, Piraven, Rashad

## Aim:
To create the frontend of a chatroom API, in which a user can log in, create chatrooms, and send messages to specific chatrooms.


## MVP:
* Send a message to a chatroom ✅
* Create a new chatroom ✅
* Add users to a specific chatroom ✅
* Sign up new users to the website ✅

## Extensions:
* Log in to the website, and display chatrooms specific to the logged in user ✅
* Allow users to create a private chat with only one other user ✅
* Only allow admins to create chats ✅
* Add an option to react to specific messages with emojis
* Allow user to edit a message after posting
* Allow admins to change user roles


## Additional Libraries Used
*[Multiselect-react-dropdown](https://www.npmjs.com/package/multiselect-react-dropdown)

## Step by Step Set-up Instructions
* Start running back end API, which is on the repository.
* On first run of the client, perform an `npm i` and `npm start` in the terminal, at the location of the client file.
* On every subsequent run, you are only required to perform an `npm start`.
* Navigate to `localhost:3000/signup`.
* Input username and age, then click login.
* On login you will be provided a password (which is the user's ID) and be redirected to the homepage.
* On the left panel, click on any user's name to start a private message with them.
* You can input your message at the bottom of the page, and click send. It will then be sent to the recipient and display on your screen.
* The chat participants can be viewed on the right side of the page.
* Alternatively, on the home page, you can also join any chatrooms that you are alrady a part of.
* Once redirected to a specific chatroom, you will be able to send messages in the same way as a private message.
* In a chatroom, you will also see an option to add new users to the chatroom. Select a user from the dropdown, and press add user.

For the next steps, only an admin can perform them:

* Redirect to the login page, and for testing purposes input the Name as: Zsolt, and Password as: 5.
* Now on the homepage, you can see an option to create a new chat room.
* You wil be redirected to a page where you can create a new chatroom. **Please note: you must input a chatroom name, and add at least 3 users in order to create a room.**
* Admins can see all chatrooms, even if they have not been added to them.

## Wireframe and Component Diagrams:
* Diagrams available on GitHub repository