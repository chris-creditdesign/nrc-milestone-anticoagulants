import * as scrollstory from "../../node_modules/scrollstory/dist/jquery.scrollstory.js"
import Modernizr from "modernizr"

import loadCanvas from './pixi/function/loadCanvas'
import updateCanvas from './pixi/function/updateCanvas'
import resizeCanvas from './pixi/function/resizeCanvas'

import "../scss/index.scss"

const jsonURL = "img/cells.json"
let app


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
			app = loadCanvas(this, jsonURL)
			document.getElementById("pixi-container").appendChild(app.view)
		},
		updateoffsets: function() {
			app && resizeCanvas(app)
		}
	})
}

$(document).ready(init)