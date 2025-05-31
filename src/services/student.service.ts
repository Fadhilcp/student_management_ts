import { Student } from "../models/student.model";

export class StudentService {
    async getAll(){
        return Student.find()
    }

    async create(data : {name:string , age:number , grade:string}){
        const student = new Student(data)
        return student.save()
    }

    async update(id:string,data: Partial<{name: string, age: number, grade: string}>){
        return Student.findByIdAndUpdate(id,data, {new : true})
    }

    async delete(id: string){
        return Student.findByIdAndDelete(id)
    }
}