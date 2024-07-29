const express = require('express');
const router = express.Router();

import StudentsController from '../controllers/StudentsController';
import AppController from '../controllers/AppController';

router.get('/', AppController.getHome);
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
module.exports = router;
