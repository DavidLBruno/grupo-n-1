const jwt = require("jsonwebtoken");
const { development } = require("../config/config");


async function jwtcreate(userData){
    const token = jwt.sign(userData,development.jwtSecret,{
        expiresIn:'1d'
    })
    return {
        success:true,
        user:userData,
        token
    }
};

function validateToken(req,res,next){
    
    const token = req.headers['token']

    if(!token){
        return res.status(403).json({
            success:false,
            message:"A token is required for this process"
        })
    }

    return verifyToken(token,req,res,next)
};

function verifyToken(token,req,res,next){
    try{
        const decoded = jwt.verify(token,development.jwtSecret)
        delete decoded.iat
        delete decoded.exp
        req.user = decoded

        return next()
    }catch({message,name}){
        return res.status(403).json({
            success:false,
            message,
            type:name
        })
    }
};

module.exports = { jwtcreate, validateToken }