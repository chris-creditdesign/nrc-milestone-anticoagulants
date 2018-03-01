import * as PIXI from 'pixi.js'

const options = {
	scale: true,
	position: true,
	rotation: true
}

const FastContainer = function(name) {
	PIXI.particles.ParticleContainer.call(this, 100, options)
	this.name = name
}

FastContainer.prototype = Object.create(PIXI.particles.ParticleContainer.prototype)

export default FastContainer