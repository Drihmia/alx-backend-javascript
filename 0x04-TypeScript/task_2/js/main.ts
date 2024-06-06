// Task 5:
console.log('-------------------------------- TASK 5-----------------------------------------------');
interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
	workFromHome() {
		return 'Working from home';
	}
	getCoffeeBreak() {
		return 'Getting a coffee break';
	}
	workDirectorTasks() {
		return 'Getting to director tasks';
	}
}

export class Teacher implements TeacherInterface {
	workFromHome() {
		return 'Working from home';
	}
	getCoffeeBreak() {
		return 'Getting a coffee break';
	}
	workTeacherTasks() {
		return 'Getting to work';
	}
}

interface createEmployeeInterface { (salary: number | string): DirectorInterface | TeacherInterface }

const createEmployee: createEmployeeInterface = (salary) => {
	if (typeof salary === 'number') {
		if (salary < 500) return new Teacher();
		return new Director();
	} else {
		if (+(salary.replace('$', '')) < 500) return new Teacher();
		return new Director();
	}
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// Task 6:
console.log('-------------------------------- TASK 6-----------------------------------------------');
interface isDirectorInterface { (employee: DirectorInterface | TeacherInterface): boolean }

export const isDirector: isDirectorInterface = (employee) => {
	return employee instanceof Director;
}

console.log(isDirector(createEmployee(200)));
console.log(isDirector(createEmployee(600)));

interface executeWorkInterface { (employee: DirectorInterface | TeacherInterface): string }

const executeWork: executeWorkInterface = (employee) => {
	if (isDirector(employee)) {
		return (employee as DirectorInterface).workDirectorTasks(); // Using type assertion.
	} else {
		return (employee as TeacherInterface).workTeacherTasks(); // Using type assertion.
	}
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

// Task 7:
console.log('-------------------------------- TASK 7-----------------------------------------------');
export type Subjects = 'Math' | 'History';
interface teachClassInterface { (todayClass: Subjects): string }

const teachClass: teachClassInterface = (todayClass) => {
	return `Teaching ${todayClass}`;
}

console.log(teachClass('Math'));

console.log(teachClass('History'));

