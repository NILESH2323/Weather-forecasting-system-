const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { record } = require('../models/record');

// => localhost:3000/records/
router.get('/',(req,res)=>{
    record.find((err,docs)=>{
        if(!err){res.send(docs);}
        else {console.log('Error in retrieving data: ' +JSON.stringify(err,undefined,2));}
    });
});

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');
    record.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else {console.log('Error in retrieving records :'+ JSON.stringify(err,undefined,2));}
    });
})

router.post('/',(req,res) => {
    var rec= new record({
        "coord": {
            "lon": req.body.lon,
            "lat": req.body.lat
          },
          "weather": [
            {
              "id": req.body.id,
              "main": req.body.main,
              "description": req.body.description,
              "icon": req.body.icon
            }
          ],
          "base":req.body.base,
          "main": {
            "temp": req.body.temp,
            "feels_like": req.body.feels_like,
            "temp_min": req.body.temp_min,
            "temp_max": req.body.temp_max,
            "pressure": req.body.pressure,
            "humidity": req.body.humidity
          },
          "visibility": req.body.visibility,
          "wind": {
            "speed": req.body.speed,
            "deg": req.body.deg
          },
          "clouds": {
            "all": req.body.all
          },
          "dt": req.body.dt,
          "sys": {
            "type": req.body.type,
            "id": req.body.id,
            "country": req.body.country,
            "sunrise": req.body.sunrise,
            "sunset": req.body.sunset
          },
          "timezone": req.body.timezone,
          "id": req.body.id,
          "name": req.body.name,
          "cod": req.body.cod
    
    });
    rec.save((err,doc)=>{
        if(!err){ res.send(doc);}
        else {console.log('Error in saving records: '+ JSON.stringify(err,undefined,2));}
    });
});

router.put(":/id",(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');
    var rec = {
            "coord": {
              "lon": req.body.lon,
              "lat": req.body.lat
            },
            "weather": [
              {
                "id": req.body.id,
                "main": req.body.main,
                "description": req.body.description,
                "icon": req.body.icon
              }
            ],
            "base":req.body.base,
            "main": {
              "temp": req.body.temp,
              "feels_like": req.body.feels_like,
              "temp_min": req.body.temp_min,
              "temp_max": req.body.temp_max,
              "pressure": req.body.pressure,
              "humidity": req.body.humidity
            },
            "visibility": req.body.visibility,
            "wind": {
              "speed": req.body.speed,
              "deg": req.body.deg
            },
            "clouds": {
              "all": req.body.all
            },
            "dt": req.body.dt,
            "sys": {
              "type": req.body.type,
              "id": req.body.id,
              "country": req.body.country,
              "sunrise": req.body.sunrise,
              "sunset": req.body.sunset
            },
            "timezone": req.body.timezone,
            "id": req.body.id,
            "name": req.body.name,
            "cod": req.body.cod
          
    };
    record.findByIdAndUpdate(req.params.id, {$set: rec},{new: true},(err,doc)=>{
        if(!err){ res.send(doc);}
        else {console.log('Error in updating records: '+ JSON.stringify(err,undefined,2));}
    })
});

router.delete(':/id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');

    record.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){ res.send(doc);}
        else {console.log('Error in deleting records: '+ JSON.stringify(err,undefined,2));}     
    });

});
module.exports = router;