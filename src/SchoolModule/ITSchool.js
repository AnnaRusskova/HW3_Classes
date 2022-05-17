import { Course } from './Course';
import { LearningGroup } from './LearningGroup';


export class ITSchool extends Course  {
    availableCourses = [];
    startedGroups=[];
    constructor(name, description, MaxAmountOfGroups, MaxAmountOfStudentsInGroup){
        super();
        this.name = name;
        this.description = description;
        this.MaxAmountOfGroups = MaxAmountOfGroups;
        this.MaxAmountOfStudentsInGroup = MaxAmountOfStudentsInGroup;
    }

    registerCourse(courseName, totalLessons, availableTeachersAmount){
        // -- метод должен создавать новый объект класса Course eсли такого курса еще нет среди доступных курсов в школе
        if(this.availableCourses.forEach((course) => course.name !== courseName)){
                let newCourse = new Course(courseName, totalLessons, availableTeachersAmount);
                this.availableCourses.push(newCourse)
        }
    }


    startLearningGroup(courseName, teacherName, amountOfStudents) {
       // -- метод должен создавать новый объект класса LearningGroup если есть такой курс и количество преподавателей такого курса не равно нулю. Если все проверки удовлетворены, то в этом курсе нужно уменьшить количество преподавателей на 1.
        if(this.availableCourses.forEach((course) => course.name === courseName && course.availableTeachersAmount > 0)){
            let newLearningGroup = new LearningGroup(this.nameCourse, this.nameTeacher, this.amountOfStudentsInGroup);
            this.startedGroups.push(newLearningGroup);
            newLearningGroup.availableTeachersAmount -=1;
        }
    }

    endLearningGroup(courseName, teacherName){
        // -- метод для завершения учебной группы, работает также как и в прошлой реализации, только теперь еще и имя преподавателя принимает и удаляет именно ту учебную группу, которую ведет данный преподаватель.
        this.startedGroups = this.startedGroups.filter((group)=> (group.courseName !== courseName) && (group.teacherName !== teacherName))
    } 

    getLearningGroupByCourseName(courseName) {
        // -- метод который возвращает массив учебных групп которые обучаются по курсу courseName.
        return this.startedGroups.filter(group => group.courseName === courseName)
    }
}