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
	if (vacationStartDate > vacationEndDate || 
		(vacationStartDate.getDate() === vacationEndDate.getDate())) throw new Error();
	this.vacationStartDate = vacationStartDate;
	this.vacationEndDate = vacationEndDate;
 };

 Vacation.prototype.isDateInVacation = function(date){
	if (this.vacationStartDate.getDate() <= date.getDate() && this.vacationEndDate.getDate() >= date.getDate() && 
	date.getFullYear() === this.vacationStartDate.getFullYear())
	 	return true;
	else return false;
 };

module.exports.Vacation = Vacation;
