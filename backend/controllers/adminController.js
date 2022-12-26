import User from "../models/userModel.js";
import createError from "http-errors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// =====================================================
// Register a user
// =====================================================
export const registerUser = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const newUser = new User({
      username: username,
      email: email,
      password: password,
    });

    //Save the new user in the database
    try {
      await newUser.save();
    } catch (err) {
      return next(createError(500, "User could not be saved in the database!"));
    }
    // Return the new use
    return res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
    next(createError(409, "The username is already taken"));
  }
};

// =====================================================
// Login a user
// =====================================================

export const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found"));

    const isvalidPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isvalidPassword) return next(createError(400, "Invalid password"));

    // Token to verify the identity of the user
    const token = jwt.sign( { id: user._id, isAdmin: user.isAdmin }, process.env.JWT );

    const { password, isAdmin, ...otherDetails } = user; // This is used to display all user data excepte admin and password

    //! Step 3 for "cookie-aarser"
    return res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .send({ ...otherDetails._doc });
  } catch (err) {
    console.log(err);
    return next(createError(500, "Database could not be queried"));
  }
};
