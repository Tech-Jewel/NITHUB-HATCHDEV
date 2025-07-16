var Student = /** @class */ (function () {
    function Student(name, age, department) {
        this.name = name;
        this.age = age;
        this.department = department;
    }
    Student.prototype.studentRecord = function () {
        console.log("Student's name : ".concat(this.name, " \n Student's age : ").concat(this.age, " \n Student's department : ").concat(this.department));
    };
    return Student;
}());
var Name = /** @class */ (function () {
    function Name() {
    }
    return Name;
}());
var Age = /** @class */ (function () {
    function Age() {
    }
    return Age;
}());
var Department = /** @class */ (function () {
    function Department() {
    }
    return Department;
}());
var student1 = new Student("Jewel", 18, "Computer Science");
var student2 = new Student("Jewel", 18, "Computer Science");
var student = new Student("Jewel", 18, "Computer Science");
student1.studentRecord();
