const express = require('express');
const router = express.Router();

// Import the controller functions for each of the ten controllers
const blogController = require('../Controllers/blogController');
const blogDetailsController = require('../Controllers/blogDetailsController');
const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageController');
const portfolioController = require('../Controllers/portfolioController');
const productController = require('../Controllers/productController');
const profitController = require('../Controllers/profitController');
const projectController = require('../Controllers/projectController');
const serviceController = require('../Controllers/serviceController');
const titleController = require('../Controllers/titleController');

// Create routes for the blogController functions
router.get('/blog/create', blogController.create);
router.get('/blog/read', blogController.read);
router.get('/blog/delete', blogController.delete);
router.get('/blog/update', blogController.update);

// Create routes for the blogDetailsController functions
router.get('/blog/details/create', blogDetailsController.create);
router.get('/blog/details/read', blogDetailsController.read);
router.get('/blog/details/delete', blogDetailsController.delete);
router.get('/blog/details/update', blogDetailsController.update);

// Create routes for the commentController functions
router.get('/comment/create', commentController.create);
router.get('/comment/read', commentController.read);
router.get('/comment/delete', commentController.delete);
router.get('/comment/update', commentController.update);

// Create routes for the messageController functions
router.get('/message/create', messageController.create);
router.get('/message/read', messageController.read);
router.get('/message/delete', messageController.delete);
router.get('/message/update', messageController.update);

// Create routes for the portfolioController functions
router.get('/portfolio/create', portfolioController.create);
router.get('/portfolio/read', portfolioController.read);
router.get('/portfolio/delete', portfolioController.delete);
router.get('/portfolio/update', portfolioController.update);

// Create routes for the productController functions
router.get('/product/create', productController.create);
router.get('/product/read', productController.read);
router.get('/product/delete', productController.delete);
router.get('/product/update', productController.update);

// Create routes for the profitController functions
router.get('/profit/create', profitController.create);
router.get('/profit/read', profitController.read);
router.get('/profit/delete', profitController.delete);
router.get('/profit/update', profitController.update);

// Create routes for the projectController functions
router.get('/project/create', projectController.create);
router.get('/project/read', projectController.read);
router.get('/project/delete', projectController.delete);
router.get('/project/update', projectController.update);

// Create routes for the serviceController functions
router.get('/service/create', serviceController.create);
router.get('/service/read', serviceController.read);
router.get('/service/delete', serviceController.delete);
router.get('/service/update', serviceController.update);

// Create routes for the titleController functions
router.get('/title/create', titleController.create);
router.get('/title/read', titleController.read);
router.get('/title/delete', titleController.delete);
router.get('/title/update', titleController.update);

module.exports = router;
