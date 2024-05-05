"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jwtToken = exports.hashPassword = exports.comparePassword = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _dotenv = require("dotenv");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable import/prefer-default-export */

(0, _dotenv.config)();
var jwtToken = exports.jwtToken = {
  createToken: function createToken(_ref) {
    var id = _ref.id,
      email = _ref.email;
    return _jsonwebtoken["default"].sign({
      userId: id,
      email: email
    }, process.env.JWT_SECRET, {
      expiresIn: '24h'
    });
  },
  verifyToken: function verifyToken(token) {
    var decoded = _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET, {
      expiresIn: '24h'
    });
    return decoded;
  }
};
var hashPassword = exports.hashPassword = function hashPassword(password) {
  return _bcryptjs["default"].hashSync(password, 10);
};
var comparePassword = exports.comparePassword = function comparePassword(password, hash) {
  return _bcryptjs["default"].compareSync(password, hash);
};