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
Organaizer.prototype.addMeeting = function (meeting) {
	let checkVacation = this.vacations.filter(item => item.isDateInVacation(meeting.meetingDate));
	let checkMeetings = this.meetings.filter(item => {
		if (meeting.meetingDate.getTime() === item.meetingDate.getTime()) return item.isMeetingInTimeRange(meeting.startTime, meeting.endTime);
	})
	if (!checkVacation.length && !checkMeetings.length) {
		this.meetings.push(meeting);
		return true;
	} else return false;
}

Organaizer.prototype.addVacation = function (vacation) {
	let checkVacation = this.vacations.filter(item => item.isDateInVacation(vacation.vacationStartDate) || (item.isDateInVacation(vacation.vacationEndDate)));
	let checkMeetings = this.meetings.filter(item => item.meetingDate >= vacation.vacationStartDate && item.meetingDate <= vacation.vacationEndDate);
	if (!checkVacation.length && !checkMeetings.length) {
		this.vacations.push(vacation);
		return true;
	} else return false;
	
}
module.exports.Organaizer = Organaizer;
