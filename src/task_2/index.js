const { Time } = require('../task_1/index');
/** Задача 2 - Класс Meeting
Требуется написать класс встречи - Meeting, который содержит:
	2.1. Поле c датой встречи (объект класса Date)
	2.2. Поле — время начала встречи (объект класса Time)
	2.3. Поле — время конца встречи (объект класса Time)
	2.4. Прототип класса должен содержать метод isMeetingInTimeRange, принимающий два аргумента:
		Начало временного промежутка — объект класса Time
		Конец временного промежутка — объект класса Time
		Должен возвращать true, если встреча, у которой был вызван метод,
		пересекает переданный временной промежутук
	2.5. Время начала встречи должно быть больше времени конца
	2.6. Встреча может быть назначана только в промежутке между 08:00 до 19:00
@constructor
@this {Meeting}
@param {Date} meetingDate - Дата встречи
@param {Time} startTime - Время начала встречи
@param {Time} endTime - Время конца встречи
 */
function Meeting(meetingDate, startTime, endTime) {
	if (!meetingDate || !startTime || !endTime || startTime.isLater(endTime) || startTime.hours < 8 || endTime.hours > 19)
		throw new Error();
	
	this.meetingDate = meetingDate;
	this.startTime = startTime;
	this.endTime = endTime;
};

 Meeting.prototype.isMeetingInTimeRange = function (begin,end) {
	if (((this.startTime.hours === begin.hours) && (this.startTime.minutes === begin.minutes)) ||
		((this.startTime.hours === end.hours) && (this.startTime.minutes === end.minutes)) ||
		((this.endTime.hours === begin.hours) && (this.endTime.minutes === begin.minutes)) ||
		((this.endTime.hours === end.hours) && (this.endTime.minutes === end.minutes))) 
			return true;

	if ((this.endTime.isLater(begin) && this.startTime.isEarlier(end)) || 
	(this.startTime.isEarlier(end) && this.endTime.isLater(begin))) 
		return true;

	return false;
 }

module.exports.Meeting = Meeting;
