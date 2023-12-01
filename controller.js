// const { model } = require('mongoose');
const model=require('../models/model');

//get categories
// post request to url http://localhost:8080/api/categories
function create_Categories(req, res){
    // res.json("Get Request from Categories")
    const Create = new model.Categories({
        type:"Savings",
        color: '#1F3B5C' //DARK
    })

    Create.save(function(err){
        if(!err) return res.json(Create);
        return res.status(400).json({message:`Error while creating categories ${err}`});
    });
}



module.exports = {
    create_Categories
}

