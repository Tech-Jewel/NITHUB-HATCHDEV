class Student{


    // Members of the class can be placed here in absece of visibility modifiers
   

    constructor(
        public  name: Name,
        private age: Age,
        public readonly department: Department
    ) {
        this.name = name;
        this.age = age;
        this.department = department; 
    }
        
    studentRecord() {
        console.log(
					`Student's name : ${this.name} \n Student's age : ${this.age} \n Student's department : ${this.department}`
				);
    }  
}

class Name {
    
}

class Age {

}

class Department {

}

const student1 = new Student("Jewel", 18, "Computer Science");
const student2 = new Student("Jewel", 18, "Computer Science");
const student3 = new Student("Jewel", 18, "Computer Science");

student1.studentRecord();
student2.studentRecord();
student3.studentRecord();


class UniStudent extends Student{

    constructor(
        public major: string = "Artificial intelligence",
        name: Name,
        age: Age,
        department: Department,
    ) {
        super(name, age, department);



    }
}