import User from "../models/userModel.js";
import createError from "http-errors";


// =====================================================
// Create a user in the database
// =====================================================
export const userPost = async (req, res, next) => {
    const newUser = new User(req.body);

    try{
        const saveUser = await newUser.save();
        return res.status(200).json(saveUser);
    }catch(err){
        console.log(err);
        return next(createError(500, "User could not be posted in the database"))
    }
}; 

// =====================================================
// Apdate user data
// =====================================================
export const updateUserData = async (req, res, next) => {
    const userId = req.parmas.id;
    try{
        const updatedUser = await User.findByIdAndUpdate(userId, {$set: req.body}, {new: true});
        return res.status(200).json(updatedUser);
    }catch(err){
        console.log(err);
        return next(createError(500, "User data could not be updated in the database"))
    }
};

// =====================================================
// Delete a user
// =====================================================
export const deleteUser = async (req, res, next) => {
    const userId = req.parmas.id;
    try{
        await User.findByIdAndDelete(userId);
        return res.status(200).json("User has been deleted");
    }catch(err){
        console.log(err);
        return next(createError(500, "User could not be deleted from the database"))
    }
};

// =====================================================
// Get One User
// =====================================================
export const getOneUser = async (req, res, next) => {
    const userId = req.parmas.id;
    try{
        const user = await User.findById(userId);
        return res.status(200).json(user);
    }catch(err){
        console.log(err);
        return next(createError(500, "User could not be deleted from the database"))
    }
};

// =====================================================
// Get All Users
// =====================================================
export const getAllUsers = async (req, res, next) => {
    try{
        const users = await User.find();
        return res.status(200).json(users);
    }catch(err){
        console.log(err);
        return next(createError(500, "Database could not fetch users"))
    }
};
