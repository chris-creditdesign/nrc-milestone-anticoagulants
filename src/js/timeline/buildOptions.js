const buildOptions = (data) => {
	const options = {}

	options.totalWidth = data && data.width || 120;
	options.totalHeight = data && data.height || window.innerHeight;
	options.margins = data && data.margins || {'top': 40, 'left': 10, 'bottom': 10, 'right': 10};
	options.width = options.totalWidth - options.margins.left - options.margins.right;
	options.height = options.totalHeight - options.margins.top - options.margins.bottom;
	options.data = data && data.data || [],
	options.target = data && data.target || "body";

	return options
}

export default buildOptions