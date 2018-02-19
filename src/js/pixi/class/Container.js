import * as PIXI from 'pixi.js'

const Container = function(name) {
	PIXI.Container.call(this)
	this.name = name
}

Container.prototype = Object.create(PIXI.Container.prototype)

export default Container