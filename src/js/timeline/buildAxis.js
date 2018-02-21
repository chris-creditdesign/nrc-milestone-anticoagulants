const buildAxis = function() {

	this.axisContainer.selectAll("rect")
		.data(this.data.decades)
		.enter()
		.append("rect")
		.attr("height", 1)
		.attr("width", this.width)
		.attr("stroke", "none")
		.attr("x", 0)
		.attr("y", d => this.timeScale(d))

	return this

}

export default { buildAxis }