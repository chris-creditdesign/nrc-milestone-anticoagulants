function addMilestones(selection, timeline) {
	selection
		.exit().remove()

	selection
		.enter()
	  .append("circle")
		.attr("cx", timeline.width * 0.75)
		.attr("cy", d => timeline.timeScale(d.start))
		.attr("r", timeline.width / 10)
		.on("click", d => window.location.href = window.location.origin + `#milestone-${d.number}`)
	  .append("title")
		.text( d => `Milestone ${d.number}`)
}

const buildMilestones = function(index) {

	this.milestoneContainer.selectAll("circle")
		.data(this.data.filter((d,i) => i !== index), d => d.start)
		.call(addMilestones, this)

	this.activeMilestoneContainer.selectAll("circle")
		.data(this.data.filter((d,i) => i === index), d => d.start)
		.call(addMilestones, this)

	return this
}

export default { buildMilestones }