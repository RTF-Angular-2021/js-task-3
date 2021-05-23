const { Meeting } = require('../task_2/index');
const { Vacation } = require('../task_3/index');

function Organaizer(meetings, vacations) {
	this.meetings = meetings;
	this.vacations = vacations;
};

module.exports.Organaizer = Organaizer;