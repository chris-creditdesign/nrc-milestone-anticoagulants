function addRects(selection, timeline) {
	selection
		.exit().remove()

	selection
		.enter()
	  .append("rect")
		.attr("x", 0)
		.attr("y", d => timeline.timeScale(d.start))
		.attr("width", timeline.width)
		.attr("height", 10)
		.on("click", d => window.location.href = window.location.origin + `#milestone-${d.number}`)
	  .append("title")
		.text( d => `Milestone ${d.number}`)
}

const buildMilestones = function(index) {

	this.milestoneContainer.selectAll("rect")
		.data(this.data.filter((d,i) => i !== index), d => d.start)
		.call(addRects, this)

	this.activeMilestoneContainer.selectAll("rect")
		.data(this.data.filter((d,i) => i === index), d => d.start)
		.call(addRects, this)

	return this
}

export default { buildMilestones }