interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const studentOne: Student = {
	firstName: 'Redouane',
	lastName: 'Drihmia',
	age: 30,
	location: 'MA',
};

const studentTwo: Student = {
	firstName: 'Red',
	lastName: 'Dri',
	age: 29,
	location: 'MA',
};

const studentsList: Student[] = [studentOne, studentTwo];
export default studentsList;
