import {Student} from "./Student";

export class Node<T> {
    data: Student;
    next: Node<T> | null = null;

    constructor(data: Student) {
        this.data = data;
    }

    readData(): Student {
        return this.data;
    }
}