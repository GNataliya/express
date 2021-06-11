const express = require('express');
const server = express();

server.get('/', (req, res) => {
    const emailForm = `
    <form name="email" action="/1" method="POST">
    <label for="someName">Your email:</label>
    <input id="someName" name="name">
    <input type="submit" style="background-color: LimeGreen" value="Send">
    </form>`;
    res.send(emailForm);
});

server.use('/1', express.urlencoded({
    extended: true
}));
//server.use('/1', express.json());

server.post('/1', (req, res) => {
    console.log(req.body);
});



server.listen(8000);
