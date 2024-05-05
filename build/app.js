"use strict";

var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _routes = require("./routes");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var cors = require('cors');
var app = (0, _express["default"])();
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.use(cors({
  origin: 'http://localhost:3000',
  // Change to your frontend's origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  // HTTP methods you permit
  allowedHeaders: ['Content-Type', 'Authorization'],
  // Allowed headers
  credentials: true // If you need to allow cookies or sessions
}));
(0, _routes.routes)(app);
var port = process.env.PORT || 3002;
app.listen(port, function () {
  return console.log("Server ready at http://localhost:".concat(port));
});