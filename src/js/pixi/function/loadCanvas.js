import * as PIXI from 'pixi.js'
import onAssetsLoaded from './onAssetsLoaded'

const loadCanvas = function(scrollstory, jsonURL) {
	
	// Checking the height of the pixi-container accounts for the address and tab bar
	// on ios which affects the screen height
	const height = document.getElementById("pixi-container").offsetHeight === window.innerHeight ?
		window.innerHeight
		: document.getElementById("pixi-container").offsetHeight

	const app = new PIXI.Application(
			window.innerWidth,
			height,
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
