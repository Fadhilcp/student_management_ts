"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const student_service_1 = require("../services/student.service");
const student_controller_1 = require("../controllers/student.controller");
const studentService = new student_service_1.StudentService();
const controller = new student_controller_1.StudentController(studentService);
router.get('/', controller.getAll);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
exports.default = router;
