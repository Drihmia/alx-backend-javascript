export default class AppController {
  static getHome(request, response) {
    response.send('Hello Holberton School!');
  }
}
