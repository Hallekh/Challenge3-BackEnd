const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://halyna:hallekh@cluster0.tipkg.mongodb.net/?retryWrites=true&w=majority') 
    .then( () => console.log("DB is connected"))
    .catch(err => console.log(err));