const express = require('express');
const router= express.Router();
const {createUser,loginUser} = require("../controllers/Usercontroller");


//register a new user
router.post('/register',createUser);



//login user

router.post('/login',loginUser);


module.exports= router;