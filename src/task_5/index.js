const { Meeting } = require('../task_2');
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

/**Возвращает true, если встреча успешно добавлена в органайзер и false в ином случае.
 * 
 * Встреча может быть добавлена, если:
 * 1. В день встречи в органайзере нет отпуска	
 * 2. Время встречи не пересекается с какой-нибудь другой встречей в органайзере
 * @param {Meeting} meeting Экземпляр Meeting для добавления в органайзер.
 */
Organaizer.prototype.addMeeting = function (meeting) {
	if (!meeting instanceof Meeting) {
		return false;
	}

	if (this.vacations.find(e => e.isDateInVacation(meeting.meetingDate)) !== undefined) {
		return false;
	}

	if (this.meetings.find(e =>
		e.meetingDate.getDate() === meeting.meetingDate.getDate()
		&& e.isMeetingInTimeRange(meeting.startTime, meeting.endTime)) !== undefined) {
		return false;
	}

	this.meetings.push(meeting);
	return true;
}

/**Возвращает true, если отпуск успешно добавлен в органайзер и false в ином случае.
 * 
 * Отпуск может быть добавлен, если:
 * 1. Отпуск не попадает в промежуток другого отпуска
 * 2. В промежуток отпуска не назначено никаких встреч
 * @param {Vacation} vacation Экземпляр Vacation для добавления в органайзер.
 */
Organaizer.prototype.addVacation = function (vacation) {
	if (!vacation instanceof Vacation) {
		return false;
	}

	if (this.vacations.find(e =>
		e.isDateInVacation(vacation.vacationStartDate)
		|| e.isDateInVacation(vacation.vacationEndDate)) !== undefined) {
		return false;
	}

	if (this.meetings.find(e =>
		vacation.vacationStartDate < e.meetingDate
		&& e.meetingDate < vacation.vacationEndDate) !== undefined) {
		return false;
	}

	this.vacations.push(vacation);
	return true;
}

module.exports.Organaizer = Organaizer;
