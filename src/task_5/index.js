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
Organaizer.prototype.addMeeting = function(meeting) 
{
	for (let vacations of this.vacations)
	{
		if (vacations.isDateInVacation(meeting.meetingDate))
		{
			return false;
		}
	}

	for (let meet of this.meetings) 
	{
		const startt = meeting.startTime;
		const endd = meeting.endTime;
		if (meet.meetingDate.toString() === meeting.meetingDate.toString() 
		&& (meet.isMeetingInTimeRange(startt, endd))) 
		{
			return false;
		}
	}
	this.meetings.push(meeting);
	return true;
}

Organaizer.prototype.addVacation = function(vacation) 
{
	for (let meet of this.meetings) 
	{
		if (vacation.isDateInVacation(meet.meetingDate)) 
		{
			return false;
		}
	}
	
	const start1 = vacation.vacationStartDate;
	const end1 = vacation.vacationEndDate;
	for (let vacations of this.vacations) 
	{
		if (vacations.vacationStartDate <= start1 && vacations.vacationEndDate >= end1
			|| vacations.vacationStartDate >= start1 && vacations.vacationStartDate <= end1 && vacations.vacationEndDate >= end1
			|| vacations.vacationStartDate <= start1 && vacations.vacationEndDate <= end1 && vacations.vacationEndDate >= start1
			|| vacations.vacationStartDate >= start1 && vacations.vacationEndDate <= end1) 
		{
			return false;
		}
	}
	this.vacations.push(vacation);
	return true;
}


module.exports.Organaizer = Organaizer;
