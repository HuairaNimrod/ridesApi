const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;


const nameFunction = (req, res)=>{ //declared a function that perform the action
    res.json('Rides');
}

//GET
const getRides = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('ride').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  };



//POST

const createRide = async (req, res, next) => {
    const rides = {
      initialPoint: req.body.initialPoint,
      endPoint: req.body.endPoint,
      time: req.body.time,
      date: req.body.date,
      type: req.body.type,
      cost: req.body.cost,
      driver: req.body.driver
    };
    const response = await mongodb.getDb().db().collection('ride').insertOne(rides);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'Some error occurred while creating the ride.');
    }
  };

module.exports = {nameFunction, getRides, createRide};