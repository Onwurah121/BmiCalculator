const  express = require("express");

const  bodyparser= require("body-parser");

const app= express();

app.use(bodyparser.urlencoded({extended:true}));


app.get('/', function(req, res){
    res.sendFile(__dirname + "/Bmicalculator.html");

})

app.post('/', function (req, res) {
    const height= parseFloat(req.body.height);
    console.log(height);
    const weight= parseFloat(req.body.weight);
    const BMI= weight/(height*height);
    console.log(BMI);

    res.send('Dear Sir/ma your BMI is ' + BMI)
    
  })








app.listen(3000, function(){
    console.log("app listening on port:3000")
})