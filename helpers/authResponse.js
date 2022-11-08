const { development } = require("../config/config")

function authResponse(res,result,statusCode){
    if(result.success){
        const {token,...data} = result

        return res.cookie("token",token,{
            httpOnly:true,
            secure:development.production, //Solo disponible a través de https*
            expires:new Date(new Date().setDate(new Date().getDate() + 1))
        }).json(data)
    }


    return res.status(statusCode).json(result)
}

function providerResponse(res,result,statusCode){
    if(result.success){
        const {token,...data} = result

        return res.cookie("token",token,{
            httpOnly:true,
            secure:development.production, //Solo disponible a través de https*
            sameSite:"none",
            expires:new Date(new Date().setDate(new Date().getDate() + 7))
        }).redirect("http://localhost:3000")
    }


    return res.status(statusCode).json(result)
}

function deleteCookie(res){
    return res.cookie("token","",{
        expires:new Date(),
        httpOnly:true,
        sameSite:"none",
        secure:development.production
    }).json({
        success:true,
        message:"Successfully logged out "
    })
}

module.exports = {authResponse,deleteCookie,providerResponse}