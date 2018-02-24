const buildLine = function() {

	this.axisContainer
	  .append("line")
		.attr("x1", this.width * 0.75)
		.attr("y1", this.timeScale(Math.min(...this.data.map(d => d.start))) )
		.attr("x2", this.width * 0.75)
		.attr("y2", this.timeScale(Math.max(...this.data.map(d => d.start))))

	return this
}

export default { buildLine }