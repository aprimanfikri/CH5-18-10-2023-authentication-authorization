const ApiError = require("../utils/apiError");

const checkOwnership = (req, res, next) => {
  try {
    if (req.user.shopId != req.params.id) {
      return next(new ApiError("kamu bukan bagian dari toko ini", 401));
    }
    next();
  } catch (error) {
    next(new ApiError(error.message, 500));
  }
};

module.exports = checkOwnership;
