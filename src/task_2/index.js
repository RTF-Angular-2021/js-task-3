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
	
	if (!startTime || !endTime || !meetingDate) {
		throw ('no value');
	}
	else {
		this.meetingDate = meetingDate;
		this.startTime = startTime;
		this.endTime = endTime;
		this.isMeetingInTimeRange = function (start, end) {
			if (this.startTime.exactly(start) || this.startTime.exactly(end) ||
				this.endTime.exactly(start) || this.endTime.exactly(end)) {
				return true;
			}
	
			if (this.endTime.isLater(start) && this.startTime.isEarlier(end) ||
				this.startTime.isEarlier(end) && this.endTime.isLater(start)) {
				return true;
			}else return false;
		}
	}
};

module.exports.Meeting = Meeting;
