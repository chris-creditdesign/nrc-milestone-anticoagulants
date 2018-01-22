require("../../node_modules/scrollstory/dist/jquery.scrollstory.js")
require("pixi.js")

import Modernizr from "modernizr"

import "../scss/index.scss"

const app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor: 0x800d46})

document.getElementById("pixi-container").appendChild(app.view)

const sprites = new PIXI.particles.ParticleContainer(1000, {
	scale: true,
	position: true,
	rotation: true,
	uvs: true,
	alpha: true
})

app.stage.addChild(sprites)

let cells = []

const totalSprites = app.renderer instanceof PIXI.WebGLRenderer ? 200 : 10

for (let i = 0; i < totalSprites; i++) {
	
	const cell = PIXI.Sprite.fromImage("./img/apple.png")
	
	cell.anchor.set(0.5)
	
	
	cell.x = cell.startX = Math.random() * app.screen.width
	cell.y = cell.startY = Math.random() * app.screen.height
	
	
	cell.rotation = cell.startRotation = Math.random() * Math.PI * 2
	
	cell.turningSpeed = Math.random() * 4
	
	cell.speed = Math.random() + 0.5
	cell.scale.set(cell.speed * 2)
	
	cell.offset = Math.random() * 100
	
	cells.push(cell)
	
	sprites.addChild(cell)
}

function updateCanvas(step) {
	console.log(step)
	
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

function init() {

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

$(document).ready(init)