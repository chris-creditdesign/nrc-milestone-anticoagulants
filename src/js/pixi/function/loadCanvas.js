import * as PIXI from 'pixi.js'
import CellContainer from '../class/CellContainer'
import RopeContainer from '../class/RopeContainer'
import onAssetsLoaded from './onAssetsLoaded'

const loadCanvas = function(scrollstory, jsonURL) {
	const app = new PIXI.Application(
			window.innerWidth,
			window.innerHeight,
			{transparent: true, antialias: true}
		)

	app.stage.addChild(	new CellContainer("back"), 
						new RopeContainer("rope"),
						new CellContainer("white"),
						new CellContainer("front")
						)

	app.stage.alpha = 0

	PIXI.loader
		.add(jsonURL)
		.load((loader, resources) => {
			onAssetsLoaded(app, resources, jsonURL, scrollstory)
		})

	return app
}

export default loadCanvas
