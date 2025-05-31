import { Request, Response } from "express";
import { StudentService } from "../services/student.service";

export class StudentController {

    private service: StudentService

    constructor(service : StudentService){
        this.service = service
    }

    getAll = async(req : Request , res : Response) => {
        try {
            
            const students = await this.service.getAll()
            res.render('index.ejs',{students})

        } catch (error) {
            res.status(500).json({error: 'Failed to fetch students'})
        }
    }

    create = async (req : Request , res : Response) => {
        try {

            const student = await this.service.create(req.body)
            res.status(201).json(student)
            
        } catch (error) {
            res.status(500).json({error: 'Failed to create student'})
        }
    }

    update = (req : Request , res : Response) => {
        try {

            const updated = this.service.update(req.params.id,req.body)
            res.json(updated)
        } catch (error) {
            res.status(500).json({error :'Failed to update student'})
        }
    }

    delete = async (req : Request , res : Response) => {
        try {

            await this.service.delete(req.params.id)
            res.json({message : 'Deleted successfully'})
            
        } catch (error) {
            res.status(500).json({error : 'Failed to delete student'})
        }
    }
}