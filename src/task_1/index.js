"use strict";
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
	this.hours = normalizeHours(hours);
	this.minutes = normalizeMinutes(minutes);
	
	function normalizeHours(hours){
		if(hours>23 || hours<0) throw new Error();
		return hours;
	}

	function normalizeMinutes(minutes){
		if(minutes>59 || minutes < 0) throw new Error();
		return minutes
	}

	this.getMinutesValue = function(){
		return hours*60+minutes;
	};

	this.isEarlier = function(item){
		return hours*60+minutes < item.hours*60+item.minutes;
	};

	this.isLater = function(item){
		return hours*60+minutes > item.hours*60+item.minutes;
	};

	this.equals = function(item){
		if(this.hours === item.hours && this.minutes === item.minutes)
			return true;
	};
}

module.exports.Time = Time;