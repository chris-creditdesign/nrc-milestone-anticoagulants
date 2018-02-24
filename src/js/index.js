import * as scrollstory from "../../node_modules/scrollstory/dist/jquery.scrollstory.js"
import { range } from 'd3-array'

import Modernizr from "modernizr"

import loadCanvas from './pixi/function/loadCanvas'
import updateCanvas from './pixi/function/updateCanvas'
import resizeCanvas from './pixi/function/resizeCanvas'

import Widget from './timeline/Widget'
import buildOptions from './timeline/buildOptions'

import "../scss/index.scss"

const jsonURL = "img/cells.json"
let app
let timeline

function complete() {
	app = loadCanvas(this, jsonURL)
	document.getElementById("pixi-container").appendChild(app.view)

	const data = this._items.map( (elem,index) => {
		return {
			start: elem.data.start,
			number: index + 1
		}
	})

	data.startYear = 1910
	data.endYear = 2025
	data.decades = range(data.startYear, data.endYear, 10)

	const options = buildOptions( { 
		target: "#timeline-container",
		data
	})

	timeline = Widget(options)
		.buildSvg()
		.buildScales()
		.buildAxis()
		.buildMilestones()

}

function init() {

	$('.stories').scrollStory({
		autoActivateFirstItem: false,
		debug: false,
		triggerOffset: 50,
		keyboard: true,
		scrollSensitivity: 50,
		containerscroll: function() {
			updateCanvas(app, this._percentScrollToLastItem)
		},
		itemfocus: function(ev, item) {
			timeline.buildMilestones(item.index)
		},
		complete: complete,
		updateoffsets: function() {
			app && resizeCanvas(app)
		}
	})
}

$(document).ready(init)