import { scaleLinear, scaleBand } from 'd3-scale'

const buildScales = function() {
	this.timeScale = scaleLinear()
		.domain([this.data.startYear, this.data.endYear])
		.range([0, this.height])

	return this
}

export default { buildScales }