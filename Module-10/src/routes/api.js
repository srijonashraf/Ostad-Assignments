const express =require('express');
const StudentController=require("../controllers/StudentController");
const WorksController=require("../controllers/WorksController");
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");


const router =express.Router();

// User Manage
router.post("/registration",StudentController.registration);
router.post("/login",StudentController.login);

router.post("/profileUpdate",AuthVerifyMiddleware,StudentController.profileUpdate);
router.get("/profileDetails",AuthVerifyMiddleware,StudentController.profileDetails);
router.get("/profileDelete/:email",StudentController.profileDelete);
router.get("/RecoverVerifyEmail/:email",StudentController.RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp",StudentController.RecoverVerifyOTP);
router.post("/RecoverResetPass",StudentController.RecoverResetPass);


// Task Manage
router.post("/createWork",WorksController.createWork);
router.get("/updateWorkStatus/:id/:status",AuthVerifyMiddleware,WorksController.updateWorkStatus);
router.get("/listWorkByStatus/:status",AuthVerifyMiddleware,WorksController.listWorkByStatus);
router.get("/deleteWork/:id",AuthVerifyMiddleware,WorksController.deleteWork);


module.exports=router;