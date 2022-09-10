const mongoose = require('mongoose');
const inviter = mongoose.model('inviter');



const createInviter =  function(req,res){
    const {username, businessName, email, phone, timezone, businessImage} = req.body;
     inviter.create({
        username: username,
        businessName: businessName,
        email: email,
        phone: phone,
        timezone: timezone,
        businessImage: businessImage,
    },(err,data) => {
        if(err){
            res.status(404).json(err);
            return;
        }else{
            res.status(200).json({
                username: data.username,
                businessName: data.businessName,
                email: data.email,
                phone: data.phone,
                timezone: data.timezone,
                businessImage: data.businessImage,
            });
        }
    })
    };

    module.exports = {
        createInviter
     };