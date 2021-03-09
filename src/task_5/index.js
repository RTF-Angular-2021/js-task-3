const { Vacation } = require('../task_3');
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

Organaizer.prototype.addMeeting = function (newMeeting) {
	if (isCorrectMeeting(this, newMeeting)) {
		this.meetings.push(newMeeting);
		return true;
	}
	return false;

}

function isCorrectMeeting(organaizer, newMeeting) {
	for (let vacation of organaizer.vacations) {
		if (vacation.isDateInVacation(newMeeting.meetingDate)) {
			return false;
		}
	}

	for (let meeting of organaizer.meetings) {
		if (Number(meeting.meetingDate) === Number(newMeeting.meetingDate) && meeting.isMeetingInTimeRange(newMeeting.startTime, newMeeting.endTime)) {
			return false;
		}

	}

	return true;
}

Organaizer.prototype.addVacation = function (newVacation) {
	if (isCorrectVacation(this, newVacation)) {
		this.vacations.push(newVacation);
		return true;
	}
	return false;
}

function isCorrectVacation(organaizer, newVacation) {
	for (let vacation of organaizer.vacations) {
		if (vacation.isDateInVacation(newVacation.vacationStartDate) || vacation.isDateInVacation(newVacation.vacationEndDate)) {
			return false;
		}
	}

	for (let meeting of organaizer.meetings) {
		if (newVacation.isDateInVacation(meeting.meetingDate)) {
			return false;
		}
	}

	return true;
}

module.exports.Organaizer = Organaizer;
