import {PointManager} from "./PointManager";
import {Student} from "./Student";

let linkedList: PointManager<Student> = new PointManager();
let student1 = new Student('Tran The Phuong', 5);
let student2 = new Student('Nguyen Van Yeah', 2);
let student3 = new Student('Nguyen Thi Ok', 8);
let student4 = new Student('Nguyen Van Okokok', 10);
let student5 = new Student('Tran The Phuong', 10);

linkedList.insertFirst(student1);
linkedList.insertFirst(student4);
linkedList.insertFirst(student3);
linkedList.insertLast(student2);
linkedList.insertLast(student5);

console.log(linkedList.showList());
console.log(linkedList.totalStudentsFail());
console.log(linkedList.listStudentMaxScore());
console.log(linkedList.findByName('Tran The Phuong'));