import buildSvg from './buildSvg'
import buildScales from './buildScales'
import buildAxis from './buildAxis'
import buildLine from './buildLine'
import buildMilestones from './buildMilestones'
import updateSvg from './updateSvg'
import hideTooltip from './hideTooltip'

const Widget = (options) => {
	return Object.assign(
			{},
			buildSvg,
			buildScales,
			buildAxis,
			buildLine,
			buildMilestones,
			hideTooltip,
			updateSvg,
			options
		)
}

export default Widget