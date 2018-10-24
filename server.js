const express = require('express');
const app = express();
let answers = {
    Ping: 'OK',
    Position: 'Sr. Full Stack Engineer',
    Phone: '847-858-4542',
    Resume: 'https://docs.google.com/document/d/1kuMEcUgu12hYrbS0PyQEYLFhPjaWOkK61FlbZ4zoF8g/edit?usp=sharing',
    EmailAddress: 'p.plekhanov@gmail.com',
    Name: 'Philip Plekhanov',
    Referrer: 'Jenny Gasparis',
    Source: 'https://github.com/rigaman/balihooservice',
    Years: '15+',
    Status: 'I am US citizen.',
    Degree: 'B.S. Information Technology'
};

app.get('/', (req, res) => {
    res.send(answers[req.query.q.split(' ').join('')]);
});

app.listen(3000, () => console.log('listening port 3000'));