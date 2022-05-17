export class Course {
    constructor(nameCourse, lessonsAmountInCourse, availableTeachersAmountInCourse){
        this.nameCourse = nameCourse;
        this.lessonsAmountInCourse = lessonsAmountInCourse;
        this.availableTeachersAmountInCourse = availableTeachersAmountInCourse;
    }
}
//availableTeachersAmountinCourse количество будет уменьшаться каждый раз когда в школе стартует новая группа по этому курсу.
