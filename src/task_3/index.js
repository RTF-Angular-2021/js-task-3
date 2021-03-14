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
function Vacation(vacationStartDate, vacationEndDate) {
	this.vacationEndDate = vacationEndDate;
	this.vacationStartDate = vacationStartDate;
	if (vacationStartDate >= vacationEndDate || !vacationEndDate || !vacationStartDate) throw 'exception';
 };

 Vacation.prototype.isDateInVacation = function(date) {
	return date >= this.vacationStartDate && date <= this.vacationEndDate; 
 }

module.exports.Vacation = Vacation;
