const buildAxis = function() {

	const textPadding = 5

	// this.axisContainer.selectAll("line")
	// 	.data(this.data.decades)
	// 	.enter()
	//   .append("line")
	// 	.attr("stroke", "#000000")
	// 	.attr("x1", 0)
	// 	.attr("y1", d => this.timeScale(d))
	// 	.attr("x2", this.width)
	// 	.attr("y2", d => this.timeScale(d))

	const textLabels = this.axisContainer.selectAll("g")
		.data(this.data.decades)
		.enter()
	  .append("g")
		.attr("transform", d => `translate(${0}, ${this.timeScale(d)})`)

	textLabels		
	  .append("text")
		.text(d => d)
		.attr("x", 0)
		.attr("y", 0)
		.attr("dy", "0.3em")
		.attr("dx", `${textPadding}px`)

	textLabels
	  .append("rect")
		.attr("x", 0)
		.attr("y", function() {
			return (this.previousSibling.getBBox().height * -0.5) - (textPadding * 0.5)
		})
		.attr("width", function() {
			return this.previousSibling.getBBox().width + ( textPadding * 2)
		})
		.attr("height", function() {
			return this.previousSibling.getBBox().height + textPadding
		})

	textLabels
		.selectAll("text")
		.raise()

	return this

}

export default { buildAxis }