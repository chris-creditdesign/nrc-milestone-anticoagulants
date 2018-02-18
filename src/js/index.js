import * as scrollstory from "../../node_modules/scrollstory/dist/jquery.scrollstory.js"
import * as PIXI from 'pixi.js'
import Modernizr from "modernizr"

import CellContainer from './pixi/class/CellContainer'
import RopeContainer from './pixi/class/RopeContainer'

import onAssetsLoaded from './pixi/function/onAssetsLoaded'
import updateCanvas from './pixi/function/updateCanvas'
import resizeCanvas from './pixi/function/resizeCanvas'

import "../scss/index.scss"

const jsonURl = "img/cells.json"

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

document.getElementById("pixi-container").appendChild(app.view)

function loadCanvas(scrollstory) {

		PIXI.loader
			.add(jsonURl)
			.load((loader, resources) => {
				onAssetsLoaded(app, resources, jsonURl, scrollstory)
			})
}

function init() {

	$('.stories').scrollStory({
		autoActivateFirstItem: false,
		debug: false,
		triggerOffset: 0.5,
		keyboard: true,
		scrollSensitivity: 50,
		containerscroll: function() {
			updateCanvas(app, this._percentScrollToLastItem)
		},
		complete: function() {
			loadCanvas(this)
		},
		updateoffsets: function() {
			resizeCanvas(app)
		}
	})
}

$(document).ready(init)