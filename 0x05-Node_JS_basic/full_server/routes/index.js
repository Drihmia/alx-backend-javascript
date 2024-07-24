import StudentsController from '../controllers/StudentsController';
import AppController from '../controllers/AppController';

const mapingRoutes = (app) => {
  app.get('/', AppController.getHome);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapingRoutes;
