export class Exam {
    
    idExam: number;
    name: string;
    description: string;

    constructor(
        idExam: number,
        name: string,
        description: string,
    )
    
    {
        this.idExam = idExam;
        this.name = name;
        this.description = description;
    }
}