import * as PIXI from 'pixi.js'
import onAssetsLoaded from './onAssetsLoaded'

const loadCanvas = function(scrollstory, jsonURL) {
	const app = new PIXI.Application(
			window.innerWidth,
			window.innerHeight,
			{transparent: true, antialias: true}
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
