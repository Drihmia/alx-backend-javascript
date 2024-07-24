export default class AppController {
  static getHome(request, response) {
    request.statusCode = 200;
    response.end('Hello Holberton School!');
  }
}
