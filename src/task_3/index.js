function Vacation(vacationStartDate, vacationEndDate) {
	if (typeof vacationStartDate === "undefined" || typeof vacationEndDate === "undefined")
		throw "Необходимо передать оба аргумента";
	if (vacationStartDate - vacationEndDate >= 0)
		throw "Дата окончания отпуска должна быть позже даты начала";
	this.vacationStartDate = vacationStartDate;
	this.vacationEndDate = vacationEndDate;
};

Vacation.prototype.isDateInVacation = function (date) {
	return date - this.vacationStartDate >= 0 && this.vacationEndDate - date >= 0;
}

module.exports.Vacation = Vacation;