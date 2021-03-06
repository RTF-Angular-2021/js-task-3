const { Organaizer } = require('../../src/task_4/index');

test('Создает объект класса Organaizer', () => {
	const organaizer = new Organaizer([], []);
	expect(organaizer.meetings).toStrictEqual([]);
	expect(organaizer.vacations).toStrictEqual([]);
});
