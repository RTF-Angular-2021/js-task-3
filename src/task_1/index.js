function Time(hours, minutes) {
	if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59)
		throw "Неверный формат времени";
	this.hours = hours;
	this.minutes = minutes;
}

Time.prototype.isEarlier = function (obj) {
	return this.hours < obj.hours || this.hours === obj.hours && this.minutes < obj.minutes;
}

Time.prototype.isLater = function (obj) {
	return this.hours > obj.hours || this.hours === obj.hours && this.minutes > obj.minutes;
}

module.exports.Time = Time;