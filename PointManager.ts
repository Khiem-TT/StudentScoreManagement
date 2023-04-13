import {Student} from "./Student";
import {Node} from "./Node";

export class PointManager<T> {
    head: Node<T> | null;
    tail: Node<T> | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertFirst(data: Student) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
    }

    insertLast(data: Student) {
        if (!this.head) {
            this.insertFirst(data);
        } else {
           let node = new Node(data);
           this.tail.next = node;
           this.tail = node;
        }
    }

    showList(): T[] {
        let listData = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next;
        }
        return listData;
    }

    totalStudentsFail() {
        let count: number = 0;
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.data.score <= 5) {
                count++;
            }
            currentNode = currentNode.next;
        }
        return count;
    }

    listStudentMaxScore() {
        let listStudentMaxScore = [];
        let currentNode = this.head;
        let max = currentNode.data.score;
        while (currentNode !== null) {
            if (currentNode.data.score >= max) {
                max = currentNode.data.score;
            }
            currentNode = currentNode.next;
        }
        currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.data.score === max) {
                listStudentMaxScore.push(currentNode);
            }
            currentNode = currentNode.next;
        }
        return listStudentMaxScore;
    }

    findByName(name: string) {
        let listWithName = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.data.name === name) listWithName.push(currentNode);
            currentNode = currentNode.next;
        }
        return listWithName;
    }
}