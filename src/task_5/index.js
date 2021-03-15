const { Organaizer } = require('../task_4/index');

/* Задача 5 - Расширить прототип класса Organaizer следующими методами:
	5.1. addMeeting, принимающий — объект класса Meeting.
	Результатом работы должно быть true и добавление объекта встречи в массив встреч,
	если встреча успешно добавлена в органайзер и false в ином случае.
	Встреча может быть добавлена, если:
		В день встречи в органайзере нет отпуска
		Время встречи не пересекается с какой-нибудь другой встречей в органайзере
		
	5.2. addVacation, принимающий — объект класса Vacation.
	Результатом работы должно быть true и добавление объекта отпуска в массив отпусков,
	если отпуск успешно добавлена в органайзер и false в ином случае.
	Отпуск может быть добавлен, если:
		Отпуск не попадает в промежуток другого отпуска
		В промежуток отпуска не назначено никаких встреч
 */

Organaizer.prototype.addMeeting = function (meet) {
	if (this.vacations.filter(value => value.isDateInVacation(meet.meetingDate)).length > 0
		|| this.meetings.filter(value => value.isMeetingInTimeRange(meet.startTime, meet.endTime)
			&& Number(value.meetingDate) == Number(meet.meetingDate)).length > 0) return false;
	this.meetings.push(meet);
	return true;
}

Organaizer.prototype.addVacation = function (vacation) {
	if (this.vacations.find(value =>
		value.isDateInVacation(vacation.vacationStartDate)
		|| value.isDateInVacation(vacation.vacationEndDate)) !== undefined) {
		return false;
	}

	if (this.meetings.find(value =>
		vacation.vacationStartDate < value.meetingDate
		&& value.meetingDate < vacation.vacationEndDate) !== undefined) {
		return false;
	}

	this.vacations.push(vacation);
	return true;
}


module.exports.Organaizer = Organaizer;
