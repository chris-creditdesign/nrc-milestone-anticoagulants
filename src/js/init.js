import * as scrollstory from "../../node_modules/scrollstory/dist/jquery.scrollstory.js"
import { range } from 'd3-array'

import loadCanvas from './pixi/function/loadCanvas'
import updateCanvas from './pixi/function/updateCanvas'
import resizeCanvas from './pixi/function/resizeCanvas'

import Widget from './timeline/Widget'
import buildOptions from './timeline/buildOptions'

const jsonURL = "img/cells.json"
let app
let timeline

function complete() {
	this.animationActive = false

	app = loadCanvas(this, jsonURL)
	document.getElementById("pixi-container").appendChild(app.view)

	const checkbox = $("#animation-control").find("input")

	checkbox.change(() => {
		this.animationActive = checkbox.prop("checked")
		updateCanvas(app, this)
	})


	const data = this._items.map( (elem,index) => {
		return {
			start: parseInt(elem.data.start, 10),
			end: parseInt(elem.data.end, 10),
			title: elem.el.find("h2").eq(0)[0].innerText,
			number: index + 1
		}
	})

	data.startYear = 1910
	data.endYear = 2025
	data.decades = range(data.startYear, data.endYear, 10)

	const options = buildOptions( { 
		target: "#timeline-container",
		scrollStory: this,
		data
	})

	if (window.innerWidth >= 800) {
		timeline = Widget(options)
			.buildSvg()
			.buildScales()
			.buildLine()
			.buildAxis()
			.buildMilestones()
	}

}

function init() {

	$('.stories').scrollStory({
		autoActivateFirstItem: false,
		debug: false,
		triggerOffset: 50,
		scrollOffset: 50,
		keyboard: true,
		scrollSensitivity: 50,
		containerscroll: function() {
			updateCanvas(app, this)
		},
		itemfocus: function(ev, item) {
			timeline && timeline.buildMilestones(item.index)
		},
		complete: complete,
		updateoffsets: function() {
			app && resizeCanvas(app)
			app && updateCanvas(app, this)
			timeline && timeline.updateSvg()
		}
	})
}

export default init