const { Time } = require('../../src/task_1/index');
const { Meeting } = require('../../src/task_2/index');

const meetingDate = new Date(2021, 5, 3);
const startTime = new Time(16, 15);
const endTime = new Time(16, 40);
const correctMeeting = new Meeting(meetingDate, startTime, endTime);

test('Создает объект класса Meeting', () => {
	expect(correctMeeting.meetingDate).toStrictEqual(meetingDate);
	expect(correctMeeting.startTime).toStrictEqual(startTime);
	expect(correctMeeting.endTime).toStrictEqual(endTime);
});

test('Не создает объект класса Meeting', () => {
	expect(() => new Meeting(new Meeting(new Date(2021, 5, 3)), new Time(16, 10))).toThrow();
	expect(() => new Meeting(new Meeting(new Date(2021, 5, 3)))).toThrow();
	expect(() => new Meeting(new Meeting(new Date(2021, 5, 3)), new Time(16, 15), new Time(16, 10))).toThrow();
	expect(() => new Meeting(new Meeting(new Date(2021, 5, 3)), new Time(19, 15), new Time(19, 30))).toThrow();
	expect(() => new Meeting(new Meeting(new Date(2021, 5, 3)), new Time(7, 15), new Time(12, 30))).toThrow();
});

test('Метод isMeetingInTimeRange работает корректно', () => {
	expect(correctMeeting.isMeetingInTimeRange(new Time(16, 0), new Time(17, 0))).toBe(true);
	expect(correctMeeting.isMeetingInTimeRange(new Time(16, 15), new Time(17, 0))).toBe(true);
	expect(correctMeeting.isMeetingInTimeRange(new Time(16, 15), new Time(16, 20))).toBe(true);
	expect(correctMeeting.isMeetingInTimeRange(new Time(15, 15), new Time(15, 20))).toBe(false);
	expect(correctMeeting.isMeetingInTimeRange(new Time(15, 15), new Time(16, 20))).toBe(true);
});
