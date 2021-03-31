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
	if(hours > 23 || hours < 0 || minutes > 60 || minutes < 0) throw new Error('Incorrect time');
	this.hours = hours;
	this.minutes = minutes;
	this.isEarlier = time => time.timeInMinutes() > this.timeInMinutes(); 
	this.isLater = time => time.timeInMinutes() < this.timeInMinutes(); 
	this.timeInMinutes = () => this.minutes + this.hours * 60;
}

module.exports.Time = Time;
