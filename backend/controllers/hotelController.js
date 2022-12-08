import Hotel from "../models/hotelModel.js";
import createError from "http-errors";

// =====================================================
// Create a Booking for a Hotel
// =====================================================
export const hotelPost = async (req, res, next) => {
    const newHotel = new Hotel(req.body);

    try{
        const saveHotel = await newHotel.save();
        return res.status(200).json(saveHotel);
    }catch(err){
        console.log(err);
        return next(createError(500, "Hotel could not be posted in the database"))
    }
}; 

// =====================================================
// Apdate Booking a Hotel
// =====================================================
export const updateHotelBooking = async (req, res, next) => {
    const hotelId = req.parmas.id;
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(hotelId, {$set: req.body}, {new: true});
        return res.status(200).json(updatedHotel);
    }catch(err){
        console.log(err);
        return next(createError(500, "Hotel could not be posted in the database"))
    }
};

// =====================================================
// Delete Booking a Hotel
// =====================================================
export const deleteBookedHotel = async (req, res, next) => {
    const hotelId = req.parmas.id;
    try{
        await Hotel.findByIdAndDelete(hotelId);
        return res.status(200).json("Hotel booking has been deleted");
    }catch(err){
        console.log(err);
        return next(createError(500, "Hotel could not be posted in the database"))
    }
};

// =====================================================
// Get One Hotel
// =====================================================
export const getOneHotel = async (req, res, next) => {
    const hotelId = req.parmas.id;
    try{
        const Hotel = await Hotel.findById(hotelId);
        return res.status(200).json(Hotel);
    }catch(err){
        console.log(err);
        return next(createError(500, "Hotel could not be posted in the database"))
    }
};

// =====================================================
// Get All Hotels
// =====================================================
export const getAllHotels = async (req, res, next) => {
    try{
        const Hotels = await Hotel.find();
        return res.status(200).json(Hotels);
    }catch(err){
        console.log(err);
        return next(createError(500, "Hotel could not be posted in the database"))
    }
};

// =====================================================
// Get All Hotels
// =====================================================
export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try{
        const list = await Promise.all(cities.map(city =>{
            return Hotel.countDocuments({city: city})
        }));
        return res.status(200).json(list);
    }catch(err){
        console.log(err);
        return next(createError(500, "Hotel could not be posted in the database"))
    }
};
