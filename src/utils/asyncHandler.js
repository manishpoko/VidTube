import { Promise } from "mongoose";

const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).reject((err) => next(err));
  };
};

// const asyncHandler = (fn)=> async(req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(500).json({success: false, message: "asyncHandler error"})

//     }

// }

export default asyncHandler;
