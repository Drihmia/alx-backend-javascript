import { Router } from 'express';
import StudentsController from '../controllers/StudentsController';
import AppController from '../controllers/AppController';

const router = Router();

router.get('/', (req, resp) => AppController.getHome(req, resp));
router.get('/students', (req, resp) => StudentsController.getAllStudents(req, resp));
router.get('/students/:major', (req, resp) => StudentsController.getAllStudentsByMajor(req, resp));

export default router;
