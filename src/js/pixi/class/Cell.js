import * as PIXI from 'pixi.js'
import randomInt from '../../helpers/randomInt.js'

const Cell = function(app, textures, type) {
	const names = Object.keys(textures).filter( d => d.includes(type))

	PIXI.Sprite.call(this, textures[names[randomInt(0, names.length)]])
	
	this.anchor.set(0.5)

	this.xOffset = Math.random()
	this.yOffset = Math.random()

	this.scaleOffset = window.innerWidth < 600 ? 0.5 : 1

	this.x = this.startX = this.xOffset * app.screen.width
	this.y = this.startY = this.yOffset * app.screen.height
	this.rotation = this.startRotation = Math.random() * Math.PI * 2
	this.speed = Math.random() + 0.5
	
	if (window.innerWidth < 600) {
		this.scale.set(this.scaleOffset, this.scaleOffset)
	}
}

Cell.prototype = Object.create(PIXI.Sprite.prototype)

export default Cell