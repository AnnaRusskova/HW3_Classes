import { Lesson } from "./Lesson";

export class LearningGroup extends Lesson{
    passedLessons = [];

    constructor(nameCourse, nameTeacher, amountOfStudentsInGroup){
        super();
        this.nameCourse = nameCourse;
        this.nameTeacher = nameTeacher;
        this.amountOfStudentsInGroup = amountOfStudentsInGroup;
    }
    doneLesson(title, topics){
        //-- метод должен проверять не было ли уже пройденного урока (урок -- это объект класса Lesson) и если такого урока прежде не было, то создаем новый объект урока (объект класса Lesson) и добавляем в поле passedLessons класса LearningGroup.

        if(!this.passedLessons.includes(title)){
            this.passedLessons.push(new Lesson(title, topics));
        }
    }
}

