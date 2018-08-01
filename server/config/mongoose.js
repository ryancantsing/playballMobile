const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

mongoose.connect('mongodb://localhost/playBall_Mobile')
.then(() => console.log('Connected to Database'))
.catch(err => console.log(err));

var models_path = path.join(__dirname, '../models');

fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
      require(models_path + '/' + file);
    }
  });


