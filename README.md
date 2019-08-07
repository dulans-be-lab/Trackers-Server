# trackers-Service
web socket server is developing.

01) npm init -y => for make package.json file
02) then npm install => for make package-lock.json file
03) create README.md file
04) then create server.js file and add repository to github
05) touch .gitignore => for create .gitignore file
06) npm install --save express => for add express framework
07) then create app.js file
08) create app using express framework and export that app
09) import app to server.js and make server using that
10) now server running on https://localhost:3000
11) sudo npm install --save-dev nodemon => for add nodemon server to project
12) add "start:server": "nodemon server.js" to scripts in package.json file for run nodemon Server
13) npm run start:server OR npm start=> now you can run server using this command
14) sudo npm install dotenv --save => for add .env file
15) sudo npm install socket.io --save => for add socket.io dependency
16) make folder named connection and make file SocketConnection.js for handle socket connection
17) socket wala wena wede:-
    app.js wala =>
    socket.io eken const ekak hadagannawa socket_io kiyala. eeta passe eke object ekak hadagannawa io kiyana namen. den ethakota io kiyana constant variable eke thiyenne socket ekak. eeta passe app.io=io kiyala kiyanne app eke io dewal (input/output dewal) balanne mulin hadapu socket eka kiyana eka. eeta passe SocketConnection.js eke thiyena createConnection function eka run karawala server eka listen karawanawa server socket ekak haraha. ethakota server ekata
      "connection" kiyana namen request ekak awoth server socket eka haraha socket connection ekak hedenawa.
      eeta passe kalin heduna socket connection eka haraha "message" kiyana namen request ekak awoth a ena message eka pennanawa.
      eeta passe kalin heduna socket connection eka haraha "disconnect" kiyana namen request ekak awoth hedila thiyena socket connection eka disconnect wenawa.
    eeta passe server.js ekata yanawa.
    server.js wala =>
    mekedi wenne server eka hadala app eke thiyena io connection ekata (app.io ekata) a hadapu server eka attach karana eka.
      (
        const server = http.createServer(app);
        var io=app.io;
        io.attach(server);
      )
    Onna ooka thamai socket wala wenne.
18) sudo npm install mongoose --save => for add mongoose dependency
19) make file DBConnection.js for connect with mongoDB database.
20) den indan entity eka hadan database eka connect karan controllers gahanna thiyenne..
21) sudo npm install rand-token --save => for add randomtoken generator
22) sudo npm i bcryptjs --save => for add encryption package
23) sudo npm i nodemailer --save => for send mail options
