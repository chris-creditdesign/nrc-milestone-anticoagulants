const updateCanvas = function(app, step) {
	
	app.stage.children.filter( d => d.name === "rope" || d.name === "white").forEach( rope => {
		rope.alpha = 1 - (1.2 * step)	
	})

	app.stage.children.filter( d => d.name === "white").forEach( container => {
		container.children.forEach( cell => {
			const scale = cell.scaleOffset - (0.25 * step)
			cell.scale.set(scale, scale)
		})
	})

}

export default updateCanvas