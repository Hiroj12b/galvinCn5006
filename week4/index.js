const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));

// Basic route
app.get('/', (req, res) => {
    res.send("Hello, it is my first Express application");
});

app.get('/about', (req, res) => {
    res.send("This is a basic Express application");
});

// New route to serve StudentInfo.html
app.get('/studentinfo', function(req, res) {
    res.sendFile('StudentInfo.html', { root: __dirname });
});

// Handle form submission from /submit-data
app.post('/submit-data', function (req, res) {
    const name = req.body.firstName + ' ' + req.body.lastName + ' ';
    const age = req.body.myAge + ' Gender: ' + req.body.gender + ' ';
    const qualification = 'Qualification: ' + req.body.Qual.join(', ');
    
    console.log(req.body.Qual); // Debug to confirm the selected qualifications
    res.send({
        status: true,
        message: 'Form Details',
        data: {
            name: name,
            age: age,
            qualification: qualification,
        }
    });
});

// Start the server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params);
});
app.get('/GetStudents',function (req,res)
{ studentdata={}
    fs.readFile(__dirname + "/" + "Student.json", 'utf8',
    function (err, data) { console.log( data );
        res.json({ 'status':true, 'Status_Code':200,
            'requested at': req.localtime, 'requrl':req.url,
            'request Method':req.method, 'studentdata':JSON.parse(
            data)});
    });
})
