"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const student_model_1 = require("../models/student.model");
class StudentService {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return student_model_1.Student.find();
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = new student_model_1.Student(data);
            return student.save();
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return student_model_1.Student.findByIdAndUpdate(id, data, { new: true });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return student_model_1.Student.findByIdAndDelete(id);
        });
    }
}
exports.StudentService = StudentService;
