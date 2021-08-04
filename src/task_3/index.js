/** Задача 3 - Класс Vacation
Требуется написать класс отпуска - Vacation, который содержит:
	3.1. Дата начала (объект класса Date)
	3.2. Дата окончания (объект класса Time)
	3.3. Прототип класса должен содержать метод isDateInVacation, принимающий один аргумент — дату.
	Должен возвращать true, если переданная дата, входит в промежуток отпуска.
	3.4. Дата окончания отпуска должна быть позже даты начала
@constructor
@this {Vacation}
@param {Date} vacationStartDate - Дата начала отпуска
@param {Date} vacationEndDate - Время конца отпуска
 */

class Vacation {
	constructor(vacationStartDate, vacationEndDate) {
		if (vacationEndDate > vacationStartDate) {
			this.vacationEndDate = vacationEndDate;
			this.vacationStartDate = vacationStartDate;
		} else {
			throw new Error();
		}
	}

	isDateInVacation(date) {
		return (date <= this.vacationEndDate && date >= this.vacationStartDate) ? true : false;
	}
}

module.exports.Vacation = Vacation;
