const { Time } = require('../../src/task_1/index');
const { Meeting } = require('../../src/task_2/index');
const { Vacation } = require('../../src/task_3/index');

const { Organaizer } = require('../../src/task_5/index');

const organaizer = new Organaizer([], []);

test('Добавляет встречи в органайзер', () => {
	const firstMeeting = new Meeting(new Date(2021, 3, 12), new Time(16, 0), new Time(17, 0));
	const secondMeeting = new Meeting(new Date(2021, 3, 12), new Time(13, 0), new Time(14, 0));
	const thirdMeeting = new Meeting(new Date(2021, 3, 14), new Time(16, 0), new Time(17, 0));
	expect(organaizer.addMeeting(firstMeeting)).toBe(true);
	expect(organaizer.addMeeting(secondMeeting)).toBe(true);
	expect(organaizer.addMeeting(thirdMeeting)).toBe(true);
	expect(organaizer.meetings).toStrictEqual([firstMeeting, secondMeeting, thirdMeeting]);
});

test('Добавляет отпуска в органайзер', () => {
	const firstVacation = new Vacation(new Date(2021, 4, 1), new Date(2021, 4, 15));
	const secondVacation = new Vacation(new Date(2021, 5, 1), new Date(2021, 5, 15));
	const thirdVacation = new Vacation(new Date(2021, 6, 1), new Date(2021, 6, 15));
	expect(organaizer.addVacation(firstVacation)).toBe(true);
	expect(organaizer.addVacation(secondVacation)).toBe(true);
	expect(organaizer.addVacation(thirdVacation)).toBe(true);
	expect(organaizer.vacations).toStrictEqual([firstVacation, secondVacation, thirdVacation]);
});

test('Не добавляет встречи в органайзер', () => {
	const firstUncorrectMeeting = new Meeting(new Date(2021, 3, 12), new Time(15, 0), new Time(16, 15));
	const secondUncorrectMeeting = new Meeting(new Date(2021, 3, 12), new Time(13, 59), new Time(16, 0));
	const thirdUncorrectMeeting = new Meeting(new Date(2021, 4, 5), new Time(16, 0), new Time(17, 0));
	expect(organaizer.addMeeting(firstUncorrectMeeting)).toBe(false);
	expect(organaizer.addMeeting(secondUncorrectMeeting)).toBe(false);
	expect(organaizer.addMeeting(thirdUncorrectMeeting)).toBe(false);
});

test('Не добавляет отпуска в органайзер', () => {
	const firstUncorrectVacation = new Vacation(new Date(2021, 3, 15), new Date(2021, 4, 12));
	const secondUncorrectVacation = new Vacation(new Date(2021, 5, 12), new Date(2021, 5, 20));
	const thirdUncorrectVacation = new Vacation(new Date(2021, 3, 10), new Date(2021, 3, 13));
	expect(organaizer.addVacation(firstUncorrectVacation)).toBe(false);
	expect(organaizer.addVacation(secondUncorrectVacation)).toBe(false);
	expect(organaizer.addVacation(thirdUncorrectVacation)).toBe(false);
});