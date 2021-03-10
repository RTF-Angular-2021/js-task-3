/** Задача 1 - Класс Time
Требуется написать класс времени - Time, который содержит:
	1.1. Поле с часами — hours (number)
	1.2. Поле с минутами — minutes (number)
	1.3. Прототип класса должен содержать метод сравнения isEarlier,
	который принимает объект класса Time и возвращает true,
	если переденное значение времени находится позже того,
	которое содержится в экземпляре объекта, у которого вызван метод.
	1.4. Прототип класса должен содержать метод сравнения isLater,
	который принимает объект класса Time и возвращает true,
	если переденное значение времени находится раньше того,
	которое содержится в экземпляре объекта, у которого вызван метод.
@constructor
@this {Time}
@param {number} hours - Час
@param {number} minutes - Минуты
 */
function Time(hours, minutes) {
	if (hours < 0 || minutes < 0 || hours > 23 || minutes > 59) {
		throw 'Invalid args';
	}
	this.hours = hours;
	this.minutes = minutes;
 };

/** Возвращает true, если переденное значение времени находится позже времени в объекте.
 * 
 * @param {Time} time - время для сравнения
 */
Time.prototype.isEarlier = function(time) {
	if (!time instanceof Time) {
		throw 'Invalid args';
	}

	return this.hours * 60 + this.minutes <= time.hours * 60 + time.minutes;
}

/** Возвращает true, если переденное значение времени находится раньше времени в объекте.
 * 
 * @param {Time} time - время для сравнения
 */
Time.prototype.isLater = function(time) {
	if (!time instanceof Time) {
		throw 'Invalid args';
	}

	return this.hours * 60 + this.minutes >= time.hours * 60 + time.minutes;
}

module.exports.Time = Time;
