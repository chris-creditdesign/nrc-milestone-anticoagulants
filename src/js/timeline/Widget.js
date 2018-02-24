import buildSvg from './buildSvg'
import buildScales from './buildScales'
import buildAxis from './buildAxis'
import buildLine from './buildLine'
import buildMilestones from './buildMilestones'

const Widget = (options) => {
	return Object.assign(
			{},
			buildSvg,
			buildScales,
			buildAxis,
			buildLine,
			buildMilestones,
			options
		)
}

export default Widget