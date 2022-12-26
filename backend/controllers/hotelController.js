import Hotel from "../models/hotelModel.js";
import createError from "http-errors";

// =====================================================
// Create a Booking for a Hotel
// =====================================================
export const hotelPost = async (req, res, next) => {
    const newHotel = new Hotel(req.body);

    try{
        const saveNewHotel = await newHotel.save();
        res.status(201).json(saveNewHotel);
    }catch(err){
        console.log(err)
        return next(createError(500, "The hotel could not be saved in the database!"))
    }
}; 

// =====================================================
// Apdate Booking a Hotel
// ===================================================== 
export const updatedBookedHotel = async (req, res, next) => {
    const hotelId = req.parmas.id;
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.parmas.id, {$set: req.body}, {new: true, runValidators: ture});
        return res.status(201).json(updatedHotel);
    }catch(err){
        console.log(err);
        return next(createError(500, "Booked Hotel could not be updated in the database"));
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
        return next(createError(500, " Booked Hotel could not be deleted from the database"))
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
    // To find hotel based on the prices
    const { min, max, ...others } = req.query;
    try{
        const Hotels = await Hotel.find({...others, cheapestPrice: {$gt: min | 1, $lt: max || 900}}).limit(req.query.limit);
        return res.status(200).json(Hotels);
    }catch(err){
        console.log(err);
        return next(createError(500, "Hotel could not be posted in the database"))
    } 
};

// =====================================================
// Count Cities
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

// =====================================================
// Get All Hotels
// =====================================================
export const countByType = async (req, res, next) => {
    try{
        const hotelCount = await Hotel.countDocuments({type: "hotel"});
        const apartmentCount = await Hotel.countDocuments({type: "apartment"});
        const resortCount = await Hotel.countDocuments({type: "resort"});
        const villaCount = await Hotel.countDocuments({type: "villa"});
        const cabinCount = await Hotel.countDocuments({type: "cabin"});

        return res.status(200).json([
            {type: "hotel", count: hotelCount},
            {type: "apartment", count: apartmentCount},
            {type: "resort", count: resortCount},
            {type: "villa", count: villaCount},
            {type: "cabin", count: cabinCount}, 
        ]);
    }catch(err){
        console.log(err)
        return next (createError(500, "Count by type could not be queried from the database"))
    }
};