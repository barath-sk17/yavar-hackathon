"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;
var _authController = _interopRequireDefault(require("../controllers/authController"));
var _auth = _interopRequireDefault(require("../middlewares/auth"));
var _todosController = _interopRequireDefault(require("../controllers/todosController"));
var _todoItemsController = _interopRequireDefault(require("../controllers/todoItemsController"));
var _authorize = _interopRequireDefault(require("../middlewares/authorize"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var routes = exports.routes = function routes(app) {
  app.get('/', function (req, res) {
    return res.send({
      message: "ToDo App meant for youu"
    });
  });
  app.post('/api/auth/sign_up', _auth["default"], _authController["default"].signUp);
  app.post('/api/auth/sign_in', _authController["default"].signIn);
  app.post('/api/todos', _authorize["default"], _todosController["default"].create);
  app.get('/api/todos', _authorize["default"], _todosController["default"].fetchAll);
  app.get('/api/todos/:todoId', _authorize["default"], _todosController["default"].fetchOne);
  app.put('/api/todos/:todoId', _authorize["default"], _todosController["default"].update);
  app["delete"]('/api/todos/:todoId', _authorize["default"], _todosController["default"]["delete"]);
  app.post('/api/todoItems', _todoItemsController["default"].create);
  app.get('/api/todos/:todoId/todoItems', _todoItemsController["default"].fetchAll);
  app.get('/api/todoItems/:todoItemId', _todoItemsController["default"].fetchOne);
  app.put('/api/todoItems/:todoItemId', _todoItemsController["default"].update);
  app["delete"]('/api/todoItems/:todoItemId', _todoItemsController["default"]["delete"]);
};