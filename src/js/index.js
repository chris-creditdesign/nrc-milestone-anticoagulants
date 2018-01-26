require("../../node_modules/scrollstory/dist/jquery.scrollstory.js")
require("pixi.js")

import Modernizr from "modernizr"

import "../scss/index.scss"

const app = new PIXI.Application(window.innerWidth, window.innerHeight, {transparent: true})

document.getElementById("pixi-container").appendChild(app.view)

const sprites = new PIXI.particles.ParticleContainer(1000, {
	scale: true,
	position: true,
	rotation: true,
	uvs: true,
	alpha: true
})

app.stage.addChild(sprites)

const imgURl = "../img/cells.json"
let cells = []
let totalSprites = app.renderer instanceof PIXI.WebGLRenderer ? 100 : 30

if (window.innerWidth < 600) {
	totalSprites = 30
}


function setup() {
	const id = PIXI.loader.resources[imgURl].textures
	const fileNames = Object.keys(id)

	for (let i = 1; i < totalSprites; i++) {

		const cell = new PIXI.Sprite(id[fileNames[randomInt(0, fileNames.length)]])

		cell.anchor.set(0.5)

		cell.x = cell.startX = Math.random() * app.screen.width
		cell.y = cell.startY = Math.random() * app.screen.height
		cell.rotation = cell.startRotation = Math.random() * Math.PI * 2
		cell.speed = Math.random() + 0.5

		if (window.innerWidth < 600) {
			cell.scale.set(cell.speed / 2, cell.speed / 2)
		}

		cells.push(cell)
		sprites.addChild(cell)
	}

	$('.stories').scrollStory({
		autoActivateFirstItem: false,
		debug: false,
		triggerOffset: 0.5,
		keyboard: true,
		scrollSensitivity: 50,
		containerscroll: function() {
			updateCanvas(this._percentScrollToLastItem)
		},
		complete: function() {
			requestAnimationFrame(() => updateCanvas(this._percentScrollToLastItem))
			$("#pixi-container").removeClass("hidden")
		}
	})


}


function updateCanvas(step) {
	
	cells.forEach( cell => {
		
		if ( cell.x > app.screen.width / 2) {
			cell.x = cell.startX + (step * (app.screen.width) * cell.speed)
		} else {
			cell.x = cell.startX - (step * (app.screen.width) * cell.speed)
		}
		
		if ( cell.y > app.screen.height / 2) {
			cell.y = cell.startY + (step * (app.screen.height) * cell.speed)
		} else {
			cell.y = cell.startY - (step * (app.screen.height) * cell.speed)
		}

		cell.rotation = cell.startRotation * (step + 1) * 2
		
		
	})
	
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function init() {
		PIXI.loader
			.add(imgURl)
			.load(setup)
}

$(document).ready(init)