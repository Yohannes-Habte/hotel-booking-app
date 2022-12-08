import Room from "../models/roomModel.js";
import Hotel from "../models/hotelModel.js";
import createError from "http-errors";

// =====================================================
// Book a Room for a specific Hotel
// =====================================================

export const roomPost = async (req, res, next) => {
    const hotelId = req.params.hotelId
    const newRoom = new Room(req.body);

    try{
        const savedRoom = await newRoom.save();
        try{
            await Hotel.findByIdAndUpdate(hotelId, {$push: savedRoom._id})
        }catch(err){
            next(err)
        };

        return res.status(200).json(savedRoom);
    }catch(err){
        console.log(err);
        return next(createError(500, "Database could not be queried"))
    }
};

// =====================================================
// Update a Room 
// =====================================================

export const updateRoom = async (req, res, next) => {
    try{
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        return res.status(200).json(updatedRoom)
    }catch(err){
        console.log(err);
        return next(createError(500, "Database could not be queried"))
    }
};

// =====================================================
// Delete a Room 
// =====================================================

export const deleteRoom = async (req, res, next) => {
    const hotelId = get.params.id;
    try{
        await Room.findByIdAndDelete(req.params.id);

        try {
            await Hotel.findByIdAndDelete(hotelId, {$pull: {rooms: req.params.id}})
        }catch(err){
            console.log(err);
            return next(createError(500, "Hotel could not be deleted"))
        }
        return res.status(200).json("Room has been deleted")
    }catch(err){
        console.log(err);
        return next(createError(500, "Room could not be deleted"))
    }
};

// =====================================================
// Get a Room 
// =====================================================

export const getOneRoom = async (req, res, next) => {
    try{
        const getRoom = await Room.findById(req.params.id);
        return res.status(200).json(getRoom);
    }catch(err){
        console.log(err)
        return next(createError(500, "Database could not query room"))
    }
};

// =====================================================
// Get all Room 
// =====================================================

export const getAllRooms = async (req, res, next) => {
    try{
        const rooms = await Room.find();
        return res.status(200).json(rooms)
    }catch(err){
        console.log(err);
        return next (createError(500, "Database could not query the rooms"))
    }
};