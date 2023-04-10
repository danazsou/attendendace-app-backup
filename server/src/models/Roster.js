import mongoose from 'mongoose';

const RosterSchema = new mongoose.Schema({
    Subject: { type:String, required: true},
    FirstName:{type: String, required: true},
    LastName:{ type: String, required: true},
    userOwner: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "users", required: true
    },
});

export const RosterModel =  mongoose.model("rosters", RosterSchema)