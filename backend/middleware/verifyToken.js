import jwt from "jsonwebtoken";
import createError from "http-errors";

//==============================================================
// Verify user token
//==============================================================
export const verifyToken = (req, res, next) => {
    // Step 1: find token
    const token = req.cookies.access_token;
    
    // Step 2: if token is not found
    if(!token) {
        return next(createError(401, "You are not authenticated"))
    }

    // Step 3: if token is found, then verify it
    jwt.verify(token, process.env.JWT, (err, user) => {
        // if token does not match
        if(err) return next(createError(403, "Token is invalid"));
        // if token match
        req.user = user;
        next();
    })
};

//==============================================================
// Verify "User" using verify token
//==============================================================

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, ()=> {
        if(req.user.id === req,params.id || req.user.isAdmin) {
            next();
        } else {
            if(err) return next(createError(403, "You are not authorized"))
        }
    })
};

//==============================================================
// Verify "Admin" using verify token
//==============================================================

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if(req.user.isAdmin) {
            next()
        } else {
            return next(createError(403, "You are unauthorized"))
        }
    })
};