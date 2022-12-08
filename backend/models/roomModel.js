import mongoose from "mongoose";

const { Schema } = mongoose;

const roomSchema = new Schema({
    title: {type: String, required: true},
    maxPeople: {type: Number, required: true},
    price: {type: Number, required: true},
    desc: {type: String, required: true},
    roomNumbers : [{number: Number, unavailableDates: {type: [Date]}}]
}, {timestamps: true});

const Room = mongoose.model("Room", roomSchema);

export default Room;