const express = require('express');
const { createCourse, getAllCourses, enrollCourse } = require('../controllers/courseController');
const protect = require('../middleware/authMiddleware');
const permit = require('../middleware/roleMiddleware');

const router = express.Router();

router.post('/create', protect, permit('instructor'), createCourse);
router.get('/', getAllCourses);
router.post('/:id/enroll', protect, permit('student'), enrollCourse);

module.exports = router;
