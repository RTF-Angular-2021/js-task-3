const { Time } = require('../../src/task_1/index');
const { Meeting } = require('../../src/task_2/index');
const { Vacation } = require('../../src/task_3/index');
const { Organaizer } = require('../../src/task_4/index');

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

Organaizer.prototype.addMeeting = function (Meeting, Vocation) {
    if (this.meetings.length === 0) {
        this.meetings.push(Meeting);

        return true;
    }

    let shouldPush = false;

    this.meetings.forEach((meet) => {
        if (
            meet.meetingDate.getTime() == Meeting.meetingDate.getTime() &&
            !meet.isMeetingInTimeRange(Meeting.startTime.hours, Meeting.endTime.hours)
        ) {
            shouldPush = true;
            return;
        } else if (meet.meetingDate.getTime() !== Meeting.meetingDate.getTime()) {
            shouldPush = true;
            return;
        } else if (
            meet.meetingDate.getTime() == Meeting.meetingDate.getTime() &&
            meet.isMeetingInTimeRange(Meeting.startTime.hours, Meeting.endTime.hours)
        ) {
            shouldPush = false;
            return;
        } else if (
            meet.meetingDate.getTime() == Meeting.meetingDate.getTime() &&
            meet.isMeetingInTimeRange(Meeting.startTime.hours, Meeting.endTime.hours)
        ) {
            shouldPush = false;
            return;
        }
    });

    if (shouldPush) {
        this.meetings.push(Meeting);
        return true;
    }

    return false;
};


module.exports.Organaizer = Organaizer;
