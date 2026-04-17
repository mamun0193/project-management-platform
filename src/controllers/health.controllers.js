import {apiResponse} from "../utils/apiResponse.js"
import { asyncHandler } from "../utils/async-handler.js";
/*
const healthCheck = async (req, res) => {
  try {
    res
      .status(200)
      .json(new apiResponse(200, { message: "Server is healthy" }));
  } catch (error) {
    res.status(500).json(apiResponse(false, "Internal server error", null));
  }
};
*/

const healthCheck = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json(new apiResponse(200, { message: "Server is healthy" }));
});

export { healthCheck };
