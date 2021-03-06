const { Vacation } = require('../../src/task_3/index');

const vacationStartDate = new Date(2021, 5, 3);
const vacationEndDate = new Date(2021, 5, 15);
const correctVacation = new Vacation(vacationStartDate, vacationEndDate);

test('Создает объект класса Vacation', () => {
	expect(correctVacation.vacationEndDate).toStrictEqual(vacationEndDate);
	expect(correctVacation.vacationStartDate).toStrictEqual(vacationStartDate);
});

test('Не создает объект класса Vacation', () => {
	expect(() => new Vacation(new Date(2021, 5, 15), new Date(2021, 5, 15))).toThrow();
	expect(() => new Vacation(new Date(2021, 5, 30), new Date(2021, 5, 15))).toThrow();
	expect(() => new Vacation(new Date(2021, 5, 15))).toThrow();
	expect(() => new Vacation()).toThrow();
});

test('Метод isDateInVacation работает корректно', () => {
	expect(correctVacation.isDateInVacation(new Date(2021, 5, 8))).toBe(true);
	expect(correctVacation.isDateInVacation(new Date(2021, 5, 15))).toBe(true);
	expect(correctVacation.isDateInVacation(new Date(2021, 5, 3))).toBe(true);
	expect(correctVacation.isDateInVacation(new Date(2020, 5, 3))).toBe(false);
});
