const mongoose = require('mongoose');

// MongoDB connection
const MONGO_URI = 'mongodb://localhost:27017/Week8'; 

mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', function(err) {
    console.log("Error occurred during connection: " + err);
});

db.once('connected', function() { 
    console.log(`Connected to ${MONGO_URI}`);
});

// Creating the schema
const PersonSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    age: Number,
    Gender: String,
    Salary: Number
});

// Creating model named "modelname" with collection "personCollection"
const person_doc = mongoose.model('modelname', PersonSchema, 'personCollection');

// Creating a single document
const doc1 = new person_doc({ 
    name: 'Jacky', 
    age: 362, 
    Gender: "Male", 
    Salary: 3456 
});

// Adding one document into the collection
doc1
    .save()
    .then((doc) => { 
        console.log("New Article Has been Added Into Your Database.", doc);
    })
    .catch((err) => { 
        console.error(err); 
    });
