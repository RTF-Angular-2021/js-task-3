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
Organaizer.prototype.addMeeting = function(item){
	for(let q of this.meetings){
		if(q.isMeetingInTimeRange(item.startTime, item.endTime) && Number(q.meetingDate) == Number(item.meetingDate))
			return false;
	};
	for(let q of this.vacations){
		if(q.isDateInVacation(item.meetingDate))
		return false;
	};
	this.meetings.push(item);
	return true;
}

Organaizer.prototype.addVacation = function(item){
	for(let q of this.meetings){
		if(item.isDateInVacation(q.meetingDate))
			return false;
	};
	for(let q of this.vacations){
		if(item.isDateInVacation(q.vacationStartDate) | item.isDateInVacation(q.vacationEndDate))
		return false;
	};
	this.vacations.push(item);
	return true;
}
module.exports.Organaizer = Organaizer;
