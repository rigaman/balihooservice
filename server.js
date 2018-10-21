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

const puzz = (q, e) => {
    let ret = "OK";

    console.log(q);
    ret = q.replace(/-/g, ">");;
    return ' ABCD' + ret;
};
const resp = (q) => {

    return answers[q.q.split(' ').join('')] || puzz(q.d.split('ABCD')[1], q) || 'OK';
}

app.get('/', (req, res) => {
    res.send(resp(req.query));
});

app.listen(3000, () => console.log('listening port 3000'));