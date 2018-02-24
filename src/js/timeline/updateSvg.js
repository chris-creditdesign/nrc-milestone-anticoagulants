const updateSvg = function() {
	if (this.totalHeight !== window.innerHeight) {
		this.totalHeight = window.innerHeight
		this.height = this.totalHeight - this.margins.top - this.margins.bottom;

		this.svg.remove()

			this.buildSvg()
				.buildScales()
				.buildLine()
				.buildAxis()
				.buildMilestones()
	}

	return this
}

export default { updateSvg }