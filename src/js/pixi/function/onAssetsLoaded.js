import * as PIXI from 'pixi.js'
import Cell from '../class/Cell'
import Rope from '../class/Rope'
import updateCanvas from './updateCanvas'

const onAssetsLoaded = function(app, resources, jsonURl, scrollstory) {

	const step = scrollstory._percentScrollToLastItem
	
	const ticker = new PIXI.ticker.Ticker()
	let alpha = 0

	const textures = resources[jsonURl].textures

	let totalSprites = app.renderer instanceof PIXI.WebGLRenderer ? 100 : 30

	if (window.innerWidth < 600) {
		totalSprites = 30
	}

	Array.from(Array(totalSprites)).forEach( (elem,index,array) => {
		
		if (index % 10 === 0) {
			const rope = new Rope(app, textures, "rope")
			app.stage.children.filter( d => d.name === "rope")[0].addChild(rope)
		} else if (index % 6 === 0) {
			const cell = new Cell(app, textures, "white")
			app.stage.children.filter( d => d.name === "white")[0].addChild(cell)
		} else {
			const cell = new Cell(app, textures, "red")
			if ( index < (array.length / 2)) {
				app.stage.children.filter( d => d.name === "front")[0].addChild(cell)
			} else {
				app.stage.children.filter( d => d.name === "back")[0].addChild(cell)
			}
		}
	})

	updateCanvas(app, step)

	ticker.add((deltaTime) => {
	  alpha += 0.05
	  alpha >= 1 ?
	  	ticker.stop()
	  	: app.stage.alpha = alpha
	});

	ticker.start();
}

export default onAssetsLoaded


