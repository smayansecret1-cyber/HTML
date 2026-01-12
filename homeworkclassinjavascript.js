class Student {
constructor(name, grade) {
this.name = name;
this.grade = grade;
}
static schoolName() {
return "Green Valley School";
}
}
let s1 = new Student("Smayan", 8);
console.log(s1.name);
console.log(s1.grade);
console.log(Student.schoolName());