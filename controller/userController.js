
const express = require('express')
const router = express.Router()
const passport = require('../passport')
var bCrypt = require('bcrypt-nodejs');
var User = require('../models').User;

module.exports ={
    userSignup:function (req, res)  {
    console.log('user signup');
    console.log(req)
    var email = req.body.email;
    var password = req.body.password;
    var generateHash = function (password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
    };
    // ADD VALIDATION
    User.findOne({ where: { email: email } }).then(function (user) {
        // if (err) {
        //     console.log('User.js post error: ', err)
        // } else 
        if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${email}`
            })
        }
        else {
            var userPassword = generateHash(password);
            var data = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: email,
                password: userPassword,

            }
            User.create(data).then(function (newUser, created) {
                if (!newUser) {

                    return res.json(err)
                }
                if (newUser) {
                    console.log("new user")
                    res.json(newUser)
                }
            })
        }
    })
},


userGet: function(req, res) {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
},

    userlogout :  function(req, res) {
            if (req.user) {
                req.logout()
                res.send({ msg: 'logging out' })
            } else {
                res.send({ msg: 'no user to log out' })
            }
        },
    


    userLogin: function(req, res) {
        passport.authenticate('local', 
        function(error, user, info) {
              
          if (error || !user) 
          {
          console.log("no user found")
          }
          else{
        //  console.log("user");
        //    res.send(user);
        console.log('logged in', user.firstname);
               var userInfo = {
                   firstname: user.firstname
             };
             res.json(userInfo);
          }
        })(req, res);
      }
  
    }


// router.post(
//     '/user/login',
//     function (req, res, next) {
//         console.log('routes/user.js, login, req.body: ');
//         console.log(req.body)
//         next()
//     },
//     passport.authenticate('local'),
//     (req, res) => {
//         console.log('logged in', req.user);
//         var userInfo = {
//             username: req.user.username
//         };
//         res.send(userInfo);
//     }
// )