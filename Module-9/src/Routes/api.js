const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController');
const subAdminController = require('../Controllers/subAdminController');
const userController = require('../Controllers/userController');
const postController = require('../Controllers/postController');

router.post("/admin/create", adminController.create);
router.get("/admin/read", adminController.read);
router.post("/admin/delete", adminController.delete);
router.get("/admin/update", adminController.update);


router.post("/subadmin/create", subAdminController.create);
router.get("/subadmin/read", subAdminController.read);
router.post("/subadmin/delete", subAdminController.delete);
router.get("/subadmin/update", subAdminController.update);

router.post("/user/create", userController.create);
router.get("/user/read", userController.read);
router.post("/user/delete", userController.delete);
router.get("/user/update", userController.update);


router.post("/post/create", postController.create);
router.get("/post/read", postController.read);
router.post("/post/delete", postController.delete);
router.get("/post/update", postController.update);

module.exports = router;