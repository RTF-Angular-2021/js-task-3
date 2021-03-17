const { Meeting } = require('../task_2/index');
const { Vacation } = require('../task_3/index');

/** Задача 4 - Класс Organaizer
Требуется написать класс органайзера - Organaizer, который содержит:
	4.1. Поле встреч — meetings (массив объектов класса Meeting)
	4.2. Поле отпусков — vacations (массив объектов класса Vacation)

@constructor
@this {Organaizer}
@param {Array<Meeting>} meetings - Массив встреч
@param {Array<Vacation>} vacations - Массив отпусков
 */

function Organaizer(meetings, vacations) {
	this.meetings = meetings;
	this.vacations = vacations;
 };

module.exports.Organaizer = Organaizer;
