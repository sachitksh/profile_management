# profile_management
profile management backend API endpoints for users to update their profile information.

# Required Tech stack
server : Expressjs,nodejs
database : mongodb and mongoDB compass
API handler : thunderclient

# Installing mongodb and mongoDBcompass
https://www.mongodb.com/products/compass 
https://www.mongodb.com/try/download/community 

# installing thunderclient extenstion 
Launch Visual Studio Code on your computer.

Click on the Extensions icon in the left sidebar or press Ctrl+Shift+X (Windows/Linux) or Cmd+Shift+X (Mac) to open the Extensions view.

In the Extensions view, search for "ThunderClient" using the search bar at the top.

click on the "Install" button next to it.

Wait for the installation to complete. Once it's done, you'll see an "Installed" message next to the extension.

# How to run project on local server
 Clone the project 
 ```https://github.com/sachitksh/profile_management.git```
 open vs code and navigate to the project directory
 ``` cd profile_management ```
create a new file called .env set ACCESS_TOKEN_SECRET=ATS
install dependencies
 ``` npm install ```
 start the server
 ``` npm run dev ```
 open terminal and enter
 ``` mongod ```
 open mongoDBcompass and connect to sever
 ``` mongodb://127.0.0.1:27017/ ```
 create a new database with collection name called profiles
 
 # How to register & login your first user
To register:

open thunderclient and send a post request to http://localhost:5000/api/users/register with json input in body
 input example:{
  "username":"sachit",
  "email":"sachitkshirsagar912@gmail.com",
  "password":"password"
}
![image](https://github.com/sachitksh/profile_management/assets/83107611/dfd37f0a-fc20-403b-ba8b-cc2e819c6be8)

To login:
send a post request to http://localhost:5000/api/users/login with json input in body
 input example:{
  "email":"sachitkshirsagar912@gmail.com",
  "password":"password"
}
![image](https://github.com/sachitksh/profile_management/assets/83107611/10c33d55-ac56-4c19-889e-7b83fe1956de)

access_token will be generated copy this access token in auth bearer
![image](https://github.com/sachitksh/profile_management/assets/83107611/49e1414f-aefb-4abd-b3f3-d5d783eadb98)


 # How to create update show and delete  your profile
 To create:
 open thunderclient and send a post request to http://localhost:5000/api/profiles  with json input in body
 input example:{
 "name":"sachit",
  "email":"sachitkshirsagar912@gmail.com",
  "phone":"password",
  "about":"",
  "age":"",
  "sex":"",
  "education":"",
  "occupation":"",
  "skills":"",
}
To update: send a put request to http://localhost:5000/api/profiles/id: (your id at the time of createprofile)
input example{
"name":"rahul"
}
To update: send a delete request to http://localhost:5000/api/profiles/id: (your id at the time of createprofile)

To view: send a get request to http://localhost:5000/api/profiles/id: (your id at the time of createprofile)
 
 
