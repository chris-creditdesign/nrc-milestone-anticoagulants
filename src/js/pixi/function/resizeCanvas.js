const resizeCanvas = function(app) {

	const height = document.getElementById("pixi-container").offsetHeight
	
	if ((window.innerWidth !== app.screen.width) || (height !== app.screen.height)) {
		
		app.renderer.resize(
			window.innerWidth,
			height
		)


		app.stage.children.filter( child => child.name === "back" || child.name === "front" || child.name === "white" )
			.forEach( elem => {
				elem.children.forEach( cell => {
					// cell.x = cell.xOffset * app.screen.width
					// cell.y = cell.yOffset * app.screen.height

					cell.startX = cell.xOffset * app.screen.width
					cell.startY = cell.yOffset * app.screen.height

					window.innerWidth < 600 ?
						cell.scale.set(cell.scaleOffset, cell.scaleOffset)
						: cell.scale.set(1,1)
				})
			})

		app.stage.children.filter( child => child.name === "rope" )
			.forEach( elem => {
				elem.children.forEach( rope => {
					rope.points.forEach( (point, i, array) => {
						point.set(
							i * ((app.screen.width * 2) / array.length),
							(Math.sin(i * 0.5) * 100)
						)
					})
				})
			})

	}

}

export default resizeCanvas
