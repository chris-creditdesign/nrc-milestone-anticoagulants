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
		.on("mouseenter", (d) => {
			console.log(d)
			timeline.tooltip
				.find("#tooltip-title")
				.text(d.title)

			timeline.tooltip
				.find("#tooltip-tag")
				.text(`Milestone ${d.number} (${d.start}${d.end ? `-${d.end}`: ""})`)

			timeline.tooltip.css("top", timeline.timeScale(d.start) + timeline.margins.top - (timeline.tooltip.outerHeight() / 2))
				.show()
		})
		.on("mouseleave", () => timeline.tooltip.hide())
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