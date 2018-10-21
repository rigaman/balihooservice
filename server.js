const express = require('express');
const app = express();

let i = 0;

const resp = (q) => {
    let ret = {
        Ping: 'OK',
        Position: 'Sr. Full Stack Engineer',
        Phone: '847-858-4542',
        Source: 'https://docs.google.com/document/d/1kuMEcUgu12hYrbS0PyQEYLFhPjaWOkK61FlbZ4zoF8g/edit?usp=sharing',
        EmailAddress: 'p.plekhanov@gmail.com',


    };

    console.log('here');
    return ret;
}

app.get('/', (req, res) => {
    i += 1;
    console.log(i, req.query);
    res.send(resp(req.query));
});

app.listen(3000, () => console.log('listening port 3000'));