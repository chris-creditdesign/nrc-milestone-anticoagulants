import * as PIXI from 'pixi.js'

const options = {
	scale: true,
	position: true
}

const CellContainer = function(name) {
	PIXI.particles.ParticleContainer.call(this, 100, options)
	this.name = name
}

CellContainer.prototype = Object.create(PIXI.particles.ParticleContainer.prototype)

export default CellContainer