const Course = require("../models/course");
const User = require("../models/user");


exports.createCourse = async (req, res) => {
  const { title, description, lessons } = req.body;
  try {
    const course = await Course.create({
      title,
      description,
      lessons,
      instructor: req.user._id
    });
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ message: 'Error creating course' });
  }
};

exports.getAllCourses = async (req, res) => {
  const courses = await Course.find().populate('instructor', 'name');
  res.json(courses);
};

exports.enrollCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(req.user._id);
    if (user.enrolledCourses.includes(id)) {
      return res.status(400).json({ message: 'Already enrolled' });
    }
    user.enrolledCourses.push(id);
    await user.save();
    res.json({ message: 'Enrolled successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Enrollment failed' });
  }
};
