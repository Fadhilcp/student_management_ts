import express from 'express'
const router = express.Router()

import { StudentService } from '../services/student.service'
import { StudentController } from '../controllers/student.controller'

const studentService = new StudentService()
const controller = new StudentController(studentService)

router.get('/',controller.getAll)
router.post('/',controller.create)
router.put('/:id',controller.update)
router.delete('/:id',controller.delete)


export default router