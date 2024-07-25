import StudentsController from '../controllers/StudentsController.js';
import AppController from '../controllers/AppController.js';

const mapingRoutes = (app) => {
  app.get('/', AppController.getHome);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapingRoutes;
