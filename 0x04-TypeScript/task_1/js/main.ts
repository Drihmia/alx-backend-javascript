// Task 1:
interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
	test: true,
};

console.log(teacher3);

// Task 2:
interface Directors extends Teacher {
	numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// task 3:

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
	return `${firstName.slice(0,1)}. ${lastName}`;
};

// Task 4:
interface StudentClassInterface { 
	workOnHomework(): string;
	displayName(): void;
}

export interface StudentClassConstuctorInterface {
	new(firstName: string, lastName:string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
	firstName: string;
	lastName: string;

	constructor (firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework() {
		return 'Currently working';
	}

	displayName() {
		return `${this.firstName}`;
	}
}

const student = new StudentClass('Redouane', 'drihmia');
console.log(student.workOnHomework());
console.log(student.displayName());
