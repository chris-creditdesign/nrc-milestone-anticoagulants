import CellContainer from '../class/CellContainer'
import RopeContainer from '../class/RopeContainer'

const resizeCanvas = function(app) {
	
	if ((window.innerWidth !== app.screen.width) || (window.innerHeight !== app.screen.height)) {
		app.renderer.resize(
			window.innerWidth,
			window.innerHeight
		)

		app.stage.children.filter( child => child instanceof CellContainer )
			.forEach( elem => {
				elem.children.forEach( cell => {
					cell.x = cell.xOffset * app.screen.width
					cell.y = cell.yOffset * app.screen.height

					window.innerWidth < 600 ? 
						cell.scale.set(0.5,0.5)
						: cell.scale.set(1,1)
				})
			})

		app.stage.children.filter( child => child instanceof RopeContainer )
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