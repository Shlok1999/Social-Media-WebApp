const express=require('express');
const app =express();
const path=require('path');

const hbs=require('hbs')

require("./db/connection");
const Register=require("../src/models/registers")
const port=process.env.PORT || 4000;

// const static_path=path.join(__dirname, "../public")
const template_path=path.join(__dirname, "../src/template/views")
const partial_path=path.join(__dirname, "../src/template/partials")


app.use(express.json())
app.use(express.urlencoded({extended: false}))

// console.log(path.join(__dirname))

// app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path)
hbs.registerPartials(partial_path)

app.get('/', (req, res)=>{
    res.render("index.hbs");

});
app.get('/register', (req, res)=>{
    res.render("./register.hbs");

});
app.post('/register', async (req, res)=>{
    // res.render("./register.hbs");
    try{
        const registeredUser=new Register({
            name: req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            password: req.body.password

        })

       const registered=await registeredUser.save();
       res.status(201).render("index")


    }
    catch(error){
        res.status(400).send(error);
    }

});
app.get('/login', (req, res)=>{
    res.render("./login.hbs");

});


app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`)

});
