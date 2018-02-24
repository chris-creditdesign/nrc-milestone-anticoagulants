import { select } from 'd3-selection'

const buildSvg = function() {

		this.svg = select(this.target).append("svg")
			.attr("class", "timeline")
			.attr("width", this.totalWidth)
			.attr("height", this.totalHeight)

		this.axisContainer = this.svg.append("g")
			.attr("class", "axisContainer")
			.attr("transform", `translate(${this.margins.left},${this.margins.top})`)
		
		this.milestoneContainer = this.svg.append("g")
			.attr("class", "milestoneContainer")
			.attr("transform", `translate(${this.margins.left},${this.margins.top})`)

		this.activeMilestoneContainer = this.svg.append("g")
			.attr("class", "activeMilestoneContainer")
			.attr("transform", `translate(${this.margins.left},${this.margins.top})`)

		return this
	}

export default { buildSvg }