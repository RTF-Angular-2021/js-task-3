const { Organaizer } = require('../task_4/index.js');
const { Vacation } = require('../task_3/index.js');
const { Meeting } = require('../task_3/index.js');
const { Time } = require('../../src/task_1/index');

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
Organaizer.prototype.addMeeting = function (meeting) {

	// this.vacations.foreach((vacation) => {
	// 	if (!meeting.isMeetingInTimeRange(vacation.vacationStartDate, vacation.vacationEndDate)) {

	// 		this.meetings.foreach((meet) => {
	// 			if (meeting.isMeetingInTimeRange(meet.startTime, meet.endTime)) {
	// 				return false;
	// 			}
	// 		})

	// 	}
	// 	return true;
	// })

	for (let vacation of this.vacations) {
		if (!meeting.isMeetingInTimeRange(vacation.vacationStartDate, vacation.vacationEndDate)) {
			for (let meet of this.meetings) {
				if (meeting.isMeetingInTimeRange(meet.startTime, meet.endTime))
					return false;
			}
		}
		return false;
	}
	this.meetings.push(meeting);
	return true;

}

Organaizer.prototype.addVacation = function (vacation) {
	let valid = false;

	if (
		!this.vacations.includes(vacation) &&
		!this.vacations.some((element) => {
			return (
				element.isDateInVacation(vacation.vacationStartDate) ||
				element.isDateInVacation(vacation.vacationEndDate)
			);
		}) && !this.meetings.some(meeting => {
			return meeting.meetingDate >= vacation.vacationStartDate && meeting.meetingDate <= vacation.vacationEndDate
		})
	) {
		valid = true;
	}

	//console.log("valid", valid);

	if (valid) {
		this.vacations.push(vacation);
	}

	return valid;
};

module.exports.Organaizer = Organaizer;
