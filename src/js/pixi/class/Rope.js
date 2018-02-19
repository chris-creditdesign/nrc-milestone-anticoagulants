import * as PIXI from 'pixi.js'
import randomInt from '../../helpers/randomInt'

const Rope = function(app, textures, type) {
	const ropeLength = randomInt(20,30)
	
	const texture = textures[ Object.keys(textures).filter( d => d.includes(type)) ]

	const points = Array.from({length: ropeLength}, (elem, i) => {
		return new PIXI.Point(
						i * ((app.screen.width * 2) / ropeLength),
						(Math.sin(i * 0.5) * 100)
					)
	})

	PIXI.mesh.Rope.call(this, texture, points)

	this.pivot = new PIXI.Point(app.screen.width / 2, app.screen.height / 2)
	this.x = -20
	this.y = app.screen.height * Math.random()
	this.rotation = Math.random() * Math.PI * 0.4
}

Rope.prototype = Object.create(PIXI.mesh.Rope.prototype)

export default Rope