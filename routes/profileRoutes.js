const express=require('express');
const router = express.Router();
const {getprofile,createprofile,updateprofile,deleteprofile,showprofile}=require("../controllers/profile_controller");
const validateToken = require('../middleware/validateTokenHandler');


router.use(validateToken);
router.route("/").get(getprofile).post(createprofile)
router.route("/:id").put(updateprofile).delete(deleteprofile).get(showprofile)
module.exports=router;