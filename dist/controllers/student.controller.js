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
exports.StudentController = void 0;
class StudentController {
    constructor(service) {
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const students = yield this.service.getAll();
                res.render('index', { students });
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to fetch students' });
            }
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.service.create(req.body);
                res.status(201).json({ success: 'Student created' });
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to create student' });
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.service.update(req.params.id, req.body);
                res.status(201).json({ success: 'Student updated' });
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to update student' });
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.service.delete(req.params.id);
                res.json({ success: 'Deleted successfully' });
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to delete student' });
            }
        });
        this.service = service;
    }
}
exports.StudentController = StudentController;
