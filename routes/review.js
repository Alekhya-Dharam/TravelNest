const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");

const reviewsControllers = require("../controllers/reviews.js");
// reviews post route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewsControllers.createReview)
);

// reviews delete route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewsControllers.deleteReview)
);

module.exports = router;
