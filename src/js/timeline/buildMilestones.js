const buildMilestones = function() {

	this.milestoneContainer.selectAll("rect")
		.data(this.data)
		.enter()
		.append("rect")
		.attr("class", (d,i) => `milestone milestone-${i + 1}`)
		.attr("x", 0)
		.attr("y", d => this.timeScale(d.start))
		.attr("width", this.width)
		.attr("height", 10)
		.on("click", (d,i) => window.location.href = window.location.origin + `#milestone-${i + 1}`)
	  .append("title")
		.text((d,i) => `Milestone ${i + 1}`)

	return this
}

export default { buildMilestones }