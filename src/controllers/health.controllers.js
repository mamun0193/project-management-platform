import {apiResponse} from "../utils/apiResponse.js"

const healthCheck = (req, res) => {
  try {
    res
      .status(200)
      .json(new apiResponse(200, { message: "Server is healthy" }));
  } catch (error) {
    res.status(500).json(apiResponse(false, "Internal server error", null));
  }
};
export { healthCheck };
