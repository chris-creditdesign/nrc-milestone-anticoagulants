const buildAxis = function() {

	const textPadding = 5

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