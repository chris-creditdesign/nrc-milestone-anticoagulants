const updateCanvas = function(app, step) {
	
	app.stage.children.filter( d => d.name === "rope" || d.name === "white").forEach( elem => {
		elem.alpha = 1 - (1.25 * step)	
	})

}

export default updateCanvas