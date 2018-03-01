import Modernizr from "modernizr"

import "../scss/index.scss"

function checkWidth() {


	// Only load the PIXI and D3 code if the window is wider 
	// than 600px
	if (window.innerWidth > 600) {
		import(/* webpackChunkName: "init" */ './init').then(init => {
			init.default()
			
		}).catch(error => 'An error occurred while loading the component')
	}
}

$(document).ready(checkWidth)

