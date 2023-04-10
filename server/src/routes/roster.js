import express from 'express';
import mongoose from 'mongoose';
import { RosterModel } from '../models/Roster.js';

//import { UserModel } from '../models/AdminUsers.js'

const router = express.Router();

router.get("/create-class", async(req,res) => {
    try{
        const response = await RosterModel.find({});
        res.json (response);
    } catch(err){
        res.json(err);
    }
});

//route to create a class --add student names 
router.post("/create-class", async(req,res) => {
    const roster = new RosterModel(req.body);//requesting entire body of model
    try{
        const response = await roster.save();
        res.json (response);
    } catch(err){
        res.json(err);
    }
});

//route for saving a class roster
router.put("/create-class", async(req,res) => {
    try{
        const roster = await RosterModel.findById(req.body.recipeID)//finding class roster
        const user = await UserModel.findById(req.body.userID)//finding adminuser we want to save
        user.savedRoster.push(roster);//'push' for adding to the end of the saved class roster
        await user.save();//save this user(admin user) and save the changes into our collection
        res.json ({savedRoster: user.roster});//returning saved roster
    } catch(err){
        res.json(err);
    }
});


export { router as rostersRouter};
