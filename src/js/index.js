require("../../node_modules/scrollstory/dist/jquery.scrollstory.js");

import Modernizr from "modernizr";

import "../scss/index.scss";

function init() {


		$('.stories').scrollStory({
			autoActivateFirstItem: false,
			debug: false,
			triggerOffset: 0.5,
			keyboard: true,
			itemfocus: function(ev, item) {
				console.log("Item focus!")
			}
		})
		
}

$(document).ready(init)