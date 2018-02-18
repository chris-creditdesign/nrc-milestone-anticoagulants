import * as PIXI from 'pixi.js'

const RopeContainer = function(name) {
	PIXI.Container.call(this)
	this.name = name
}

RopeContainer.prototype = Object.create(PIXI.Container.prototype)

export default RopeContainer