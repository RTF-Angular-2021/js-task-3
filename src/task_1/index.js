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
	if (hours >= 24 || hours < 0 || minutes >= 60 || minutes < 0) throw Error('wrong format')
	this.hours = hours;
	this.minutes = minutes;
	this.isEarlier = function (time) {
		if (this.hours < time.hours) {
			return true
		}
		else {
			return this.hours === time.hours && this.minutes < time.minutes;
		}
	}

	this.isLater = function (time) {
		if (this.hours > time.hours) {
			return true
		}
		else {
			return this.hours === time.hours && this.minutes > time.minutes;
		}
	}
	this.exactly = function (time) {
		if(this.hours == time.hours && this.minutes == time.minutes){
			return true
		}
	}
	
};

module.exports.Time = Time;
