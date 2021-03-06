const { Time } = require('../../src/task_1/index');

test('Создает объект класса Time', () => {
	const time = new Time(20, 21);
	expect(time.hours).toBe(20);
  	expect(time.minutes).toBe(21);
});

test('Не создает объект класса Time', () => {
	expect(() => new Time(55, 21)).toThrow();
	expect(() => new Time(55, 125)).toThrow();
	expect(() => new Time(20, 125)).toThrow();
	expect(() => new Time(-3, 5)).toThrow();
	expect(() => new Time(23, -5)).toThrow();
});

test('Метод isEarlier работает корректно', () => {
	let firstTime = new Time(20, 21);
	let secondTime = new Time(21, 21);
	expect(firstTime.isEarlier(secondTime)).toBe(true);
	expect(secondTime.isEarlier(firstTime)).toBe(false);
	firstTime = new Time(14, 30);
	secondTime = new Time(14, 35);
	expect(firstTime.isEarlier(secondTime)).toBe(true);
	expect(secondTime.isEarlier(firstTime)).toBe(false);
});

test('Метод isLater работает корректно', () => {
	let firstTime = new Time(20, 21);
	let secondTime = new Time(21, 21);
	expect(secondTime.isLater(firstTime)).toBe(true);
	expect(firstTime.isLater(secondTime)).toBe(false);
	firstTime = new Time(14, 30);
	secondTime = new Time(14, 35);
	expect(secondTime.isLater(firstTime)).toBe(true);
	expect(firstTime.isLater(secondTime)).toBe(false);
});
