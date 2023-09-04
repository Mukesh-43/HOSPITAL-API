
const User = require('../models/user')
const jwt = require('jsonwebtoken');

// Function for registering the Doctor (Concept of this function: If user is present, just return. If user is not present, create the user)

module.exports.create = async function(req,res)
{
    try {
    
        let user = await User.findOne({username:req.body.username}) 

        if(user)
        {
            return res.status(409).json(
                {
                    message: 'UserName Already Exists',
                })

        }

        user = await User.create({
            username:req.body.username,
            password:req.body.password,
            name:req.body.name,
            type:'Doctor'
        });

        return res.status(201).json(
            {
                message: 'User created successfully',
            })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                message: "Internal Server Error"
            }
        );
    }
    

}

// Function for the Doctor login (Concept of this function: If user is not present, just return. If user is present, return the token)
module.exports.createSession = async function (req, res) {

    try {
        let user = await User.findOne({ username: req.body.username });

        if (!user || user.password != req.body.password) {
            return res.status(422).json(
                {
                    message: "Invalid UserName or Password"
                }
            )
        }

        return res.status(200).json(
            {
                message: "Sign in successful. Here is your token, please keep it safe",
                data:
                {
                    token: jwt.sign(user.toJSON(),'secrets_cannot_be_reveled',{expiresIn:'10d'})
                }
            }
        )


    } catch (error) {

        console.log('Error', error);
        return res.status(500).json(
            {
                message: "Internal Server Error"
            }
        );
    }

}