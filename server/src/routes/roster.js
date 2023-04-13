import express from 'express';
import mongoose from 'mongoose';
import { RosterModel } from '../models/Roster.js';
import { UserModel } from '../models/AdminUsers.js'


//import { UserModel } from '../models/AdminUsers.js'

const router = express.Router();

router.get("/", async(req,res) => {
    try{
        const response = await RosterModel.find({});
        res.json (response);
    } catch(err){
        res.json(err);
    }
});

//route to create a class  
router.post("/", async(req,res) => {
    const roster = new RosterModel(req.body);//requesting entire body of model
    try{
        const response = await roster.save();
        res.json (response);
    } catch(err){
        res.json(err);
    }
});

//route for saving a class roster
router.put("/", async(req,res) => {
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



//list of saved roster
//get a list of the saved roster of the user who is logged-in
router.get("/savedRoster/ids/:userID", async (req,res) =>{
    try {
        const user = await UserModel.findById(req.params.userID)
        res.json({savedRoster: user?.savedRoster});//return saved roster of that Admin user
    } catch (err) {
        res.json(err);
    }
});

//route for getting only saved roster
router.get("/savedRoster/:userID", async (req,res) =>{
    try {
        const user =await UserModel.findById(req.params.userID)
        const savedRoster = await RosterModel.find({
            _id: {$in: user.savedRoster},
        });

        res.json({savedRoster});
    } catch (err) {
        res.json(err);
    }
});



export { router as rosterRouter};
