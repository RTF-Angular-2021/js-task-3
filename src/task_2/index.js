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
	if (
		startTime.hours >= 8 &&
		startTime.hours <= 19 &&
		meetingDate instanceof Date &&
		startTime instanceof Time &&
		endTime instanceof Time &&
		startTime &&
		endTime
	) {
		this.meetingDate = meetingDate;
		this.startTime = startTime;
		this.endTime = endTime;
	} else {
		throw new Error("Время должно быть между 8 и 19");
	}
}

//Должен возвращать true, если встреча, у которой был вызван метод,
//  пересекает переданный временной промежутук
Meeting.prototype.isMeetingInTimeRange = function (startTime, endTime) {
	if (
		this.startTime.hours === startTime.hours ||
		(this.startTime.minutes <= startTime.minutes &&
			this.endTime.hours <= endTime.hours) ||
		this.endTime.minutes <= endTime.minutes
	) {
		console.log(true);
		return true;
	} else {
		console.log(false);
		return false;
	}
};

module.exports.Meeting = Meeting;
