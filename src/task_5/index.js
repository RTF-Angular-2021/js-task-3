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

Organaizer.prototype.addMeeting = function(meeting) {
	for (const vacation of this.vacations) {
		if (vacation.isDateInVacation(meeting.meetingDate)) {
			return false;
		}
	}
	for (const meeting_ of this.meetings) {
		if (meeting_.meetingDate.toString() === meeting.meetingDate.toString()) {
			const start = meeting.startTime;
			const end = meeting.endTime;
			if (meeting_.isMeetingInTimeRange(start, end)) {
				return false;
			}
		}
	}
	this.meetings.push(meeting);
	return true;
}	

Organaizer.prototype.addVacation = function(vacation) {
	for (const vacation_ of this.vacations) {
		if (isVacationInVacationRange(vacation_, vacation)) {
			return false;
		}
	}
	for (const meeting of this.meetings) {
		if (vacation.isDateInVacation(meeting.meetingDate)) {
			return false;
		}
	}
	this.vacations.push(vacation);
	return true;
} 

function isVacationInVacationRange(vacation1, vacation2) {
	const start1 = vacation1.vacationStartDate;
	const start2 = vacation2.vacationStartDate;
	const end1 = vacation1.vacationEndDate;
	const end2 = vacation2.vacationEndDate;
	return !(end1 < start2 || end2 < start1);
}

module.exports.Organaizer = Organaizer;
