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
//function Time(hours, minutes) { };
class Time{

	constructor(hours, minutes){
		if(0 > hours || hours > 23 || 0 > minutes || minutes > 60){
			throw new Error()
		};
		
		this.hours = hours;
		this.minutes = minutes;
	}

	isEarlier(secondTime){
		if(this.hours < secondTime.hours){
			return true;
		};

		if(this.hours === secondTime.hours && this.minutes < secondTime.minutes){
			return true;
		};

		return false
	}

	isLater(secondTime){
		if(this.hours > secondTime.hours){
			return true;
		};

		if(this.hours === secondTime.hours && this.minutes > secondTime.minutes){
			return true;
		};
		
		return false
	}

	equals(time){
		if(this.hours === time.hours && this.minutes === time.minutes){
		  return true;
		};
	}
}

module.exports.Time = Time;
