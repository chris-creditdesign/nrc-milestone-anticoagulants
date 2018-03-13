// Used to hide the tool tip on scroll 
// on iPads in landscape view

const hideTooltip = function() {
	
	if (window.innerWidth <= 1024) {
		this.tooltip.hide()
	}
	
	return this
}

export default { hideTooltip }