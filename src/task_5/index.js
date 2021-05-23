const { Organaizer } = require('../task_4/index');

Organaizer.prototype.addMeeting = function (meeting) {
    for (let x of this.vacations)
        if (x.isDateInVacation(meeting.meetingDate)) return false;
    for (let x of this.meetings)
        if (meeting.isMeetingInTimeRange(x.startTime, x.endTime) &&
            x.meetingDate.getDate() === meeting.meetingDate.getDate())
            return false;
    this.meetings.push(meeting);
    return true;
}

Organaizer.prototype.addVacation = function (vacation) {
    for (let x of this.vacations)
        if (x.isDateInVacation(vacation.vacationStartDate) ||
            x.isDateInVacation(vacation.vacationEndDate))
            return false;
    for (let x of this.meetings)
        if (vacation.isDateInVacation(x.meetingDate)) return false;
    this.vacations.push(vacation);
    return true;
}

module.exports.Organaizer = Organaizer;