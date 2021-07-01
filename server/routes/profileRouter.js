const router = require("express").Router();
// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/userModel");

router.get("/read", auth, async (req, res) => {
  // get all informations
  // const users = await User.find({});
  // let userInfos = userInfo.map(({email, displayName}) => ({email, displayName}));

  const userInfo = await User.findById(req.user);
  res.json({
    email: userInfo.email,
    displayName: userInfo.displayName,
  });
});


module.exports = router;