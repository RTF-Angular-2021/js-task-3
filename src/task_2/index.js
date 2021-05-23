const { Time } = require('../task_1/index');

function Meeting(meetingDate, startTime, endTime) {
	if (startTime.hours > endTime.hours || startTime.hours === endTime.hours
		&& startTime.minutes >= endTime.minutes)
		throw "Встреча не может начаться позже завершения";
	if (startTime.hours < 8 || endTime.hours >= 19 && endTime.minutes !== 0)
		throw "Встреча может быть назначана только в промежутке между 08:00 до 19:00";
	this.meetingDate = meetingDate;
	this.startTime = startTime;
	this.endTime = endTime;
};

Meeting.prototype.isMeetingInTimeRange = function (startTime, endTime) {
	let isBetween = (start, item, end) => item >= start && item <= end;
	let thisStartTime = this.startTime.hours * 60 + this.startTime.minutes;
	let thisEndTime = this.endTime.hours * 60 + this.endTime.minutes;
	startTime = startTime.hours * 60 + startTime.minutes;
	endTime = endTime.hours * 60 + endTime.minutes;
	return isBetween(thisStartTime, startTime, thisEndTime) ||
		isBetween(thisStartTime, endTime, thisEndTime) ||
		isBetween(startTime, thisStartTime, endTime) ||
		isBetween(startTime, thisEndTime, endTime);
}

module.exports.Meeting = Meeting;